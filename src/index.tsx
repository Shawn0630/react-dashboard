import "bootstrap/dist/css/bootstrap.min.css"; //tslint:disable-line

import dva, { DvaInstance } from "dva";
import createBrowserHistory from "history/createBrowserHistory";
import * as Redux from "redux";
import { globalModel } from "~dva/global";
import { userModel } from "~dva/user";
import { resultModel } from "~dva/result";

import router from "./router";

const app: DvaInstance = dva({
  history: createBrowserHistory(),
  onError: ((err, dispatch) => {
    (err as any).preventDefault(); // tslint:disable-line:no-any
    dispatch({
      type: "global/addError",
      payload: err
    });
    if (process.env.NODE_ENV === "development") {
      console.log(err); //tslint:disable-line:no-console
    }
  })
});

app.model(globalModel);
app.model(userModel);
app.model(resultModel);
app.router(router);
app.start("#main");

export default (app as any)._store as Redux.Store<{}>; //tslint:disable-line:no-any
