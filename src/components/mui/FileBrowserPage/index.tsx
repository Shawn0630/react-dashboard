import * as React from "react";
import FileBrowserWrapper from "./FileBrowserWrapper";
import { com } from "~models/example";
import FileNode = com.example.dto.FileNode;
import * as root from "../../../data/FileNode.json";

export default class FileBrowserPage extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <FileBrowserWrapper root={FileNode.fromObject(root)} />;
    }
}
