interface GlobalState {
    errors: string[];
}

interface RootState {
    global: GlobalState;
}

export {RootState, GlobalState};
