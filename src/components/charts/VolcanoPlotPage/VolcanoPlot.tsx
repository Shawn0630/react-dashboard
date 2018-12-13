import * as d3 from "d3";
import * as React from "react";
import * as styles from "./VolcanoPlot.scss";
import { isSame } from "~utilities/ui-helper";

import { com } from "~models/example";
import ProteinFoldChange = com.example.dto.ProteinFoldChange;
export interface ProteinFoldChangeNew extends ProteinFoldChange {
    isDisplayInTable?: boolean;
}

const green: string = "rgb(0, 124, 0)";
const lightGreen: string = "rgb(127, 250, 127)";
const red: string = "rgb(255, 0, 0)";
const lightRed: string = "rgb(252, 150, 150)";
const grey: string = "rgb(207, 211, 216)";

interface LFQVolcanoPlotProps {
    proteins: ProteinFoldChangeNew[];
    height: number;
    maxHeight?: number;
    width: number;
    x1Cutoff?: number;
    x2Cutoff?: number;
    yCutoff?: number;
    xAxisTitle?: string;
    yAxisTitle?: string;
    graphId: string;
    interaction: boolean;
    selectedProteinAccession?: string;
    selectProtein?(protein: ProteinFoldChangeNew): void;
}

interface LFQScatterData {
    ratios: number[];
    significances: number[];
}

interface Point {
    x: number;
    y: number;
    color?: string;
    protein?: ProteinFoldChangeNew;
    id?: number;
    opacity?: number;
}

interface AxisTick {
    tick: number;
    label: string;
}

type MarginType = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export default class VolcanoPlot extends React.PureComponent<LFQVolcanoPlotProps> {

    private margin: MarginType = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 60
    };
    private height: number;
    private width: number;
    private ratio: number;
    private minY: number;
    private maxY: number;
    private yDiff: number;
    private xScale: d3.ScaleLinear<number, number>;
    private yScale: d3.ScaleLinear<number, number>;
    private xAxis: any; //tslint:disable-line
    private yAxis: any; //tslint:disable-line
    private idleTimeout: any; //tslint:disable-line
    private xLabel: string;
    private yLabel: string;
    private xTicks: AxisTick[];
    private selectedProtein: number;
    private points: Point[];
    constructor(props: LFQVolcanoPlotProps) {
        super(props);

        this.idleTimeout = null;
        this.selectedProtein = -1;
        this.xLabel = "Ratios";
        this.yLabel = "Significance";
        this.xTicks = [{ tick: this.log2(1 / 64), label: "1/64" },
        { tick: this.log2(1 / 32), label: "1/32" },
        { tick: this.log2(1 / 16), label: "1/16" },
        { tick: this.log2(1 / 8), label: "1/8" },
        { tick: this.log2(1 / 4), label: "1/4" },
        { tick: this.log2(1 / 2), label: "1/2" },
        { tick: this.log2(1), label: "1" },
        { tick: this.log2(2), label: "2" },
        { tick: this.log2(4), label: "4" },
        { tick: this.log2(8), label: "8" },
        { tick: this.log2(16), label: "16" },
        { tick: this.log2(32), label: "32" },
        { tick: this.log2(64), label: "64" }];

        this.zoom = this.zoom.bind(this);
        this.idled = this.idled.bind(this);
    }
    public componentDidMount(): void {
        this.drawGraph();
    }
    public componentDidUpdate(preProp: LFQVolcanoPlotProps): void {
        if (!isSame(this.props.proteins, preProp.proteins)) {
            this.drawGraph();
        }
    }
    public componentWillReceiveProps(nextProp: LFQVolcanoPlotProps): void {
        if (this.props.selectedProteinAccession === nextProp.selectedProteinAccession) {
            return;
        }
        const main: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select(this.referenceChartId()).select(".main");
        this.selectProteinFromTable(main, this.points, nextProp.selectedProteinAccession);
    }
    public render(): JSX.Element {
        return <div>
            <svg width={this.props.width}
                id={this.props.graphId}
                height={this.props.height} />
        </div>;
    }
    //tslint:disable-next-line
    public drawGraph(): d3.Selection<d3.BaseType, {}, HTMLElement, {}> {
        const svg: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select(this.referenceChartId());

        svg.selectAll("*").remove();
        svg.attr("class", styles.scatter);
        const g: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`)
            .attr("overflow", "hidden");

        this.height = this.props.height - this.margin.top - this.margin.bottom;
        this.width = this.props.width - this.margin.right - this.margin.left;
        this.ratio = this.height / this.width;
        const xAxisPos: Point = {
            x: this.props.width / 2,
            y: this.props.height - 15,
            opacity: 0
        };
        const yAxisPos: Point = {
            x: 20,
            y: this.props.height / 2,
            opacity: 0
        };

        svg.append("text")
            .attr("transform", `translate(${xAxisPos.x}, ${xAxisPos.y})`)
            .attr("text-anchor", "middle")
            .text(this.xLabel);
        svg.append("g")
            .attr("transform", `translate(${yAxisPos.x}, ${yAxisPos.y})`)
            .attr("text-anchor", "middle")
            .append("text")
            .attr("transform", "rotate(-90)")
            .text(this.yLabel);

        const data: LFQScatterData = this.convertData(this.props.proteins);

        this.minY = d3.min(data.significances);
        this.maxY = d3.max(data.significances);

        this.xScale = d3.scaleLinear()
            .range([0, this.width]);
        this.yScale = d3.scaleLinear()
            .range([this.height, 0])
            .domain([this.minY, this.maxY]);

        this.xScale.domain([this.log2(1 / 80), this.log2(80)]);

        this.yDiff = 0;
        const yTicks: number[] = this.yScale.ticks();
        if (yTicks.length > 2) {//increase range by one tick
            this.yDiff = Math.abs(yTicks[0] - yTicks[1]);
            this.yScale.domain([this.minY - this.yDiff, this.maxY + this.yDiff]);
        }

        const xAxisTicks: AxisTick[] = this.getXTicks();
        const xTicks: number[] = [];
        const xTickLabels: string[] = [];
        for (const xAxisTick of xAxisTicks) {
            xTicks.push(xAxisTick.tick);
            xTickLabels.push(xAxisTick.label);
        }

        this.xAxis = d3.axisBottom(this.xScale).tickValues(xTicks)
            .tickFormat((domainValue: number, index: number): string => {
                return xTickLabels[index];
            }) as d3.Axis<number>;
        this.yAxis = d3.axisLeft(this.yScale).tickValues(this.yScale.ticks(8)).tickSizeInner(-this.width) as d3.Axis<number>;

        g.append("g") //xG
            .attr("class", "xAxis")
            .attr("transform", `translate(0, ${this.height})`)
            .call(this.xAxis);
        const yG: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = g.append("g")
            .attr("class", "yAxis")
            .call(this.yAxis);

        g.append("defs")
            .append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", this.width)
            .attr("height", this.height);

        const main: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = g.append("g")
            .attr("class", "main")
            .attr("clip-path", "url(#clip)");

        /* const zoom: d3.ZoomBehavior<Element, {}> = d3.zoom()
            .scaleExtent([1, 64])
            .translateExtent([[0, this.margin.bottom + this.margin.top], [this.width, this.height]])
            .on("zoom", () => {
                const zoomTransform: d3.ZoomTransform = d3.event.transform;
                const newXScale: d3.ScaleLinear<number, number> = this.xScale.copy()
                    .domain([(this.minX - this.xDiff) / zoomTransform.k, (this.maxX + this.xDiff) / zoomTransform.k]);
                const newYScale: d3.ScaleLinear<number, number> = this.yScale.copy()
                    .domain([(this.minY - this.yDiff) / zoomTransform.k, (this.maxY + this.yDiff) / zoomTransform.k]);
                this.xScale = newXScale;
                this.yScale = newYScale;
                this.zoom(g, main, yG);
            });

        main.call(zoom); */

        if (this.props.interaction) {

            const brush: d3.BrushBehavior<{}> = d3.brush().on("end", (idleTimeout) => { //tslint:disable-line
                const s = d3.event.selection; //tslint:disable-line
                let newXScale: d3.ScaleLinear<number, number>;
                let newYScale: d3.ScaleLinear<number, number>;
                if (s === null) {
                    if (this.idleTimeout === null) {
                        this.idleTimeout = setTimeout(this.idled, 350);

                        return;
                    }
                    newXScale = this.xScale.copy().domain([this.log2(1 / 80), this.log2(80)]);
                    newYScale = this.yScale.copy().domain([this.minY - this.yDiff, this.maxY + this.yDiff]);
                } else {
                    newXScale = this.xScale.copy().domain([s[0][0] * this.ratio < 0 ? 0 : s[0][0] * this.ratio,
                    s[1][0]].map(this.xScale.invert, this.xScale));
                    newYScale = this.yScale.copy().domain([s[1][1], s[0][1] * this.ratio].map(this.yScale.invert, this.yScale));
                    g.select(".brush").call(brush.move, null);
                }
                this.xScale = newXScale;
                this.yScale = newYScale;
                this.zoom(g, main, yG);
            });

            main.append("g")
                .attr("class", "brush")
                .call(brush);
        }

        this.points = this.convertPointsArray(this.props.proteins);
        const tooltip: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("body").append("div")
            .attr("class", styles.tooltip)
            .style("opacity", 0);
        main.selectAll("circle")
            .data(this.points).enter().append("circle")
            .attr("id", (point: Point) => `protein-${point.id}`)
            .attr("cx", (point: Point) => this.xScale(point.x))
            .attr("cy", (point: Point) => this.yScale(point.y))
            .attr("r", 2)
            .attr("fill", "white")
            .attr("fill-opacity", "0")
            .attr("stroke", (point: Point) => point.color)
            .attr("stroke-width", 1)
            .attr("clip-path", "url(#clip)")
            .attr("class", (point: Point) => {
                return `protein-${point.id}`;
            })
            .on("mouseover", (point: Point) => {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`${point.protein.accession}`)//tslint:disable-line
                    .style("left", `${(d3.event.pageX as number) + 15}px`)
                    .style("top", `${(d3.event.pageY as number)}px`);
            })
            .on("mouseout", (point: Point) => {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            })
            .on("click", (point: Point) => {
                this.selectProtein(main, point);
            }).style("opacity", (point: Point) => point.opacity);
        main.append("use").attr("id", "positionOnTop");

        return svg;
    }

    private referenceChartId(): string {
        return "#".concat(this.props.graphId);
    }
    private zoom(g: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                 main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                 yG: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
        const t = g.transition().duration(750);//tslint:disable-line
        const updatedxTicks: AxisTick[] = this.getXTicks();
        const xTicks: number[] = [];
        const xTickLabels: string[] = [];
        for (const xAxisTick of updatedxTicks) {
            xTicks.push(xAxisTick.tick);
            xTickLabels.push(xAxisTick.label);
        }
        this.xAxis = d3.axisBottom(this.xScale).tickValues(xTicks)
            .tickFormat((domainValue: number, index: number): string => {
                return xTickLabels[index];
            });
        this.yAxis = d3.axisLeft(this.yScale).tickValues(this.yScale.ticks(8)).tickSizeInner(-this.width);
        g.select(".xAxis").transition(t).call(this.xAxis);
        g.select(".yAxis").transition(t).call(this.yAxis);
        main.selectAll("circle").transition(t)
            .attr("cx", (point: Point) => this.xScale(point.x))
            .attr("cy", (point: Point) => this.yScale(point.y));
    }
    private convertPointsArray(data: ProteinFoldChangeNew[]): Point[] {
        const points: Point[] = [];

        let id: number = 0;
        for (const proteinFoldChange of data) {
            let c: string = null;
            let opacity: number = null;

            if (proteinFoldChange.isFiltered === true) {
                c = grey;
                opacity = 0.6;
            } else if (proteinFoldChange.largestFoldChange < 1) {
                if (proteinFoldChange.isDisplayInTable != null && proteinFoldChange.isDisplayInTable) {
                    c = lightGreen;
                    opacity = 0.6;
                } else {
                    c = green;
                }
            } else {
                if (proteinFoldChange.isDisplayInTable != null && proteinFoldChange.isDisplayInTable) {
                    c = lightRed;
                    opacity = 0.6;
                } else {
                    c = red;
                }
            }
            points.push({
                x: proteinFoldChange.largestFoldChange === undefined ? 0 : this.log2(proteinFoldChange.largestFoldChange),
                y: proteinFoldChange.significance === undefined ? 0 : proteinFoldChange.significance,
                color: c,
                protein: proteinFoldChange,
                id: id,
                opacity: opacity
            });

            id = id + 1;
        }

        return points;
    }
    private convertData(proteins: ProteinFoldChangeNew[]): LFQScatterData {
        const data: LFQScatterData = {
            ratios: [],
            significances: []
        };

        for (const proteinFoldChange of proteins) {
            data.ratios.push(proteinFoldChange.largestFoldChange);
            data.significances.push(proteinFoldChange.significance);
        }

        return data;
    }
    private idled(): void {
        this.idleTimeout = null;
    }
    private log2(x: number): number {
        return Math.log(x) / Math.LOG2E;
    }
    private getXTicks(): AxisTick[] {
        const xTicks: AxisTick[] = [];
        for (const xTick of this.xTicks) {
            if (this.xScale(xTick.tick) >= 0) {
                xTicks.push(xTick);
            }
        }

        return xTicks;
    }
    private selectProtein(main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, point: Point): void {
        if (this.props.interaction === false || point.protein.isFiltered === true || point.protein.isDisplayInTable === true) {
            return;
        }

        if (this.selectedProtein !== -1) {
            this.uncolourDeselectedProtein(main, this.selectedProtein);
        }
        this.selectedProtein = point.id;
        this.colourSelectedProtein(main, this.selectedProtein);

        this.props.selectProtein(point.protein);
    }
    private uncolourDeselectedProtein(main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, id: number): void {
        main.selectAll(`.protein-${this.selectedProtein}`)
            .attr("fill", "white")
            .attr("fill-opacity", "0");
    }

    private colourSelectedProtein(main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, id: number): void {
        main.selectAll(`.protein-${id}`)
            .attr("fill", "black")
            .attr("fill-opacity", "1");
        main.selectAll("#positionOnTop")
            .attr("xlink:href", `#protein-${id}`);
    }
    private selectProteinFromTable(main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, points: Point[], accession: string): void {
        if (this.selectedProtein !== -1) {
            this.uncolourDeselectedProtein(main, this.selectedProtein);
        }

        this.selectedProtein = -1;
        for (const point of points) {
            if (point.protein.accession === accession) {
                this.selectedProtein = point.id;
                break;
            }
        }

        if (this.selectedProtein !== -1) {
            this.colourSelectedProtein(main, this.selectedProtein);
        }
    }

}
