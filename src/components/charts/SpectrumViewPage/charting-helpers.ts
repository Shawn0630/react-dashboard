import * as d3 from "d3";
import {PeakData} from "./SpectrumView";
import * as styles from "./SpectrumView.scss";

namespace ChartingHelpers {
    export function clearAlignments(graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
        graph.selectAll(".alignment-line").remove();
        graph.selectAll(".alignment-text").remove();
        graph.selectAll(".padding-alignment-line").remove();
        graph.selectAll(".padding-alignment-text").remove();
    }
    export function drawAlignment(graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                                  xScale: d3.ScaleLinear<number, number>, yScale: d3.ScaleLinear<number, number>, label: string,
                                  from: number, to: number, h: number, color: string, isCharge2: boolean = false): void {
        let start: number = from;
        let end: number = to;
        let height: number = h;
        const showLeftArrow: boolean = start > 0;
        const showRightArrow: boolean = end > 0;
        if (start <= 0 && end <= 0) {
            return;
        } else if (start === end) {
            return;
        } else if (start === -1) {
            start = Math.max(0, end - (isCharge2 ? 50 : 100));
        } else if (end === - 1) {
            end = start + (isCharge2 ? 50 : 100);
        }

        let paddingStart: number;
        if (start <= xScale.domain()[0]) {
            paddingStart = xScale.domain()[0] + 1;
        } else {
            paddingStart = start;
        }
        paddingStart = xScale(paddingStart);
        start = xScale(start);
        end = xScale(end);
        height = Math.max(50, Math.min(300, yScale(height * 1.5)));

        //rectangle enclosing arrows to create a white padding
        graph.append("rect")
            .style("fill", "white")
            .attr("class", "padding-alignment-line")
            .attr("clip-path", "url(#clipPath)")
            .attr("x", paddingStart)
            .attr("y", height - 5)
            .attr("width", end - paddingStart)
            .attr("height", 10);

        const line: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = graph.append("line")
            .style("stroke", color)
            .attr("class", "alignment-line")
            .attr("clip-path", "url(#clipPath)")
            .attr("x1", start)
            .attr("x2", end)
            .attr("y1", height)
            .attr("y2", height);

        if (showLeftArrow) {
            line.attr("marker-start", `url(#${color}ArrowLeft`);
        }
        if (showRightArrow) {
            line.attr("marker-end", `url(#${color}ArrowRight`);
        }
        drawAlignmentText(graph, label, (start + end) / 2, height - 5, color);
        if (isCharge2) {
            drawAlignmentText(graph, "2+", (start + end) / 2 - 3, height - 20, color);
        }
    }

    function drawAlignmentText(graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, text: string,
                               x: number, y: number, color: string): void {
        //rectangle enclosing text to create white padding
        const rect: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = graph.append("rect")
            .style("fill", "white")
            .attr("clip-path", "url(#clipPath)")
            .style("font-size", "14px")
            .attr("class", "padding-alignment-text");
        let width: number = 0;
        let height: number = 0;

        function setWidthHeight(this: d3.BaseType, d: {}, index: number, groups: d3.BaseType[] | ArrayLike<d3.BaseType>): void {
            const ele: SVGElement = this as SVGElement;
            const bb: ClientRect = ele.getBoundingClientRect();
            width = bb.width;
            height = bb.height;
        }

        graph.append("text")
            .style("fill", color)
            .attr("clip-path", "url(#clipPath)")
            .style("font-size", "14px")
            .attr("class", "alignment-text")
            .attr("x", x)
            .attr("y", y)
            .text((): string => text)
            .each(setWidthHeight);

        rect.attr("width", width === 0 ? width : width + 10)
            .attr("height", height)
            .attr("x", width === 0 ? 0 : x - 5)
            .attr("y", height === 0 ? 0 : y - 15);
    }

    export function prepareArrows(graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
        graph.append("defs").append("marker")
            .attr("id", "blueArrowRight")
            .attr("markerUnits", "strokeWidth")
            .attr("markerWidth", 12)
            .attr("markerHeight", 12)
            .attr("viewBox", "0 0 12 12")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("orient", 0)
            .attr("clip-path", "url(#clipPath)")
            .append("path")
                .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
                .style("fill", "blue");

        graph.append("defs").append("marker")
            .attr("id", "blueArrowLeft")
            .attr("markerUnits", "strokeWidth")
            .attr("markerWidth", 12)
            .attr("markerHeight", 12)
            .attr("viewBox", "0 0 12 12")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("orient", "180deg")
            .attr("clip-path", "url(#clipPath)")
            .append("path")
                .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
                .style("fill", "blue");

        graph.append("defs").append("marker")
            .attr("id", "redArrowRight")
            .attr("markerUnits", "strokeWidth")
            .attr("markerWidth", 12)
            .attr("markerHeight", 12)
            .attr("viewBox", "0 0 12 12")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("orient", 0)
            .attr("clip-path", "url(#clipPath)")
            .append("path")
                .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
                .style("fill", "red");

        graph.append("defs").append("marker")
            .attr("id", "redArrowLeft")
            .attr("markerUnits", "strokeWidth")
            .attr("markerWidth", 12)
            .attr("markerHeight", 12)
            .attr("viewBox", "0 0 12 12")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("orient", "180deg")
            .attr("clip-path", "url(#clipPath)")
            .append("path")
                .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
                .style("fill", "red");
    }
}

namespace BoundBoxHelpers {
    export interface BoundingBox {
        top: number; //top < bottom
        bottom: number;
        left: number; // left < right
        right: number;
    }
    export function isOverlap(b1: BoundingBox, b2: BoundingBox): boolean {
        let leftRigtOverlap: boolean = false;
        let topBotOverlap: boolean = false;

        if (b2.left >= b1.left && b1.right >= b2.left) {//b2 to the right of b1 and overlapping in y-dim
            leftRigtOverlap = true;
        } else if (b1.left >= b2.left && b2.right >= b1.left) {//b1 to the right of b2 and overlapping in y-dim
            leftRigtOverlap = true;
        }

        if (b2.bottom >= b1.bottom && b1.bottom >= b2.top) {//b2 higher then b1 and overlaping in y-dim
            topBotOverlap = true;
        } else if (b1.bottom >= b2.bottom && b2.bottom >= b1.top) {//b1 higher then b2 and overlapping in y-dim
            topBotOverlap = true;
        }

        return leftRigtOverlap && topBotOverlap;
    }

    export function printBoundingBox(b: BoundingBox): string {
        return "{top:".concat(b.top.toString()).concat(",")
            .concat("bottom:").concat(b.bottom.toString()).concat(",")
            .concat("left:").concat(b.left.toString()).concat(",")
            .concat("right:").concat(b.right.toString()).concat("}");
    }
}
namespace ToolTipHelper {
    export function getToolTipSelection(): d3.Selection<d3.BaseType, {}, HTMLElement, {}> {
        let toolTip: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("body")
            .select(".".concat(styles.tooltip));

        if (toolTip.node() == null) {
            toolTip = d3.select("body").append("div")
                .attr("class", styles.tooltip)
                .style("display", "none");
        }

        return toolTip;
    }
    export function generateTooltip(peak: PeakData, showPercent: boolean): string {
        return `${peak.ion != null ? `${peak.label}<br/>` : ""}
            ${peak.mz.toFixed(2)}<br/>
            ${showPercent ? (peak.percentIntensity * 100).toFixed(1).concat("%")
                : peak.intensity.toExponential(2)}
            ${peak.ion != null ? `<br/>${peak.error.toFixed(2)}ppm` : ""}`;
    }
}

namespace IonLabelHelper {
    interface IonMzLabel {
        id: string;
        ionLabel: string;
        mzLabel: string;
        realMzPos: number;
        realIntensPos: number;
        rect: ClientRect;
        scaledX?: number;
        scaledY?: number;
    }
    function saveRectInfo<D>(saveMethod: (d: D, rect: ClientRect) => void):
        (this: d3.BaseType, data: D, index: number, groups: d3.BaseType[] | ArrayLike<d3.BaseType>) => void {
        function fcn(this: d3.BaseType, data: D, index: number, groups: d3.BaseType[] | ArrayLike<d3.BaseType>): void {
            const ele: SVGElement = this as SVGElement;
            const rect: ClientRect = ele.getBoundingClientRect();
            saveMethod(data, rect);
        }

        return fcn;
    }
    function createIdForPeakData(p: PeakData): string {
        return "Q".concat(p.mz.toString().replace(".", "Q"));
    }
    function buildAndGetIonLabels(graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, peaks: PeakData[],
                                  xScale: d3.AxisScale<number>, yScale: d3.AxisScale<number>, showPercent: boolean): IonMzLabel[] {
        const labels: IonMzLabel[] = [];
        function getIntensity(peak: PeakData): number {
            return showPercent ? peak.percentIntensity : peak.intensity;
        }

        const tooltip: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = ToolTipHelper.getToolTipSelection();

        graph.selectAll(".ion-label").remove();
        const ionData: PeakData[] = peaks.filter((peak: PeakData) => peak.ion != null);
        graph.selectAll(".labels")
            .data(ionData).enter().append("text")
                .attr("id", createIdForPeakData)
                .attr("text-anchor", "middle")
                .attr("class", "ion-label")
                .attr("clip-path", "url(#clipPath)")
                .style("font-size", "12px")
                .text((ion: PeakData) => ion.label)
                .attr("fill", (ion: PeakData) => ion.color)
                .attr("x", (ion: PeakData) => xScale(ion.mz))
                .attr("y", (ion: PeakData) => yScale(getIntensity(ion)) - 5)
                .on("mouseover", (peak: PeakData): void => {
                    tooltip.style("display", "inline");
                })
                .on("mousemove", (peak: PeakData): void => {
                    tooltip.html(ToolTipHelper.generateTooltip(peak, showPercent)) // tslint:disable-line
                        .style("color", peak.color)
                        .style("left", `${(d3.event.pageX as number) + 15}px`)
                        .style("top", `${(d3.event.pageY as number)}px`);
                })
                .on("mouseout", (peak: PeakData): void => {
                    tooltip.style("display", "none");
                })
                .sort((i1: PeakData, i2: PeakData) => {
                    return i1.ion.type !== i2.ion.type ? i1.ion.type - i2.ion.type : getIntensity(i2) - getIntensity(i1);
                })
                .each(saveRectInfo((peak: PeakData, rect: ClientRect): void => { //save label rectangle info to check for collisions
                    if (peak.ion !== undefined) {
                        labels.push({ //save peak info
                            id: createIdForPeakData(peak),
                            realMzPos: peak.mz,
                            realIntensPos: getIntensity(peak),
                            ionLabel: peak.label,
                            mzLabel: peak.mz.toFixed(2),
                            rect: {
                                ...rect,
                                top: yScale(getIntensity(peak)) - 5 - rect.height,
                                bottom: yScale(getIntensity(peak)) - 5,
                                left: xScale(peak.mz) - rect.width / 2,
                                right: xScale(peak.mz) + rect.width / 2
                            },
                            scaledX: xScale(peak.mz), scaledY: yScale(getIntensity(peak)) - 5
                        });
                    }
                }));

        return labels;
    }
    export function drawLabels(graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, peaks: PeakData[],
                               xScale: d3.AxisScale<number>, yScale: d3.AxisScale<number>, showPercent: boolean,
                               consumedSpace: BoundBoxHelpers.BoundingBox[]): void {
        const allLabels: IonMzLabel[] = buildAndGetIonLabels(graph, peaks, xScale, yScale, showPercent);
        for (const label of allLabels) {
            let isOverlap: boolean = false;
            let labelBoundingBox: BoundBoxHelpers.BoundingBox = {
                top: label.rect.top,
                bottom: label.rect.bottom,
                left: label.rect.left,
                right: label.rect.right
            };
            //if label to high move down and to the right
            if (label.realIntensPos > yScale.domain()[1] * 0.95) {
                const height: number = label.rect.bottom - label.rect.top;
                const width: number = label.rect.right - label.rect.left;
                const newX: number = label.scaledX + 5 + width / 2;
                const newY: number = yScale(yScale.domain()[1] * 0.95);
                graph.select("#".concat(label.id)) //redraw in new position
                    .attr("x", newX)
                    .attr("y", newY)
                    .each(() => {
                        labelBoundingBox = { //update bounding box to correctly calculate collisions
                            top: newY - height,
                            bottom: newY,
                            left: newX - width / 2,
                            right: newX + width / 2
                        };
                    });
            }

            //check for collisions
            for (const boundingBox of consumedSpace) {
                if (BoundBoxHelpers.isOverlap(boundingBox, labelBoundingBox)) {
                    isOverlap = true;
                    break;
                }
            }
            if (isOverlap) {
                graph.select("#".concat(label.id)).attr("display", "none");
            } else {
                consumedSpace.push(labelBoundingBox);
            }
        }
    }
}

export {BoundBoxHelpers, ChartingHelpers, IonLabelHelper, ToolTipHelper };
