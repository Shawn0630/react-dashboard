import { Route, Router } from "dva/router";
import * as React from "react";
import { History } from "history";
import AppRoot from "./components/AppRoot";

export default ({history}: {history: History}) => {
    return (
        <Router history={history}>
            <Route component={AppRoot} />
        </Router>
    );
};
