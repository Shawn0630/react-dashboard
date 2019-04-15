import * as dva from "dva";
import { SharedType } from "~models/types";
import { DvaModel } from "./DvaModel";

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
        getResultPage: [function* (action: DvaAction<PageRequest<{}>>, effect: dva.EffectsCommandMap): IterableIterator<void> {
            const { call, put } = effect;
            const response: PagedState<{}> = yield call(IndexedDBService.getPaga. action.payload);
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
    }
}