import * as React from "react";
import * as styles from "../../../../../styles/result-coverage.scss";
import * as ptmStyles from "~styles/ptms.scss";
import Divider from "material-ui/Divider";
import { ModificationHelper } from "../../../../../utilities/modification-helper";
import Checkbox from "material-ui/Checkbox";
import { com } from "~models/example";
import IProteinPeptide = com.bsi.peaks.model.dto.peptide.IProteinPeptide;
import ISupportPeptide = com.bsi.peaks.model.dto.peptide.ISupportPeptide;
import IAbbreviatedModification = com.bsi.peaks.model.dto.peptide.IAbbreviatedModification;
import * as ReactTooltip from "react-tooltip";

interface ProteinsCoverageProps {
    proteinPeptide: IProteinPeptide;
    aaPerLine: number;
    aaPerCol?: number;
}

interface ProteinsCoverageState {
    colPerRow: number;
    aaPerLine: number;
    aaPerCol: number;
    selectedModifications: { [name: string]: boolean };
    modisMap: { [index: number]: IAbbreviatedModification[] };
}

interface SeqRow {
    charIdx: number;
    seq: JSX.Element[];
}

interface StartEnds {
    start: number; //inclusive
    end: number; //exclusive
    coloured?: boolean;
    col?: number;
}

class ProteinsCoveragePage extends React.PureComponent<ProteinsCoverageProps, ProteinsCoverageState> {
    constructor(props: ProteinsCoverageProps) {
        super(props);
        const defaultAaPerCol: number = 10;
        this.state = {
            colPerRow: Math.ceil(this.props.aaPerLine / (this.props.aaPerCol === undefined ? defaultAaPerCol : this.props.aaPerCol)),
            aaPerLine: this.props.aaPerLine,
            aaPerCol: this.props.aaPerCol === undefined ? defaultAaPerCol : this.props.aaPerCol,
            selectedModifications: this.createPreSelectedModificationData([...this.props.proteinPeptide.peptides]),
            modisMap: this.createModificationData([...this.props.proteinPeptide.peptides])
        };
        this.updatePTMs = this.updatePTMs.bind(this);
        this.handlePTMFilter = this.handlePTMFilter.bind(this);
    }
    public componentDidMount(): void {
        ReactTooltip.rebuild();
    }
    public componentDidUpdate(): void {
        ReactTooltip.rebuild();
    }
    public render(): JSX.Element {
        const accession: string = this.isProteinValid(this.props.proteinPeptide)
            ? this.props.proteinPeptide.protein.accession : "Invalid protein";
        const description: string = this.isProteinValid(this.props.proteinPeptide)
            ? this.props.proteinPeptide.protein.description : " No description available";
        const modifications: IAbbreviatedModification[] = [];

        this.props.proteinPeptide.peptides.map((peptide: ISupportPeptide) => {
            const modisPerPeptide: IAbbreviatedModification[] = peptide.peptide.modifications;

            modisPerPeptide.map((modi: IAbbreviatedModification) => {
                if (!this.checkIsExist(modifications, modi)) {
                    modifications.push(modi);
                }
            });
        });

        return <div className={styles.coverageContainer}>
            <h4>{accession} {description}
            </h4>
            <Divider />
            {this.renderSequence(this.props.proteinPeptide.proteinSequence, [...this.props.proteinPeptide.peptides], this.state.modisMap,
                                 this.state.selectedModifications, this.props.aaPerLine)}
            <h4 style={{ paddingBottom: "5px", display: modifications.length === 0 ? "none" : "block" }}>Modification Filter</h4>
            {
                modifications.map((modi: IAbbreviatedModification, index: number) => {
                    const colorStyle: string = ModificationHelper.getColorStyleFromPTMInTable(modi.abbreviation);
                    const spanStyle: string = ModificationHelper.isMutation(modi.type)
                        ? colorStyle.concat(" ").concat(ptmStyles.mutation) : colorStyle;

                    const ptm: JSX.Element = <div>
                        <span title={modi.name} className={spanStyle}>
                            {modi.abbreviation.charAt(0)}
                        </span>
                        <span className={styles.ptmFilter}>
                            {`${modi.name}(${modi.monoMass > 0 ? "+" : ""}${modi.monoMass.toFixed(2)})`}
                        </span>
                    </div>;

                    return <Checkbox iconStyle={{ marginRight: "5px" }} label={ptm} key={`checkbox.${index}`} style={{ width: "auto" }}
                        labelStyle={{ lineHeight: "20px", marginRight: "5px", width: "auto" }} value={modi.name}
                        onCheck={this.handlePTMFilter} checked={this.state.selectedModifications[modi.name]} />;
                })
            }
        </div>;
    }
    public componentWillReceiveProps(nextProp: ProteinsCoverageProps): void {
        this.setState({
            selectedModifications: this.createPreSelectedModificationData([...nextProp.proteinPeptide.peptides]),
            modisMap: this.createModificationData([...nextProp.proteinPeptide.peptides])
        });
    }
    private handlePTMFilter(event: React.MouseEvent<HTMLInputElement>): void {
        this.state.selectedModifications[event.currentTarget.value] = !this.state.selectedModifications[event.currentTarget.value];
        this.forceUpdate();
    }
    private isProteinValid(protein: IProteinPeptide): boolean {
        return protein !== undefined && protein !== null;
    }
    private checkIsExist(modis: IAbbreviatedModification[], modification: IAbbreviatedModification): boolean {
        for (const modi of modis) {
            if (this.isSameModification(modi, modification)) {
                return true;
            }
        }

        return false;
    }
    private isSameModification(a: IAbbreviatedModification, b: IAbbreviatedModification): boolean {
        if (a.abbreviation === b.abbreviation && a.name === b.name && a.monoMass === b.monoMass) {
            return true;
        }

        return false;
    }
    private updatePTMs(name: string): void {
        this.state.selectedModifications[name] = !this.state.selectedModifications[name];
        this.forceUpdate();
    }
    private renderSequence(sequence: string, supportPeptides: ISupportPeptide[], modisMap: { [index: number]: IAbbreviatedModification[] },
                           selectedModifications: { [name: string]: boolean }, aaPerLine: number): JSX.Element {
        //sort by start
        supportPeptides.sort((a: ISupportPeptide, b: ISupportPeptide) => {
            return a.start - b.start;
        });
        //split seq into columns
        const cols: StartEnds[] = this.splitSeqIntoRowAndCols(sequence);
        // create modification map
        //split cols into coloured StartEnds
        const colouredCols: StartEnds[] = this.colourCols(cols, supportPeptides);
        //combine cols into row columns
        const numRows: number = Math.ceil(sequence.length / aaPerLine);
        const rowCols: StartEnds[][] = this.combineColsIntoRowCols(colouredCols, numRows);

        //create sequence table data
        const tableData: SeqRow[] = this.createTableData(rowCols, sequence);

        return <table className={styles.coverageTable}>
            <tbody>
                {
                    tableData.map((row: SeqRow, index: number) => {
                        const modiRow: JSX.Element[] = this.createModificationPerColRow(index, rowCols[index], this.state.modisMap);

                        return [
                            <tr key={`PTM-ROW-${row.charIdx}`} className={styles.modiRow}>
                                {modiRow}
                            </tr>,
                            <tr key={`Seq-${row.charIdx}`} className={styles.row}>
                                <td key={`Seq-${row.charIdx}-index`}
                                    className={styles.aaIndex}>
                                    {row.charIdx}
                                </td>
                                {row.seq}
                            </tr>
                        ];
                    })
                }
            </tbody>
        </table>;
    }

    private combineColsIntoRowCols(cols: StartEnds[], numRows: number): StartEnds[][] {
        const rowCols: StartEnds[][] = [];
        let colPos: number = 0;
        for (let i: number = 0; i < numRows && colPos < cols.length; i += 1) {
            const row: StartEnds[] = [];
            const start: number = cols[colPos].start;
            let end: number = cols[colPos].end;
            while (end - start < this.state.aaPerLine && colPos < cols.length) {
                row.push(cols[colPos]);
                end = cols[colPos].end;
                colPos += 1;
            }
            rowCols.push(row);
        }

        return rowCols;
    }
    private makeColouredStartEnd(s: number, e: number, coloured: boolean, col: number): StartEnds {
        return {
            start: s,
            end: e,
            coloured: coloured,
            col: col % this.state.colPerRow
        };
    }
    private calcIntersection(xStart: number, xEnd: number, yStart: number, yEnd: number): number {
        return Math.max(0, Math.min(yEnd, xEnd) - Math.max(xStart, yStart));
    }
    private colourCols(cols: StartEnds[], peps: ISupportPeptide[]): StartEnds[] { //optimization was O(n^2) before
        const ret: StartEnds[] = [];
        const activePeps: ISupportPeptide[] = peps.slice();

        for (let i: number = 0; i < cols.length; i += 1) {
            const se: StartEnds[] = [];
            se.push(this.makeColouredStartEnd(cols[i].start, cols[i].end, false, i));
            let seIdx: number = 0;
            for (let j: number = 0; j < activePeps.length && activePeps[j].start <= cols[i].end; j += 1) {
                const pep: ISupportPeptide = activePeps[j];
                if (pep.start >= cols[i].end || pep.end + 1 <= cols[i].start) {//pep out of col range
                    continue;
                }

                const e: number = Math.min(cols[i].end, pep.end + 1); //+1 b/c end is exclusive
                const s: number = Math.max(cols[i].start, pep.start);
                const intersection: number = this.calcIntersection(se[seIdx].start, se[seIdx].end, s, e);
                let increment: number = 0;
                if (!se[seIdx].coloured && intersection > 0) {
                    se[seIdx].end = s; //shorten prev non-peptide area range
                }
                if (se[seIdx].coloured && intersection === 0 && (s - se[seIdx].end) > 1) {//range without peptide
                    se.push(this.makeColouredStartEnd(se[seIdx].end, s, false, i));
                    increment += 1;
                }
                if (!se[seIdx].coloured || intersection === 0) {//new peptide range
                    se.push(this.makeColouredStartEnd(s, e, true, i));
                    increment += 1;
                }
                if (se[seIdx].coloured && intersection > 0) {//adjucent peptides
                    se[seIdx].end = Math.max(se[seIdx].end, e);
                    se[seIdx].start = Math.min(se[seIdx].start, s);
                }
                seIdx += increment;
            }
            //remove peptides outside of column ranges so we dont loop over them again
            for (let j: number = 0; j < activePeps.length && activePeps[j].start <= cols[i].end; j += 1) {
                if (activePeps[j].end < cols[i].end) {
                    activePeps.splice(j, 1);
                }
            }
            seIdx = se.length - 1;
            if (se[seIdx].end !== cols[i].end) {
                se.push(this.makeColouredStartEnd(se[seIdx].end, cols[i].end, false, i));
            }
            for (const c of se) {
                if (c.start !== c.end) {
                    ret.push(c);
                }
            }
        }

        return ret;
    }
    private splitSeqIntoRowAndCols(sequence: string): StartEnds[] {
        const cols: StartEnds[] = [];
        const numCols: number = Math.ceil(sequence.length / this.state.aaPerCol);
        for (let i: number = 0; i < numCols; i += 1) {
            const s: number = i * this.state.aaPerCol;
            const e: number = Math.min(sequence.length, s + this.state.aaPerCol);
            cols.push({
                start: s,
                end: e
            });
        }

        return cols;
    }
    private createTableData(rowCol: StartEnds[][], sequence: string): SeqRow[] {
        const data: SeqRow[] = [];
        for (const row of rowCol) {
            const rowCols: JSX.Element[] = Array(this.state.colPerRow);
            for (let i: number = 0; i < this.state.colPerRow; i += 1) {
                const stringsInCol: StartEnds[] = row.filter((c: StartEnds) => {
                    return i === c.col;
                });
                rowCols.push(
                    <td key={i} className={styles.tablecell}>
                        {stringsInCol.map((c: StartEnds, index: number) => {
                            const seq: JSX.Element[] = [];
                            seq.push(<span key={index} className={styles.aa}>
                                {sequence.substring(c.start, c.end)}
                            </span>);

                            return <div key={index} className={c.coloured ? styles.colouredSeq : styles.seq}>
                                {seq}
                            </div>;
                        })}
                    </td>
                );
            }
            data.push({
                charIdx: row[0].start + 1,
                seq: rowCols
            });
        }

        return data;
    }

    private createModificationData(supportPeptides: ISupportPeptide[]): { [position: number]: IAbbreviatedModification[] } {
        const modisMap: { [position: number]: IAbbreviatedModification[] } = {};
        for (const peptide of supportPeptides) {
            peptide.peptide.modifications.map((modi: IAbbreviatedModification, index: number) => {
                if (modisMap[peptide.start + peptide.peptide.positionOfModifications[index]] === undefined) {
                    const modis: IAbbreviatedModification[] = [];
                    modisMap[peptide.start + peptide.peptide.positionOfModifications[index]] = modis;
                }
                if (!this.checkIsExist(modisMap[peptide.start + peptide.peptide.positionOfModifications[index]], modi)) {
                    modisMap[peptide.start + peptide.peptide.positionOfModifications[index]].push(modi);
                }
            });
        }

        return modisMap;
    }

    private createPreSelectedModificationData(supportPeptides: ISupportPeptide[]): { [name: string]: boolean } {
        const selectedModifications: { [name: string]: boolean } = {};
        for (const peptide of supportPeptides) {
            peptide.peptide.modifications.map((modi: IAbbreviatedModification, index: number) => {
                selectedModifications[modi.name] = true;
            });
        }

        return selectedModifications;
    }

    private createModificationPerColRow(rowIndex: number, seqRow: StartEnds[],
                                        modisMap: { [position: number]: IAbbreviatedModification[] }): JSX.Element[] {
        let showModificationsOfRow: boolean = false;
        const start: number = rowIndex * this.state.aaPerLine;
        for (let i: number = 0; i < this.state.aaPerLine; i += 1) {
            if (modisMap[i + start] !== undefined) {
                for (const modi of modisMap[i + start]) {
                    if (this.state.selectedModifications[modi.name] === true) {
                        showModificationsOfRow = true;
                        break;
                    }
                    if (showModificationsOfRow) {
                        break;
                    }
                }
            }
        }
        const modiRow: JSX.Element[] = [];
        if (showModificationsOfRow) {
            const head: JSX.Element = <td key={`PTM-ROW-${rowIndex}-COL--1`}></td>;
            modiRow.push(head);
            for (let j: number = 0; j < this.state.colPerRow; j += 1) {
                const modisInCol: StartEnds[] = seqRow.filter((c: StartEnds) => {
                    return j === c.col;
                });
                modiRow.push(<td key={`PTM-ROW-${rowIndex}-COL-${j}`} className={styles.tablecell}>
                    {
                        modisInCol.map((c: StartEnds, index: number) => {
                            const modiCol: JSX.Element[] = [];
                            if (c.coloured) {
                                let lastModiPos: number = c.start;
                                for (let k: number = c.start; k < c.end; k += 1) {
                                    let showModificationsOfPos: boolean = false;
                                    if (modisMap[k] !== undefined) {
                                        for (const modi of modisMap[k]) {
                                            if (this.state.selectedModifications[modi.name] === true) {
                                                showModificationsOfPos = true;
                                                break;
                                            }
                                        }
                                        const ptms: JSX.Element[] = [];
                                        if (showModificationsOfPos) {
                                            ptms.push(<span key={`PTM-ROW-${rowIndex}-COL-${j}-position`}
                                                className={styles.position}>{k + 1}</span>);
                                            modisMap[k].map((modi: IAbbreviatedModification, modiIndex: number) => {
                                                if (this.state.selectedModifications[modi.name] === true) {
                                                    const modiStyle: string =
                                                        ModificationHelper.getColorStyleFromPTMInCoverage(modi.abbreviation);
                                                    const spanStyle: string = ModificationHelper.isMutation(modi.type)
                                                        ? modiStyle.concat(" ").concat(ptmStyles.mutation) : modiStyle;
                                                    ptms.push(<span className={spanStyle}
                                                        key={`PTM-ROW-${rowIndex}-COL-${j}-modi-${modiIndex}`}
                                                        data-tip={JSON.stringify([modi])} data-for="ptms.tooltip">
                                                        {modi.abbreviation != null ? modi.abbreviation.charAt(0) : ""}
                                                    </span>);
                                                }
                                            });
                                            modiCol.push(<div key={`PTM-ROW-${rowIndex}-COL-${j}${k}-ptms`}
                                                className={styles.col}
                                                style={{ marginLeft: (k - lastModiPos) * 16 }}>{ptms}</div>);
                                            lastModiPos = k + 1;
                                        }
                                    }
                                }
                            }

                            return <div key={`PTM-ROW-${rowIndex}-COL-${j}-${index}`}
                                className={c.coloured ? styles.colouredPTM : styles.ptm}
                                style={{ minWidth: (c.end - c.start) * 16 }}>
                                {modiCol}
                            </div>;
                        })
                    }
                </td>);
            }
        }

        return modiRow;
    }

}

export { ProteinsCoveragePage };
