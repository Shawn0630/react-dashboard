import { SharedType } from "~/models/types";
import db from "~utilities/db";
import { ApiMethod, fetch } from "../utilities/request";
import { decodeArray } from "~/utilities/decode-helper";
import { com } from "~models/example";
import { config } from "~/config";
import { PagedState } from "~dva/result";
import DenovoCandidate = com.example.dto.DenovoCandidate;

interface PageRequest {
    page: number;
    type: SharedType.ResultType;
}

function isDBEmpty(info: SharedType.Information, pr: PageRequest): boolean {
    if (info == null ||
        (pr.type === SharedType.ResultType.DENOVOS && info.numDenovos == null)
    ) {
        return true;
    } else {
        return false;
    }
}

function isDBInconsistent(info: SharedType.Information, pr: PageRequest, count: number): boolean {
    if ((pr.type === SharedType.ResultType.DENOVOS && info.numDenovos !== count)) {
        return true;
    } else {
        return false;
    }
}

namespace IndexedDBService {

    export async function getInformation(pr: PageRequest): Promise<SharedType.Information> {
        const key: string = db.getCachedKey(pr.type);
        return db.getInfo(key);
    }

    export async function getResult(request: PageRequest): Promise<SharedType.Information> {
        switch (request.type) {
            case SharedType.ResultType.DENOVOS:
                return getDenovoResult(request);
            default:
                throw new Error("unsupported type");
        }
    }

    export async function getDenovoResult(request: PageRequest): Promise<SharedType.Information> {
        const key: string = db.getCachedKey(request.type);
        const endpoint: string = "mock/denovo";
        return fetch<{}, ArrayBuffer>({
            endpoint: endpoint, method: ApiMethod.GET, useBuffer: true
        })
        .then(async ab => decodeArray(DenovoCandidate, ab))
            .then(async (result: DenovoCandidate[]) => {
            return db.saveResult(key, request.type, result);
        });
    }

    export async function getPage<T>(pr: PageRequest): Promise<PagedState<DenovoCandidate>> {
        const key: string = db.getCachedKey(pr.type);
        return getInformation(pr)
                .catch(() => null)
                .then(async (info: SharedType.Information) => {
                    if (isDBEmpty(info, pr)) {
                        return getResult(pr);
                    } else {
                        const count: number = await db.count<T>(key, pr.type);
                        if (isDBInconsistent(info, pr, count)) {
                            return getResult(pr);
                        } else {
                            return info;
                        }
                    }
                })
                .then(async info => {
                    return db.loadResultPage<T>(key, pr.type, pr.page).then(result => ({
                        key: info.dbKey,
                        type: pr.type,
                        currentPage: pr.page,
                        totalItems: result.totalItems,
                        totalPages: Math.ceil(result.totalItems / config.resultPageSize),
                        items: result.items
                    }));
                });
    }
}

export { IndexedDBService, PageRequest };
