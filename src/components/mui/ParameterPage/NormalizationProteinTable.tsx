import * as React from "react";
import * as styles from "./NormalizationProteinTable.scss";
import Button from "@material-ui/core/Button";
import CheckBoxIcon from "@material-ui/icons/CheckBox"; //tslint:disable-line:import-name
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"; //tslint:disable-line:import-name
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { PagedTable, PagedTableProps, PagedTableState } from "~components/shared/IPagedTable";
import { LfqSimpleProtein } from "~models/Parameters";

interface LfqNormalizationProteinTableProps {
    selectedPage?: number;
    selectedIndex?: number;
    selectedProteinIds: string[];
    allProteinList: LfqSimpleProtein[];
    proteinSelected(proteinIds: string[]): void;
    onProteinFilter(fn: (protein: LfqSimpleProtein) => boolean): void;
}

interface LfqNormalizationProteinTableState extends PagedTableState<LfqSimpleProtein> {
    spikedProteinHitIdList: string[];
    accessionFilter: string;
    searchPattern: string;
    showSelectedOnly: boolean;
}

class LfqNormalizationProteinTable extends PagedTable<LfqSimpleProtein,
    LfqNormalizationProteinTableProps, LfqNormalizationProteinTableState> {
    constructor(props: PagedTableProps<LfqSimpleProtein> & LfqNormalizationProteinTableProps) {
        super(props);

        this.state = {
            spikedProteinHitIdList: this.props.selectedProteinIds,
            currentPage: 0,
            sorters: {},
            sorterState: {},
            accessionFilter: "",
            searchPattern: "",
            showSelectedOnly: false
        };
        this.selectProtein = this.selectProtein.bind(this);
        this.selectProteinFuncMaker = this.selectProteinFuncMaker.bind(this);
        this.clearAllFiltered = this.clearAllFiltered.bind(this);
        this.changeSearchPattern = this.changeSearchPattern.bind(this);
        this.selectAllFiltered = this.selectAllFiltered.bind(this);
        this.filterSelected = this.filterSelected.bind(this);
    }

    protected renderTableFilter(): JSX.Element {
        return <div>
            <TextField placeholder={"Name to search for..."} className={styles.searchField}
                onChange={this.changeSearchPattern} value={this.state.searchPattern} />
            <Button className={styles.clearAllFilteredButton} onClick={this.clearAllFiltered} variant="flat" color="primary">
                Deselect All
            </Button>
            <Button className={styles.selectAllFilteredButton} onClick={this.selectAllFiltered} variant="flat" color="primary">
                Select All
            </Button>
            <Button className={styles.selectAllFilteredButton} onClick={this.filterSelected} variant="flat" color="primary">
                {this.state.showSelectedOnly ? "All" : "Selected"}
            </Button>
        </div>;
    }
    protected renderHeader(): JSX.Element {
        return <tr>
            <th className={styles.checkBoxHeaderCell}>{this.props.selectedProteinIds.length}</th>
            <th>Protein Accession</th>
        </tr>;
    }
    protected renderRow(item: LfqSimpleProtein, index: number): JSX.Element {
        return <tr key={index} onClick={this.selectProteinFuncMaker(item)}>
            <td>
                <IconButton className={styles.checkBoxCell} disableRipple disableTouchRipple>
                    {this.props.selectedProteinIds.indexOf(item.id) >= 0 ?
                        <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                </IconButton>
            </td>
            <td className={styles.accessionCell}>{item.accession}</td>
        </tr>;
    }
    private changeSearchPattern(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ searchPattern: event.currentTarget.value }, this.applyFilter);
    }
    private applyFilter(): void {
        const search: string = this.state.searchPattern.toUpperCase();

        let filter: (protein: LfqSimpleProtein) => boolean;
        if (this.state.showSelectedOnly) {
            filter = (protein: LfqSimpleProtein): boolean => {
                return protein.accession.toUpperCase().indexOf(search) >= 0
                    && this.state.spikedProteinHitIdList.indexOf(protein.id) >= 0;
            };
        } else {
            filter = (protein: LfqSimpleProtein): boolean => {
                return protein.accession.toUpperCase().indexOf(search) >= 0;
            };
        }
        this.setState({
            currentPage: 0
        });
        this.props.onProteinFilter(filter);
    }
    private selectProtein(id: string): void {
        let proteinHitIdList: string[] = this.state.spikedProteinHitIdList;
        const loc: number = this.state.spikedProteinHitIdList.indexOf(id);
        if (loc >= 0) {
            proteinHitIdList.splice(loc, 1);
        } else {
            proteinHitIdList = proteinHitIdList.concat(id);
        }

        this.setState({ spikedProteinHitIdList: proteinHitIdList });

        this.props.proteinSelected(proteinHitIdList);
    }
    private selectProteinFuncMaker(protein: LfqSimpleProtein): (event: {}) => void {
        return (event: {}): void => {
            this.selectProtein(protein.id);
        };
    }
    private selectAllFiltered(): void {
        const proteinFilterFunction: (protein: LfqSimpleProtein) => boolean = this.createFilterFunction();
        const proteinsToAdd: LfqSimpleProtein[] = this.props.allProteinList
            .filter(proteinFilterFunction)
            .filter((protein: LfqSimpleProtein): boolean => {
                return this.state.spikedProteinHitIdList.indexOf(protein.id) < 0;
            });

        let newIdList: string[] = this.state.spikedProteinHitIdList;

        for (const protein of proteinsToAdd) {
            newIdList = newIdList.concat(protein.id);
        }

        this.setState({
            spikedProteinHitIdList: newIdList
        });
        this.props.proteinSelected(newIdList);
    }
    private clearAllFiltered(): void {
        const proteinFilterFunction: (protein: LfqSimpleProtein) => boolean = this.createFilterFunction();
        const proteinsidsToRemove: string[] = this.props.allProteinList
            .filter(proteinFilterFunction)
            .map((v: LfqSimpleProtein, i: number) => v.id);
        const newProteinIdList: string[] = this.state.spikedProteinHitIdList
            .filter((protein: string): boolean => {
                return proteinsidsToRemove.indexOf(protein) < 0;
            });

        this.setState({
            spikedProteinHitIdList: newProteinIdList
        });
        this.props.proteinSelected(newProteinIdList);
    }
    private createFilterFunction(): (protein: LfqSimpleProtein) => boolean {
        const search: string = this.state.searchPattern.toUpperCase();

        return (protein: LfqSimpleProtein): boolean => {
            return protein.accession.toUpperCase().indexOf(search) >= 0;
        };
    }
    private filterSelected(): void {
        this.setState({ showSelectedOnly: !this.state.showSelectedOnly }, this.applyFilter);
    }
}

export { LfqNormalizationProteinTable };
