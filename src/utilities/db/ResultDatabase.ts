import dexie from "dexie";
import { com } from "~models/example";
import { SharedType } from "~models/types";
import DataType = SharedType.DataType;
import ResultType = SharedType.ResultType;
import IScanDenovoCandidate = com.example.dto.IScanDenovoCandidate;
import InformationDatabase from "~utilities/db/InformationDatabase";

export default class ResultDatabase extends dexie {
    private sortKeys: {[key: string]: string};
    private infoDB: InformationDatabase;
    private denovos: dexie.Table<IScanDenovoCandidate, string>;
    constructor(hashKey: string, infoDB: InformationDatabase) {
        super(hashKey);

        this.sortKeys = {
            denovos: "alc"
        };

        this.infoDB = infoDB;
        this.initialize();
    }

    public async loadAll<T extends DataType>(type: ResultType, filter: (item: T) => boolean = null): Promise<T[]> {
        let table: dexie.Table<T, String>;
        try {
            table = this.getTable<T>(type);
        } catch (err) {
            return Promise.reject(err);
        }

        return this.transaction("r", table, async () => {
            let collection: dexie.Collection<T, String> = table.orderBy(this.sortKeys[type]);
            if (filter != null) {
                collection = collection.filter(filter);
            }
            return collection.reverse().toArray();
        });
    }

    private async initialize(): Promise<void> {
        return this.infoDB.loadInfo(this.name).then(async info => {
            if (info == null) {
                await this.infoDB.updateInfo({
                    dbKey: this.name
                });
            }
        });
    }

    private getTable<T extends DataType>(type: ResultType): dexie.Table<T, string> {
        switch (type) {
            case ResultType.DENOVOS:
                return this.denovos as dexie.Table<T, string>;
            default:
                throw new Error("Unsupported type");
        }
    }

}
