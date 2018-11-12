import { Route, Router } from "dva/router";
import * as React from "react";
import { History } from "history";
import AppRoot from "./components/AppRoot";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { muiThemeCore } from "./Theme";

export default ({history}: {history: History}) => {
    return (
        <MuiThemeProvider theme={muiThemeCore}>
            <Router history={history}>
                <Route component={AppRoot} />
            </Router>
        </MuiThemeProvider>
    );
};
