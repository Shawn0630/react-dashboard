import List from "@material-ui/core/List";
import * as React from "react";
import { com } from "~models/example";

import DataItem, { Source } from "./DataItem";
import * as styles from "./FileBrowser.scss";

import IFileNode = com.example.dto.IFileNode;
import Type = com.example.dto.FileNode.Type;
interface DataListProps {
    root: IFileNode;
    source: Source;
    dense?: boolean;
    selected: IFileNode[];
    disabled: IFileNode[];

    openDir(item: IFileNode): void;
    selectItem(item: IFileNode): void;
}

export default function DataList(props: DataListProps): JSX.Element { // tslint:disable-line
    return <List dense={props.dense} className={styles.root}>
        <DataItem item={props.root} source={props.source} onClick={null} root={true}/>
        <List component="div">
        { props.root.children.map((item: IFileNode) =>
            <DataItem item={item} source={props.source} nested={true}
                      onClick={item.type === Type.DIR ? props.openDir : props.selectItem}
                      selected={props.selected.indexOf(item) >= 0}
                      disabled={props.disabled.indexOf(item) >= 0}/>)}
        </List>
    </List>;
}
