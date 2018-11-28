import * as React from "react";
import { Redirect, Route, RouteComponentProps, RouteProps, Switch, withRouter } from "dva/router";
import { RoutesConfig, routesConfig } from "./config";
import { default as Components } from "../components";
import { UserState } from "~models/user";
import Layout from "~components/Layout";

interface MenuRoutesProps extends RouteComponentProps<null> {
    user: UserState;
}

export default withRouter(class MenuRoutes extends React.PureComponent<MenuRoutesProps, null> {

    public render(): JSX.Element {
        return <Layout>
            <Switch>
                {
                    routesConfig.menus.map((r: RoutesConfig) => {
                        return [
                            this.menuroute(r),
                            r.subs != null ? r.subs.map((rc: RoutesConfig) => this.menuroute(rc)) : null
                        ];
                    })
                }
            </Switch>
        </Layout>;
    }

    private menuroute(rc: RoutesConfig): JSX.Element {
        const Component: React.ComponentClass = Components[rc.component]; // tslint:disable-line
        return <Route key={rc.route != null ? rc.route : rc.key}
            exact path={rc.route != null ? rc.route : rc.key}
            render={(props: RouteProps) => rc.auth != null && rc.auth === true ?
                this.requireLogin(<Component {...props} />, rc.route != null ? rc.route : rc.key) :
                <Component {...props} />} /> // tslint:disable-line
    }
    private requireLogin(component: React.ReactNode, route: string): React.ReactNode {
        if (process.env.NODE_ENV === "production" && !this.props.user.loggedIn) {
            return <Redirect to={{ pathname: "/login", state: { from: route } }} />;
        } else {
            return component;
        }
        // if (!this.props.user.loggedIn) {
        //     return <Redirect to={{ pathname: "/login", state: { from: route } }} />;
        // } else {
        //     return component;
        // }
    }
});
