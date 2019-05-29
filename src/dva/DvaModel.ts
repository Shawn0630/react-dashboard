import * as dva from "dva";
import * as Redux from "redux";
import { HandlerMap } from "../utilities/request";

interface DvaModel<SM> extends dva.Model {
    state: SM;
}

interface DvaAction<P> extends Redux.AnyAction {
    payload: P;
    handlers?: HandlerMap;
}

export {DvaAction, DvaModel};
