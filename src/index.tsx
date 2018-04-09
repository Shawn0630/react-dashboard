import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/App";
import {ScatterChart} from "./components/Charts/ScatterChart";
//import registerServiceWorker from "./actions/registerServiceWorker";

ReactDOM.render(
  <ScatterChart graphId="scatter" width={450} height={400}/>,
  document.getElementById("main")
);
//registerServiceWorker();
