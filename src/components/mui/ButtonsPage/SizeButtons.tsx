import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add"; //tslint:disable-line
import DeleteIcon from "@material-ui/icons/Delete";//tslint:disable-line
import * as React from "react";

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    button: {
        margin: theme.spacing.unit,
    },
});

function ButtonSizes(props: StyledComponentProps) { //tslint:disable-line
    const { classes } = props;
    return (
        <div>
            <div>
                <Button size="small" className={classes.button}>
                    Small
        </Button>
                <Button size="medium" className={classes.button}>
                    Medium
        </Button>
                <Button size="large" className={classes.button}>
                    Large
        </Button>
            </div>
            <div>
                <Button variant="outlined" size="small" color="primary" className={classes.button}>
                    Small
        </Button>
                <Button variant="outlined" size="medium" color="primary" className={classes.button}>
                    Medium
        </Button>
                <Button variant="outlined" size="large" color="primary" className={classes.button}>
                    Large
        </Button>
            </div>
            <div>
                <Button variant="contained" size="small" color="primary" className={classes.button}>
                    Small
        </Button>
                <Button variant="contained" size="medium" color="primary" className={classes.button}>
                    Medium
        </Button>
                <Button variant="contained" size="large" color="primary" className={classes.button}>
                    Large
        </Button>
            </div>
            <div>
                <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
                    <AddIcon />
                </Button>
                <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
                    <AddIcon />
                </Button>
            </div>
            <div>
                <IconButton aria-label="Delete" className={classes.button}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.button}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.button}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
}

export default withStyles(styles)(ButtonSizes);
