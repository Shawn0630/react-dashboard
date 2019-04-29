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

interface VirtualizedTableStates {
    widths: {[dataKey: string]: number};
    dataKeys: string[];
}

class VirtualizedTable<T> extends React.PureComponent<VirtualizedTableProps<T>, VirtualizedTableStates> {
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

        const widths: {[dataKey: string]: number} = {};
        const dataKeys: string[] = [];

        this.props.columns.map((column: ColumnDefinition<T>) => this.dividend += column.width);
        this.props.columns.forEach((column: ColumnDefinition<T>) => {
            widths[column.dataKey] = column.width / this.dividend;
            dataKeys.push(column.dataKey);
        });

        this.state = {
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
                        return <Table ref={this.refTable} onRowClick={this.onRowClicked} onRowsRendered={this.rebuildTooltips}
                        width={width} headerHeight={headerHeight} rowHeight={rowHeight} scrollToAlignment="center"
                        height={height} rowCount={this.props.items.length}
                        rowGetter={this.rowGetter} rowClassName={this.getRowClassName}>
                            {
                                this.props.columns.map((c, index) => (
                                    <Column key={c.dataKey} dataKey={c.dataKey} disableSort={true}
                                        flexShrink={c.flexShrink != null ? c.flexShrink : 1}
                                        flexGrow={c.flexGrow != null ? c.flexGrow : 1} headerClassName={c.headerClassName}
                                        className={`${this.getAlignmentStyle(c.alignment)} ${styles.tableCell} ${c.cellClassName}`}
                                        width={this.state.widths[c.dataKey] * width}
                                        headerRenderer={index === this.props.columns.length - 1 ?
                                                        this.reorderHeader(c.headerRenderer, c.dataKey) :
                                                        this.reorderHeader(this.resizeHeader(c.headerRenderer, c.dataKey), c.dataKey)}
                                        cellRenderer={c.cellRenderer}/>
                            ))
                            }
                        </Table>;
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
                return <Draggable
                    axis="x"
                    defaultClassName={styles.DragHandle}
                    defaultClassNameDragging={styles.DragHandleActive}
                    onDrag={null}
                    position={{ x: 0, y: null }}
                >
                    <div>{node(props)}</div>
                </Draggable>;
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

    private reorder(dataKey: string): (event: mouseEvent, data: DraggableData) => void {
        return (event: MouseEvent, data: DraggableData): void => {
        }
    }

    private setWidth(width: number): void {
        this.width = width;
    }
}

export {VirtualizedTable, VirtualizedTableProps, ColumnDefinition, TypedTableCellProps,
    TableCellProps, TableHeaderProps, AlignmentType};
