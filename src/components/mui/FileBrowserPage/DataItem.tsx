import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder"; // tslint:disable-line:import-name
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined"; // tslint:disable-line:import-name
import DeleteIcon from "@material-ui/icons/Delete"; // tslint:disable-line:import-name
import FileIcon from "@material-ui/icons/InsertDriveFile"; // tslint:disable-line:import-name
import * as styles from "./FileBrowser.scss";
import { com } from "~models/example";
import IFileNode = com.example.dto.IFileNode;
import Type = com.example.dto.FileNode.Type;

interface DataItemProps {
    item: IFileNode;
    nested?: boolean;
    source: Source;
    selected?: boolean;
    disabled?: boolean;
    root?: boolean;

    onClick(item: IFileNode): void;
}

enum Source {
    LOCAL, REMOTE
}

export default function DataItem(props: DataItemProps): JSX.Element { // tslint:disable-line
    return <ListItem className={props.nested ? styles.nested : styles.top} button
                onClick={props.item.type === Type.FILE ? onClick : null}
                selected={props.selected} disabled={props.disabled}
                onDoubleClick={props.item.type === Type.DIR ? onClick : null}>
        <ListItemAvatar>
            {props.root ? <FolderOutlinedIcon /> : props.item.type === Type.DIR ? <FolderIcon /> : <FileIcon />}
        </ListItemAvatar>
        <ListItemText primary={props.item.filename} className={styles.itemText}/>
        {
            props.source === Source.LOCAL && props.item.type === Type.FILE ?
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" disabled={props.disabled}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction> : null
        }
    </ListItem>;

    function onClick(event: React.SyntheticEvent<HTMLElement>): void {
        props.onClick(props.item);
    }
}

export { Source };
