import * as React from "react";
import { connect, SubscriptionAPI } from "dva";
import { Redirect, Route, RouteComponentProps, RouteProps, Switch, withRouter } from "dva/router";
import { RoutesConfig, routesConfig } from "./config";
import Layout from "~components/Layout";
import {default as Components} from "../components";
import { UserState } from "~models/user";

interface RoutersProps extends RouteComponentProps<{}>, SubscriptionAPI {
    user: UserState;
}
interface RoutersStates {
    pathName: string;
}

export default withRouter<RouteComponentProps<{}>>(connect(({ user }: { user: UserState }) => ({
    user
}))(class Routers extends React.PureComponent<RoutersProps, RoutersStates> {

    constructor(props: RoutersProps) {
        super(props);
        this.notFound = this.notFound.bind(this);
        this.route = this.route.bind(this);
        this.requireLogin = this.requireLogin.bind(this);

        this.state = {
            pathName: props.history.location.pathname
        };
    }

    public componentWillMount(): void {
        this.props.history.listen((listen) => {
            this.setState({
                pathName: listen.pathname
            });
        });
    }

    public render(): JSX.Element {
        return <div>
            <Switch>
            {
                routesConfig.menus.map((r: RoutesConfig) => {
                    return [
                        this.menuroute(r),
                        r.subs != null ? r.subs.map((rc: RoutesConfig) => this.menuroute(rc)) : null
                    ];
                })
            }
            {
                routesConfig.others.map((r: RoutesConfig) => {
                    return this.route(r);
                })
            }
            <Route render={this.notFound} />
        </Switch>
    </div>;
    }

    private notFound(): JSX.Element {
        return <Redirect to="/404" />;
    }
    private menuroute(rc: RoutesConfig): JSX.Element {
        const Component: React.ComponentClass = Components[rc.component]; // tslint:disable-line
        return <Route key={rc.route != null ? rc.route : rc.key}
            exact path={rc.route != null ? rc.route : rc.key}
            render={(props: RouteProps) => rc.auth != null && rc.auth === true ?
                this.requireLogin(<Layout><Component {...props} /> </Layout>, rc.route != null ? rc.route : rc.key) :
                <Layout><Component {...props} /> </Layout>} /> // tslint:disable-line
    }
    private route(rc: RoutesConfig): JSX.Element {
        const Component: React.ComponentClass = Components[rc.component]; // tslint:disable-line
        return <Route key={rc.route != null ? rc.route : rc.key}
            exact path={rc.route != null ? rc.route : rc.key}
            render={(props: RouteProps) => <Component {...props} />} /> // tslint:disable-line
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
}));
