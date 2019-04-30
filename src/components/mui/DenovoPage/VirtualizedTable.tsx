import * as React from "react";
import * as styles from "./VirtualizedTable.scss";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"; //tslint:disable-line:import-name
import ArrowBackIcon from "@material-ui/icons/ArrowBack"; //tslint:disable-line:import-name
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as ReactTooltip from "react-tooltip";
import {AutoSizer, Column, Index, RowMouseEventHandlerParams, Table, TableCellProps, TableHeaderProps} from "react-virtualized";
import { Loader } from "~components/shared//Loader";
import { parseNumber } from "~utilities/ui-helper";
import { default as Draggable, DraggableData, DraggableProps } from "react-draggable";
import { DragDropContext, Draggable as DraggableHeader, DraggableLocation, Droppable, DropResult } from "react-beautiful-dnd";

type AlignmentType = "left" | "right" | "center";

interface TypedTableCellProps<T> extends TableCellProps {
    rowData: T;
}

interface ColumnDefinition<T> {
    dataKey: string;
    width: number;
    alignment?: AlignmentType;
    flexGrow?: number;
    flexShrink?: number;
    cellClassName?: string;
    headerClassName?: string;
    headerRenderer(props: TableHeaderProps): React.ReactNode;
    cellRenderer(props: TypedTableCellProps<T>): React.ReactNode;
}

interface VirtualizedTableProps<T> {
    id: string;
    items: T[];
    selectedItem?: T;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    currentPage: number;
    height: number;
    rowHeight?: number;
    columns: ColumnDefinition<T>[];
    exportBanner?: JSX.Element;
    columnSelector?: JSX.Element;
    tableFilter?: JSX.Element;
    showPagination?: boolean;
    isLoading?: boolean;
    gotoPage(page: number, clearPreviousResult: boolean): void;
    onSelected(item: T): void;
    getRowClassName?(item: T): string;
}

interface VirtualizedTableStates<T> {
    widths: {[dataKey: string]: number};
    columns: { [dataKey: string]: ColumnDefinition<T>};
    dataKeys: string[];
}

interface DraggableHeaderProps {
    index: number;
    dataKey: string;
    children: React.ReactNode;
}
const grid: number = 8;

class VirtualizedTable<T> extends React.PureComponent<VirtualizedTableProps<T>, VirtualizedTableStates<T>> {
    private table: Table;
    private dividend: number = 0;
    private width: number = 0;
    constructor(props: VirtualizedTableProps<T>) {
        super(props);
        this.rowGetter = this.rowGetter.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.gotoPage = this.gotoPage.bind(this);
        this.onRowClicked = this.onRowClicked.bind(this);
        this.getRowClassName = this.getRowClassName.bind(this);
        this.rebuildTooltips = this.rebuildTooltips.bind(this);
        this.refTable = this.refTable.bind(this);
        this.calculatePages = this.calculatePages.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.resizeRow = this.resizeRow.bind(this);
        this.resize = this.resize.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.ReorderedHeader = this.ReorderedHeader.bind(this);
        this.getListStyle = this.getListStyle.bind(this);

        const widths: {[dataKey: string]: number} = {};
        const columns: { [dataKey: string]: ColumnDefinition<T>} = {};
        const dataKeys: string[] = [];

        this.props.columns.map((column: ColumnDefinition<T>) => this.dividend += column.width);
        this.props.columns.forEach((column: ColumnDefinition<T>) => {
            widths[column.dataKey] = column.width / this.dividend;
            columns[column.dataKey] = column;
            dataKeys.push(column.dataKey);
        });

        this.state = {
            columns: columns,
            widths: widths,
            dataKeys: dataKeys
        };
    }
    public render(): JSX.Element {
        const showPagination: boolean = this.props.showPagination != null ? this.props.showPagination : true;
        // pre computate pages for pagination display
        const pages: JSX.Element[] = [];
        const pageDisplay: number[] = this.calculatePages();
        const len: number = pageDisplay.length;
        for (let i: number = 1; i <= len; i += 1) {
            const start: number = (pageDisplay[i - 1] - 1) * this.props.pageSize + 1;
            const end: number = Math.min(this.props.totalItems, start + this.props.pageSize - 1);
            const text: string = `${start} - ${end} of ${this.props.totalItems}`;
            pages.push(<MenuItem key={pageDisplay[i - 1]} value={pageDisplay[i - 1]}>{text}</MenuItem>);
        }
        const rowHeight: number = this.props.rowHeight != null ? this.props.rowHeight : 20;
        const headerHeight: number = rowHeight;
        const containerStyle: React.CSSProperties = {
            height: Math.min(this.props.height, this.props.items.length * rowHeight + rowHeight + 1) + rowHeight
        };

        const showLoader: boolean = this.props.isLoading != null ? this.props.isLoading : false;

        return <div>
            <div className={styles.actionBar}>
                {this.props.exportBanner}
                {this.props.columnSelector}
                {this.props.tableFilter}
                {showPagination ? <div className={styles.pager}>
                    <Button className={styles.nextPrevButton} disabled={this.props.currentPage === 1}
                        onClick={this.previousPage} color="primary" variant="fab">
                        <ArrowBackIcon/>
                    </Button>
                    <Select value={this.props.currentPage} onChange={this.selectPage} className={styles.selectDropDown}
                        disabled={this.props.totalPages === 1}>
                        {pages}
                    </Select>
                    <Button className={styles.nextPrevButton} disabled={this.props.currentPage === this.props.totalPages}
                        onClick={this.nextPage} color="primary" variant="fab">
                        <ArrowForwardIcon/>
                    </Button>
                </div> : null}
            </div>
            <div style={containerStyle}>
                {showLoader ? <Loader /> : <AutoSizer>
                    {({height, width}) => {
                        this.setWidth(width);
                        return <DragDropContext onDragEnd={this.onDragEnd}>
                        <Table ref={this.refTable} onRowClick={this.onRowClicked} onRowsRendered={this.rebuildTooltips}
                        width={width} headerHeight={headerHeight} rowHeight={rowHeight} scrollToAlignment="center"
                        height={height} rowCount={this.props.items.length}
                        rowGetter={this.rowGetter} rowClassName={this.getRowClassName}>
                                    {
                                        this.state.dataKeys.map((key, index) => (
                                            <Column key={this.state.columns[key].dataKey} dataKey={key} disableSort={true}
                                                flexShrink={this.state.columns[key].flexShrink != null ?
                                                                this.state.columns[key].flexShrink : 1}
                                                flexGrow={this.state.columns[key].flexGrow != null ? this.state.columns[key].flexGrow : 1}
                                                headerClassName={this.state.columns[key].headerClassName}
                                                className={`${this.getAlignmentStyle(this.state.columns[key].alignment)} ${styles.tableCell} ${this.state.columns[key].cellClassName}`} //tslint:disable-line
                                                width={this.state.widths[this.state.columns[key].dataKey] * width}
                                                headerRenderer={index === this.props.columns.length - 1 ?
                                                    this.reorderHeader(this.state.columns[key].headerRenderer, this.state.columns[key].dataKey) ://tslint:disable-line
                                                    this.resizeHeader(this.reorderHeader(this.state.columns[key].headerRenderer, this.state.columns[key].dataKey), this.state.columns[key].dataKey)} //tslint:disable-line
                                                cellRenderer={this.state.columns[key].cellRenderer} />
                                        ))
                                    }
                        </Table>
                        </DragDropContext>;
                    }}
                </AutoSizer>}
            </div>
        </div>;
    }
    public scrollToRow(index: number): void {
        this.table.scrollToRow(index);
    }
    private refTable(table: Table): void {
        this.table = table;
    }
    private getListStyle = (isDraggingOver: boolean) => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        width: "100%",
        padding: 0,
        display: "inline-block"
    })
    private resizeHeader(node: (props: TableHeaderProps) => React.ReactNode, dataKey: string):
        (props: TableHeaderProps) => React.ReactNode {
        return (props: TableHeaderProps): React.ReactNode => {
            return <div key={dataKey} className={styles.Header} id={dataKey}>
                <div className={styles.HeaderTruncatedText}>{node(props)}</div>
                <Draggable
                    axis="x"
                    defaultClassName={styles.DragHandle}
                    defaultClassNameDragging={styles.DragHandleActive}
                    onDrag={this.resize(dataKey)}
                    position={{ x: 0, y: null }}
                >
                <span className={styles.DragHandleIcon}>⋮</span>
                </Draggable>
            </div>;
        };
    }
    private reorderHeader(node: (props: TableHeaderProps) => React.ReactNode, dataKey: string):
        (props: TableHeaderProps) => React.ReactNode {
            return (props: TableHeaderProps): React.ReactNode => {
                return <Droppable droppableId={dataKey}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={this.getListStyle(snapshot.isDraggingOver)}>
                            <this.ReorderedHeader index={1} dataKey={dataKey}>
                            {node(props)}
                            </this.ReorderedHeader>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>;
        };
    }
    private getAlignmentStyle(type: AlignmentType): string {
        switch (type) {
            case "left":
                return styles.alignLeft;
            case "right":
                return styles.alignRight;
            case "center":
                return styles.alignCenter;
            default:
                return "";
        }
    }
    private rebuildTooltips(): void {
        ReactTooltip.rebuild();
    }
    private getRowClassName(info: Index): string {
        const headerStyle: string = info.index < 0 ? styles.headerRow : "";
        const rowStyle: string = info.index >= 0 ? styles.bodyRow : "";
        return `${headerStyle} ${rowStyle} ${info.index < 0 ? "" : this.props.getRowClassName(this.props.items[info.index])}`;
    }
    private onRowClicked(info: RowMouseEventHandlerParams): void {
        if (info.index >= 0) {
            this.props.onSelected(info.rowData as any); //tslint:disable-line
        }
    }
    private rowGetter(info: Index): T {
        return this.props.items[info.index];
    }
    private nextPage(): void {
        if (this.props.currentPage < this.props.totalPages) {
            this.gotoPage(this.props.currentPage + 1);
        }
    }
    private previousPage(): void {
        if (this.props.currentPage > 1) {
            this.gotoPage(this.props.currentPage - 1);
        }
    }
    private selectPage(event: React.ChangeEvent<HTMLSelectElement>): void {
        const value: number = parseNumber(event.target.value);
        this.gotoPage(value);
    }
    private gotoPage(value: number): void {
        if (value !== this.props.currentPage) {
            this.props.gotoPage(value, true);
            this.table.scrollToRow(0);
        }
    }
    private calculatePages(): number[] {
        const currentPage: number = this.props.currentPage;
        const total: number = this.props.totalPages;
        const leftPages: number[] = [];
        const rightPages: number[] = [];
        let count: number = 1;
        let distance: number = 1;
        // calculate left side
        for (let pagel: number = currentPage - 1; pagel > 0;) {
            leftPages.push(pagel);
            if (count === 10) {
                distance = distance * 10;
                count = 1;
            }
            pagel = pagel - distance;
            count = count + 1;
        }
        if (currentPage !== 1 && leftPages.indexOf(1) < 0) {
            leftPages.push(1);
        }
        // initialize some variables
        count = 1;
        distance = 1;
        //calculate right side
        for (let pager: number = currentPage + 1; pager < total;) {
            rightPages.push(pager);
            if (count === 10) {
                distance = distance * 10;
                count = 1;
            }
            pager = pager + distance;
            count = count + 1;
        }
        if (currentPage !== total && rightPages.indexOf(total) < 0) {
            rightPages.push(total);
        }
        return [...(leftPages.sort((a: number, b: number) => {
            return (a - b);
        })), currentPage, ...rightPages];
    }

    private resizeRow(dataKey: string, deltaX: number): void {
        this.setState(prevState => {
            const prevWidths: {[dataKey: string]: number} = prevState.widths;
            const percentDelta: number = deltaX / this.width;

            const nextDataKey: string = prevState.dataKeys[prevState.dataKeys.indexOf(dataKey) + 1];

            return {
                widths: {
                    ...prevWidths,
                    [dataKey]: prevWidths[dataKey] + percentDelta,
                    [nextDataKey]: prevWidths[nextDataKey] - percentDelta
                }
            };
        });
    }

    private resize(dataKey: string): (event: MouseEvent, data: DraggableData) => void {
        return (event: MouseEvent, data: DraggableData): void => {
            this.resizeRow(dataKey, data.deltaX);
        };
    }

    private setWidth(width: number): void {
        this.width = width;
    }

    private onDragEnd(result: DropResult): void {
        const { source, destination } = result;

        if (!result.destination) {
            return;
        }

        const dataKeys: string[] = this.reorder(
            this.state.dataKeys,
            source.droppableId,
            destination.droppableId
        );

        this.setState({
            dataKeys: dataKeys
        });
    }

    private reorder = (list: string[], start: string, end: string): string[] => {
        const result: string[] = Array.from(list);
        const startIndex: number = list.indexOf(start);
        const endIndex: number = list.indexOf(end);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    private ReorderedHeader(props: DraggableHeaderProps): JSX.Element { //tslint:disable-line
        return <DraggableHeader index={props.index} key={props.dataKey} draggableId={props.dataKey}>
            {// tslint:disable-next-line:no-shadowed-variable
                (provided, snapshot) => (
                    <div>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={getItemStyle(
                                provided.draggableProps.style,
                                snapshot.isDragging
                            )}
                            {...provided.dragHandleProps}
                        >
                            {props.children}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
        </DraggableHeader>;

        function getItemStyle(draggableStyle: any, isDragging: boolean): any { //tslint:disable-line:no-any
            return {
                userSelect: "none",
                background: isDragging ? "lightgreen" : "grey",
                padding: 0,
                margin: `0 0 ${grid}px 0`,
                ...draggableStyle
            };
        }
    }
}

export {VirtualizedTable, VirtualizedTableProps, ColumnDefinition, TypedTableCellProps,
    TableCellProps, TableHeaderProps, AlignmentType};
