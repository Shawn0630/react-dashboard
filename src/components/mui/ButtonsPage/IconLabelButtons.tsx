import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createStyles, StyledComponentProps, Theme, withStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload"; //tslint:disable-line
import DeleteIcon from "@material-ui/icons/Delete";//tslint:disable-line
import KeyboardVoiceICon from "@material-ui/icons/KeyboardVoice";//tslint:disable-line
import SaveIcon from "@material-ui/icons/Save";//tslint:disable-line
import classNames from "classnames";//tslint:disable-line
import * as React from "react";

const styles: any = (theme: Theme) => createStyles({ // tslint:disable-line:no-any
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function IconLabelButtons(props: StyledComponentProps) {// tslint:disable-line
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" color="secondary" className={classes.button}>
                Delete
        <DeleteIcon className={classes.rightIcon} />
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
                Send
        <Icon className={classes.rightIcon}>send</Icon>
            </Button>
            <Button variant="contained" color="default" className={classes.button}>
                Upload
        <CloudUploadIcon className={classes.rightIcon} />
            </Button>
            <Button variant="contained" disabled color="secondary" className={classes.button}>
                <KeyboardVoiceICon className={classes.leftIcon} />
                Talk
      </Button>
            <Button variant="contained" size="small" className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
      </Button>
        </div>
    );
}

export default withStyles(styles)(IconLabelButtons);
