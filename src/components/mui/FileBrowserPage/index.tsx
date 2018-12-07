import * as React from "react";
import FileBrowserWrapper from "./FileBrowserWrapper";
import SampleDialogWrapper from "./SampleDialogWrapper";
import { com } from "~models/example";
import FileNode = com.example.dto.FileNode;
import * as root from "../../../data/FileNode.json";

export default class FileBrowserPage extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <React.Fragment>
            <FileBrowserWrapper root={FileNode.fromObject(root)} />
            <SampleDialogWrapper />
        </React.Fragment>;
    }
}
