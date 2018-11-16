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

interface TextButtonsProps extends StyledComponentProps { }//tslint:disable-line

function TextButtons(props?: TextButtonsProps): JSX.Element { //tslint:disable-line
    return (
        <div>
            <Button className={props.classes.button}>Default</Button>
            <Button color="primary" className={props.classes.button}>
                Primary
      </Button>
            <Button color="secondary" className={props.classes.button}>
                Secondary
      </Button>
            <Button disabled className={props.classes.button}>
                Disabled
      </Button>
            <Button href="#text-buttons" className={props.classes.button}>
                Link
      </Button>
            <input
                accept="image/*"
                className={props.classes.input}
                id="flat-button-file"
                multiple
                type="file"
            />
            <label htmlFor="flat-button-file">
                <Button component="span" className={props.classes.button}>
                    Upload
        </Button>
            </label>
        </div>
    );
}

export default withStyles(styles)(TextButtons);
