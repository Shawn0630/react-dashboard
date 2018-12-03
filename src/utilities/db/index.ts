import { SharedType } from "~models/types";
import { config } from "~/config.ts";
import * as hash from "object-hash";
import ResultType = SharedType.ResultType;
import DataType = SharedType.DataType;
import Information = SharedType.Information;
import InformationDatabase from "~utilities/db/InformationDatabase";
import ResultDatabase from "~utilities/db/ResultDatabase";

interface KeyObject {
    type: ResultType;
}
const infoDB: InformationDatabase = new InformationDatabase(config.resultInfoDBKey, config.indexedDBExpiryDays);

export default {
    getCachedKey(type: ResultType) {
        const keyObject: KeyObject = {
            type: type
        };
        return hash(keyObject);
    },
    async getInfo(cachedKey: string): Promise<Information> {
        return infoDB.loadInfo(cachedKey);
    },
    async updateInfo(info: Information): Promise<Information> {
        return infoDB.updateInfo(info);
    },
    async saveResult<T extends DataType>(cachedKey: string, type: ResultType, filter: (item: T) => boolean): Promise<T[]> {
        const db: ResultDatabase = new ResultDatabase(cachedKey, infoDB);
        return db.loadAll(type, filter);
    },
    async cleanup(cleanupDate: string = null): Promise<void> {
        return infoDB.cleanup(cleanupDate);
    }
};
