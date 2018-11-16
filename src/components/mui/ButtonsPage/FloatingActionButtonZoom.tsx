import { PropTypes } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import { createStyles, Direction, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";//tslint:disable-line
import EditIcon from "@material-ui/icons/Edit";//tslint:disable-line
import UpIcon from "@material-ui/icons/KeyboardArrowUp";//tslint:disable-line
import classNames from "classnames";//tslint:disable-line
import * as React from "react";
import SwipeableViews from "react-swipeable-views";//tslint:disable-line

interface TabContainerProps {
    children: React.ComponentClass | string;
    dir: Direction;
}

function TabContainer(props: TabContainerProps): JSX.Element { //tslint:disable-line
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: "relative",
        minHeight: 200,
    },
    fab: {
        position: "absolute",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
    },
});

interface FloatingActionButtonZoomStates {
    value: number;
}

interface FabProps {
    color: PropTypes.Color;
    className: string;
    icon: JSX.Element;
}

interface FloatingActionButtonZoomProps extends StyledComponentProps {
    theme?: Theme;
}

class FloatingActionButtonZoom extends React.PureComponent<FloatingActionButtonZoomProps, FloatingActionButtonZoomStates> {

    constructor(props: StyledComponentProps) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    public render(): JSX.Element {
        const { classes, theme } = this.props;
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };

        const fabs: FabProps[] = [
            {
                color: "primary",
                className: classes.fab,
                icon: <AddIcon />,
            },
            {
                color: "secondary",
                className: classes.fab,
                icon: <EditIcon />,
            },
            {
                color: "inherit",
                className: classNames(classes.fab, classes.fabGreen),
                icon: <UpIcon />,
            },
        ];

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>Item One</TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews>
                {fabs.map((fab, index) => (
                    <Zoom
                        key={fab.color}
                        in={this.state.value === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                    >
                        <Button variant="fab" className={fab.className} color={fab.color}>
                            {fab.icon}
                        </Button>
                    </Zoom>
                ))}
            </div>
        );
    }

    private handleChange(event: React.SyntheticEvent<HTMLElement>, value: number): void {
        this.setState({ value: value });
    }
    private handleChangeIndex(value: number): void {
        this.setState({ value: value});
    }
}

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
