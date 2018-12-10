import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FolderIcon from "@material-ui/icons/Folder"; // tslint:disable-line:import-name
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined"; // tslint:disable-line:import-name
import DeleteIcon from "@material-ui/icons/Delete"; // tslint:disable-line:import-name
import FileIcon from "@material-ui/icons/InsertDriveFile"; // tslint:disable-line:import-name
import * as styles from "./FileBrowser.scss";
import { com } from "~models/example";
import IFileNode = com.example.dto.IFileNode;
import Type = com.example.dto.FileNode.Type;
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const style: any = createStyles({ //tslint:disable-line
    tooltip: {
        fontSize: 11,
    }
});
interface DataItemProps extends WithStyles<typeof style> {
    item: IFileNode;
    nested?: boolean;
    source: Source;
    selected?: boolean;
    disabled?: boolean;
    root?: boolean;
    showTooltip?: boolean;

    onClick(item: IFileNode): void;
}

enum Source {
    LOCAL, REMOTE
}

export default withStyles(style)(class DataItem extends React.PureComponent<DataItemProps> {
    constructor(props: DataItemProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public render(): JSX.Element { // tslint:disable-line
        return <ListItem className={this.props.nested ? styles.nested : styles.top} button
            onClick={this.props.item.type === Type.FILE ? this.onClick : null}
            selected={this.props.selected} disabled={this.props.disabled}
            onDoubleClick={this.props.item.type === Type.DIR ? this.onClick : null}>
            <ListItemAvatar>
                {this.props.root ? <FolderOutlinedIcon /> : this.props.item.type === Type.DIR ? <FolderIcon /> : <FileIcon />}
            </ListItemAvatar>
            {
                this.props.showTooltip ?
                <Tooltip title={this.props.item.filename} classes={{ tooltip: this.props.classes.tooltip }}>
                    <ListItemText primary={this.props.item.filename} className={styles.itemText} />
                </Tooltip> :
                <ListItemText primary={this.props.item.filename} className={styles.itemText} />
            }
            {
                this.props.source === Source.LOCAL && this.props.item.type === Type.FILE ?
                <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" disabled={this.props.disabled}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction> : null
            }
        </ListItem>;

    }
    private onClick(event: React.SyntheticEvent<HTMLElement>): void {
        this.props.onClick(this.props.item);
    }
});

export { Source };
