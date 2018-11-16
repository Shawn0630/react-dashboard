import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"; //tslint:disable-line:import-name
import DeleteIcon from "@material-ui/icons/Delete"; //tslint:disable-line:import-name
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import * as React from "react";

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: "none !important",
    },
});

function IconButtons(props: StyledComponentProps) { //tslint:disable-line
    const { classes } = props;
    return (
        <div>
            <IconButton className={classes.button} aria-label="Delete">
                <DeleteIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                <Icon>alarm</Icon>
            </IconButton>
            <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" className={classes.button} component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    );
}

export default withStyles(styles)(IconButtons);
