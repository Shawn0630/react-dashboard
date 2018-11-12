import * as React from "react";
import { RoutesConfig, routesConfig } from "../routers/config";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
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
import InboxIcon from "@material-ui/icons/MoveToInbox"; // tslint:disable-line:import-name
import MailIcon from "@material-ui/icons/Mail"; // tslint:disable-line:import-name
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import MenuIcon from "@material-ui/icons/Menu"; // tslint:disable-line:import-name
import classNames from "classnames"; // tslint:disable-line:import-name

interface LayoutProps extends StyledComponentProps {
    title?: string;
    children: React.ComponentClass;
}

interface LayoutStates {
    open: boolean;
}

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        minHeight: "100vh"
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
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
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
        backgroundColor: theme.palette.background.default,
        marginTop: theme.spacing.unit * 9,
    },
});

const drawerWidth: number = 240;
export default withStyles(styles)(class Layout extends React.PureComponent<LayoutProps, LayoutStates> {

    constructor(props: LayoutProps) {
        super(props);

        this.state = {
            open: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    public render(): JSX.Element {
        return <div className={this.props.classes.root}>
            <AppBar
                position="absolute"
                className={classNames(this.props.classes.appBar, this.state.open && this.props.classes.appBarShift)}
            >
                <Toolbar disableGutters={!this.state.open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.toggleDrawer}
                        className={classNames(this.props.classes.menuButton, this.state.open && this.props.classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(this.props.classes.drawerPaper, !this.state.open && this.props.classes.drawerPaperClose),
                }}
                open={this.state.open}
            >
                <List className={this.props.classes.menuList}>
                    <ListItem button onClick={this.toggleDrawer} className={this.props.classes.toolbar}>
                        <ListItemIcon><ChevronLeft /></ListItemIcon>
                        <ListItemText primary="Close Menu" />
                        <Divider />
                    </ListItem>
                    {/* {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text} onClick={this.closeDrawer}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))} */}
                    {this.menulist()}
                </List>
            </Drawer>
            <main className={this.props.classes.content} onClick={this.closeDrawer}>
                <div className={this.props.classes.toolbar}>
                    {this.props.children}
                </div>
            </main>
        </div>;
    }

    private toggleDrawer(): void {
        this.setState({
            open: !this.state.open
        });
    }

    private closeDrawer(): void {
        this.setState({
            open: false
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
        return <React.Fragment>
            <ListItem button onClick={this.toPage} key={r.key}>
                <ListItemIcon>
                    <Icon>
                        {r.icon}
                    </Icon>
                </ListItemIcon>
                <ListItemText inset primary={r.title} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {r.subs && r.subs.map((rc: RoutesConfig) => this.nestedMenuitem(rc))}
            <Divider />
        </React.Fragment>;
    }

    private nestedMenuitem(r: RoutesConfig): JSX.Element {
        return <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={this.props.classes.nested}>
                    <ListItemIcon>
                        <Icon>
                            {r.icon}
                        </Icon>
                    </ListItemIcon>
                    <ListItemText inset primary={r.title} />
                </ListItem>
            </List>
        </Collapse>;
    }

    private toPage(): void {}
});
