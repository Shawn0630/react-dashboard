import { config } from "../config";
import * as agent from "superagent";
import Response = agent.Response;

enum ApiMethod {
    GET, POST, PUT, DELETE
}

enum PayloadType {
    FORM, JSON
}

interface ApiActionEvent {
    key?: string;
    direction: string;
    percent: number;
    total: number;
    loaded: number;
}

type ProgressHandler = (event: ApiActionEvent) => void;
type ResponseHandler = (error: {}, response?: Response) => void;
type HandlerMap = {
    "progress"?: ProgressHandler;
    "response"?: ResponseHandler;
};

interface ResponseError {
    response: agent.Response;
    status: number;
    message: string;
}

interface ApiAction<P = {[key: string]: string}> {
    key?: string;
    endpoint: string;
    method: ApiMethod;
    payload?: P;
    payloadType?: PayloadType;
    handlers?: HandlerMap;
    userBuffer?: boolean;
}

async function fetch<P, R>(action: ApiAction<P>): Promise<R> {
    return agentFetch<P, R>(action);
}

async function agentFetch<P, R>(action: ApiAction<P>): Promise<R> {
    const { endpoint, method, payload, handlers } = action;
    const payloadType: PayloadType = action.payloadType != null ? action.payloadType : PayloadType.JSON;
    const useBuffer: boolean = action.userBuffer || false;
    const url: string = endpoint.indexOf(config.apiRoot) === -1 ? config.apiRoot + endpoint : endpoint;
    switch (method) {
        case ApiMethod.POST:
        case ApiMethod.PUT:
        let request: agent.SuperAgentRequest;
        if (method === ApiMethod.POST) {
            request = agent.post(url);
        } else if (method === ApiMethod.PUT) {
            request = agent.put(url);
        } else {
            return Promise.reject(new Error(`Unexpected ApiMethod: ${method}`));
        }
        request.withCredentials();
        if (useBuffer) {
            request = request.responseType("arraybuffer");
            request.set("Content-Type", "application/json");
            request.set("accept", "protobuf");
            request.send(payload as any); // tslint:disable-line:no-any
        }
        if (payloadType === PayloadType.JSON) {
            request.set("Content-Type", "application/json");
            request.send(payload as any); // tslint:disable-line:no-any
        } else {
            for (const key of Object.keys(payload)) {
                request.field(key, (payload as any)[key]); //tslint:disable-line:no-any
            }

            if (handlers != null && handlers.progress != null) {
                request.on("progress", (event: ApiActionEvent): void => {
                    handlers.progress({
                        ...event,
                        key: action.key
                    });
                });
            }
        }

        return new Promise<R>((resolve: (value: R) => void, reject: (reason: {}) => void): void => {
            request.end((err: ResponseError, res: agent.Response) => {
                if (err != null) { // request has error
                    if (handlers != null && handlers.response != null) {
                        handlers.response(err);
                    }
                    let errorMessage: string = err.message;
                    if (err.response != null && err.response != null && err.response.text.trim().length > 0) {
                        errorMessage = err.response.text;
                    }
                    reject(new Error(errorMessage));
                } else if (!res.ok) { // response with error code
                    const error: string = res.text;
                    if (handlers != null && handlers.response != null) {
                        handlers.response(error);
                    }
                    reject(new Error(res.text));
                } else {
                    if (handlers != null && handlers.response != null) {
                        handlers.response(null, res);
                    }

                    if (res.body != null) {
                        resolve(res.body);

                        return;
                    }
                    resolve(res.text as any); //tslint:disable-line:no-any
                }
            });
        });
        case ApiMethod.DELETE:
            return new Promise<R>((resolve: (value: R) => void, reject: (reason: {}) => void): void => {
                agent.delete(url).withCredentials().end((err: Error, res: agent.Response): void => {
                    if (err != null) {
                        reject(err);
                    } else if (!res.ok) {
                        reject(new Error(res.text));
                    } else {
                        resolve(res.body);
                    }
                });
            });
        default:
            return handleGet<R>(url, useBuffer);
    }
}

async function handleGet<R>(url: string, useBuffer: boolean): Promise<R> {
    return new Promise<R>((resolve: (value: R) => void, reject: (reason: {}) => void): void => {
        let req: agent.Request = agent.get(url).withCredentials();
        if (useBuffer) {
            req = req.responseType("arraybuffer");
            req.set("accept", "protobuf");
        }
        req.end((err: ResponseError, res: agent.Response): void => {
            if (err != null) {
                let errorMessage: string = err.toString();
                if (err.response != null && err.response.text != null && err.response.text.trim().length > 0) {
                    errorMessage = err.response.text;
                } else if (err.message != null) {
                    errorMessage = err.message;
                }
                reject(new Error(errorMessage));
            } else if (!res.ok) {
                reject(new Error(res.text));
            } else if (res.body != null) {
                resolve(res.body);
            } else {
                resolve(res.text as any); //tslint:disable-line:no-any
            }
        });
    });
}

export { fetch, ApiAction, ApiMethod, ApiActionEvent, HandlerMap, PayloadType, ProgressHandler, ResponseHandler };
