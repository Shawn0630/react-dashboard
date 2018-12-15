import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as styles from "./FileBrowser.scss";

interface AddDataProps {
    onChange(files: FileList): void;
}

export default function AddData(props: AddDataProps): JSX.Element { //tslint:disable-line
    return <React.Fragment>
        <input id="add-file-button" type="file" accept={".JPG"}
                  multiple={true} onChange={onChange} style={{ display: "none" }} />
        <label htmlFor="add-file-button" className={styles.addData}>
            <ListItem className={styles.nested} button >
                <ListItemText primary="Click to upload more data ..." />
            </ListItem>
        </label>
    </React.Fragment>;

    function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        props.onChange(event.target.files);
    }
}
