import dexie from "dexie";
import { com } from "~models/example";
import { SharedType } from "~models/types";
import { config } from "~/config.ts";
import DataType = SharedType.DataType;
import ResultType = SharedType.ResultType;
import Information = SharedType.Information;
import FetchedResult = SharedType.FetchedResult;
import IDenovoCandidate = com.example.dto.IDenovoCandidate;
import InformationDatabase from "~utilities/db/InformationDatabase";

export default class ResultDatabase extends dexie {
    private sortKeys: {[key: string]: string};
    private infoDB: InformationDatabase;
    private denovos: dexie.Table<IDenovoCandidate, string>;
    constructor(hashKey: string, infoDB: InformationDatabase) {
        super(hashKey);

        this.sortKeys = {
            denovos: "alc"
        };

        this.version(1).stores({
            denovos: "++id, alc"
        });

        this.infoDB = infoDB;
        this.initialize().catch(err => {
            console.log(`Unable to initialize result database ${hashKey}`); // tslint:disable-line:no-console
            console.log(err); // tslint:disable-line:no-console
        });
    }

    public async count<T extends DataType>(type: SharedType.ResultType): Promise<number> {
        let table: dexie.Table<T, string>;
        try {
            table = this.getTable<T>(type);
        } catch (err) {
            return Promise.reject(err);
        }
        return table.count();
    }

    public async saveAll<T extends DataType>(type: ResultType, items: T[]): Promise<Information> {
        let table: dexie.Table<T, string>;
        try {
            table = this.getTable<T>(type);
        } catch (err) {
            return Promise.reject(err);
        }

        return this.transaction("rw", table, async () => {
            await table.clear();
            await table.bulkAdd(items);
        }).then(async () => {
            return this.infoDB.updateInfo(this.setInfo(type, items.length));
        });
    }

    public async loadAll<T extends DataType>(type: ResultType, filter: (item: T) => boolean = null): Promise<T[]> {
        let table: dexie.Table<T, String>;
        try {
            table = this.getTable<T>(type);
        } catch (err) {
            return Promise.reject(err);
        }

        return this.transaction("r", table, async () => {
            let collection: dexie.Collection<T, String> = table.orderBy(this.sortKeys[type]); //ascending by default
            if (filter != null) {
                collection = collection.filter(filter);
            }
            return collection.reverse().toArray();
        });
    }

    public async loadPage<T extends DataType>(type: ResultType, page: number,
                                              filter: (item: T) => boolean = null): Promise<FetchedResult<T>> {
        const pageSize: number = config.resultPageSize;
        let table: dexie.Table<T, string>;
        try {
            table = this.getTable<T>(type);
        } catch (err) {
            return Promise.reject(err);
        }

        return this.infoDB.infos.get(this.name).then(async info => {
            switch (type) {
                case ResultType.DENOVOS:
                    return info.numDenovos;
                default:
                    throw new Error("unsupported type");
            }
        }).then(async totalItems => {
            const totalPages: number = Math.ceil(totalItems / pageSize);
            const middle: number = Math.floor(totalPages / 2);
            let items: T[];
            return this.transaction("r", table, async () => {
                let collection: dexie.Collection<T, string> = table.orderBy(this.sortKeys[type]);
                if (filter != null) {
                    collection = collection.filter(filter);
                }
                if (page <= middle) {
                    items = await collection.reverse().offset(pageSize * (page - 1)).limit(pageSize).toArray();
                } else {
                    const skipped: number = Math.max(0, totalItems - page * pageSize);
                    const limited: number = page !== totalPages ? pageSize : (totalItems - pageSize * (totalPages - 1));
                    items = await collection.offset(skipped).limit(limited).toArray().then(lst => lst.reverse());
                }

                return {
                    items: items,
                    totalItems: totalItems
                };
            });
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

    private setInfo(type: ResultType, num: number): Information {
        const info: Information = {
            dbKey: this.name
        };
        switch (type) {
            case ResultType.DENOVOS:
                info.numDenovos = num;
                break;
            default:
                throw new Error("Unsupported type");
        }

        return info;

    }

}
