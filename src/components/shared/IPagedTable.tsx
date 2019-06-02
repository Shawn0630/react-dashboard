import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";//tslint:disable-line
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";//tslint:disable-line
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";//tslint:disable-line
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";//tslint:disable-line
import * as moment from "moment";
import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import { parseNumber } from "~/utilities/ui-helper";

import * as styles from "./IPagedTable.scss";

interface PagedTableProps<T> {
    className?: string;
    maxHeight?: number;
    pageSize: number;
    items: T[];
    onSort?(fn: (a: T, b: T) => number): void;
}

interface PagedTableState<T> {
    currentPage?: number;
    sorters?: { [key: string]: (a: T, b: T) => number };
    sorterState?: { [key: string]: boolean };
}

abstract class IPagedTable<T, P = {}, S extends PagedTableState<T> = null> extends
    React.PureComponent<PagedTableProps<T> & P, PagedTableState<T> & S> {
    private containerId: string;
    private lastPage: number;
    constructor(props: PagedTableProps<T> & P) {
        super(props);
        this.containerId = `tableContainer-${moment.now().toString()}`;
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.gotoPage = this.gotoPage.bind(this);
        this.sort = this.sort.bind(this);
    }
    public componentDidMount(): void {
        this.fixHeader();
        ReactTooltip.rebuild();
    }
    public componentDidUpdate(prevProps: PagedTableProps<T> & P): void {
        this.fixHeader();
        ReactTooltip.rebuild();
    }
    public render(): JSX.Element {
        if (this.props.items == null) {
            return null;
        }

        const pageSize: number = this.props.pageSize;
        this.lastPage = pageSize === -1 ? 0 : Math.floor((this.props.items.length - 1) / pageSize);
        this.lastPage = Math.max(0, this.lastPage);
        const start: number = pageSize === -1 ? 0 : pageSize * this.state.currentPage;
        const end: number = this.props.pageSize === -1 ? this.props.items.length : Math.min(start + pageSize, this.props.items.length);

        const rows: JSX.Element[] = [];
        for (let i: number = start; i < end; i += 1) {
            const generated: JSX.Element | JSX.Element[] = this.renderRow(this.props.items[i], i);
            if (Array.isArray(generated)) {
                for (const one of generated) {
                    rows.push(one);
                }
            } else {
                rows.push(generated);
            }
        }

        const heightStyle: {} = this.props.maxHeight != null ? { maxHeight: this.props.maxHeight } : null;

        return <div>
            {this.renderActionBar()}
            <div className={styles.tableContainer} id={this.containerId} style={heightStyle}>
                <Typography component="div" variant="body1">
                    <table className={`${styles.pagedTable} ${this.props.className}`}>
                        <thead>
                            {this.renderHeader()}
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </Typography>
            </div>
        </div>;
    }
    protected renderActionBar(): JSX.Element {
        const columnSelector: JSX.Element = this.renderColumnSelector();
        const tableFilter: JSX.Element = this.renderTableFilter();
        const exports: JSX.Element = this.renderExports();

        if (columnSelector === null && tableFilter === null && this.props.pageSize === -1) {
            return null;
        }
        // when upgrade to material-ui greater that 3.6, change button to fab
        return <div className={styles.actionBar}>
            {exports}
            {columnSelector}
            {tableFilter}
            {this.props.pageSize === -1 ? null : <div className={styles.pager}>
                <Button className={styles.nextPrevButton} disabled={this.state.currentPage === 0}
                    onClick={this.previousPage} color="primary" variant="fab">
                    <ArrowBackIcon />
                </Button>
                <Select value={this.state.currentPage} onChange={this.gotoPage} className={styles.selectDropDown}
                    style={{ zIndex: "inherit" }}>
                    {this.renderPages()}
                </Select>
                <Button className={styles.nextPrevButton} disabled={this.state.currentPage === this.lastPage}
                    onClick={this.nextPage} color="primary" variant="fab">
                    <ArrowForwardIcon />
                </Button>
            </div>}
        </div>;
    }
    protected renderExports(): JSX.Element {
        return null;
    }
    protected renderViewFilter(name: string, value: string | JSX.Element): JSX.Element {
        if (value === "") {
            return null;
        }

        return <span className={styles.viewFilterSpan}>
            {name}{value}
        </span>;
    }
    protected getSelectedPtms(modifications: { [key: string]: boolean }): string[] {
        const selectedPTMs: string[] = [];
        for (const ptm of Object.keys(modifications)) {
            if (modifications[ptm]) {
                selectedPTMs.push(ptm);
            }
        }

        return selectedPTMs;
    }
    protected abstract renderHeader(): JSX.Element;
    protected abstract renderRow(item: T, index: number): JSX.Element | JSX.Element[];
    protected sort(event: React.SyntheticEvent<HTMLElement>): void {
        return; // disable sorting for now
        /*
        const key: string = event.currentTarget.dataset.key;
        let ascending: boolean = this.state.sorterState[key];
        if (ascending == null) {
            ascending = true;
        } else {
            ascending = !ascending;
        }
        const sorter: (a: T, b: T) => number = this.state.sorters[key];
        const newSorterState: {[key: string]: boolean} = {};
        newSorterState[key] = ascending;
        this.setState(
            {
                sorterState: newSorterState
            },
            () => {
                const multiplier: number = ascending ? 1 : -1;
                function wrappedSorter(a: T, b: T): number {
                    return sorter(a, b) * multiplier;
                }
                this.props.onSort(wrappedSorter);
        });
        */
    }
    protected renderSortIcon(key: string): JSX.Element {
        if (this.state.sorterState[key] == null) {
            return null;
        } else {
            return this.state.sorterState[key] ?
                (<ArrowDropUpIcon className={styles.sortIcon} />) :
                (<ArrowDropDownIcon className={styles.sortIcon} />);
        }
    }
    protected toPage(currentPage: number, currentRow: number): void {
        const page: number = currentPage;
        this.setState(
            {
                currentPage: Math.min(Math.max(page, 0), this.lastPage)
            },
            this.setScroll(currentRow)
        );
    }
    protected renderColumnSelector(): JSX.Element {
        return null;
    }
    protected renderTableFilter(): JSX.Element {
        return null;
    }
    protected resetScroll(): void {
        try {
            document.getElementById(`#${this.containerId}`).scrollTop = 0;
        } catch (err) {
            // do nothing
        }
    }
    protected setScroll(currentRow: number): () => void {
        return (): void => {
            try {
                document.getElementById(`#${this.containerId}`).scrollTop = currentRow * 20;
            } catch (err) {
                // do nothing
            }
        };
    }
    private nextPage(): void {
        this.setState(
            {
                currentPage: Math.min(this.state.currentPage as number + 1, this.lastPage)
            },
            this.resetScroll
        );
    }
    private previousPage(): void {
        this.setState(
            {
                currentPage: Math.max(this.state.currentPage as number - 1, 0)
            },
            this.resetScroll
        );
    }
    private gotoPage(event: React.ChangeEvent<HTMLSelectElement>): void {
        const page: number = parseNumber(event.target.value);
        this.setState(
            {
                currentPage: Math.min(Math.max(page, 0), this.lastPage)
            },
            this.resetScroll
        );
    }
    private renderPages(): JSX.Element[] {
        const elements: JSX.Element[] = [];
        const total: number = this.props.items.length;
        const pageSize: number = this.props.pageSize;
        for (let i: number = 0; i <= this.lastPage; i += 1) {
            const start: number = i * pageSize + 1;
            const end: number = Math.min(this.props.items.length, start + pageSize - 1);
            const text: string = `${start} - ${end} of ${total}`;
            elements.push(<MenuItem key={i} value={i} style={{ zIndex: "inherit" }}>{text}</MenuItem>);
        }

        return elements;
    }
    private fixHeader(): void {
        function handleScroll(event: UIEvent): void {
            const offset: number = (event.currentTarget as Element).scrollTop === 0 ? 0 : (event.currentTarget as Element).scrollTop - 1;
            const header: HTMLCollectionOf<HTMLTableSectionElement> =
                document.getElementById(`#${this.containerId}`).getElementsByTagName("thead");
            if (header.length > 0) {
                const translate: string = `translate(0,${offset}px)`;
                header[0].style.transform = translate;
            }
        }

        try {
            document.getElementById(`#${this.containerId}`).removeEventListener("scroll", handleScroll);
            document.getElementById(`#${this.containerId}`).addEventListener("scroll", handleScroll);
        } catch (err) {
            // do nothing
        }
    }
}

export { IPagedTable as PagedTable, PagedTableProps, PagedTableState };
