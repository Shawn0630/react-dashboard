import { DvaAction, DvaModel } from "./DvaModel";

interface GlobalState {
    errors: Error[];
}

const globalModel: DvaModel<GlobalState> = {
    namespace: "global",
    state: {
        errors: []
    },
    reducers: {
        addError: (state: GlobalState, action: DvaAction<Error>): GlobalState => {
            return {
                ...state,
                errors: [action.payload].concat(state.errors)
            };
        },
        removeError: (state: GlobalState, action: DvaAction<Error>): GlobalState => {
            return {
                ...state,
                errors: state.errors.filter((error: Error) => error.message !== action.payload.message)
            };
        }
    }
};

export {globalModel, GlobalState};
