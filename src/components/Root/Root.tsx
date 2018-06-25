import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as styles from "../../styles/shared.scss";
import {ScatterChart} from "../D3/ScatterChart";

class Root extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <Router>
            <div id="content">
                <Route path="/scatter" exact={true} component={ScatterChart}/>
            </div>
        </Router>;
    }
}

export {Root};
