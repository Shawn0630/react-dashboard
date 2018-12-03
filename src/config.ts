import {override} from "./override";

interface Config {
    apiRoot: string;
    indexedDBExpiryDays?: number;
    resultInfoDBKey: string;
}

const original: Config = {
    apiRoot: "/apis/",
    resultInfoDBKey: "info_db",
    indexedDBExpiryDays: 3
};

const config: Config = {
    ...original, ...override
};

export {
    config, Config
};
