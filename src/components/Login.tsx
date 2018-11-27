import * as React from "react";
import * as styles from "./Login.scss";
import Button from "@material-ui/core/Button";
import { connect, SubscriptionAPI } from "dva";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Redirect, RouteComponentProps, withRouter } from "dva/router";
import TextField from "@material-ui/core/TextField";
import { UserState } from "~models/user";

interface LoginProps extends RouteComponentProps<{}>, SubscriptionAPI {
    user: UserState;
}

interface LoginState {
    username?: string;
    password?: string;
    usernameErrorMessage?: string;
    passwordErrorMessage?: string;
}

@connect(({ user }: {user: UserState}) => ({
    user
}))
class Login extends React.PureComponent<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameErrorMessage: null,
            passwordErrorMessage: null
        };
        this.submit = this.submit.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.resetPasswordErrorMessage = this.resetPasswordErrorMessage.bind(this);
        this.resetUserNameErrorMessage = this.resetUserNameErrorMessage.bind(this);
    }

    public render(): JSX.Element {
        const { loggedIn } = this.props.user;
        if (loggedIn) {
            // user was already logged in
            let from: string = "/";
            if (this.props.location.state != null && this.props.location.state.from != null) {
                from = this.props.location.state.from;
            }

            return <Redirect to={from}/>;
        } else {
            return <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <h3>User Login</h3>
                </div>
                <div className={styles.loginBody}><form onSubmit={this.submit}>
                    <FormControl className={styles.loginMsg} id="username">
                        <TextField id="username-input" type="string" label="Username"
                            onChange={this.changeUsername} autoFocus error={this.state.usernameErrorMessage != null}
                            onBlur={this.resetUserNameErrorMessage}
                            value={this.state.username} placeholder="Username"/>
                        <FormHelperText id="username-error" error>
                            {this.state.usernameErrorMessage}
                        </FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl className={styles.loginMsg} id="password">
                        <TextField id="password-input" type="password" label="Password"
                            onChange={this.changePassword} error={this.state.passwordErrorMessage != null}
                            onBlur={this.resetPasswordErrorMessage}
                            value={this.state.password} placeholder="Password"/>
                        <FormHelperText id="password-error" error>
                            {this.state.passwordErrorMessage}
                        </FormHelperText>
                    </FormControl>
                    <br/>
                    <Button color="primary" variant="contained" type="submit">Login</Button>
                </form></div>
            </div>;
        }
    }
    private changeUsername(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            username: event.target.value
        });
    }
    private changePassword(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            password: event.target.value
        });
    }

    private submit(e: React.SyntheticEvent<HTMLFormElement>): void {
        const { dispatch } = this.props;
        e.preventDefault();

        let err : boolean = false;
        if (this.state.username == null || this.state.username.trim().length === 0) {
            this.setState({
                usernameErrorMessage: "username cannot be empty"
            });
            err = true;
        } else {
            this.setState({
                usernameErrorMessage: null
            });
        }

        if (this.state.password == null || this.state.password.trim().length === 0) {
            this.setState({
                passwordErrorMessage: "password cannot be empty"
            });
            err = true;
        } else {
            this.setState({
                passwordErrorMessage: null
            });
        }

        if (!err) {
            dispatch({
                type: "user/login",
                payload: {
                    username: this.state.username,
                    password: this.state.password
                }
            });
        }
    }
    private resetUserNameErrorMessage(): void {
        if (this.state.username !== "") {
            this.setState({
                usernameErrorMessage: null
            }) ;
        }
    }
    private resetPasswordErrorMessage(): void {
        if (this.state.password !== "") {
            this.setState({
                passwordErrorMessage: null
            }) ;
        }
    }
}

export default withRouter(Login);
