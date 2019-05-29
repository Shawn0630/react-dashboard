import dexie from "dexie";
import * as moment from "moment";
import { SharedType } from "~models/types";

export default class InformationDatabase extends dexie {
    public infos: dexie.Table<SharedType.Information, string>;
    private expiryDays: number;
    constructor(name: string, expiryDays: number) {
        super(name);
        this.version(1).stores({
            infos: "dbKey"
        });
        this.expiryDays = expiryDays;
    }
    public async loadInfo(db: string): Promise<SharedType.Information> {
        return this.infos.where("dbKey").equals(db).first();
    }
    public async updateInfo(info: SharedType.Information): Promise<SharedType.Information> {
        return this.transaction("rw", this.infos, async () => {
            const oldInfo: SharedType.Information = await this.infos.where("dbKey").equals(info.dbKey).first();
            let newInfo: SharedType.Information;
            if (oldInfo == null) {
                newInfo = {
                    ...info,
                    lastUpdated: moment.now()
                };
            } else {
                newInfo = {
                    ...oldInfo,
                    ...info,
                    lastUpdated: moment.now()
                };
            }
            await this.infos.put(newInfo);
            return newInfo;
        });
    }
    public async cleanup(cleanupDate: string = null): Promise<void> {
        let threshold: moment.Moment = moment().subtract(this.expiryDays, "days");
        if (cleanupDate != null && moment(cleanupDate) > threshold) {
            threshold = moment(cleanupDate);
        }

        return this.infos.filter(info => moment(info.lastUpdated) < threshold).modify((value, ref) => {
            dexie.delete(value.dbKey).catch(err => {
                console.log(`Unable to delete result database ${value.dbKey}`); //tslint:disable-line:no-console
                console.log(err); //tslint:disable-line:no-console
            });
            delete ref.value;
        }).catch((err: dexie.ModifyError) => {
            console.log(`Cleanup error, ${err.successCount} success, ${err.failedKeys.length} failed`); //tslint:disable-line:no-console
            return null;
        });
    }
}
