import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import { createMuiTheme, MuiThemeProvider, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import classNames from "classnames"; //tslint:disable-line
import * as React from "react";

const styles: any = (theme: Theme) => ({ //tslint:disable-line
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        "&:hover": {
            backgroundColor: purple[700],
        },
    },
    bootstrapRoot: {
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
        ].join(","),
        "&:hover": {
            backgroundColor: "#0069d9",
            borderColor: "#0062cc",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
            borderColor: "#005cbf",
        },
        "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
    },
});

const theme: Theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: {
        useNextVariants: true,
    },
});

function CustomizedInputs(props: StyledComponentProps) { //tslint:disable-line
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Button
                variant="contained"
                color="primary"
                className={classNames(classes.margin, classes.cssRoot)}
            >
                Custom CSS
      </Button>
            <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin}>
                    MuiThemeProvider
        </Button>
            </MuiThemeProvider>
            <Button
                variant="contained"
                color="primary"
                disableRipple
                className={classNames(classes.margin, classes.bootstrapRoot)}
            >
                Bootstrap
      </Button>
        </div>
    );
}

export default withStyles(styles)(CustomizedInputs);
