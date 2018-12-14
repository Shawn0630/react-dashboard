import * as React from "react";
import * as styles from "./SpectrumView.scss"
import * as d3 from "d3";
import { config } from "~/config";
import { BoundBoxHelpers, ChartingHelpers, IonLabelHelper, ToolTipHelper } from "./charting-helpers";
import { IonHelpers } from "./ion-helpers";
import { com } from "~models/example";
import IonType = com.example.dto.IonType;
import IIon = com.example.dto.IIon;
import ITheoreticalIons = com.example.dto.ITheoreticalIons;

interface ExperimentalSpectrum {
    mz: number[];
    intensity: number[];
    basePeakIntensity: number;
}

interface ExtendedIon extends IIon {
    label: string;
    color: string;
}

interface TheoreticalIons {
    type: IonType;
    mz: number[];
}

interface TheoreticalIonMatch {
    theoreticalIons: ITheoreticalIons[];
    ions: IIon[];
    sequence: string;
    maxError: number;
    errorUnit: "da" | "ppm";
}

interface AlignmentData {
    seq: string;
    label: string;
    bStart: number;
    bEnd: number;
    bHeight: number;
    yStart: number;
    yEnd: number;
    yHeight: number;
    b2Start: number;
    b2End: number;
    b2Height: number;
    y2Start: number;
    y2End: number;
    y2Height: number;
    hasIon: boolean;
    hasBIon: boolean;
    hasYIon: boolean;
}

interface PeakData {
    mz: number;
    intensity: number;
    percentIntensity: number;
    color: string;
    ion?: IIon;
    label?: string;
    error?: number;
    errorDa?: number;
}

interface SpectrumProps {
    id?: string;
    experimentalSpectrum: ExperimentalSpectrum;
    theoreticalIonMatch?: TheoreticalIonMatch;
    showPercent: boolean;
    stats?: {[key: string]: string};
    className?: string;
}

type MarginType = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

class SpectrumView extends React.PureComponent<SpectrumProps> {
    private margin: MarginType = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 50
    };
    private svg: d3.Selection<SVGElement, {}, HTMLElement, {}>;
    private graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}>;
    private x: d3.ScaleLinear<number, number>;
    private y: d3.ScaleLinear<number, number>;
    private width: number;
    private height: number;
    private minMz: number;
    private maxMz: number;
    private maxY: number;
    private zoomX: d3.ZoomBehavior<Element, {}>;
    private zoomY: d3.ZoomBehavior<Element, {}>;
    private yAxisLabel: d3.Selection<d3.BaseType, {}, HTMLElement, {}>;
    private originalPeaksData: PeakData[];
    private originalMinMz: number;
    private originalMaxMz: number;
    private peaksData: PeakData[];

    private canvas: HTMLCanvasElement;

    private specHandlerZoomId: string = this.props.id == null ? "spectrum-zoom-rect" : this.props.id.concat("spectrum-zoom-rect");
    private containerId: string = this.props.id == null ? "spectrum-view-container" : this.props.id.concat("spectrum-view-container");
    private specSvgId: string = this.props.id == null ? "spectrum" : this.props.id.concat("spectrum");
    private errSvgId: string = this.props.id == null ? "error-map" : this.props.id.concat("error-map");
    private specSvgContentId: string = this.props.id == null ? "spectrum-content" : this.props.id.concat("spectrum-content");
    private specSvgyGId: string = this.props.id == null ? "spectrum-yG" : this.props.id.concat("spectrum-yG");
    private specSvgyGLabelId: string = this.props.id == null ? "spectrum-yG-label" : this.props.id.concat("spectrum-yG-label");
    private specSvgxGId: string = this.props.id == null ? "spectrum-xG" : this.props.id.concat("spectrum-xG");
    private specBackgroundId: string = this.props.id == null ? "spectrum-background" : this.props.id.concat("spectrum-background");
    private specMarkerId: string = this.props.id == null ? "spectrum-marker" : this.props.id.concat("spectrum-marker");
    private canvasId: string = this.props.id == null ? "spectrum-canvas" : this.props.id.concat("spectrum-canvas");

    private DOMAIN_SCALE_ON_Y: number = 1.1;
    private DOMAIN_SCALE_ON_X: number = 1.05;
    private DOTS_PER_PIXEL: number = 1.5;

    constructor(props: SpectrumProps) {
        super(props);
    }
    public componentDidUpdate(nextProps: SpectrumProps): void {
        if (nextProps.showPercent !== this.props.showPercent) {
            this.updateYAxis();
        } else if ((nextProps.theoreticalIonMatch != null &&
            this.props.theoreticalIonMatch != null &&
            nextProps.theoreticalIonMatch.theoreticalIons !== this.props.theoreticalIonMatch.theoreticalIons)) {
            this.renderChart();
        } else if ((nextProps.theoreticalIonMatch != null &&
            this.props.theoreticalIonMatch != null &&
            nextProps.theoreticalIonMatch.sequence !== this.props.theoreticalIonMatch.sequence) ||
            (nextProps.experimentalSpectrum != null &&
            this.props.experimentalSpectrum != null &&
            JSON.stringify(nextProps.experimentalSpectrum) !== JSON.stringify(this.props.experimentalSpectrum))) {
            this.renderChart();
        }
    }
    public componentDidMount(): void {
        this.renderChart();
    }
    public render(): JSX.Element {
        if (this.props.experimentalSpectrum == null) {
            return null;
        } else {
            const showErrorMap: boolean = this.props.theoreticalIonMatch != null;
            return <div id={this.containerId} className={`${this.props.className == null ?
                styles.spectrumView : this.props.className} ${styles.spectrum}`} style={{height: showErrorMap ? 560 : 400}}>
                    <canvas id={this.canvasId}></canvas>
                    <svg id={this.specSvgId} width="100%" height="400" style={{position: "absolute", left: 0, top: 0}} />
                    {!showErrorMap ? null :
                        <svg id={this.errSvgId} width="100%" height="160" style={{position: "absolute", left: 0, top: 400}} />}
            </div>;
        }
    }
    public resetZoom(): void {
        this.svg.select(".x-zoom").call(this.zoomX.transform, d3.zoomIdentity);
        this.svg.select(".y-zoom").call(this.zoomY.transform, d3.zoomIdentity);
    }
    private renderChart(): void {
        // First calculate width and height for spectrum
        this.svg = d3.select("#".concat(this.specSvgId));
        this.width = parseFloat(this.svg.style("width").replace("px", "")) - this.margin.left - this.margin.right;
        this.height = parseFloat(this.svg.attr("height").replace("px", "")) - this.margin.top - this.margin.bottom;
        this.svg.selectAll("*").remove();
        this.graph = this.svg.append("g").attr("id", this.specSvgContentId)
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
        this.canvas = d3.select(`#${this.canvasId}`)
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("style", `position: relative; top: ${this.margin.top}px; left: ${this.margin.left - 0.5}px`)
            .node() as HTMLCanvasElement;
        if (this.props.theoreticalIonMatch != null) {
            const uniqueIons: { [key: string]: ExtendedIon } = this.getUniqueIons(this.props.theoreticalIonMatch.ions);
            this.originalPeaksData = this.peaksFromIonMatch(uniqueIons);
            const alignments: AlignmentData[] = this.getAlignment();
            this.drawAlignment(alignments);
        } else if (this.props.experimentalSpectrum != null) {
            this.originalPeaksData = this.peaksFromExpSpectrum();
        } else {
            return;
        }
        const minMz: number = this.originalPeaksData.length > 0 ? this.originalPeaksData[0].mz : 0;
        const maxMz: number = this.originalPeaksData.length > 0 ? this.originalPeaksData[this.originalPeaksData.length - 1].mz : 0;
        this.peaksData = this.preprocessPeaks(this.originalPeaksData, minMz, maxMz);
        const maxY: number = this.props.showPercent ? this.DOMAIN_SCALE_ON_Y : this.getMaxIntensity() * this.DOMAIN_SCALE_ON_Y;
        this.prepareChart(0, maxMz * this.DOMAIN_SCALE_ON_X, maxY);
        this.drawSpectrum();
        this.drawStats();
        this.drawTooltips();
    }
    private prepareChart(minMz: number, maxMz: number, maxY: number): void {
        this.minMz = minMz;
        this.maxMz = maxMz;
        this.originalMinMz = minMz;
        this.originalMaxMz = maxMz;
        this.maxY = maxY;
        // labels
        this.svg.append("text") // x axis label
            .attr("class", styles.axisLabel)
            .attr("transform", `translate(${this.width + this.margin.left + 5}, ${this.height + this.margin.bottom - 5})`)
            .text("m/z");
        this.yAxisLabel = this.svg.append("text")
            .attr("class", styles.axisLabel)
            .attr("id", this.specSvgyGLabelId)
            .attr("transform", `translate(${this.margin.left - 23}, ${this.margin.top - 5})`);
        // clip path
        this.graph.append("clipPath").attr("id", "clipPath").append("rect").attr("width", this.width).attr("height", this.height);
        // background
        this.graph.append("rect").attr("fill", "transparent").attr("id", this.specBackgroundId)
            .attr("width", this.width).attr("height", this.height);

        // x/y axis scale
        this.x = d3.scaleLinear<number>().rangeRound([0, this.width]);
        this.y = d3.scaleLinear<number>().rangeRound([this.height, 0]);
        this.x.domain([0, this.maxMz]);
        this.y.domain([0, this.maxY]);

        // create zooms
        this.zoomY = this.createYZoom();
        this.zoomX = this.createXZoom();
        if (this.props.theoreticalIonMatch != null) {
            this.createErrXZoom();
        }
    }
    private createXZoom(): d3.ZoomBehavior<Element, {}> {
        const zoomX: d3.ZoomBehavior<Element, {}> = d3.zoom()
            .scaleExtent([1, this.props.theoreticalIonMatch == null ? 1000 : 64])
            .translateExtent([[0, 0], [this.width + this.margin.left + this.margin.right, this.height]])
            .on("zoom", this.updateX().bind(this));
        this.graph.append("svg:rect") //zoomYRect
            .attr("id", this.specHandlerZoomId)
            .attr("class", "x-zoom")
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("pointer-events", "all")
            .attr("visibility", "hidden")
            .on("wheel", () => {
                d3.event.preventDefault();
                d3.event.stopPropagation();
            }).call(zoomX);
        return zoomX;
    }
    private createErrXZoom(): d3.ZoomBehavior<Element, {}> {
        const svg: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select("#".concat(this.errSvgId));
        const width: number = parseFloat(svg.style("width").replace("px", "")) - this.margin.left - this.margin.right;
        const height: number = parseFloat(svg.attr("height").replace("px", "")) - this.margin.top - this.margin.bottom;
        const zoomX: d3.ZoomBehavior<Element, {}> = d3.zoom()
            .scaleExtent([1, 64])
            .translateExtent([[0, 0], [width + this.margin.left + this.margin.right, height]])
            .on("zoom", this.updateX().bind(this));
        svg.on("wheel", () => {
            d3.event.preventDefault();
            d3.event.stopPropagation();
        }).call(zoomX);

        return zoomX;
    }
    private updateX(): () => void {
        return (): void => {
            const xZoomTransform: d3.ZoomTransform = d3.event.transform;
            const originalXScale: d3.ScaleLinear<number, number> =
                d3.scaleLinear<number>().rangeRound([0, this.width]).domain([this.originalMinMz, this.originalMaxMz]);
            let newX: d3.ScaleLinear<number, number> = xZoomTransform.rescaleX(originalXScale);

            if (newX.domain()[0] < 0 || xZoomTransform.k === 1) { //clamp left side of x-axis so that you can't go into negative mzs
                newX = originalXScale.copy().domain([0, newX.domain()[1]]);
            }
            if (newX.domain()[1] > originalXScale.domain()[1]) {
                newX = originalXScale.copy().domain([newX.domain()[0], originalXScale.domain()[1]]);
            }

            //sync error map and spectrum graph
            const errorMap: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select("#".concat(this.errSvgId));
            if (this.props.theoreticalIonMatch != null) {
                (errorMap.node() as any).__zoom = xZoomTransform; // tslint:disable-line:no-any
                (d3.select("#".concat(this.specHandlerZoomId)).node() as any).__zoom = xZoomTransform; // tslint:disable-line:no-any
            }

            this.x = newX;
            this.minMz = newX.domain()[0];
            this.maxMz = newX.domain()[1];
            this.peaksData = this.preprocessPeaks(this.originalPeaksData, this.minMz, this.maxMz);
            this.drawSpectrum();
            this.drawTooltips();
        };
    }
    private createYZoom(): d3.ZoomBehavior<Element, {}> {
        const zoomY: d3.ZoomBehavior<Element, {}> = d3.zoom()
            .scaleExtent([1, 64])
            .translateExtent([[0, this.margin.bottom + this.margin.top], [this.width, this.height]])
            .on("zoom", this.updateY().bind(this));
        this.graph.append("svg:rect") //zoomYRect
            .attr("transform", `translate(-${this.margin.left},0)`)
            .attr("class", "y-zoom")
            .attr("width", this.margin.left)
            .attr("height", this.height)
            .attr("pointer-events", "all")
            .attr("visibility", "hidden")
            .on("wheel", () => {
                d3.event.preventDefault();
                d3.event.stopPropagation();
            }).call(zoomY);
        return zoomY;
    }
    private updateY(): () => void {
        return (): void => {
            const yZoomTransform: d3.ZoomTransform = d3.event.transform;
            const newY: d3.ScaleLinear<number, number> = this.y.copy().domain(this.props.showPercent ?
                    [0, this.DOMAIN_SCALE_ON_Y / yZoomTransform.k] :
                    [0, this.getMaxIntensity() * this.DOMAIN_SCALE_ON_Y  / yZoomTransform.k]);
            const yG: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = this.svg.select("#".concat(this.specSvgyGId));

            const yAxis: d3.Axis<number> = d3.axisLeft(newY) as d3.Axis<number>;
            if (this.props.showPercent) {
                yAxis.tickValues([1 / (yZoomTransform.k * 2), 1 / yZoomTransform.k])
                    .tickFormat((d: number, index: number): string => (d * 100).toFixed(0));
            } else {
                yAxis.tickFormat(d3.format(".2e"));
            }
            yG.call(yAxis.scale(newY));

            this.y = newY;
            this.drawSpectrum();
        };
    }
    private preprocessPeaks(peaks: PeakData[], startMz: number, endMz: number): PeakData[] {
        if (peaks == null || peaks.length === 0) {
            return [];
        }
        const result: PeakData[] = [];
        const width: number = Math.round(this.width * this.DOTS_PER_PIXEL); // sample number of peaks
        const mzStep: number = (endMz - startMz) / width;
        let peakIndex: number = 0;
        while (peakIndex < peaks.length && peaks[peakIndex].mz < startMz) {
            peakIndex += 1;
        }
        for (let i: number = 0; i < width; i += 1) {
            let maxIndex: number = -1;
            let maxIntensity: number = -1;
            while (peakIndex < peaks.length && peaks[peakIndex].mz <= endMz &&
                (maxIndex === -1 || peaks[peakIndex].mz <= startMz + (i + 1) * mzStep)) {
                if (peaks[peakIndex].intensity > maxIntensity) {
                    maxIntensity = peaks[peakIndex].intensity;
                    maxIndex = peakIndex;
                }
                peakIndex += 1;
            }
            if (maxIndex >= 0) {
                result.push(peaks[maxIndex]);
            }
        }
        return result;
    }
    private drawSpectrum(): void {
        this.graph.selectAll("g").remove();
        this.canvas.getContext("2d").clearRect(0, 0, this.width, this.height);

        // override y axis label
        if (this.props.showPercent) {
            this.yAxisLabel.text("Intensity (%)");
        } else {
            this.yAxisLabel.text("Intensity");
        }

        // x/y axis ticks
        const xAxis: d3.Axis<number> = d3.axisBottom(this.x) as d3.Axis<number>;
        this.graph.append("g").attr("id", this.specSvgxGId) //xG
            .attr("class", "axis axis--x")
            .attr("transform", `translate(0,${this.height})`)
            .call(xAxis);
        const yAxis: d3.Axis<number> = d3.axisLeft(this.y) as d3.Axis<number>;
        if (this.props.showPercent) {
            yAxis.tickValues([0.5, 1]);
        }
        this.graph.append("g").attr("id", this.specSvgyGId) //yG
            .attr("class", "axis axis--y")
            .call(this.props.showPercent ? yAxis.tickFormat((d: number): string => (d * 100).toFixed(0)) :
                yAxis.tickFormat(d3.format(".2e")));

        const ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
        this.peaksData.forEach(peak => {
            ctx.beginPath();
            ctx.strokeStyle = peak.color;
            ctx.lineWidth = 1;
            ctx.moveTo(this.x(peak.mz) + 0.5, this.height);
            ctx.lineTo(this.x(peak.mz) + 0.5, this.y(this.getIntensity(peak)));
            ctx.stroke();
        });

        // draw labels
        if (this.props.theoreticalIonMatch != null) {
            this.drawLabels();
            this.drawErrorMap();
        }
    }
    private drawTooltips():  void {
        this.graph.selectAll(`#${this.specMarkerId}`).remove();
        // marker
        const marker: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = this.graph.append("path")
            .attr("d", d3.symbol().type(() => d3.symbols[5]))
            .attr("fill", "lightgreen")
            .attr("id", this.specMarkerId)
            .style("display", "none");
        const tooltip: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = ToolTipHelper.getToolTipSelection();

        this.graph.on("mouseover", () => { marker.style("display", null); tooltip.style("display", null); })
            .on("mouseout", () => { marker.style("display", "none"); tooltip.style("display", "none"); })
            .on("mousemove", mouseMove.bind(this));

        function mouseMove(): void {
            const x0: number = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);
            const mzs: number[] = this.peaksData.map((d: PeakData) => d.mz);
            //const range: number = x.invert(config.spectrumTooltipDisplayTolerance);
            const index: number = d3.bisectLeft(mzs, x0) > (this.peaksData.length - 1) ?
                                  this.peaksData.length - 1 : d3.bisectLeft(mzs, x0);
            const tolerance: number = config.spectrumTooltipDisplayTolerance * (this.x.domain()[1] - this.x.domain()[0]) / this.width;
            const correctedIndex: number = maxIntensityInRange(this.peaksData, index, tolerance);
            const peak: PeakData = this.peaksData[correctedIndex];
            if (peak.mz - x0 >= config.spectrumTooltipDisplayTolerance) {
                marker.style("display", "none");
                tooltip.style("display", "none");
                return;
            }
            marker.attr("transform", `translate(${this.x(peak.mz)}, ${this.y(this.getIntensity(peak)) - 15}) rotate(60)`)
                .style("display", null);
            tooltip.html(ToolTipHelper.generateTooltip(peak, this.props.showPercent)) // tslint:disable-line
                .style("color", peak.color)
                .style("left", `${(d3.event.pageX as number) + 15}px`)
                .style("top", `${(d3.event.pageY as number)}px`)
                .style("display", null);
        }

        function maxIntensityInRange(data: PeakData[], index: number, tolerance: number): number {
            let curIndex: number = index;
            let correctedIndex: number = index;
            let maxIntensity: number = data[index].intensity;

            curIndex = index - 1;
            while (curIndex >= 0 && Math.abs(data[curIndex].mz - data[index].mz) < tolerance) {
                if (maxIntensity < data[curIndex].intensity) {
                    correctedIndex = curIndex;
                    maxIntensity = data[curIndex].intensity;
                }
                curIndex = curIndex - 1;
            }

            curIndex = index + 1;
            while (curIndex < data.length && Math.abs(data[curIndex].mz - data[index].mz) < tolerance) {
                if (maxIntensity < data[curIndex].intensity) {
                    correctedIndex = curIndex;
                    maxIntensity = data[curIndex].intensity;
                }
                curIndex = curIndex + 1;
            }

            return correctedIndex;
        }
    }

    private drawStats(): void {
        if (this.props.stats == null) {
            return;
        }
        d3.select("#".concat(this.containerId)).select(".stats").remove();
        d3.select("#".concat(this.containerId)).insert("div").attr("class", "stats").selectAll("span")
            .data(Object.keys(this.props.stats)).enter().append("span")
            .html((key: string): string => {
                return `<h3>${key}: </h3>`.concat(`${this.props.stats[key]}`);
            });
    }

    private drawAlignment(alignments: AlignmentData[]): void {
        const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("#".concat(this.specSvgContentId));
        ChartingHelpers.prepareArrows(graph);
        d3.select("#".concat(this.containerId)).select(".legend").remove();
        d3.select("#".concat(this.containerId)).insert("div").attr("class", "legend").selectAll("span")
            .data(alignments).enter().append("span")
            .attr("class", (data: AlignmentData, index: number): string => {
                if (index < alignments.length - 1 && (alignments[index].hasBIon || alignments[index + 1].hasYIon)) {
                    return "has-ion";
                } else {
                    return "";
                }
            })
            .html((data: AlignmentData, index: number): string => {
                let html: string = data.seq;
                if (data.hasBIon) {
                    html += " <hr class='b-ion'/>";
                }
                if (data.hasYIon) {
                    html += " <hr class='y-ion'/>";
                }

                return html;
            }) // tslint:disable-line
            .on("mouseover", (data: AlignmentData, index: number): void => {
                ChartingHelpers.drawAlignment(graph, this.x, this.y, data.label, data.bStart, data.bEnd,
                                              this.getDataAlignmentHeight(data.bHeight), "blue");
                ChartingHelpers.drawAlignment(graph, this.x, this.y, data.label, data.b2Start, data.b2End,
                                              this.getDataAlignmentHeight(data.b2Height), "blue", true); // tslint:disable-line
                ChartingHelpers.drawAlignment(graph, this.x, this.y, data.label, data.yStart, data.yEnd,
                                              this.getDataAlignmentHeight(data.yHeight), "red");
                ChartingHelpers.drawAlignment(graph, this.x, this.y, data.label, data.y2Start, data.y2End,
                                              this.getDataAlignmentHeight(data.y2Height), "red", true); // tslint:disable-line
            })
            .on("mouseout", (): void => {
                ChartingHelpers.clearAlignments(graph);
            });
    }
    private getLineSpace(): BoundBoxHelpers.BoundingBox[] {
        const lines: BoundBoxHelpers.BoundingBox[] = [];
        this.peaksData.forEach(peak => {
            lines.push({
                top: this.y(this.getIntensity(peak)),
                bottom: this.height,
                left: this.x(peak.mz),
                right: this.x(peak.mz)
            });
        });
        return lines;
    }
    private drawLabels(): void {
        if (this.props.theoreticalIonMatch != null) {
            IonLabelHelper.drawLabels(this.graph, this.peaksData, this.x, this.y, this.props.showPercent, this.getLineSpace());
        }
    }
    private drawErrorMap(): d3.Selection<d3.BaseType, {}, HTMLElement, {}> {
        const svgContainer: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select("#".concat(this.containerId));
        const svg: d3.Selection<SVGElement, {}, HTMLElement, {}> = svgContainer.select("#".concat(this.errSvgId));

        svg.selectAll("*").remove();
        svg.attr("y", "400");
        const width: number = parseFloat(svgContainer.style("width").replace("px", "")) - this.margin.left - this.margin.right;
        const height: number = parseFloat(svg.attr("height").replace("px", "")) - this.margin.top - this.margin.bottom;
        const x: d3.ScaleLinear<number, number> = d3.scaleLinear<number>().rangeRound([0, width]);
        const y: d3.ScaleLinear<number, number> = d3.scaleLinear<number>().rangeRound([height, 0]);
        x.domain([this.minMz, this.maxMz]);
        y.domain([-this.props.theoreticalIonMatch.maxError, this.props.theoreticalIonMatch.maxError]);

        const errorMap: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

        // draw axis
        const xAxis: d3.Axis<number> = d3.axisBottom(x) as d3.Axis<number>;
        errorMap.append("g") //xG
            .attr("id", this.errSvgId)
            .attr("class", "axis axis--x")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis);
        const yAxis: d3.Axis<number> = d3.axisLeft(y) as d3.Axis<number>;
        yAxis.tickValues([-this.props.theoreticalIonMatch.maxError, this.props.theoreticalIonMatch.maxError]);
        errorMap.append("g") //yG
            .attr("class", "axis axis--y")
            .call(yAxis.tickFormat(d3.format(".2n")));

        svg.append("text")
            .attr("x", this.margin.left)
            .attr("y", this.margin.top * 3 / 4)
            .style("text-anchor", "middle")
            .text("Error (".concat(this.props.theoreticalIonMatch.errorUnit).concat(")"));

        svg.append("g")
            .attr("class", "grid")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`)
            .call(d3.axisLeft(y)
                .ticks(1)
                .tickSize(-width)
                .tickFormat(d3.format(".2n")));

        errorMap.selectAll(".peaks") //dots
            .data(this.peaksData.filter((peak: PeakData) => peak.color !== "black"))
            .enter().append("rect")
            .attr("class", "errRects")
            .attr("clip-path", "url(#clip)")
            .attr("x", (peak: PeakData) => x(peak.mz) - 2)
            .attr("y", (peak: PeakData) => {
                return y(peak.errorDa);
            })
            .attr("width", 4)
            .attr("height", 4)
            .style("fill", (data: PeakData) => data.color);

        return errorMap;
    }

    private getUniqueIons(ions: IIon[], isECD: boolean = true): { [key: string]: ExtendedIon } {
        if (ions.length === 0) {
            return {};
        }

        const maxLength: number = this.props.theoreticalIonMatch.theoreticalIons[0].mz.length;
        const result: { [key: string]: ExtendedIon } = {};
        for (const ion of this.props.theoreticalIonMatch.ions) {
            const key: string = ion.mz.toString();
            if (ion.type === 0) {//bug fix type 0 pretends to not be their when you apply spread operator
                ion.type = 0;
            }

            if (ion.pos == null) {
                continue;
            } else if (result[key] == null) {
                result[key] = {
                    ...ion,
                    label: IonHelpers.getIonName(ion, maxLength),
                    color: IonHelpers.isNIon(ion) || IonHelpers.isPrecursorIon(ion) || IonHelpers.isImmoniumIon(ion) ? "blue" : "red"
                };
            } else {
                const oldIon: ExtendedIon = result[ion.mz];
                if (IonHelpers.getIonPriority(oldIon, isECD) === IonHelpers.getIonPriority(ion, isECD)) {
                    result[key] = {
                        ...oldIon,
                        label: `${oldIon.label}/${IonHelpers.getIonName(ion, maxLength)}`
                    };
                } else if (IonHelpers.getIonPriority(oldIon, isECD) < IonHelpers.getIonPriority(ion, isECD)) {
                    result[key] = {
                        ...ion,
                        label: IonHelpers.getIonName(ion, maxLength),
                        color: IonHelpers.isNIon(ion) || IonHelpers.isPrecursorIon(ion) ? "blue" : "red"
                    };
                }
            }
        }

        return result;
    }

    private peaksFromExpSpectrum(): PeakData[] {
        const peaks: PeakData[] = [];
        const maxIntensity: number = this.getMaxIntensity();
        for (let i: number = 0; i < this.props.experimentalSpectrum.mz.length; i += 1) {
            const mz: number = this.props.experimentalSpectrum.mz[i];
            const intensity: number = this.props.experimentalSpectrum.intensity[i];
            const percentIntensity: number = this.props.experimentalSpectrum.intensity[i] / maxIntensity;
            peaks.push({
                mz: mz,
                intensity: intensity,
                percentIntensity: percentIntensity,
                color: "black",
            });
        }

        return peaks;
    }

    private peaksFromIonMatch(uniqueIons: { [key: string]: ExtendedIon }): PeakData[] {
        const spectrum: ExperimentalSpectrum = this.props.experimentalSpectrum;
        const peaks: PeakData[] = [];
        const maxIntensity: number = this.getMaxIntensity();
        for (let i: number = 0; i < spectrum.mz.length; i += 1) {
            const mz: number = spectrum.mz[i];
            const intensity: number = spectrum.intensity[i];
            const percentIntensity: number = spectrum.intensity[i] / maxIntensity;

            let peak: PeakData;
            if (uniqueIons[mz] != null) {
                const match: ExtendedIon = uniqueIons[mz.toString()];
                const errorPpm: number = IonHelpers.calculateError(match, this.props.theoreticalIonMatch.theoreticalIons);
                if (errorPpm !== -1000000) {
                    peak = {
                        mz: mz,
                        intensity: intensity,
                        percentIntensity: percentIntensity,
                        color: match.color,
                        ion: match,
                        label: match.label,
                        error: errorPpm,
                        errorDa: IonHelpers.calculateErrorDa(match, this.props.theoreticalIonMatch.theoreticalIons)
                    };
                }
            }
            if (peak == null) {
                peak = {
                    mz: mz,
                    intensity: intensity,
                    percentIntensity: percentIntensity,
                    color: "black",
                    ion: null,
                    label: null,
                    error: null
                };
            }
            peaks.push(peak);
        }

        return peaks;
    }

    private getAlignment(): AlignmentData[] {
        const sequence: string[] = IonHelpers.prepareSequence(this.props.theoreticalIonMatch.sequence);
        const alignments: AlignmentData[] = sequence.map((seq: string, index: number) => {
            return {
                seq: seq,
                label: seq,
                bStart: 0,
                bEnd: 0,
                bHeight: 0,
                yStart: 0,
                yEnd: 0,
                yHeight: 0,
                b2Start: 0,
                b2End: 0,
                b2Height: 0,
                y2Start: 0,
                y2End: 0,
                y2Height: 0,
                hasIon: false,
                hasBIon: false,
                hasYIon: false
            };
        });

        // discover theroetical ion mz
        let theoreticalBIons: number[] = [];
        let theoreticalB2Ions: number[] = [];
        let theoreticalYIons: number[] = [];
        let theoreticalY2Ions: number[] = [];
        for (const ions of this.props.theoreticalIonMatch.theoreticalIons) {
            if (ions.type === IonType.B) {
                theoreticalBIons = ions.mz;
            } else if (ions.type === IonType.B_CHARGE2) {
                theoreticalB2Ions = ions.mz;
            } else if (ions.type === IonType.Y) {
                theoreticalYIons = ions.mz;
            } else if (ions.type === IonType.Y_CHARGE2) {
                theoreticalY2Ions = ions.mz;
            }
        }

        for (const ion of this.props.theoreticalIonMatch.ions) {
            if (ion.pos == null) {
                ion.pos = 0;
            }
            if (IonHelpers.isNIon(ion)) {
                if (ion.pos !== sequence.length - 1) {
                    alignments[ion.pos].hasBIon = true;
                    alignments[ion.pos].hasIon = true;
                    if (IonHelpers.isCharge2Ion(ion)) {
                        alignments[ion.pos].b2Height = Math.max(alignments[ion.pos].b2Height, ion.h);
                    } else {
                        alignments[ion.pos].bHeight = Math.max(alignments[ion.pos].bHeight, ion.h);
                    }
                }
            } else if (!IonHelpers.isImmoniumIon(ion) && !IonHelpers.isPrecursorIon(ion)) {
                if (ion.pos !== 0) {
                    alignments[ion.pos].hasYIon = true;
                    alignments[ion.pos].hasIon = true;
                    if (IonHelpers.isCharge2Ion(ion)) {
                        alignments[ion.pos].y2Height = Math.max(alignments[ion.pos].y2Height, ion.h);
                    } else {
                        alignments[ion.pos].yHeight = Math.max(alignments[ion.pos].yHeight, ion.h);
                    }
                }
            }
        }

        return this.calculateAlignments(alignments, theoreticalBIons, theoreticalB2Ions, theoreticalYIons, theoreticalY2Ions);
    }

    private calculateAlignments(alignments: AlignmentData[], theoreticalBIons: number[], theoreticalB2Ions: number[],
                                theoreticalYIons: number[], theoreticalY2Ions: number[]): AlignmentData[] {
        // calculate alignment start and end
        const updatedAlignments: AlignmentData[] = [];
        for (let i: number = 0; i < alignments.length; i += 1) {
            let label: string = "";
            // b ion
            let bStart: number = i === 0 ? 0 : -1;
            let bEnd: number = -1;
            let bHeight: number = 0;
            let b2Start: number = i === 0 ? 0 : -1;
            let b2End: number = -1;
            let b2Height: number = 0;

            for (let j: number = i; j < alignments.length; j += 1) {
                label = label + alignments[j].seq;
                if (j === alignments.length - 1) {
                    bEnd = -1;
                    b2End = -1;
                    break;
                } else if (alignments[j].hasBIon || alignments[j + 1].hasYIon) {
                    if (alignments[j].bHeight > 0) {
                        bEnd = theoreticalBIons[j];
                        bHeight = Math.max(bHeight, alignments[j].bHeight);
                    }
                    if (alignments[j].b2Height > 0) {
                        b2End = theoreticalB2Ions[j];
                        b2Height = Math.max(b2Height, alignments[j].b2Height);
                    }
                    break;
                }
            }
            for (let j: number = i - 1; j >= 0; j -= 1) {
                if (alignments[j].hasBIon || alignments[j + 1].hasYIon) {
                    if (alignments[j].bHeight > 0) {
                        bStart = theoreticalBIons[j];
                        bHeight = Math.max(bHeight, alignments[j].bHeight);
                    }
                    if (alignments[j].b2Height > 0) {
                        b2Start = theoreticalB2Ions[j];
                        b2Height = Math.max(b2Height, alignments[j].b2Height);
                    }
                    break;
                } else {
                    label = alignments[j].seq + label;
                    if (j === 0) {
                        bStart = 0;
                        b2Start = 0;
                    }
                }
            }
            // y ion
            let yStart: number = i === alignments.length - 1 ? 0 : -1;
            let yEnd: number = -1;
            let yHeight: number = 0;
            let y2Start: number = i === alignments.length - 1 ? 0 : -1;
            let y2End: number = -1;
            let y2Height: number = 0;

            for (let j: number = i; j >= 0; j -= 1) {
                if (alignments[j].hasBIon || j === alignments.length - 1 || alignments[j + 1].hasYIon) {
                    if (alignments[j].yHeight > 0) {
                        yEnd = theoreticalYIons[j];
                        yHeight = Math.max(yHeight, alignments[j].yHeight);
                    }
                    if (alignments[j].y2Height > 0) {
                        y2End = theoreticalY2Ions[j];
                        y2Height = Math.max(y2Height, alignments[j].y2Height);
                    }
                    break;
                }
            }
            for (let j: number = i + 1; j < alignments.length; j += 1) {
                if (alignments[j].hasBIon || j === alignments.length - 1 || alignments[j + 1].hasYIon) {
                    if (alignments[j].yHeight > 0) {
                        yStart = theoreticalYIons[j];
                        yHeight = Math.max(yHeight, alignments[j].yHeight);
                    }
                    if (alignments[j].y2Height > 0) {
                        y2Start = theoreticalY2Ions[j];
                        y2Height = Math.max(y2Height, alignments[j].y2Height);
                    }
                    break;
                }
            }
            updatedAlignments.push({
                ...alignments[i],
                label: label, bStart: bStart, bEnd: bEnd, bHeight: bHeight, b2Start: b2Start, b2End: b2End, b2Height: b2Height,
                yStart: yStart, yEnd: yEnd, yHeight: yHeight, y2Start: y2Start, y2End: y2End, y2Height: y2Height
            });
        }

        return updatedAlignments;
    }
    private updateYAxis(): void {
        // x/y axis label
        if (this.props.showPercent) {
            this.yAxisLabel.text("Intensity (%)");
        } else {
            this.yAxisLabel.text("Intensity");
        }

        const newY: d3.ScaleLinear<number, number> = this.y.copy().domain(this.props.showPercent ?
            [0, this.y.domain()[1] / (this.getMaxIntensity() * this.DOMAIN_SCALE_ON_Y) * this.DOMAIN_SCALE_ON_Y ] :
            [0, this.y.domain()[1] * this.getMaxIntensity()]);
        this.y = newY;
        const yAxis: d3.Axis<number> = d3.axisLeft(this.y) as d3.Axis<number>;
        if (this.props.showPercent) {
            yAxis.tickValues([this.y.domain()[1] / (this.DOMAIN_SCALE_ON_Y * 2), this.y.domain()[1] / this.DOMAIN_SCALE_ON_Y ]);
        }
        d3.select("#".concat(this.specSvgyGId)) //yG
            .attr("class", "axis axis--y")
            .call(this.props.showPercent ? yAxis.tickFormat((d: number): string => (d * 100).toFixed(0)) :
                yAxis.tickFormat(d3.format(".2e")));

    }
    private getMaxIntensity(): number {
        const oldMax: number = this.props.experimentalSpectrum.intensity == null ||
            this.props.experimentalSpectrum.intensity.length === 0 ?
            0 : IonHelpers.arrayMax(this.props.experimentalSpectrum.intensity);
        const newMax: number = this.props.experimentalSpectrum.basePeakIntensity;
        //console.log(oldMax + " " + newMax);
        return Math.max(oldMax, newMax);
    }

    private getIntensity(peak: PeakData): number {
        return this.props.showPercent ? peak.percentIntensity : peak.intensity;
    }

    private getDataAlignmentHeight(n: number): number {
        return this.props.showPercent ? n / this.getMaxIntensity() : n;
    }

}

export { SpectrumView, ExperimentalSpectrum, TheoreticalIons, TheoreticalIonMatch, PeakData };
