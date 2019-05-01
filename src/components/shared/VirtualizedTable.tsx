import MenuItem from "@material-ui/core/MenuItem";
import { MenuSelectDropDown } from "~components/shared/MenuSelectDropDown";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import {
    AutoSizer,
    Column,
    Index,
    RowMouseEventHandlerParams,
    Table,
    TableCellProps,
    TableHeaderProps,
    TableHeaderRowProps
} from "react-virtualized";
import { Loader } from "~components/shared/Loader";
import * as styles from "./VirtualizedTable.scss";
import { SortableContainer, SortEnd, SortEvent, SortableElement, SortableElementProps, SortableContainerProps } from "react-sortable-hoc";

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
    gotoPage(page: number): void;
    onSelected(item: T): void;
    getRowClassName?(item: T): string;
}

interface SortableHeaderProps extends SortableElementProps {
    index: number;
    children: React.ReactNode;
}

class VirtualizedTable<T> extends React.PureComponent<VirtualizedTableProps<T>> {
    private table: Table;
    private SortableHeader: React.ComponentClass<SortableHeaderProps> = SortableElement((props: SortableHeaderProps) => React.cloneElement(props.children, props)); //tslint:disable-line
    private SortableHeaderRowRenderer: React.ComponentClass<TableHeaderRowProps & SortableContainerProps> = SortableContainer(
        (props: TableHeaderRowProps) => (
            <div className={props.className} role="row" style={props.style}>
                {React.Children.map(props.columns, (column, index) => (
                    <this.SortableHeader index={index}>{column}</this.SortableHeader>
                ))}
            </div>
        ));
    constructor(props: VirtualizedTableProps<T>) {
        super(props);
        this.rowGetter = this.rowGetter.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.gotoPage = this.gotoPage.bind(this);
        this.toPage = this.toPage.bind(this);
        this.onRowClicked = this.onRowClicked.bind(this);
        this.getRowClassName = this.getRowClassName.bind(this);
        this.rebuildTooltips = this.rebuildTooltips.bind(this);
        this.refTable = this.refTable.bind(this);
        this.headerRowRender = this.headerRowRender.bind(this);
    }
    public render(): JSX.Element {
        const showPagination: boolean = this.props.showPagination != null ? this.props.showPagination : true;
        // pre computate pages for pagination display
        const pages: JSX.Element[] = [];
        for (let i: number = 1; i <= this.props.totalPages; i += 1) {
            const start: number = (i - 1) * this.props.pageSize + 1;
            const end: number = Math.min(this.props.totalItems, start + this.props.pageSize - 1);
            const text: string = `${start} - ${end} of ${this.props.totalItems}`;
            pages.push(<MenuItem key={i} value={i}>{text}</MenuItem>);
        }
        const rowHeight: number = this.props.rowHeight != null ? this.props.rowHeight : 20;
        const containerStyle: React.CSSProperties = {
            height: Math.min(this.props.height, this.props.items.length * rowHeight + rowHeight + 1)
        };

        const showLoader: boolean = this.props.isLoading != null ? this.props.isLoading : false;

        return <div>
            <div className={styles.actionBar}>
                {this.props.exportBanner}
                {this.props.columnSelector}
                {this.props.tableFilter}
                {showPagination ? <div className={styles.pager}>
                    <Button mini={true} className={styles.nextPrevButton} disabled={this.props.currentPage === 1}
                        onClick={this.previousPage}>
                        <ArrowBack/>
                    </Button>
                    <MenuSelectDropDown id={"virtualized-table-menu-dropdown"}
                                        value={this.props.currentPage} onChange={this.toPage}
                                        disabled={this.props.totalPages === 1}>
                        {pages}
                    </MenuSelectDropDown>
                    <Button mini={true} className={styles.nextPrevButton}
                        disabled={this.props.currentPage === this.props.totalPages} onClick={this.nextPage}>
                        <ArrowForward/>
                    </Button>
                </div> : null}
            </div>
            <div className={styles.tableContainer} style={containerStyle}>
                {showLoader ? <Loader/> : <AutoSizer>
                    {({height, width}) => (
                        <Table ref={this.refTable} onRowClick={this.onRowClicked} onRowsRendered={this.rebuildTooltips}
                        width={width} headerHeight={rowHeight} rowHeight={rowHeight} scrollToAlignment="center"
                        height={height} rowCount={this.props.items.length}
                        headerRowRenderer={this.headerRowRender}
                        rowGetter={this.rowGetter} rowClassName={this.getRowClassName}>
                            {this.props.columns.map(c => (
                                <Column key={c.dataKey} dataKey={c.dataKey} disableSort={true}
                                    flexShrink={c.flexShrink != null ? c.flexShrink : 1}
                                    flexGrow={c.flexGrow != null ? c.flexGrow : 1} headerClassName={c.headerClassName}
                                    className={`${this.getAlignmentStyle(c.alignment)} ${styles.tableCell} ${c.cellClassName}`}
                                    width={c.width} headerRenderer={c.headerRenderer} cellRenderer={c.cellRenderer}/>
                            ))}
                        </Table>
                    )}
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
            this.props.onSelected(info.rowData as any); //tslint:disable-line:no-any
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
    private gotoPage(value: number): void {
        if (value !== this.props.currentPage) {
            this.props.gotoPage(value);
            this.table.scrollToRow(0);
        }
    }
    private toPage(event: React.ChangeEvent<HTMLInputElement>): void {
        this.gotoPage(parseInt(event.currentTarget.value, 10));
    }
    private headerRowRender(props: TableHeaderRowProps): React.ReactNode {
        return  <this.SortableHeaderRowRenderer {...props} axis="x" lockAxis="x" onSortEnd={this.onSortEnd} />;
    }

    private onSortEnd(sort: SortEnd, event: SortEvent): void {

    }
}

export {VirtualizedTable, VirtualizedTableProps, ColumnDefinition, TypedTableCellProps,
    TableCellProps, TableHeaderProps, AlignmentType};
