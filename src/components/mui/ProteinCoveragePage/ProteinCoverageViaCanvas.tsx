import { Map } from "immutable";
import { com } from "~models/example";
import * as Long from "long";
import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import { PSMHelpers } from "~utilities/psm-helper";

import {
    drawModiForPeptideLine,
    drawProteinSequence,
    drawSampleFrequencyPosition,
    drawSequencePosition,
    LFQPeptideLine,
    ModiForPosition,
    PeptideInRow,
    PeptideLine,
    PeptideLineModi,
    PeptidesStartEnds,
    SampleFrequencyInfo,
    SampleSummaryInfo,
    SequencePosition,
    StartEnds,
} from "./CoverageCommonFunction";
import * as styles from "./ProteinCoverage.scss";

import IProtein = com.example.dto.IProtein;
import IPtmModification = com.example.dto.IPtmModification;
import ISupportPeptide = com.example.dto.ISupportPeptide;
import IFeatureVectorProfile = com.example.dto.IFeatureVectorProfile;
import ISupportPeptideFeatureVector = com.example.dto.ISupportPeptideFeatureVector;
import IAbbreviatedModification = com.example.dto.IAbbreviatedModification;
import SamplePeptideFrequency = com.example.dto.SamplePeptideFrequency;
import IPSM = com.example.dto.IPSM;
import Sample = com.example.dto.Sample;
import { ModificationHelper } from "~/utilities/modification-helper";
enum Option {
    PROTEIN_COVERAGE, SAMPLE_FREQUENCY, LFQ_PROTEIN_COVERAGE
}

interface CoverageProteinPeptide {
    protein: IProtein;
    peptides: (ISupportPeptide | ISupportPeptideFeatureVector)[];
    proteinSequence: string;
}

interface ProteinsCoverageProps {
    option: Option;
    samples: Sample[];
    sampleFrequency?: SamplePeptideFrequency[];
    proteinPeptide: CoverageProteinPeptide;
    selectedModifications: { [name: string]: boolean };
    ptmMap: { [k: string]: IPtmModification };
    aaPerLine: number;
    aaPerCol?: number;
    sampleId: string;
    tooltipHeight: number;
    fractions: { [key: string]: string };
    selectedPeptide: PeptideLine;
    groupNames?: string[];
    peptideSelected(peptide: ISupportPeptide | ISupportPeptideFeatureVector, selectedPeptideLine: PeptideLine | LFQPeptideLine): void;
    updateMaxValue(value: number): void;
}

interface ProteinsCoverageState {
    colPerRow: number;
    aaPerLine: number;
    aaPerCol: number;
    modisMap: { [index: number]: IAbbreviatedModification[] };
    modisPositionMap: { [position: number]: ModiForPosition };
    peptideLines: (PeptideLine | LFQPeptideLine)[];
    peptides: PeptidesStartEnds[][];
}

function drawOnePeptideLine(ctx: CanvasRenderingContext2D, peptideLine: PeptideLine | LFQPeptideLine,
                            selectedModifications: { [name: string]: boolean },
                            rowCount: number, colCount: number, startX: number): void {
    for (let sub: number = 0; sub < peptideLine.peptideRows.length; sub += 1) {
        let offsetDrawStart: number = 0;
        let offsetDrawEnd: number = 0;
        const previousPeptideRow: PeptideInRow = { ...peptideLine.peptideRows[sub] };
        //draw start point
        if (sub === 0) {
            ctx.fillRect(previousPeptideRow.startX, previousPeptideRow.startY - 2, 1, 8);
            offsetDrawStart = 1;
        }
        //draw end point
        if (sub === (peptideLine.peptideRows.length - 1)) {
            ctx.fillRect(previousPeptideRow.startX + previousPeptideRow.width - 1, previousPeptideRow.startY - 2, 1, 8);
            offsetDrawEnd = 1;
        }
        //draw whole peptide line
        ctx.clearRect(previousPeptideRow.startX + offsetDrawStart, previousPeptideRow.startY,
                      previousPeptideRow.width - offsetDrawEnd - offsetDrawStart, 4);
        ctx.fillRect(previousPeptideRow.startX + offsetDrawStart, previousPeptideRow.startY,
                     previousPeptideRow.width - offsetDrawEnd - offsetDrawStart, 4);
        drawModiForPeptideLine(ctx, peptideLine, selectedModifications, rowCount, colCount,
                               previousPeptideRow, startX, previousPeptideRow.startY);
    }
}

function drawSequence(ctx: CanvasRenderingContext2D, peptideLine: PeptideLine | LFQPeptideLine,
                      rowCount: number, colCount: number, sequence: string,
                      fillStyle: string): void {
    for (const peptideRow of peptideLine.peptideRows) {
        let offsetX: number = 0;
        let spaceOffsetX: number = 0;
        let previousEnd: number = 0;
        while (previousEnd <= peptideRow.end) {
            const tempStart: number = previousEnd === 0 ? peptideRow.start : previousEnd;
            let tempEnd: number = 0;
            if (tempStart % rowCount % colCount === 0) {
                tempEnd = tempStart;
            } else {
                tempEnd = colCount - (tempStart % rowCount) % colCount +
                    tempStart;
            }
            const lineEnd: number = Math.min(tempEnd, peptideRow.end);
            offsetX = offsetX + (lineEnd - tempStart + 1) * 14;
            const width: number = (lineEnd % rowCount === 0 ? rowCount : lineEnd % rowCount) * 14 -
                (tempStart % rowCount === 0 ? rowCount : tempStart % rowCount) * 14 + 14;
            ctx.canvas.style.letterSpacing = "2px";
            ctx.fillStyle = fillStyle;
            ctx.fillRect(peptideRow.startX + offsetX + spaceOffsetX - width, peptideRow.sequenceStartY - 16, width, 20);
            ctx.font = "bold 20px Courier New";
            ctx.fillStyle = "black";
            ctx.fillText(sequence.substring(tempStart - 1, lineEnd),
                         peptideRow.startX + offsetX + spaceOffsetX, peptideRow.sequenceStartY);
            previousEnd = lineEnd + 1;
            spaceOffsetX += 14;
        }
    }
}

class ProteinsCoverage extends React.PureComponent<ProteinsCoverageProps, ProteinsCoverageState> {
    private canvas: HTMLCanvasElement;
    private peptideRowCount: Map<number, number>;
    private totalPeptideLineAmount: number = 0;
    private totalPtmLength: number;
    private totalPtmPosition: number;
    constructor(props: ProteinsCoverageProps) {
        super(props);
        const defaultAaPerCol: number = 10;
        const peptideLines: PeptideLine[] | LFQPeptideLine[] = this.createPeptideLineData([...this.props.proteinPeptide.peptides]);
        const modisMap: { [index: number]: IAbbreviatedModification[] } =
            this.createModificationData([...this.props.proteinPeptide.peptides]);
        const multiModisMap: { [position: number]: ModiForPosition } = this.buildModificationData([...this.props.proteinPeptide.peptides]);
        const selectedModi: { [name: string]: boolean } = this.createPreSelectedModificationData([...this.props.proteinPeptide.peptides]);
        const peptides: PeptidesStartEnds[][] = [];
        this.calculatePeptidePosition(peptideLines, this.props.aaPerLine, modisMap,
                                      this.props.proteinPeptide.proteinSequence,
                                      [...this.props.proteinPeptide.peptides], selectedModi,
                                      peptides);
        // this.calculatePeptideLine(peptideLines, peptides);
        this.canvas = document.getElementById("proteinCoverage") as HTMLCanvasElement;
        this.state = {
            colPerRow: Math.ceil(this.props.aaPerLine / (this.props.aaPerCol === undefined ? defaultAaPerCol : this.props.aaPerCol)),
            aaPerLine: this.props.aaPerLine,
            aaPerCol: this.props.aaPerCol === undefined ? defaultAaPerCol : this.props.aaPerCol,
            modisMap: modisMap,
            modisPositionMap: multiModisMap,
            peptideLines: peptideLines,
            peptides: peptides
        };
        this.canvasClick(peptideLines, this.canvas);
        this.drawProteinCoverage = this.drawProteinCoverage.bind(this);
        this.addModification = this.addModification.bind(this);
        this.calculatePeptideLine = this.calculatePeptideLine.bind(this);
        this.copyPeptideLine = this.copyPeptideLine.bind(this);
        this.canvasHover = this.canvasHover.bind(this);
        this.frequencyHover = this.frequencyHover.bind(this);
        this.canvasClick = this.canvasClick.bind(this);
        this.drawSelectedPeptideLine = this.drawSelectedPeptideLine.bind(this);
        this.buildModificationData = this.buildModificationData.bind(this);
    }
    public componentDidMount(): void {
        ReactTooltip.rebuild();
    }
    public componentDidUpdate(): void {
        ReactTooltip.rebuild();
    }
    public render(): JSX.Element {
        const modifications: IAbbreviatedModification[] = [];

        this.props.proteinPeptide.peptides.map((peptide: ISupportPeptide | ISupportPeptideFeatureVector) => {
            const modificationNames: string[] = this.props.option === Option.LFQ_PROTEIN_COVERAGE ?
                (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.modifications :
                (peptide as ISupportPeptide).peptide.modifications;
            const modisPerPeptide: IAbbreviatedModification[] =
                ModificationHelper.getAbbrModiList(modificationNames, this.props.ptmMap);

            modisPerPeptide.map((modi: IAbbreviatedModification) => {
                if (!this.checkIsExist(modifications, modi)) {
                    modifications.push(modi);
                }
            });
        });
        this.drawProteinCoverage(this.props.proteinPeptide.proteinSequence);

        return <div className={styles.coverageContainer} id="coverageContainer">
            <div className={styles.coverageTooltip} id="coverageTool">
                <span id="tooltipText"></span>
            </div>
        </div>;
    }
    public componentWillReceiveProps(nextProp: ProteinsCoverageProps): void {
        if (this.props.proteinPeptide.protein.accession !== nextProp.proteinPeptide.protein.accession) {
            const peptideLines: (PeptideLine | LFQPeptideLine)[] = this.createPeptideLineData([...nextProp.proteinPeptide.peptides]);
            const modisMap: { [index: number]: IAbbreviatedModification[] } =
                this.createModificationData([...nextProp.proteinPeptide.peptides]);
            const multiModisMap: { [position: number]: ModiForPosition } =
                this.buildModificationData([...nextProp.proteinPeptide.peptides]);
            const selectedModi: { [name: string]: boolean } =
                this.createPreSelectedModificationData([...nextProp.proteinPeptide.peptides]);
            const peptides: PeptidesStartEnds[][] = [];
            this.calculatePeptidePosition(peptideLines, nextProp.aaPerLine, modisMap,
                                          nextProp.proteinPeptide.proteinSequence,
                                          [...nextProp.proteinPeptide.peptides], selectedModi,
                                          peptides);
            this.setState({
                modisMap: modisMap,
                modisPositionMap: multiModisMap,
                peptideLines: peptideLines,
                peptides: peptides
            });
            this.canvasClick(peptideLines, this.canvas);
        }
        if (this.canvas == null) {
            this.canvas = document.getElementById("proteinCoverage") as HTMLCanvasElement;
        }
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
    private drawProteinCoverage(sequence: string): void {
        if (this.canvas != null) {
            const ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
            const lineSpace: number = 26;
            const startX: number = 120;
            const startY: number = 30;

            ctx.canvas.width = 1850;
            ctx.canvas.height = (this.state.peptides.length + 1) * lineSpace + (this.totalPtmLength + 1) * 12 +
                (this.totalPtmPosition + 1) * 10 + 150;
            if (this.props.sampleFrequency != null || this.props.option !== Option.SAMPLE_FREQUENCY) {
                ctx.canvas.height += this.props.option === Option.SAMPLE_FREQUENCY ?
                    this.state.peptides.length * this.props.sampleFrequency.length * 20 + 100 :
                    this.totalPeptideLineAmount * 10;
            }
            ctx.clearRect(0, 0, 1850, ctx.canvas.height);
            if (this.props.option === Option.PROTEIN_COVERAGE ||
                this.props.option === Option.LFQ_PROTEIN_COVERAGE) {
                //draw protein sequence
                const positionOfSeqs: SequencePosition[] = drawProteinSequence(
                    ctx, this.state.peptides, startX, startY,
                    this.state.aaPerLine, this.state.aaPerCol,
                    sequence, lineSpace, null, this.props.selectedModifications,
                    this.state.modisPositionMap);

                //draw the position for modification
                drawSequencePosition(
                    ctx, this.state.peptides, startY, lineSpace, this.state.aaPerLine, this.state.aaPerCol,
                    startX, this.state.peptideLines, this.props.selectedModifications);
                this.canvasHover(
                    this.state.peptideLines, ctx, startX, this.props.selectedModifications,
                    this.state.aaPerLine, this.state.aaPerCol, sequence, this.canvas,
                    positionOfSeqs, this.state.modisPositionMap);
                if (this.props.selectedPeptide != null) {
                    this.drawSelectedPeptideLine(ctx, startX);
                }
            } else if (this.props.option === Option.SAMPLE_FREQUENCY) {
                const positionOfSeqs: SequencePosition[] =
                    drawProteinSequence(
                        ctx, this.state.peptides, startX, startY, this.state.aaPerLine,
                        this.state.aaPerCol, sequence, lineSpace, this.props.sampleFrequency.length,
                        this.props.selectedModifications, this.state.modisPositionMap);

                const sampleSummaryInfos: SampleSummaryInfo[] =
                    this.generateSampleSummaryData(this.props.sampleFrequency, this.state.peptides);
                drawSampleFrequencyPosition(
                    ctx, this.state.peptides, startY, lineSpace, this.state.aaPerLine, this.state.aaPerCol,
                    startX, sampleSummaryInfos);
                this.frequencyHover(
                    sampleSummaryInfos, ctx, this.canvas, positionOfSeqs,
                    this.state.modisPositionMap, this.props.selectedModifications,
                    this.state.peptideLines);
            }
        }
    }

    private calculatePeptidePosition(
        peptideLines: (PeptideLine | LFQPeptideLine)[], aaPerLine: number,
        modisMap: { [position: number]: IAbbreviatedModification[] },
        sequence: string, supportPeptides: ISupportPeptide[],
        selectedModifications: { [name: string]: boolean },
        peptides: PeptidesStartEnds[][]): void {
        //calculate height of canvas
        //calculate ptm height
        let totalPtmLength: number = 0;
        let totalPtmPosition: number = 0;
        let isRowHasModi: boolean = false;

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
        for (const row of rowCols) {
            let maxWidth: number = 0;
            const peptidesOneRow: PeptidesStartEnds[] = [];
            for (const col of row) {
                for (let k: number = col.start; k < col.end; k += 1) {
                    if (modisMap[k] != null) {
                        let colPtmWidth: number = 0;
                        for (const modi of modisMap[k]) {
                            if (selectedModifications[modi.name] === true) {
                                colPtmWidth = colPtmWidth + 1;
                                isRowHasModi = true;
                            }
                        }
                        maxWidth = (colPtmWidth > maxWidth) ? colPtmWidth : maxWidth;
                    }
                }
            }
            if (isRowHasModi) {
                totalPtmPosition = totalPtmPosition + 1;
                isRowHasModi = false;
            }
            for (const col of row) {
                peptidesOneRow.push({ ptmHeight: maxWidth, ...col });
            }
            totalPtmLength = totalPtmLength + maxWidth;
            peptides.push(peptidesOneRow);
        }
        this.totalPtmLength = totalPtmLength;
        this.totalPtmPosition = totalPtmPosition;
        this.calculatePeptideLine(peptideLines, peptides);
    }

    private canvasHover(
        peptideNewLines: (PeptideLine | LFQPeptideLine)[], ctx: CanvasRenderingContext2D, startX: number,
        selectedModifications: { [name: string]: boolean }, rowCount: number,
        colCount: number, sequence: string, canvas: HTMLCanvasElement,
        positionOfSeqs: SequencePosition[],
        modisPositionMap: { [position: number]: ModiForPosition }): void {
        let previousPeptideLine: PeptideLine | LFQPeptideLine;
        const tooltipOffsetY: number = this.props.tooltipHeight;
        canvas.onmousemove = (e: any) => { //tslint:disable-line
            const r: ClientRect = canvas.getBoundingClientRect();
            const x: number = e.clientX - r.left;
            const y: number = e.clientY - r.top;
            const containerHeight: number = document.getElementById("coverageContainer").offsetHeight;
            const toolHeight: number = document.getElementById("coverageTool").offsetHeight;
            let hover: boolean = false;
            for (const positionOfSeq of positionOfSeqs) {
                if (x > positionOfSeq.startX && x < positionOfSeq.startX + positionOfSeq.width &&
                    y > positionOfSeq.startY && y < positionOfSeq.startY + positionOfSeq.height) {
                    hover = true;
                    const textNode: Node = document.getElementById("tooltipText");
                    while (textNode.firstChild != null) {
                        textNode.removeChild(textNode.firstChild);
                    }
                    document.getElementById("coverageTool").style.display = "inline-block";
                    document.getElementById("coverageTool").style.position = "relative";
                    document.getElementById("coverageTool").style.left = (x - 10).toString().concat("px");
                    document.getElementById("coverageTool").style.top = (y - canvas.height + tooltipOffsetY -
                        containerHeight + toolHeight + 15).toString().concat("px");
                    document.getElementById("tooltipText").innerHTML = //tslint:disable-line
                        sequence.substring(positionOfSeq.position, positionOfSeq.position + 1)
                            .concat("@")
                            .concat((positionOfSeq.position + 1)
                                .toString());
                    break;
                }
            }
            if (!hover) {
                for (const peptideLine of peptideNewLines) {
                    const selectedPeptideLine: PeptideLine | LFQPeptideLine = { ...peptideLine };
                    for (const peptideRow of peptideLine.peptideRows) {
                        for (let k: number = peptideRow.start - 1; k < peptideRow.end; k += 1) {
                            if (modisPositionMap[k] != null) {
                                for (const modisPosition of modisPositionMap[k].peptideLineModis) {
                                    if (!hover && x > modisPosition.startX && x < modisPosition.startX + modisPosition.width &&
                                        y > modisPosition.startY && y < modisPosition.startY + modisPosition.height) {
                                        hover = true;
                                        this.drawModificationTooltip(
                                            modisPositionMap, k, x, y, canvas,
                                            tooltipOffsetY, containerHeight,
                                            toolHeight, selectedModifications);
                                        break;
                                    }
                                }
                            }
                        }
                        if (!hover && x > peptideRow.startX && x < peptideRow.startX + peptideRow.width &&
                            y > peptideRow.startY && y < peptideRow.startY + peptideRow.height) {
                            const textNode: Node = document.getElementById("tooltipText");
                            while (textNode.firstChild != null) {
                                textNode.removeChild(textNode.firstChild);
                            }
                            hover = true;
                            e.target.style.cursor = "pointer";
                            document.getElementById("coverageTool").style.display = "inline-block";
                            document.getElementById("coverageTool").style.position = "relative";
                            const divWidth: number = Math.min(selectedPeptideLine.peptideSequence.length, 500);
                            document.getElementById("coverageTool").style.left = (x - divWidth / 2 - 100).toString().concat("px");
                            document.getElementById("coverageTool").style.top = (y - canvas.height + tooltipOffsetY -
                                containerHeight + toolHeight + 15)
                                .toString().concat("px");
                            const divTotal: HTMLDivElement = document.createElement("div");
                            const eachPeptideLine: PeptideLine = peptideLine as PeptideLine;
                            if (this.props.option === Option.PROTEIN_COVERAGE) {
                                const identityPeptideLine: PeptideLine = selectedPeptideLine as PeptideLine;
                                this.drawProteinCoverageTooltip(identityPeptideLine, eachPeptideLine, divTotal);
                            } else {
                                const lfqPeptideLine: LFQPeptideLine = selectedPeptideLine as LFQPeptideLine;
                                this.drawLfqProteinCoverageTooltip(lfqPeptideLine, eachPeptideLine, divTotal);
                            }
                            document.getElementById("tooltipText").appendChild(divTotal);
                            //restore the previous peptide line
                            if (previousPeptideLine != null) {
                                //don't draw old one if hover over same peptide line
                                if (previousPeptideLine.peptideSequence !== selectedPeptideLine.peptideSequence) {
                                    ctx.save();
                                    ctx.fillStyle = "#57A1FF";
                                    drawOnePeptideLine(
                                        ctx, previousPeptideLine, selectedModifications,
                                        rowCount, colCount, startX);
                                    ctx.restore();
                                    ctx.save();
                                    const fillRectStyle: string = "#aaa";
                                    drawSequence(ctx, previousPeptideLine, rowCount, colCount, sequence, fillRectStyle);
                                    ctx.restore();
                                }
                                if (this.props.selectedPeptide != null) {
                                    this.drawSelectedPeptideLine(ctx, startX);
                                }
                            }
                            //save old peptide line
                            previousPeptideLine = { ...selectedPeptideLine };
                            //highlight peptide line and the related sequence
                            ctx.save();
                            ctx.fillStyle = "#000080";
                            drawOnePeptideLine(
                                ctx, selectedPeptideLine, selectedModifications,
                                rowCount, colCount, startX);
                            ctx.restore();
                            ctx.save();
                            const fillRect: string = "#99ffff";
                            drawSequence(ctx, selectedPeptideLine, rowCount, colCount, sequence, fillRect);
                            ctx.restore();
                        }
                        if (hover) {
                            break;
                        }
                    }
                    if (hover) {
                        break;
                    }
                }
            }
            if (!hover) {
                e.target.style.cursor = "default";
                document.getElementById("coverageTool").style.display = "none";
                if (previousPeptideLine != null) {
                    ctx.save();
                    ctx.fillStyle = "#57A1FF";
                    drawOnePeptideLine(
                        ctx, previousPeptideLine, selectedModifications,
                        rowCount, colCount, startX);
                    ctx.restore();
                    ctx.save();
                    const fillRect: string = "#aaa";
                    drawSequence(ctx, previousPeptideLine, rowCount, colCount, sequence, fillRect);
                    ctx.restore();
                }
                if (this.props.selectedPeptide != null) {
                    this.drawSelectedPeptideLine(ctx, startX);
                }
            }
        };
    }

    private drawModificationTooltip(
        modisPositionMap: { [position: number]: ModiForPosition },
        k: number, x: number, y: number, canvas: HTMLCanvasElement,
        tooltipOffsetY: number, containerHeight: number, toolHeight: number,
        selectedModifications: { [name: string]: boolean }): void {
        const textNode: Node = document.getElementById("tooltipText");
        while (textNode.firstChild != null) {
            textNode.removeChild(textNode.firstChild);
        }
        document.getElementById("coverageTool").style.display = "inline-block";
        document.getElementById("coverageTool").style.position = "relative";
        document.getElementById("coverageTool").style.left = (x - 10).toString().concat("px");
        document.getElementById("coverageTool").style.top = (y - canvas.height + tooltipOffsetY -
            containerHeight + toolHeight + 15)
            .toString().concat("px");
        //add tooltip
        const divTotal: HTMLDivElement = document.createElement("div");
        for (const modis of modisPositionMap[k].peptideLineModis) {
            let isDisplay: boolean = true;
            for (const modi of modis.modifications) {
                if (selectedModifications[modi.name] === false) {
                    isDisplay = false;
                    break;
                }
            }
            if (isDisplay) {
                const divSpan: HTMLDivElement = document.createElement("div");
                const spanModiAbb: HTMLSpanElement = document.createElement("span");
                spanModiAbb.className = ModificationHelper.getColorStyleFromPTMInCoverage(modis
                    .modifications[0]
                    .abbreviation);
                spanModiAbb.innerHTML = modis.modifications.length > 1 ? //tslint:disable-line
                    "*" : modis.modifications[0].abbreviation != null ?
                        modis.modifications[0].abbreviation.charAt(0) : "";
                divSpan.appendChild(spanModiAbb);
                const spanModiDescription: HTMLSpanElement = document.createElement("span");
                let monoMassName: string = "";
                for (const singleModis of modis.modifications) {
                    const tempMonoMass: string = singleModis.monoMass >= 0 ?
                        "+".concat(singleModis.monoMass.toFixed(2)) :
                        singleModis.monoMass.toFixed(2);
                    const tempName: string = singleModis.name.concat("(")
                        .concat(tempMonoMass)
                        .concat(")");
                    if (monoMassName !== "") {
                        monoMassName = monoMassName.concat(", ").concat(tempName);
                    } else {
                        monoMassName = monoMassName.concat(tempName);
                    }
                }
                spanModiDescription.innerHTML = monoMassName; //tslint:disable-line
                divSpan.appendChild(spanModiDescription);
                divTotal.appendChild(divSpan);
            }
        }
        document.getElementById("tooltipText").appendChild(divTotal);
    }

    private drawProteinCoverageTooltip(selectedPeptideLine: PeptideLine, peptideLine: PeptideLine, divTotal: HTMLDivElement): void {
        const divSymbol: HTMLDivElement = document.createElement("div");
        const divPsmCount: HTMLDivElement = document.createElement("div");
        const divArea: HTMLDivElement = document.createElement("div");
        const divScan: HTMLDivElement = document.createElement("div");
        const divRT: HTMLDivElement = document.createElement("div");
        const divPValue: HTMLDivElement = document.createElement("div");
        const divPeptide: HTMLDivElement = document.createElement("div");
        divSymbol.innerHTML = "<b>Position:</b> ".concat(peptideLine.position); //tslint:disable-line
        divTotal.appendChild(divSymbol);
        divPsmCount.innerHTML = "<b>Sample:</b> ".concat(selectedPeptideLine.sampleName); //tslint:disable-line
        divTotal.appendChild(divPsmCount);
        divArea.innerHTML = "<b>Area:</b> ".concat(selectedPeptideLine.sampleArea); //tslint:disable-line
        divTotal.appendChild(divArea);
        divScan.innerHTML = "<b>Scan:</b> ".concat(selectedPeptideLine.scanName); //tslint:disable-line
        divTotal.appendChild(divScan);
        divRT.innerHTML = "<b>Retention Time:</b> ".concat(selectedPeptideLine.rt); //tslint:disable-line
        divTotal.appendChild(divRT);
        divPValue.innerHTML = "<b>-10lgP:</b> ".concat(selectedPeptideLine.pValue); //tslint:disable-line
        divTotal.appendChild(divPValue);
        divPeptide.innerHTML = "<b>Peptide:</b> ".concat(peptideLine.peptideSequence); //tslint:disable-line
        divTotal.appendChild(divPeptide);
    }

    private drawLfqProteinCoverageTooltip(selectedPeptideLine: LFQPeptideLine, peptideLine: PeptideLine, divTotal: HTMLDivElement): void {
        const divSymbol: HTMLDivElement = document.createElement("div");
        const divQuality: HTMLDivElement = document.createElement("div");
        const divSignificance: HTMLDivElement = document.createElement("div");
        const divAvgPPM: HTMLDivElement = document.createElement("div");
        const divAvgArea: HTMLDivElement = document.createElement("div");
        const divVectorCount: HTMLDivElement = document.createElement("div");
        const divMaxRatio: HTMLDivElement = document.createElement("div");
        const divGroup: HTMLDivElement = document.createElement("div");
        const groupHeader: string = "<thead><tr>"
            .concat("<th style='border: 1px solid black;position: relative;z-index: 10;text-align: center!important;background: rgb(207, 211, 216);'>Group</th>") //tslint:disable-line
            .concat("<th style='border: 1px solid black;position: relative;z-index: 10;text-align: center!important;background: rgb(207, 211, 216);'>Area</th>") //tslint:disable-line
            .concat("<th style='border: 1px solid black;position: relative;z-index: 10;text-align: center!important;background: rgb(207, 211, 216);'>Ratio</th>") //tslint:disable-line
            .concat("</tr></thead>");
        let groupContent: string = "";
        selectedPeptideLine.groupProfiles.map((profile: IFeatureVectorProfile, index: number) => {
            groupContent = groupContent.concat(`<tr key={${selectedPeptideLine.groupNames[index]}}>`)
                .concat(`<td style='border: 1px solid black;text-align: right;white-space: nowrap;'>${selectedPeptideLine.groupNames[index]}</td>`) //tslint:disable-line
                .concat(`<td style='border: 1px solid black;text-align: right;white-space: nowrap;'>${profile.area.isPresent ? profile.area.value == null ? "0" : profile.area.value.toExponential(2) : ""}</td>`) //tslint:disable-line
                .concat(`<td style='border: 1px solid black;text-align: right;white-space: nowrap;'>${profile.ratio.isPresent ? profile.ratio.value == null ? "0" : profile.ratio.value.toFixed(2) : ""}</td>`) //tslint:disable-line
                .concat("</tr>");
        });
        const groupTable: string = "<table style='border: 1px solid black; border-collapse: collapse; width: 100 %; display: inline-block'>" //tslint:disable-line
            .concat(groupHeader)
            .concat(groupContent)
            .concat("</table>");
        const divPeptide: HTMLDivElement = document.createElement("div");
        divSymbol.innerHTML = "<b>Position:</b> ".concat(peptideLine.position); //tslint:disable-line
        divTotal.appendChild(divSymbol);
        divQuality.innerHTML = "<b>Quality:</b> ".concat(selectedPeptideLine.quality); //tslint:disable-line
        divTotal.appendChild(divQuality);
        divSignificance.innerHTML = "<b>Significance:</b> ".concat(selectedPeptideLine.significance); //tslint:disable-line
        divTotal.appendChild(divSignificance);
        divAvgPPM.innerHTML = "<b>Avg.ppm:</b> ".concat(selectedPeptideLine.avgPPM); //tslint:disable-line
        divTotal.appendChild(divAvgPPM);
        divAvgArea.innerHTML = "<b>Avg.Area:</b> ".concat(selectedPeptideLine.avgArea); //tslint:disable-line
        divTotal.appendChild(divAvgArea);
        divMaxRatio.innerHTML = "<b>Max Ratio:</b> ".concat(selectedPeptideLine.maxRatio); //tslint:disable-line
        divTotal.appendChild(divMaxRatio);
        divGroup.innerHTML = "<b style='vertical-align: top'>Group Profile:</b> ".concat(groupTable); //tslint:disable-line
        divTotal.appendChild(divGroup);
        divVectorCount.innerHTML = "<b>#Vector:</b> ".concat(selectedPeptideLine.vector); //tslint:disable-line
        divTotal.appendChild(divVectorCount);
        divPeptide.innerHTML = "<b>Peptide:</b> ".concat(peptideLine.peptideSequence); //tslint:disable-line
        divTotal.appendChild(divPeptide);
    }

    private canvasClick(peptideNewLines: (PeptideLine | LFQPeptideLine)[], canvas: HTMLCanvasElement): void {
        if (canvas != null) {
            canvas.onclick = (event: any) => { //tslint:disable-line
                const r: ClientRect = canvas.getBoundingClientRect();
                const x: number = event.clientX - r.left;
                const y: number = event.clientY - r.top;
                event.stopPropagation();
                event.preventDefault();
                for (const peptideLine of peptideNewLines) {
                    const selectedPeptideLine: PeptideLine | LFQPeptideLine = { ...peptideLine };
                    for (const peptideRow of peptideLine.peptideRows) {
                        if (x > peptideRow.startX && x < peptideRow.startX + peptideRow.width &&
                            y > peptideRow.startY && y < peptideRow.startY + peptideRow.height) {
                            this.props.peptideSelected(selectedPeptideLine.supportPeptide, selectedPeptideLine);
                        }
                    }
                }
            };
        }
    }

    private combineColsIntoRowCols(cols: StartEnds[], numRows: number): StartEnds[][] {
        const rowCols: StartEnds[][] = [];
        let colPos: number = 0;
        for (let i: number = 0; i < numRows && colPos < cols.length; i += 1) {
            const row: StartEnds[] = [];
            const start: number = cols[colPos].start;
            let end: number = cols[colPos].end;
            while (end - start < this.props.aaPerLine && colPos < cols.length) {
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
            col: col % this.props.aaPerCol
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
                if (se[seIdx].coloured && intersection === 0 && (s - se[seIdx].end) > 0) {//range without peptide
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
        const numCols: number = Math.ceil(sequence.length / this.props.aaPerCol);
        for (let i: number = 0; i < numCols; i += 1) {
            const s: number = i * this.props.aaPerCol;
            const e: number = Math.min(sequence.length, s + this.props.aaPerCol);
            cols.push({
                start: s,
                end: e
            });
        }

        return cols;
    }

    private createModificationData(
        supportPeptides: (ISupportPeptide | ISupportPeptideFeatureVector)[]): { [position: number]: IAbbreviatedModification[] } {
        const modisMap: { [position: number]: IAbbreviatedModification[] } = {};
        for (const peptide of supportPeptides) {
            const modificationNames: string[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
                (peptide as ISupportPeptide).peptide.modifications :
                (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.modifications;
            const positionOfModifications: number[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
                (peptide as ISupportPeptide).peptide.positionOfModifications :
                (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.positionOfModifications;
            const abbrModiList: IAbbreviatedModification[] = ModificationHelper.getAbbrModiList(modificationNames, this.props.ptmMap);
            abbrModiList.map((modi: IAbbreviatedModification, index: number) => {
                if (modisMap[peptide.start + positionOfModifications[index]] === undefined) {
                    const modis: IAbbreviatedModification[] = [];
                    modisMap[peptide.start + positionOfModifications[index]] = modis;
                }
                if (!this.checkIsExist(modisMap[peptide.start + positionOfModifications[index]], modi)) {
                    modisMap[peptide.start + positionOfModifications[index]].push(modi);
                }
            });
        }

        return modisMap;
    }

    //tslint:disable-next-line
    private createPeptideLineData(supportPeptides: (ISupportPeptide | ISupportPeptideFeatureVector)[]): PeptideLine[] | LFQPeptideLine[] {
        const peptideLines: PeptideLine[] = [];
        const lfqPeptideLines: LFQPeptideLine[] = [];
        this.peptideRowCount = Map();
        //sort by start
        supportPeptides.sort((a: ISupportPeptide, b: ISupportPeptide) => {
            return a.start - b.start;
        });
        for (const peptide of supportPeptides) {
            const peptideRows: PeptideInRow[] = [];
            let finishedPeptideNumber: number = 0;
            while (finishedPeptideNumber <= peptide.end) {
                let peptideRow: PeptideInRow = {
                    start: 0,
                    end: 0,
                    startX: 0,
                    startY: 0,
                    width: 0,
                    height: 0,
                    row: 0,
                    subRow: 0,
                    sequenceStartY: 0,
                    modifications: [],
                    positionOfModi: []
                };
                peptideRow.start = peptide.start + finishedPeptideNumber + 1;
                peptideRow.row = Math.floor((peptide.start + finishedPeptideNumber) / this.props.aaPerLine) + 1;
                //increase peptide line count for a specific row
                if (this.peptideRowCount.has(peptideRow.row)) {
                    let count: number = this.peptideRowCount.get(peptideRow.row);
                    count = count + 1;
                    this.peptideRowCount = this.peptideRowCount.set(peptideRow.row, count);
                } else {
                    this.peptideRowCount = this.peptideRowCount.set(peptideRow.row, 1);
                }
                if (Math.floor(peptide.end / this.props.aaPerLine) !==
                    Math.floor((peptide.start + finishedPeptideNumber) / this.props.aaPerLine)) {
                    let tempFinished: number = 0;
                    tempFinished = 110 - (peptide.start + finishedPeptideNumber) % this.props.aaPerLine;
                    if ((peptide.start + tempFinished) > peptide.end) {
                        peptideRow.end = peptide.end + 1;
                        peptideRow = this.addModification(peptideRow, peptide);
                        peptideRows.push(peptideRow);
                        break;
                    } else {
                        finishedPeptideNumber = finishedPeptideNumber + tempFinished;
                        peptideRow.end = peptide.start + finishedPeptideNumber;
                    }
                } else {
                    peptideRow.end = peptide.end + 1;
                    peptideRow = this.addModification(peptideRow, peptide);
                    peptideRows.push(peptideRow);
                    break;
                }
                peptideRow = this.addModification(peptideRow, peptide);
                peptideRows.push(peptideRow);
            }
            if (this.props.option === Option.PROTEIN_COVERAGE || this.props.option === Option.SAMPLE_FREQUENCY) {
                const bestPsm: IPSM = PSMHelpers.getBestPSM(peptide);
                const curSample: Sample = this.getSampleName(this.props.sampleId);
                let area: string = "";
                if ((peptide as ISupportPeptide).peptide.samples != null) {
                    for (const sample of (peptide as ISupportPeptide).peptide.samples) {
                        if (sample.fractions !== undefined) {
                            for (const fraction of Object.keys(sample.fractions)) {
                                for (const psm of sample.fractions[fraction].psms) {
                                    area = psm.area === 0 ? "" : psm.area.toExponential(2);
                                }
                            }
                        }
                    }
                }
                const peptideLine: PeptideLine = {
                    position: (peptide.start + 1).toString().concat("~").concat((peptide.end + 1).toString()),
                    sampleName: curSample == null ? "" : curSample.name,
                    sampleArea: area,
                    scanName: bestPsm == null ? "" :
                        `${bestPsm.scannum}:${this.props.fractions[PSMHelpers.getBestFraction(peptide)]}`,
                    rt: bestPsm == null ? "" : this.calcRtInMins(bestPsm.retentionTime).toFixed(2),
                    pValue: bestPsm == null ? "" : bestPsm.pValue.toFixed(2),
                    peptideSequence: (peptide as ISupportPeptide).peptide.sequence,
                    supportPeptide: peptide,
                    peptideRows: peptideRows
                };
                peptideLines.push(peptideLine);
            } else if (this.props.option === Option.LFQ_PROTEIN_COVERAGE) {
                const lfqPeptideLine: LFQPeptideLine = {
                    position: (peptide.start + 1).toString().concat("~").concat((peptide.end + 1).toString()),
                    quality: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.quality.toFixed(2),
                    significance: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.significance.toFixed(2),
                    avgPPM: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.ppm.toFixed(1),
                    avgArea: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.averageArea.toExponential(2),
                    vector: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.vectorCount.toString(),
                    maxRatio: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.maxRatio.toFixed(2),
                    peptideSequence: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.peptide,
                    groupNames: this.props.groupNames,
                    groupProfiles: (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.groupProfiles,
                    supportPeptide: peptide,
                    peptideRows: peptideRows
                };
                lfqPeptideLines.push(lfqPeptideLine);
            }
        }
        if (this.props.option === Option.PROTEIN_COVERAGE || this.props.option === Option.SAMPLE_FREQUENCY) {
            return peptideLines;
        } else if (this.props.option === Option.LFQ_PROTEIN_COVERAGE) {
            return lfqPeptideLines;
        }
    }

    private addModification(peptideRow: PeptideInRow, supportPeptide: ISupportPeptide | ISupportPeptideFeatureVector): PeptideInRow {
        const positionOfNumber: number[] = [];
        const modifications: IAbbreviatedModification[] = [];
        let index: number = 0;
        const modificationNames: string[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
            (supportPeptide as ISupportPeptide).peptide.modifications :
            (supportPeptide as ISupportPeptideFeatureVector).peptideFeatureVector.modifications;
        const positionOfModifications: number[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
            (supportPeptide as ISupportPeptide).peptide.positionOfModifications :
            (supportPeptide as ISupportPeptideFeatureVector).peptideFeatureVector.positionOfModifications;
        const abbrModiList: IAbbreviatedModification[] = ModificationHelper.getAbbrModiList(modificationNames, this.props.ptmMap);
        if (positionOfModifications != null) {
            for (const position of positionOfModifications) {
                if ((position + supportPeptide.start + 1) <= peptideRow.end &&
                    (position + supportPeptide.start + 1) >= peptideRow.start) {
                    positionOfNumber.push(position);
                    modifications.push(abbrModiList[index]);
                }
                index = index + 1;
            }
        }
        return {
            ...peptideRow,
            positionOfModi: [...positionOfNumber],
            modifications: [...modifications]
        };
    }

    private copyPeptideLine(peptideLines: PeptideLine[]): PeptideLine[] {
        const peptideNewLines: PeptideLine[] = [];
        for (const peptideLine of peptideLines) {
            const peptideNewRows: PeptideInRow[] = [];
            for (const peptideRow of peptideLine.peptideRows) {
                const peptideNewRow: PeptideInRow = { ...peptideRow };
                peptideNewRows.push(peptideNewRow);
            }
            peptideNewLines.push({
                ...peptideLine,
                peptideRows: peptideNewRows
            });
        }
        return peptideNewLines;
    }

    private calculatePeptideLine(peptideLines: (PeptideLine | LFQPeptideLine)[], rowCol: PeptidesStartEnds[][]): void {
        let rowNumber: number = 1;
        this.totalPeptideLineAmount = 0;
        for (const row of rowCol) {
            if (this.peptideRowCount.has(rowNumber)) {
                let rowAmount: number = this.peptideRowCount.get(rowNumber);
                while (rowAmount > 0) {
                    let peptideSubRow: number = 1;
                    let previousEnd: number = 0;
                    for (let sub: number = 0; sub < peptideLines.length; sub = sub + 1) {
                        let isLoopEnd: boolean = false;
                        if ((peptideLines[sub].peptideRows[0].row +
                            peptideLines[sub].peptideRows.length - 1) < rowNumber) {
                            continue;
                        }
                        for (const peptideRow of peptideLines[sub].peptideRows) {
                            if (peptideRow.row === rowNumber) {
                                //check if there is overlap with previous peptide line
                                if (peptideRow.start > previousEnd &&
                                    peptideRow.subRow === 0) {
                                    peptideRow.subRow = peptideSubRow;
                                    rowAmount = rowAmount - 1;
                                    previousEnd = peptideRow.end;
                                }
                                if (rowAmount === 0) {
                                    isLoopEnd = true;
                                    break;
                                }
                            }
                        }
                        if ((peptideLines[sub].peptideRows[0].row > rowNumber) ||
                            sub === peptideLines.length - 1) {
                            peptideSubRow = peptideSubRow + 1;
                            previousEnd = 0;
                            sub = 0;
                        }
                        if (isLoopEnd) {
                            //save peptideLine amount
                            for (const col of row) {
                                col.peptideHeight = peptideSubRow;
                            }
                            this.totalPeptideLineAmount = this.totalPeptideLineAmount + peptideSubRow;
                            break;
                        }
                    }
                }
            }
            rowNumber = rowNumber + 1;
        }
    }
    private rgbToHex(rgb: number): string {
        let hex: string = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = `0${hex}`;
        }
        return hex;
    }
    private fullColorHex(red: number, green: number, blue: number): string {
        const redColor: string = this.rgbToHex(red);
        const greenColor: string = this.rgbToHex(green);
        const blueColor: string = this.rgbToHex(blue);
        return `#${redColor}${greenColor}${blueColor}`;
    }
    private generateColorSet(): string[] {
        const colorSet: string[] = [];
        const startRed: number = 255;
        const startGreen: number = 255;
        const startBlue: number = 255;
        const endRed: number = 180;
        const endGreen: number = 0;
        const endBlue: number = 0;
        const interval: number = 15;
        let curRed: number = startRed;
        let curGreen: number = startGreen;
        let curBlue: number = startBlue;
        const intervalRed: number = Math.floor((startRed - endRed) / interval);
        const intervalGreen: number = Math.floor((startGreen - endGreen) / interval);
        const intervalBlue: number = Math.floor((startBlue - endBlue) / interval);
        colorSet.push(this.fullColorHex(startRed, startGreen, startBlue));
        for (let i: number = 0; i < interval; i += 1) {
            curRed -= intervalRed;
            curGreen -= intervalGreen;
            curBlue -= intervalBlue;
            colorSet.push(this.fullColorHex(curRed, curGreen, curBlue));
        }
        return colorSet;
    }
    private generateSampleSummaryData(sampleInfo: SamplePeptideFrequency[], peptides: PeptidesStartEnds[][]): SampleSummaryInfo[] {
        const ret: SampleSummaryInfo[] = [];
        const tempResult: number[][] = [];
        for (const sample of sampleInfo) {
            tempResult.push(sample.frquences);
        }
        const limitValue: number = this.calculateLimitValue(tempResult);
        for (const sample of sampleInfo) {
            const newSampleSummaryInfo: SampleSummaryInfo = {
                sampleName: this.getSampleName(sample.sampleId).name,
                sampleData: null
            };
            newSampleSummaryInfo.sampleData =
                this.generateFrequencyData(sample.frquences, sampleInfo.indexOf(sample), limitValue, peptides);
            ret.push(newSampleSummaryInfo);
        }
        return ret;
    }
    private calculateLimitValue(sampleFrequency: number[][]): number {
        if (sampleFrequency.length === 0) {
            return 0;
        }
        let max: number = sampleFrequency[0][0];
        for (const sample of sampleFrequency) {
            for (const frequency of sample) {
                if (frequency > max) {
                    max = frequency;
                }
            }
        }
        this.props.updateMaxValue(max);
        return max;
    }
    private generateFrequencyData(sampleData: number[], index: number, limit: number, peptides: PeptidesStartEnds[][]):
        SampleFrequencyInfo[] {
        if (peptides[peptides.length - 1][peptides[peptides.length - 1].length - 1].end !== sampleData.length) {
            return [];
        }
        let sequenceRowIndex: number = 0;
        let sequenceGroupIndex: number = 0;
        const colorSet: string[] = this.generateColorSet();
        const ret: SampleFrequencyInfo[] = [];
        const colorNum: number = colorSet.length;
        const distance: number = limit;
        let currentPosition: number = 1;
        let curRow: number = 1;
        for (let frequencyIndex: number = 0; frequencyIndex < sampleData.length; frequencyIndex += 1) {
            let relativeFrequency: number = distance === 0 ? 0 : Math.floor(sampleData[frequencyIndex] / distance * colorNum);
            relativeFrequency = relativeFrequency === colorNum ? relativeFrequency - 1 : relativeFrequency;
            if (Math.floor(frequencyIndex / 110) > curRow - 1) {
                curRow += 1;
                currentPosition = 1;
                sequenceRowIndex += 1;
                sequenceGroupIndex = 0;
            }
            const currentSequence: PeptidesStartEnds = peptides[sequenceRowIndex][sequenceGroupIndex];
            const newFrequencyInfo: SampleFrequencyInfo = {
                start: currentPosition,
                end: currentPosition,
                startX: 0,
                startY: 0,
                color: colorSet[relativeFrequency],
                symbol: this.props.proteinPeptide.proteinSequence[frequencyIndex],
                subRow: index + 1,
                row: curRow,
                position: frequencyIndex + 1,
                peptideCount: sampleData[frequencyIndex]
            };
            ret.push(newFrequencyInfo);
            currentPosition += 1;
            if (newFrequencyInfo.position > currentSequence.start &&
                newFrequencyInfo.position <= currentSequence.end) {
                newFrequencyInfo.isColored = currentSequence.coloured;
                if (newFrequencyInfo.position === currentSequence.end) {
                    sequenceGroupIndex += 1;
                }
            }
        }
        return ret;
    }

    private createPreSelectedModificationData(
        supportPeptides: (ISupportPeptide | ISupportPeptideFeatureVector)[]): { [name: string]: boolean } {
        const selectedModifications: { [name: string]: boolean } = {};
        for (const peptide of supportPeptides) {
            const modificationNames: string[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
                (peptide as ISupportPeptide).peptide.modifications :
                (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.modifications;
            const abbrModiList: IAbbreviatedModification[] = ModificationHelper.getAbbrModiList(modificationNames, this.props.ptmMap);
            abbrModiList.map((modi: IAbbreviatedModification, index: number) => {
                selectedModifications[modi.name] = true;
            });
        }

        return selectedModifications;
    }
    private getSampleName(sampleId: string): Sample {
        for (const sample of this.props.samples) {
            if (sampleId === sample.id) {
                return sample;
            }
        }
        return null;
    }
    private calcRtInMins(rt: number | Long): number {
        let ret: number = 0;
        const conversion: number = 60 * 1000;
        if (rt instanceof Long) {
            ret = rt.divide(conversion).toNumber();
        } else {
            ret = rt / (conversion);
        }

        return ret;
    }
    private frequencyHover(
        sampleSummaryInfos: SampleSummaryInfo[], ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
        positionOfSeqs: SequencePosition[], modisPositionMap: { [position: number]: ModiForPosition },
        selectedModifications: { [name: string]: boolean },
        peptideNewLines: (PeptideLine | LFQPeptideLine)[]): void {
        const tooltipOffsetY: number = this.props.tooltipHeight;
        canvas.onmousemove = (e: any) => { //tslint:disable-line
            if (sampleSummaryInfos.length === 0) {
                return;
            }
            const r: ClientRect = canvas.getBoundingClientRect();
            const x: number = e.clientX - r.left;
            const y: number = e.clientY - r.top;
            const containerHeight: number = document.getElementById("coverageContainer").offsetHeight;
            const toolHeight: number = document.getElementById("coverageTool").offsetHeight;
            let hover: boolean = false;
            for (const positionOfSeq of positionOfSeqs) {
                if (x > positionOfSeq.startX && x < positionOfSeq.startX + positionOfSeq.width &&
                    y > positionOfSeq.startY && y < positionOfSeq.startY + positionOfSeq.height) {
                    hover = true;
                    const textNode: Node = document.getElementById("tooltipText");
                    while (textNode.firstChild != null) {
                        textNode.removeChild(textNode.firstChild);
                    }
                    hover = true;
                    document.getElementById("coverageTool").style.display = "inline-block";
                    document.getElementById("coverageTool").style.position = "relative";
                    const divWidth: number = 100;
                    document.getElementById("coverageTool").style.left = (x - divWidth / 2).toString().concat("px");
                    document.getElementById("coverageTool").style.top = (y - canvas.height + tooltipOffsetY -
                        containerHeight + toolHeight + 15).toString().concat("px");
                    const divTotal: HTMLDivElement = document.createElement("div");
                    const divInfo: HTMLDivElement = document.createElement("div");
                    const psmInfo: HTMLDivElement = document.createElement("div");
                    divInfo.innerHTML = //tslint:disable-line
                        sampleSummaryInfos[0].sampleData[positionOfSeq.position].symbol
                            .concat("@")
                            .concat((positionOfSeq.position + 1)
                                .toString());
                    divTotal.appendChild(divInfo);
                    psmInfo.innerHTML = "<b># PSM: </b>"; //tslint:disable-line
                    divTotal.appendChild(psmInfo);
                    for (const sampleSummaryInfo of sampleSummaryInfos) {
                        const divPsmCount: HTMLDivElement = document.createElement("div");
                        divPsmCount.innerHTML = sampleSummaryInfo.sampleName
                            .concat(": ")
                            .concat(sampleSummaryInfo.sampleData[positionOfSeq.position].peptideCount.toString()); //tslint:disable-line
                        divTotal.appendChild(divPsmCount);
                    }
                    document.getElementById("tooltipText").appendChild(divTotal);
                    break;
                }
            }
            if (!hover) {
                for (const peptideLine of peptideNewLines) {
                    for (const peptideRow of peptideLine.peptideRows) {
                        for (let k: number = peptideRow.start - 1; k < peptideRow.end; k += 1) {
                            if (modisPositionMap[k] != null) {
                                for (const modisPosition of modisPositionMap[k].peptideLineModis) {
                                    if (!hover && x > modisPosition.startX && x < modisPosition.startX + modisPosition.width &&
                                        y > modisPosition.startY && y < modisPosition.startY + modisPosition.height) {
                                        hover = true;
                                        this.drawModificationTooltip(
                                            modisPositionMap, k, x, y, canvas,
                                            tooltipOffsetY, containerHeight,
                                            toolHeight, selectedModifications);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (!hover) {
                document.getElementById("coverageTool").style.display = "none";
            }
        };
    }
    private drawSelectedPeptideLine(ctx: CanvasRenderingContext2D, startX: number): void {
        ctx.save();
        ctx.strokeStyle = "#FF7F50";
        for (const peptideRow of this.props.selectedPeptide.peptideRows) {
            ctx.rect(peptideRow.startX - 1, peptideRow.sequenceStartY - 17, peptideRow.width + 2, 22);
        }
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = "#7B68EE";
        drawOnePeptideLine(
            ctx, this.props.selectedPeptide, this.props.selectedModifications,
            this.state.aaPerLine, this.state.aaPerCol, startX);
        ctx.restore();
    }
    private buildModificationData(
        supportPeptides: (ISupportPeptide | ISupportPeptideFeatureVector)[]): { [position: number]: ModiForPosition } {
        const modisMap: { [position: number]: ModiForPosition } = {};
        for (const peptide of supportPeptides) {
            const modificationNames: string[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
                (peptide as ISupportPeptide).peptide.modifications :
                (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.modifications;
            const positionOfModifications: number[] = this.props.option !== Option.LFQ_PROTEIN_COVERAGE ?
                (peptide as ISupportPeptide).peptide.positionOfModifications :
                (peptide as ISupportPeptideFeatureVector).peptideFeatureVector.positionOfModifications;
            const abbrModiList: PeptideLineModi[] = ModificationHelper.getPeptideAbbrModiList(
                modificationNames, positionOfModifications,
                this.props.ptmMap);
            const newPositionList: number[] = [];
            for (const posi of positionOfModifications) {
                if (newPositionList.indexOf(posi) < 0) {
                    newPositionList.push(posi);
                }
            }
            abbrModiList.map((peptideModi: PeptideLineModi, index: number) => {
                const position: number = newPositionList[index];
                if (modisMap[peptide.start + position] === undefined) {
                    const pepTideLineModis: PeptideLineModi[] = [];
                    const modiPosition: ModiForPosition = {
                        peptideLineModis: pepTideLineModis
                    };
                    modisMap[peptide.start + position] = modiPosition;
                }
                if (!this.checkModiIsExist(modisMap[peptide.start + position], peptideModi)) {
                    modisMap[peptide.start + position].peptideLineModis.push(peptideModi);
                }
            });
        }

        return modisMap;
    }
    private checkModiIsExist(modis: ModiForPosition, peptideLineNewModi: PeptideLineModi): boolean {
        const length: number = peptideLineNewModi.modifications.length;
        let isContinue: boolean = false;
        for (const peptideLineModi of modis.peptideLineModis) {
            isContinue = false;
            if (peptideLineModi.modifications.length !== length) {
                continue;
            }
            for (let sub: number = 0; sub < length; sub += 1) {
                for (let subj: number = 0; subj < length; subj += 1) {
                    if (this.isSameModification(
                        peptideLineNewModi.modifications[sub],
                        peptideLineModi.modifications[subj])) {
                        break;
                    }
                    //if we don't find it until last record, will return false.
                    if (subj === length - 1) {
                        isContinue = true;
                    }
                }
                if (isContinue) {
                    break;
                }
                //if all records match, will return true.
                if (sub === length - 1) {
                    return true;
                }
            }
        }

        return false;
    }
}

export { CoverageProteinPeptide, ProteinsCoverage, Option };
