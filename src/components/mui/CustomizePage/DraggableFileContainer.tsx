import * as React from "react";
import * as dnd from "react-dnd";
import * as styles from "../FileBrowserPage/FileBrowser.scss";

import List from "@material-ui/core/List";

import { DragDropProps, DraggableFileListItem } from "./DraggableFileListItem";
import { SelectableFile } from "../FileBrowserPage/SampleSubmissionPanel";

interface FileContainerProps {
    fileList: SelectableFile[];
    listIndex: number;
    connectDropTarget?: dnd.ConnectDropTarget;
    isOver?: boolean;
    canDrop?: boolean;
    searchPattern: string;
    onRemove(filename: string, listIndex: number): void;
    onCheck(filename: string, listIndex: number, index: number, checked: boolean): void;
    removeFile(filename: string, listIndex: number): void;
    moveFile(sourceIndex: number, targetIndex: number, listIndex: number): void;
    pushFile(filename: string, targetIndex: number): void;
}

interface FileContainerStats {
    fileList: SelectableFile[];
}

interface DropProps {
    listIndex: number;
}

class FileContainer extends React.PureComponent<FileContainerProps, FileContainerStats> {

    constructor(props: FileContainerProps) {
        super(props);
        this.state = {
            fileList: this.props.fileList
        };
    }

    public componentWillReceiveProps(nextProps: FileContainerProps): void {
        this.setState({
            fileList: nextProps.fileList
        });
        this.forceUpdate();
    }

    public render(): JSX.Element {
        const isActive: boolean = this.props.canDrop && this.props.isOver;
        const backgroundColor: string = isActive ? "lightgreen" : "#FFF";
        const minHeight: number = 80;

        return this.props.connectDropTarget(
            <div style={{backgroundColor: backgroundColor, minHeight: minHeight}}>
            <List className={styles.root}>
                {this.state.fileList.map((file: SelectableFile, index: number) => {
                    return <DraggableFileListItem key={file.name} filename={file.name} checked={file.selected}
                        onRemove={this.props.onRemove} onCheck={this.props.onCheck}
                        removeFile={this.props.removeFile} moveFile={this.props.moveFile} index={index} listIndex={this.props.listIndex}/>;

                })}
            </List>
            </div>
        );
    }
}

const containerDropTarget: dnd.DropTargetSpec<FileContainerProps> = {
    drop(props: FileContainerProps, monitor: dnd.DropTargetMonitor,
         component: React.PureComponent<FileContainerProps, FileContainerStats>): DropProps {
        const listIndex: number = props.listIndex;
        const sourceObj: DragDropProps = monitor.getItem() as DragDropProps;
        if (listIndex !== sourceObj.listIndex) {
            props.pushFile(sourceObj.filename, listIndex);
        }

        return {
            listIndex: listIndex
        };
    }
};

const containerDropTargetCollector: dnd.DropTargetCollector = (connect: dnd.DropTargetConnector,
                                                               monitor: dnd.DropTargetMonitor): Object => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

// tslint:disable-next-line
const DroppableFileList = dnd.DropTarget("FILE_LIST_ITEM", containerDropTarget, containerDropTargetCollector)(FileContainer);
export { DroppableFileList, DropProps};
