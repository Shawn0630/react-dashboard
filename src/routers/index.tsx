import * as React from "react";
import { Redirect, Route, RouteProps, Switch } from "dva/router";
import { RoutesConfig, routesConfig } from "./config";
import {default as Components} from "../components";

export default class Routers extends React.PureComponent {

    constructor() {
        super({});
        this.notFound = this.notFound.bind(this);
        this.route = this.route.bind(this);
    }

    public render(): JSX.Element {
        return <div>
            <Switch>
            {
                Object.keys(routesConfig).map((key: string) =>
                    routesConfig[key].map((r: RoutesConfig) => {
                        return r.component ? this.route(r) : r.subs.map((rc: RoutesConfig) => this.route(rc));
                    })
                )
            }
            <Route render={this.notFound} />
        </Switch>
    </div>;
    }

    private notFound(): JSX.Element {
        return <Redirect to="/404" />;
    }
    private route(rc: RoutesConfig): JSX.Element {
        const Component: React.ComponentClass = Components[rc.component]; // tslint:disable-line
        return <Route key={rc.route || rc.key}
            exact path={rc.route || rc.key}
            render={(props: RouteProps) => <Component {...props} />} />; // tslint:disable-line
    }
}
