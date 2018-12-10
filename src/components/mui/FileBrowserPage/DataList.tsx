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
        { props.acceptLocal != null && props.acceptLocal === true ? <AddData onChange={props.addData} /> : null}
        <List component="div" className={styles.dataList}>
        { props.root.children.map((item: IFileNode) =>
            <DataItem item={item} source={props.root.source} nested={true}
                      onClick={item.type === Type.DIR ? props.openDir : props.selectItem}
                      selected={JSON.stringify(props.selected).indexOf(JSON.stringify(item)) >= 0}
                      disabled={JSON.stringify(props.disabled).indexOf(JSON.stringify(item)) >= 0}
                      showTooltip={item.type === Type.FILE}/>)}
        </List>
    </List>;
}
