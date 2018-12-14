import {override} from "./override";

interface Config {
    apiRoot: string;
    indexedDBExpiryDays?: number;
    resultInfoDBKey: string;
    resultPageSize: number;
    spectrumTooltipDisplayTolerance: number;
}

const original: Config = {
    apiRoot: "/apis/",
    resultInfoDBKey: "info_db",
    indexedDBExpiryDays: 3,
    resultPageSize: 100,
    spectrumTooltipDisplayTolerance: 5
};

const config: Config = {
    ...original, ...override
};

export {
    config, Config
};
