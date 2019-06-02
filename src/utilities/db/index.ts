import { SharedType } from "~models/types";
import { config } from "~/config.ts";
import * as hash from "object-hash";
import ResultType = SharedType.ResultType;
import DataType = SharedType.DataType;
import Information = SharedType.Information;
import FetchedResult = SharedType.FetchedResult;
import InformationDatabase from "~utilities/db/InformationDatabase";
import ResultDatabase from "~utilities/db/ResultDatabase";

interface KeyObject {
    type: ResultType;
}
const infoDB: InformationDatabase = new InformationDatabase(config.resultInfoDBKey, config.indexedDBExpiryDays);

export default {
    getCachedKey(type: ResultType): string {
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
    async loadAll<T extends DataType>(cachedKey: string, type: ResultType, filter: (item: T) => boolean): Promise<T[]> {
        const db: ResultDatabase = new ResultDatabase(cachedKey, infoDB);
        return db.loadAll(type, filter);
    },
    async loadResultPage<T extends DataType>(cachedKey: string, type: ResultType, page: number,
                                             filter: (item: T) => boolean = null): Promise<FetchedResult<T>> {
        const db: ResultDatabase = new ResultDatabase(cachedKey, infoDB);
        return db.loadPage<T>(type, page, filter);
    },
    async saveAll<T extends DataType>(cachedKey: string, type: ResultType, items: T[]): Promise<Information> {
        const db: ResultDatabase = new ResultDatabase(cachedKey, infoDB);
        return db.saveAll(type, items);
    },
    async count<T extends DataType>(cacheKey: string, type: ResultType): Promise<number> {
        const db: ResultDatabase = new ResultDatabase(cacheKey, infoDB);
        return db.count<T>(type);
    },
    async saveResult<T extends DataType>(cacheKey: string, type: ResultType, items: T[]): Promise<Information> {
        const db: ResultDatabase = new ResultDatabase(cacheKey, infoDB);
        return db.saveAll<T>(type, items);
    },
    async cleanup(cleanupDate: string = null): Promise<void> {
        return infoDB.cleanup(cleanupDate);
    }
};
