import { com } from "~models/example";
import IScanDenovoCandidate = com.example.dto.IScanDenovoCandidate;

namespace SharedType {
    export interface Information {
        dbKey: string;
        numDenovos?: number;
        lastUpdated?: number;
    }

    export enum ResultType {
        DENOVOS = "denovos"
    }

    export interface FetchedResult<T> {
        items: T[];
        totalItems: number;
    }
    export interface DenovoCandidateWithALC extends IScanDenovoCandidate {
        alc?: number;
    }
    export type DataType = DenovoCandidateWithALC;
}

export { SharedType };
