import * as React from "react";
import { connect, SubscriptionAPI } from "dva";
import { Redirect, Route, RouteComponentProps, RouteProps, Switch, withRouter } from "dva/router";
import { RoutesConfig, routesConfig } from "./config";
import {default as Components} from "../components";
import { UserState } from "~models/user";
import MenuRoutes from "./MenuRoutes";

interface RoutersProps extends RouteComponentProps, SubscriptionAPI {
    user: UserState;
}
interface RoutersStates {
    pathName: string;
}

export default withRouter<RouteComponentProps>(connect(({ user }: { user: UserState }) => ({
    user
}))(class Routers extends React.PureComponent<RoutersProps, RoutersStates> {

    constructor(props: RoutersProps) {
        super(props);
        this.notFound = this.notFound.bind(this);
        this.route = this.route.bind(this);
        this.requireLogin = this.requireLogin.bind(this);
        this.renderMenuRoutes = this.renderMenuRoutes.bind(this);

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
            <Route key={"/app"} path={"/app"}
                    render={this.renderMenuRoutes} />
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
    private renderMenuRoutes(props: RouteComponentProps<null>): React.ReactNode {
        return <MenuRoutes {...props} user={this.props.user} />;
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
