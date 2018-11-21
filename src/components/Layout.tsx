import * as React from "react";
import { connect, SubscriptionAPI } from "dva";
import { routerRedux, withRouter } from "dva/router";
import { RoutesConfig, routesConfig } from "../routers/config";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import MenuIcon from "@material-ui/icons/Menu"; // tslint:disable-line:import-name
import classNames from "classnames"; // tslint:disable-line:import-name
import { PositionableMenu } from "./shared/PositionableMenu";
import { DefaultStylings } from "../Theme";
import { GlobalState } from "~models/global";

interface LayoutProps extends StyledComponentProps, SubscriptionAPI {
    global: GlobalState;
    children: React.ReactNode;
}

interface LayoutStates {
    open: boolean;
    drawerAnchorEl: string[];
    menuAnchorEl: HTMLElement;
}

const drawerWidth: number = 240;

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    menuList: {
        padding: 0
    },
    drawerMenu: {
        padding: "8px 0",
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 8,
    },
});

export default withStyles(styles)(withRouter(connect(({ global }: { global: GlobalState}) => ({
    global
}))(
class extends React.PureComponent<LayoutProps, LayoutStates> {

    constructor(props: LayoutProps) {
        super(props);

        this.state = {
            open: false,
            drawerAnchorEl: [],
            menuAnchorEl: null
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.toggleSubDrawer = this.toggleSubDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.openSubMenu = this.openSubMenu.bind(this);
        this.closeSubMenu = this.closeSubMenu.bind(this);
    }

    public render(): JSX.Element {
        return <div className={this.props.classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classNames(this.props.classes.appBar, {[this.props.classes.appBarShift]: this.state.open})}
            >
                <Toolbar disableGutters={!this.state.open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.toggleDrawer}
                        className={classNames(this.props.classes.menuButton, {[this.props.classes.hide]: this.state.open})}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        {this.props.global.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={classNames(this.props.classes.drawer, {
                    [this.props.classes.drawerOpen]: this.state.open,
                    [this.props.classes.drawerClose]: !this.state.open,
                })}
                classes={{
                    paper: classNames(this.props.classes.drawerPaper, {
                        [this.props.classes.drawerOpen]: this.state.open,
                        [this.props.classes.drawerClose]: !this.state.open,
                    })}}
                open={this.state.open}
            >
                <List className={this.props.classes.menuList}>
                    <ListItem key="close menu" button onClick={this.toggleDrawer} className={this.props.classes.toolbar}>
                        <ListItemIcon><ChevronLeft /></ListItemIcon>
                        <ListItemText primary="Close Menu" />
                        <Divider />
                    </ListItem>
                    <Divider />
                    {this.menulist()}
                </List>
            </Drawer>
            <main className={this.props.classes.content} onMouseOver={this.closeSubMenu}>
                <div className={this.props.classes.toolbar}>
                    {this.props.children}
                </div>
            </main>
        </div>;
    }

    private toggleDrawer(): void {
        this.setState({
            open: !this.state.open,
            drawerAnchorEl: this.state.open ? [] : this.state.drawerAnchorEl
        });
    }
    private toggleSubDrawer(): (event: React.SyntheticEvent<HTMLElement>) => void {
        return (event: React.SyntheticEvent<HTMLElement>): void => {
            if (this.state.open === false) {
                return;
            }
            const index: number = this.state.drawerAnchorEl.indexOf(event.currentTarget.id);
            if (index < 0) {
                this.setState({
                    drawerAnchorEl: [...this.state.drawerAnchorEl, event.currentTarget.id]
                });
            } else {
                this.setState({
                    drawerAnchorEl: this.state.drawerAnchorEl.filter((id: string) => id !== event.currentTarget.id)
                });
            }
        };
    }

    private closeDrawer(): void {
        this.setState({
            open: false
        });
    }
    private openSubMenu(): (event: React.SyntheticEvent<HTMLElement>) => void {
        return (event: React.SyntheticEvent<HTMLElement>): void => {
            if (this.state.open) {
                return;
            }
            this.setState({
                menuAnchorEl: event.currentTarget
            });
        };
    }
    private closeSubMenu(event: React.MouseEvent<HTMLElement>): void {
        this.setState({
            menuAnchorEl: null
        });
    }

    private menulist(): JSX.Element {
        return <React.Fragment>
            {
                routesConfig.menus.map((r: RoutesConfig) => {
                    return this.menuitem(r);
                })
            }
        </React.Fragment>;
    }

    private menuitem(r: RoutesConfig): JSX.Element {
        return <React.Fragment key={r.key}>
            <ListItem button onClick={this.toggleSubDrawer()} key={r.key} id={r.key} onMouseOver={this.openSubMenu()}>
                <ListItemIcon>
                    <Icon>
                        {r.icon}
                    </Icon>
                </ListItemIcon>
                <ListItemText inset primary={r.title} />
                {!(this.state.drawerAnchorEl.indexOf(r.key) < 0) ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <PositionableMenu id={`${r.key}-menu`} anchorEl={this.state.menuAnchorEl} placement={DefaultStylings.POPPER_ON_THE_RIGHT}
                  open={this.state.menuAnchorEl != null && this.state.menuAnchorEl.id === `${r.key}`}
                  onClose={this.closeSubMenu} style={{zIndex: 1200}}>
                <List component="div" disablePadding>
                    <ListItem button key={r.key} id={r.key}>
                        <ListItemIcon>
                            <Icon>
                                {r.icon}
                            </Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={r.title} />
                    </ListItem>
                    <Divider />
                    {r.subs.map((rc: RoutesConfig) => this.nestedMenuitem(rc))}
                </List>
            </PositionableMenu>
            {
                r.subs != null ?
                <React.Fragment>
                    <Collapse in={!(this.state.drawerAnchorEl.indexOf(r.key) < 0)} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {r.subs.map((rc: RoutesConfig) => this.nestedMenuitem(rc))}
                        </List>
                    </Collapse>
                    <Divider />
                </React.Fragment> : null
            }
        </React.Fragment>;
    }

    private nestedMenuitem(r: RoutesConfig): JSX.Element {
        return <ListItem button key={r.key} className={this.props.classes.nested} onClick={this.toPage(r)}>
            <ListItemIcon>
                <Icon>
                    {r.icon}
                </Icon>
            </ListItemIcon>
            <ListItemText inset primary={r.title} />
        </ListItem>;
    }

    private toPage(route: RoutesConfig): (event: React.MouseEvent<HTMLElement>) => void {
        return (event: React.MouseEvent<HTMLElement>): void => {
            this.props.dispatch(routerRedux.push(route.key));
            this.props.dispatch({
                type: "global/setTitle",
                payload: route.title
            });
            this.setState({
                menuAnchorEl: null
            });
        };
    }
})));
