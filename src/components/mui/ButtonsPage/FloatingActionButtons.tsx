import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";//tslint:disable-line
import DeleteIcon from "@material-ui/icons/Delete";//tslint:disable-line
import NavigationIcon from "@material-ui/icons/Navigation";//tslint:disable-line
import * as React from "react";

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingActionButtons(props: StyledComponentProps) {//tslint:disable-line
    const { classes } = props;
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon />
            </Button>
            <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                <Icon>edit_icon</Icon>
            </Button>
            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                <NavigationIcon className={classes.extendedIcon} />
                Extended
      </Button>
            <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>
        </div>
    );
}

export default withStyles(styles)(FloatingActionButtons);
