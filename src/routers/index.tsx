import * as React from "react";
import { Redirect, Route, RouteComponentProps, RouteProps, Switch, withRouter } from "dva/router";
import { RoutesConfig, routesConfig } from "./config";
import {default as Components} from "../components";

interface RoutersProps extends RouteComponentProps<null> {}
interface RoutersStates {
    pathName: string;
}

export default withRouter(class Routers extends React.PureComponent<RoutersProps, RoutersStates> {

    constructor(props: RoutersProps) {
        super(props);
        this.notFound = this.notFound.bind(this);
        this.route = this.route.bind(this);

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
                Object.keys(routesConfig).map((key: string) =>
                    routesConfig[key].map((r: RoutesConfig) => {
                        return [
                            this.route(r),
                            r.subs != null ? r.subs.map((rc: RoutesConfig) => this.route(rc)) : null
                        ];
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
        return <Route key={rc.route != null ? rc.route : rc.key}
            exact path={rc.route != null ? rc.route : rc.key}
            render={(props: RouteProps) => <Component {...props} />} />; // tslint:disable-line
    }
});
