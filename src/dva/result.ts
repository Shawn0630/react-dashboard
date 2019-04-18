import * as dva from "dva";
import { SharedType } from "~models/types";
import { DvaAction, DvaModel } from "./DvaModel";
import { IndexedDBService, PageRequest } from "./IndexedDbService";

interface PagedState<T> {
    key: string;
    type: SharedType.ResultType;
    currentPage: number;
    totalItems: number;
    totalPages: number;
    items: T[];
}

const initialPagedState: PagedState<any> = { // tslint:disable-line:no-any
    key: null,
    type: null,
    currentPage: null,
    totalItems: null,
    totalPages: null,
    items: []
};

interface ResultState {
    denovos: PagedState<SharedType.DenovoCandidateWithALC>;
}

const initialState: ResultState = {
    denovos: initialPagedState
};

const resultModel: DvaModel<ResultState> = {
    namespace: "result",
    state: initialState,
    effects: {
        getResultPage: [function* (action: DvaAction<PageRequest>, effect: dva.EffectsCommandMap): IterableIterator<void> {
            const { call, put } = effect;
            const response: PagedState<{}> = yield call(IndexedDBService.getPage, action.payload);
            if (response != null) {
                yield put({
                    type: "gotPage",
                    payload: response
                });
            }
            if (action.callback != null) {
                action.callback();
            }
        }, {type: "takeLatest"}]
    },
    reducers: {
        gotPage: (state: ResultState, action: DvaAction<PagedState<{}>>): ResultState => {
            const copy: ResultState = { ...state };
            (copy as any)[action.payload.type] = action.payload; // tslint:disable-line:no-any
            return copy;
        }
    }
};

export { PagedState, resultModel };
