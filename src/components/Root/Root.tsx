import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as styles from "../../styles/shared.scss";
import {ScatterChart} from "../D3/ScatterChart";
import {App} from "../App";

class Root extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <Router basename={process.env.PUBLIC_URL}>
            <div id="content">
                <Route path="/" exact={true} component={App}/>
                <Route path="/scatter" exact={true} component={ScatterChart}/>
            </div>
        </Router>;
    }
}

export {Root};
