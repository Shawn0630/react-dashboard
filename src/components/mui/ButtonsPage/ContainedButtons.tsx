import * as React from "react";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: "none !important",
    },
});

interface ContainedButtonsProps extends StyledComponentProps { }//tslint:disable-line

function ContainedButtons(props: ContainedButtonsProps) {// tslint:disable-line
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" className={classes.button}>
                Default
      </Button>
            <Button variant="contained" color="primary" className={classes.button}>
                Primary
      </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
                Secondary
      </Button>
            <Button variant="contained" color="secondary" disabled className={classes.button}>
                Disabled
      </Button>
            <Button variant="contained" href="#contained-buttons" className={classes.button}>
                Link
      </Button>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload
        </Button>
            </label>
        </div>
    );
}

export default withStyles(styles)(ContainedButtons);
