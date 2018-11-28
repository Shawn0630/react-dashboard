import { Route, Router } from "dva/router";
import * as React from "react";
import { History } from "history";
import Root from "~components/Root";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { muiThemeCore } from "./Theme";

export default ({history}: {history: History}) => {
    return (
        <MuiThemeProvider theme={muiThemeCore}>
            <Router history={history}>
                <Route component={Root} />
            </Router>
        </MuiThemeProvider>
    );
};
