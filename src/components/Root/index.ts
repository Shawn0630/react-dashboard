import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import {Root as RootComponent} from "./Root";

//tslint:disable-next-line
const Root: React.ComponentClass = ReactRedux.connect()(RootComponent);
export {Root};
