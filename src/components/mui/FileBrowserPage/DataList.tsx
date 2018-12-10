import List from "@material-ui/core/List";
import * as React from "react";
import { com } from "~models/example";

import DataItem from "./DataItem";
import { Node } from "./FileBrowserWrapper";
import AddData from "./AddData";
import * as styles from "./FileBrowser.scss";

import IFileNode = com.example.dto.IFileNode;
import Type = com.example.dto.FileNode.Type;
interface DataListProps {
    root: Node;
    acceptLocal?: boolean;
    dense?: boolean;
    selected: Node[];
    disabled: Node[];

    openDir(item: Node): void;
    selectItem(item: Node): void;
    addData(items: FileList): void;
    toParent(item: Node): void;
}

export default function DataList(props: DataListProps): JSX.Element { // tslint:disable-line
    return <List dense={props.dense} className={styles.root}>
        <DataItem item={props.root} source={props.root.source} onClick={props.toParent} root={true}/>
        <List component="div">
        { props.acceptLocal != null && props.acceptLocal === true ? <AddData onChange={props.addData} /> : null}
        { props.root.children.map((item: IFileNode) =>
            <DataItem item={item} source={props.root.source} nested={true}
                      onClick={item.type === Type.DIR ? props.openDir : props.selectItem}
                      selected={props.selected.indexOf(item) >= 0}
                      disabled={props.disabled.indexOf(item) >= 0} />)}
        </List>
    </List>;
}
