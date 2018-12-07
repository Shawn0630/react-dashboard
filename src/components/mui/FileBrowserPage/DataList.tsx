import * as React from "react";
import * as styles from "./FileBrowser.scss";
import { com } from "~models/example";
import List from "@material-ui/core/List";
import IFileNode = com.example.dto.IFileNode;
import Type = com.example.dto.FileNode.Type;
import DataItem, { Source } from "./DataItem";

interface DataListProps {
    root: IFileNode;
    source: Source;
    dense?: boolean;
    selected: IFileNode[];

    openDir(item: IFileNode): void;
    selectItem(item: IFileNode): void;
}

export default function DataList(props: DataListProps): JSX.Element { // tslint:disable-line
    return <List dense={props.dense} className={styles.root}>
        <DataItem item={props.root} source={props.source} onClick={null}/>
        <List component="div">
        { props.root.children.map((item: IFileNode) =>
            <DataItem item={item} source={props.source} nested={true}
                      onClick={item.type === Type.DIR ? props.openDir : props.selectItem}
                      selected={props.selected.indexOf(item) >= 0}/>)}
        </List>
    </List>;
}
