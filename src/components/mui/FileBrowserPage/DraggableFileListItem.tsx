import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import * as dnd from "react-dnd";
import { findDOMNode } from "react-dom";

import * as styles from "./SampleDialog.scss";
import { DropProps } from "./DraggableFileContainer";

interface DragDropProps {
    file: File;
    index: number;
    listIndex: number;
}

interface FileListItemProps {
    file: File;
    index: number;
    listIndex: number;
    checked: boolean;
    filtered: boolean;
    isDragging?: boolean;
    connectDragSource?: dnd.ConnectDragSource;
    connectDropTarget?: dnd.ConnectDropTarget;
    onCheck(file: File, listIndex: number, index: number, checked: boolean): void;
    onRemove(file: File, listIndex: number): void;
    removeFile(file: File, listIndex: number): void;
    moveFile(sourceIndex: number, targetIndex: number, listIndex: number): void;
}

interface FileListItemStates {
    checked: boolean;
}

const itemDragSource: dnd.DragSourceSpec<FileListItemProps> = {
    beginDrag(props: FileListItemProps): DragDropProps {
        return {
            file: props.file,
            index: props.index,
            listIndex: props.listIndex
        };
    },
    endDrag(props: FileListItemProps, monitor: dnd.DragSourceMonitor): void {
        const item: DragDropProps = monitor.getItem() as DragDropProps;
        const dropResult:  DropProps = monitor.getDropResult() as DropProps;

        if (dropResult != null && dropResult.listIndex !== item.listIndex) {
            props.removeFile(item.file, item.listIndex);
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
        const opacity: number = this.props.isDragging ? 0 :
                                this.props.listIndex === 0 ? this.props.filtered ? 0.5 : 1 : 1;
        const width: number = this.props.listIndex === 0 ? 140 : 600;
        const labelWidth: number = this.props.listIndex === 0 ? 120 : 560;

        return this.props.connectDragSource(
            this.props.connectDropTarget(
                <div className={styles.draggableFile} style={{opacity: opacity, minWidth: width, width: "90%"}}
                     data-index={this.props.index} data-name={this.props.file.name}>
                    <Grid container spacing={8}>
                        <Grid item xs={11}>
                            <FormControlLabel
                                label={<div className={styles.checkBoxLabel} style={{ minWidth: labelWidth }}>{this.props.file.name}</div>}
                                control={
                                    <Checkbox color="primary" onChange={this.handleCheckboxClick} checked={this.state.checked}
                                        disabled={this.props.listIndex === 0 ? this.props.filtered : false} />
                                } />
                        </Grid>
                        <Grid item xs={1} className={styles.fileRemoveButton}>
                            <RemoveCircle onClick={this.handleRemoveClick} className={styles.fileRemoveButton} />
                        </Grid>
                    </Grid>
                </div>
            )
        );
    }
    private handleRemoveClick(): void {
        this.props.onRemove(this.props.file, this.props.listIndex);
    }
    private handleCheckboxClick(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            checked: event.target.checked
        });
        this.props.onCheck(this.props.file, this.props.listIndex, this.props.index, event.target.checked);
    }
}

// tslint:disable-next-line
const DraggableFileListItem = dnd.DropTarget("FILE_LIST_ITEM", itemDropTarget, dropTargetCollector)(
    dnd.DragSource("FILE_LIST_ITEM", itemDragSource, dragSourceCollector)(FileListItem)
);

export {DraggableFileListItem, DragDropProps};
