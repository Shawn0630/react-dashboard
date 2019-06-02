import { DvaAction, DvaModel } from "./DvaModel";

interface GlobalState {
    errors: Error[];
    title: string;
}

const globalModel: DvaModel<GlobalState> = {
    namespace: "global",
    state: {
        errors: [],
        title: null
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
        },
        setTitle: (state: GlobalState, action: DvaAction<string>): GlobalState => {
            return {
                ...state,
                title: action.payload
            };
        }
    }
};

export {globalModel, GlobalState};
