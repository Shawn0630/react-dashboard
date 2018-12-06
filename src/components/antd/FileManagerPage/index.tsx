import { Item, ItemType } from "./FileListItem";
import * as React from "react";
import FileManagerWrapper from "./FileManagerWrapper";

const map: {[id: string]: Item} = {
    "0": {
        id: "0",
        title: "Root",
        type: ItemType.DIR,
        children: ["1"],
        parent: null,
    },
    "1": {
        id: "1",
        title: "title1",
        type: ItemType.DIR,
        children: ["2", "3"],
        parent: "0",
    },
    "2": {
        id: "2",
        title: "title2",
        type: ItemType.FILE,
        children: [],
        parent: "1",
    },
    "3": {
        id: "3",
        title: "title3",
        type: ItemType.DIR,
        children: ["4", "5"],
        parent: "1",
    },
    "4": {
        id: "4",
        title: "title4",
        type: ItemType.FILE,
        children: [],
        parent: "3",
    },
    "5": {
        id: "5",
        title: "title5",
        type: ItemType.FILE,
        children: [],
        parent: "3",
    },
};

export default class FileMangerPage extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <FileManagerWrapper
                map={map}
                rootId="0"
                internalScroll={true}
            />;
    }
}
