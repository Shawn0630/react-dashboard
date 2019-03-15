import { com } from "~models/example";
import IAbbreviatedModification = com.example.dto.IAbbreviatedModification;
import ModificationType = com.example.dto.ModificationType;
import ISupportPeptide = com.example.dto.ISupportPeptide;
import IFeatureVectorProfile = com.bsi.peaks.model.dto.peptide.IFeatureVectorProfile;
import { ModificationHelper } from "~utilities/modification-helper";

export interface StartEnds {
    start: number; //inclusive
    end: number; //exclusive
    coloured?: boolean;
    col?: number;
}
export interface PeptidesStartEnds extends StartEnds {
    ptmHeight?: number;
    peptideHeight?: number;
}

export interface SequencePosition {
    position: number;
    startX: number;
    startY: number;
    width: number;
    height: number;
}

export interface PeptideLine {
    peptideRows: PeptideInRow[];
    position: string;
    sampleName: string;
    sampleArea: string;
    scanName: string;
    rt: string;
    pValue: string;
    peptideSequence: string;
    supportPeptide: ISupportPeptide;
}

export interface LFQPeptideLine {
    peptideRows: PeptideInRow[];
    position: string;
    quality: string;
    significance: string;
    avgPPM: string;
    avgArea: string;
    vector: string;
    maxRatio: string;
    groupNames: string[];
    groupProfiles: IFeatureVectorProfile[];
    peptideSequence: string;
    supportPeptide: ISupportPeptide;
}

export interface PeptideInRow {
    start: number;
    end: number;
    startX: number;
    width: number;
    startY: number;
    height: number;
    row: number;
    subRow: number;
    sequenceStartY: number;
    modifications: IAbbreviatedModification[];
    positionOfModi: number[];
}

export interface SampleFrequencyInfo {
    start: number;
    end: number;
    startX: number;
    startY: number;
    color: string;
    symbol: string;
    row: number;
    subRow: number;
    peptideCount: number;
    position: number;
    isColored?: boolean;
}

export interface SampleSummaryInfo {
    sampleName: string;
    sampleData: SampleFrequencyInfo[];
}

export interface PeptideLineModi {
    startX: number;
    width: number;
    startY: number;
    height: number;
    modifications: IAbbreviatedModification[];
}

export interface ModiForPosition {
    peptideLineModis: PeptideLineModi[];
}

export function drawProteinSequence(
    ctx: CanvasRenderingContext2D, peptides: PeptidesStartEnds[][],
    startX: number, startY: number, rowCount: number, colCount: number,
    sequence: string, lineSpace: number, sampleNumber: number,
    selectedModifications: { [name: string]: boolean },
    modisMap: { [position: number]: ModiForPosition }): SequencePosition[] {
    let offsetY: number = 0;
    let offsetX: number = 0;
    let peptideRowHeight: number = 0;
    const positionOfSeqs: SequencePosition[] = [];
    ctx.canvas.style.letterSpacing = "2px";
    ctx.font = "20px Courier New";
    ctx.textBaseline = "alphabetic";
    for (const row of peptides) {
        let ptmHeight: number = 0;
        let previousPepTideHeight: number = 0;
        for (const col of row) {
            if (col.ptmHeight != null && col.ptmHeight !== 0) {
                ptmHeight = col.ptmHeight * 14 + 10;
            }
            if (col.coloured) {
                ctx.save();
                ctx.canvas.style.letterSpacing = "2px";
                ctx.fillStyle = "#aaa";
                ctx.fillRect(startX + offsetX, startY + offsetY + ptmHeight + peptideRowHeight - 16, (col.end - col.start) * 14, 20);
                ctx.font = "bold 20px Courier New";
                ctx.fillStyle = "black";
                ctx.fillText(sequence.substring(col.start, col.end), startX + offsetX, startY + offsetY + ptmHeight + peptideRowHeight);
                ctx.restore();
            } else {
                ctx.fillText(sequence.substring(col.start, col.end), startX + offsetX, startY + offsetY + ptmHeight + peptideRowHeight);
            }
            //store sequence position for each character
            let offsetChar: number = 0;
            for (let inc: number = col.start; inc < col.end; inc += 1) {
                const positionOfSeq: SequencePosition = {
                    position: inc,
                    startX: startX + offsetX + offsetChar * 14,
                    startY: startY + offsetY + ptmHeight + peptideRowHeight - 16,
                    width: 14,
                    height: 20
                };
                positionOfSeqs.push(positionOfSeq);
                offsetChar += 1;
            }

            offsetX = (col.end % rowCount) * 14 + Math.floor((col.end % rowCount) / colCount) * 14;
            //draw modification
            if (modisMap != null) {
                drawModificationForSequence(
                    ctx, col, ptmHeight, modisMap, peptideRowHeight, selectedModifications,
                    startX, startY, offsetY, rowCount, colCount);
            }
            // affect the next line
            if (sampleNumber == null && col.peptideHeight != null && col.peptideHeight !== 0) {
                previousPepTideHeight = col.peptideHeight * 10;
            }

            if (sampleNumber != null) {
                previousPepTideHeight = sampleNumber * 20;
            }
        }
        offsetX = 0;
        offsetY = offsetY + ptmHeight + lineSpace + peptideRowHeight;
        peptideRowHeight = previousPepTideHeight;
    }
    return positionOfSeqs;
}

export function drawSequencePosition(
    ctx: CanvasRenderingContext2D, peptides: PeptidesStartEnds[][],
    startY: number, lineSpace: number, rowCount: number,
    colCount: number, startX: number, peptideLines: (PeptideLine | LFQPeptideLine)[],
    selectedModifications: { [name: string]: boolean }): void {
    //draw the position for modification
    ctx.fillStyle = "grey";
    ctx.textAlign = "right";
    let count: number = 1;
    let rowNumber: number = 1;
    let offsetY: number = 0;
    let peptideRowHeight: number = 0;
    ctx.font = "20px Courier New";
    for (const row of peptides) {
        let ptmHeight: number = 0;
        let previousPepTideHeight: number = 0;
        if (row[0].ptmHeight != null && row[0].ptmHeight !== 0) {
            ptmHeight = row[0].ptmHeight * 14 + 10;
        }
        if (row[0].peptideHeight != null && row[0].peptideHeight !== 0) {
            previousPepTideHeight = row[0].peptideHeight * 10;
        }
        ctx.fillText(count.toString(), 100, startY + offsetY + ptmHeight + peptideRowHeight);
        //draw peptide line for the protein sequence
        const sequenceStartY: number = startY + offsetY + ptmHeight + peptideRowHeight;
        ctx.save();
        drawPeptideLineForSequence(
            ctx, rowNumber, peptideLines, startX, startY,
            offsetY + ptmHeight + peptideRowHeight, rowCount,
            colCount, selectedModifications, sequenceStartY);
        ctx.restore();
        count = count + rowCount;
        rowNumber = rowNumber + 1;
        offsetY = offsetY + ptmHeight + lineSpace + peptideRowHeight;
        peptideRowHeight = previousPepTideHeight;
    }
}

export function drawSampleFrequencyPosition(
    ctx: CanvasRenderingContext2D, peptides: PeptidesStartEnds[][],
    startY: number, lineSpace: number, rowCount: number,
    colCount: number, startX: number, sampleFrequency: SampleSummaryInfo[]): void {
    //draw the position for modification
    ctx.fillStyle = "grey";
    ctx.textAlign = "right";
    ctx.canvas.style.letterSpacing = "0px";
    let count: number = 1;
    let rowNumber: number = 1;
    let offsetY: number = 0;
    let peptideRowHeight: number = 0;
    ctx.font = "20px Courier New";
    for (const row of peptides) {
        let ptmWidth: number = 0;
        let previousPepTideHeight: number = 0;
        for (const col of row) {
            if (col.ptmHeight != null && col.ptmHeight !== 0) {
                ptmWidth = col.ptmHeight * 14 + 10;
            }
            previousPepTideHeight = sampleFrequency.length * 15;
            break;
        }
        ctx.fillText(count.toString(), 60, startY + offsetY + ptmWidth + peptideRowHeight);
        //draw peptide line for the protein sequence
        ctx.save();
        ctx.font = "15px Roboto";
        let currentRow: number = 0;
        for (const frequency of sampleFrequency) {
            ctx.fillText(frequency.sampleName, 80, startY + offsetY + ptmWidth + currentRow + lineSpace + peptideRowHeight);
            drawSampleFrequency(
                ctx, rowNumber, frequency.sampleData, startX, startY,
                offsetY + ptmWidth + peptideRowHeight, rowCount, colCount);
            offsetY += 5;
            currentRow += 15;
        }
        ctx.restore();
        count = count + rowCount;
        rowNumber = rowNumber + 1;
        offsetY = offsetY + lineSpace + peptideRowHeight + ptmWidth;
        peptideRowHeight = previousPepTideHeight;
    }
}

function drawModificationForSequence(
    ctx: CanvasRenderingContext2D, col: PeptidesStartEnds, ptmHeight: number,
    modisMap: { [position: number]: ModiForPosition }, peptideRowHeight: number,
    selectedModifications: { [name: string]: boolean },
    startX: number, startY: number, offsetY: number, rowCount: number, colCount: number): void {
    //tslint:disable-line:max-func-body-length
    if (ptmHeight !== 0) {
        ctx.save();
        for (let k: number = col.start; k < col.end; k += 1) {
            if (modisMap[k] != null) {
                let ptmOffsetY: number = 0;
                let ptmOffsetX: number = 0;
                let isDrawPtm: boolean = false;
                if ((k + 1) % rowCount === 0) {
                    //handle the last character of a line
                    ptmOffsetX = (k % rowCount + rowCount / colCount - 1) * 14;
                } else if (((k + 1) % rowCount) % 10 === 0) {
                    //handle the last character of a column
                    ptmOffsetX = (k % rowCount + Math.floor(((k + 1) % rowCount) / colCount) - 1) * 14;
                } else {
                    ptmOffsetX = (k % rowCount + Math.floor(((k + 1) % rowCount) / colCount)) * 14;
                }
                ctx.canvas.style.letterSpacing = "2px";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 1;
                for (const peptideLineModi of modisMap[k].peptideLineModis) {
                    if (peptideLineModi.modifications.length === 1) {
                        if (selectedModifications[peptideLineModi.modifications[0].name] === true) {
                            isDrawPtm = true;
                            const modiStyle: string =
                                ModificationHelper.getColorFromPTMInCoverage(peptideLineModi.modifications[0].abbreviation);
                            ctx.fillStyle = modiStyle;
                            ctx.font = "14px Courier New";
                            ctx.fillRect(startX + ptmOffsetX, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 30, 14, 14);
                            //update modification position in modisMap
                            peptideLineModi.startX = startX + ptmOffsetX;
                            peptideLineModi.startY = startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 30;
                            peptideLineModi.height = 14;
                            peptideLineModi.width = 14;
                            if (peptideLineModi.modifications[0].type === ModificationType.MUTATION) {
                                ctx.strokeRect(startX + ptmOffsetX, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 30,
                                               14, 14);
                            }
                            ctx.fillStyle = "black";
                            ctx.font = "12px Roboto";
                            ctx.textBaseline = "alphabetic";
                            const ptm: string = peptideLineModi.modifications[0].abbreviation != null ?
                                peptideLineModi.modifications[0].abbreviation.charAt(0) : "";
                            ctx.fillText(ptm, startX + ptmOffsetX + 4, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 19);
                            ptmOffsetY = ptmOffsetY + 14;
                        }
                    } else {
                        let isDisplay: boolean = true;
                        for (const modi of peptideLineModi.modifications) {
                            if (selectedModifications[modi.name] === false) {
                                isDisplay = false;
                                break;
                            }
                        }
                        if (isDisplay) {
                            isDrawPtm = true;
                            const modi1Style: string =
                                ModificationHelper.getColorFromPTMInCoverage(peptideLineModi.modifications[0].abbreviation);
                            ctx.fillStyle = modi1Style;
                            ctx.font = "14px Courier New";
                            ctx.fillRect(startX + ptmOffsetX, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 30, 14, 7);
                            if (peptideLineModi.modifications[0].type === ModificationType.MUTATION) {
                                ctx.strokeRect(startX + ptmOffsetX, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 30,
                                               14, 7);
                            }
                            const modi2Style: string =
                                ModificationHelper.getColorFromPTMInCoverage(peptideLineModi.modifications[1].abbreviation);
                            ctx.fillStyle = modi2Style;
                            ctx.fillRect(startX + ptmOffsetX, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 23, 14, 7);
                            //update modification position in modisMap
                            peptideLineModi.startX = startX + ptmOffsetX;
                            peptideLineModi.startY = startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 30;
                            peptideLineModi.height = 14;
                            peptideLineModi.width = 14;
                            if (peptideLineModi.modifications[1].type === ModificationType.MUTATION) {
                                ctx.strokeRect(startX + ptmOffsetX,
                                               startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 23, 14, 7);
                            }
                            ctx.fillStyle = "black";
                            ctx.font = "12px Roboto";
                            ctx.textBaseline = "alphabetic";
                            ctx.fillText("*", startX + ptmOffsetX + 4, startY + offsetY + ptmHeight + peptideRowHeight - ptmOffsetY - 19);
                            ptmOffsetY = ptmOffsetY + 14;
                        }
                    }
                }
                //draw ptm position number
                if (isDrawPtm) {
                    ctx.save();
                    ctx.canvas.style.letterSpacing = "-1px";
                    ctx.textAlign = "center";
                    ctx.font = "9px Roboto";
                    ctx.fillText((k + 1).toString(), startX + ptmOffsetX + 7,
                                 startY + ptmHeight + peptideRowHeight + offsetY - ptmOffsetY - 19);
                    ptmOffsetY = ptmOffsetY + 24;
                    ctx.restore();
                }
            }
        }
        ctx.restore();
    }
}

function drawPeptideLineForSequence(ctx: CanvasRenderingContext2D, rowNumber: number,
                                    peptideLines: (PeptideLine | LFQPeptideLine)[], startX: number, startY: number,
                                    offsetY: number, rowCount: number, colCount: number,
                                    selectedModifications: { [name: string]: boolean },
                                    sequenceStartY: number): void {
    ctx.fillStyle = "#57A1FF";
    for (const peptideLine of peptideLines) {
        for (let sub: number = 0; sub < peptideLine.peptideRows.length; sub = sub + 1) {
            if (peptideLine.peptideRows[sub].row === rowNumber) {
                let peptideLineEndOffsetX: number = 0;
                let peptideLineStartOffsetX: number = 0;
                let offsetDrawStart: number = 0;
                let offsetDrawEnd: number = 0;
                if (peptideLine.peptideRows[sub].end % rowCount === 0) {
                    //handle the last character of a line
                    peptideLineEndOffsetX = (rowCount - colCount) / colCount * 14;
                } else {
                    peptideLineEndOffsetX = (Math.ceil((peptideLine.peptideRows[sub].end % rowCount) / colCount) - 1) * 14;
                }

                if (peptideLine.peptideRows[sub].start % rowCount === 0) {
                    //handle the last character of a line
                    peptideLineStartOffsetX = (rowCount - colCount) / colCount * 14;
                } else {
                    peptideLineStartOffsetX = (Math.ceil((peptideLine.peptideRows[sub].start % rowCount) / colCount) - 1) * 14;
                }
                const peptideWidth: number = peptideLineEndOffsetX - peptideLineStartOffsetX +
                    (peptideLine.peptideRows[sub].end - peptideLine.peptideRows[sub].start + 1) * 14;
                const peptideOffsetY: number = peptideLine.peptideRows[sub].subRow * 10;
                const peptideOffsetX: number = peptideLineStartOffsetX +
                    ((peptideLine.peptideRows[sub].start % rowCount) === 0 ? (rowCount - 1) * 14 :
                        (peptideLine.peptideRows[sub].start % rowCount - 1) * 14);
                //draw start point
                if (sub === 0) {
                    ctx.fillRect(startX + peptideOffsetX, startY + offsetY + peptideOffsetY - 2, 1, 8);
                    offsetDrawStart = 1;
                }
                //draw end point
                if (sub === (peptideLine.peptideRows.length - 1)) {
                    ctx.fillRect(startX + peptideOffsetX + peptideWidth - 1, startY + offsetY + peptideOffsetY - 2, 1, 8);
                    offsetDrawEnd = 1;
                }
                //draw whole peptide line
                ctx.fillRect(startX + peptideOffsetX + offsetDrawStart, startY + offsetY + peptideOffsetY,
                             peptideWidth - offsetDrawEnd - offsetDrawStart, 4);
                //update peptide line position
                peptideLine.peptideRows[sub].startX = startX + peptideOffsetX;
                peptideLine.peptideRows[sub].startY = startY + offsetY + peptideOffsetY;
                peptideLine.peptideRows[sub].width = peptideWidth;
                peptideLine.peptideRows[sub].height = 8;
                peptideLine.peptideRows[sub].sequenceStartY = sequenceStartY;
                drawModiForPeptideLine(ctx, peptideLine, selectedModifications, rowCount, colCount, peptideLine.peptideRows[sub],
                                       startX, startY + offsetY + peptideOffsetY);
            }
        }
    }
}

export function drawModiForPeptideLine(ctx: CanvasRenderingContext2D, peptideLine: PeptideLine | LFQPeptideLine,
                                       selectedModifications: { [name: string]: boolean },
                                       rowCount: number, colCount: number, peptideRow: PeptideInRow,
                                       startX: number, startY: number): void {
    let offsetModiStartX: number = 0;
    ctx.save();
    //draw modification for this peptide line
    for (let modSub: number = 0; modSub < peptideRow.positionOfModi.length; modSub = modSub + 1) {
        if (selectedModifications[peptideRow.modifications[modSub].name] === true) {
            const positionOfModi: number = peptideRow.positionOfModi[modSub];
            const startOfPosition: number = peptideLine.peptideRows[0].start;
            if ((startOfPosition + positionOfModi) % rowCount === 0) {
                //handle the last character of a line
                offsetModiStartX = (rowCount - colCount) / colCount * 14 +
                    (rowCount - 1) * 14;
            } else {
                offsetModiStartX = (Math.ceil(((startOfPosition + positionOfModi) % rowCount) / colCount) - 1) * 14 +
                    ((startOfPosition + positionOfModi) % rowCount - 1) * 14;
            }
            const firstSub: number = peptideRow.positionOfModi.indexOf(positionOfModi);
            const lastSub: number = peptideRow.positionOfModi.lastIndexOf(positionOfModi);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            if (firstSub === lastSub) {
                const modiStyle: string =
                    ModificationHelper.getColorFromPTMInCoverage(peptideRow.modifications[modSub].abbreviation);
                ctx.fillStyle = modiStyle;
                ctx.textAlign = "center";
                ctx.fillRect(startX + offsetModiStartX + 2, startY - 4, 10, 10);
                if (peptideRow.modifications[modSub].type === ModificationType.MUTATION) {
                    ctx.strokeRect(startX + offsetModiStartX + 2, startY - 4, 10, 10);
                }
            } else {
                const firstModiStyle: string =
                    ModificationHelper.getColorFromPTMInCoverage(peptideRow.modifications[firstSub].abbreviation);
                ctx.fillStyle = firstModiStyle;
                ctx.fillRect(startX + offsetModiStartX + 2, startY - 4, 10, 5);
                if (peptideRow.modifications[firstSub].type === ModificationType.MUTATION) {
                    ctx.strokeRect(startX + offsetModiStartX + 2, startY - 4, 10, 5);
                }
                const lastModiStyle: string =
                    ModificationHelper.getColorFromPTMInCoverage(peptideRow.modifications[lastSub].abbreviation);
                ctx.fillStyle = lastModiStyle;
                ctx.textAlign = "center";
                ctx.fillRect(startX + offsetModiStartX + 2, startY + 1, 10, 5);
                if (peptideRow.modifications[firstSub].type === ModificationType.MUTATION) {
                    ctx.strokeRect(startX + offsetModiStartX + 2, startY + 1, 10, 5);
                }
            }
            ctx.fillStyle = "black";
            ctx.font = "8px Roboto";
            let ptm: string = "";
            if (firstSub === lastSub) {
                ptm = peptideRow.modifications[modSub].abbreviation != null ?
                    peptideRow.modifications[modSub].abbreviation.charAt(0) : "";
            } else {
                ptm = "*";
            }
            ctx.fillText(ptm, startX + offsetModiStartX + 7, startY + 4);
        }
    }
    ctx.restore();
}

function drawSampleFrequency(ctx: CanvasRenderingContext2D, rowNumber: number,
                             sampleFrequencyInfos: SampleFrequencyInfo[], startX: number, startY: number,
                             offsetY: number, rowCount: number, colCount: number): void {
    const singlePeptideWidth: number = 14;
    const peptidePerGroup: number = 10;
    const frequencySequenceHeight: number = 15;
    let previousColor: string = null;
    ctx.save();
    for (const sampleFrequencyInfo of sampleFrequencyInfos) {
        ctx.fillStyle = sampleFrequencyInfo.color;
        if (sampleFrequencyInfo.row === rowNumber) {
            let peptideLineEndOffsetX: number = 0;
            let peptideLineStartOffsetX: number = 0;
            peptideLineEndOffsetX = (Math.ceil(sampleFrequencyInfo.end / peptidePerGroup) - 1) * singlePeptideWidth;

            peptideLineStartOffsetX = (Math.ceil(sampleFrequencyInfo.start / peptidePerGroup) - 1) * singlePeptideWidth;
            const peptideWidth: number = peptideLineEndOffsetX - peptideLineStartOffsetX +
                (sampleFrequencyInfo.end - sampleFrequencyInfo.start + 1) * singlePeptideWidth;
            if (sampleFrequencyInfo.end % peptidePerGroup === 0 && sampleFrequencyInfo.end % 110 !== 0) {
                previousColor = sampleFrequencyInfo.color;
            }
            const peptideOffsetY: number = sampleFrequencyInfo.subRow * frequencySequenceHeight;
            const peptideOffsetX: number = peptideLineStartOffsetX +
                ((sampleFrequencyInfo.start % rowCount) === 0 ? (rowCount - 1) * singlePeptideWidth :
                    (sampleFrequencyInfo.start % rowCount - 1) * singlePeptideWidth);
            if (sampleFrequencyInfo.end % peptidePerGroup === 1 && sampleFrequencyInfo.end !== 1 &&
                sampleFrequencyInfo.color !== "#ffffff") {
                ctx.fillStyle = previousColor;
                //draw whole peptide line
                ctx.fillRect(startX + peptideOffsetX - singlePeptideWidth, startY + offsetY + peptideOffsetY - 5,
                             peptideWidth, frequencySequenceHeight);
            }
            ctx.fillStyle = sampleFrequencyInfo.color;
            //draw whole peptide line
            ctx.fillRect(startX + peptideOffsetX, startY + offsetY + peptideOffsetY - 5,
                         peptideWidth, frequencySequenceHeight);
            sampleFrequencyInfo.startX = startX + peptideOffsetX;
            sampleFrequencyInfo.startY = startY + offsetY + peptideOffsetY - 5;
        }
    }
    ctx.restore();
}
