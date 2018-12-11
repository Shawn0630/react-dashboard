import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete"; //tslint:disable-line
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import * as React from "react";
import * as dnd from "react-dnd";
import { findDOMNode } from "react-dom";

import * as styles from "./SampleDialog.scss";
import { DropProps } from "./DraggableFileContainer";

interface DragDropProps {
    filename: string;
    index: number;
    listIndex: number;
}

interface FileListItemProps {
    filename: string;
    index: number;
    listIndex: number;
    checked: boolean;
    isDragging?: boolean;
    connectDragSource?: dnd.ConnectDragSource;
    connectDropTarget?: dnd.ConnectDropTarget;
    onCheck(filename: string, listIndex: number, index: number, checked: boolean): void;
    onRemove(filename: string, listIndex: number): void;
    removeFile(filename: string, listIndex: number): void;
    moveFile(sourceIndex: number, targetIndex: number, listIndex: number): void;
}

interface FileListItemStates {
    checked: boolean;
}

const itemDragSource: dnd.DragSourceSpec<FileListItemProps> = {
    beginDrag(props: FileListItemProps): DragDropProps {
        return {
            filename: props.filename,
            index: props.index,
            listIndex: props.listIndex
        };
    },
    endDrag(props: FileListItemProps, monitor: dnd.DragSourceMonitor): void {
        const item: DragDropProps = monitor.getItem() as DragDropProps;
        const dropResult:  DropProps = monitor.getDropResult() as DropProps;

        if (dropResult != null && dropResult.listIndex !== item.listIndex) {
            props.removeFile(item.filename, item.listIndex);
        }
    }
};

const itemDropTarget: dnd.DropTargetSpec<FileListItemProps> = {
    hover(props: FileListItemProps, monitor: dnd.DropTargetMonitor, component: React.Component<FileListItemProps>): void {
        const item: DragDropProps = (monitor.getItem() as DragDropProps);
        const dragIndex: number = item.index;
        const dragListIndex: number = item.listIndex;
        const hoverIndex: number = props.index;
        const hoverListIndex: number = props.listIndex;

        if (dragIndex === hoverIndex) {
            return;
        }
        if (dragListIndex !== hoverListIndex) {
            return;
        }

        //tslint:disable-next-line:no-any
        const hoverBoundingRect: ClientRect = (findDOMNode(component) as any).getBoundingClientRect();
        const hoverMiddleY: number = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset: dnd.ClientOffset = monitor.getClientOffset();
        const hoverClientY: number = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        props.moveFile(dragIndex, hoverIndex, props.listIndex);
        (monitor.getItem() as DragDropProps).index = hoverIndex;
    },
    drop(props: DropProps, monitor: dnd.DropTargetMonitor, component: React.Component<FileListItemProps>): DropProps {
        return {
            listIndex: props.listIndex
        };
    }
};

const dragSourceCollector: dnd.DragSourceCollector = (connect: dnd.DragSourceConnector, monitor: dnd.DragSourceMonitor): Object => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

const dropTargetCollector: dnd.DropTargetCollector = (connect: dnd.DropTargetConnector): Object => {
    return {
        connectDropTarget: connect.dropTarget()
    };
};

class FileListItem extends React.PureComponent<FileListItemProps, FileListItemStates> {
    constructor(props: FileListItemProps) {
        super(props);

        this.state = {
            checked: this.props.checked
        };

        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    public componentWillReceiveProps(props: FileListItemProps): void {
        if (this.state.checked === props.checked) {
            return;
        }
        this.setState({
            checked: props.checked
        });
    }

    public render(): JSX.Element {
        const opacity: number = this.props.isDragging ? 0 : 1;

        return this.props.connectDragSource(
            this.props.connectDropTarget(
                <div>
                    <ListItem className={styles.draggableFile}
                              style={{opacity: opacity}}
                              data-index={this.props.index} data-name={this.props.filename}>
                        <Checkbox color="primary" onChange={this.handleCheckboxClick} checked={this.state.checked} />
                        <ListItemText primary={this.props.filename} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={this.handleRemoveClick}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>
            )
        );
    }
    private handleRemoveClick(): void {
        this.props.onRemove(this.props.filename, this.props.listIndex);
    }
    private handleCheckboxClick(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            checked: event.target.checked
        });
        this.props.onCheck(this.props.filename, this.props.listIndex, this.props.index, event.target.checked);
    }
}

// tslint:disable-next-line
const DraggableFileListItem = dnd.DropTarget("FILE_LIST_ITEM", itemDropTarget, dropTargetCollector)(
    dnd.DragSource("FILE_LIST_ITEM", itemDragSource, dragSourceCollector)(FileListItem)
);

export {DraggableFileListItem, DragDropProps};
