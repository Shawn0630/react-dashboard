import {override} from "./override";

interface Config {
    apiRoot: string;
    indexedDBExpiryDays?: number;
    resultInfoDBKey: string;
    resultPageSize: number;
}

const original: Config = {
    apiRoot: "/apis/",
    resultInfoDBKey: "info_db",
    indexedDBExpiryDays: 3,
    resultPageSize: 100
};

const config: Config = {
    ...original, ...override
};

export {
    config, Config
};
