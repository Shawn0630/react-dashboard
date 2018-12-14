import * as React from "react";
import * as styles from "../../../../styles/chart.scss";
import * as d3 from "d3";
import { com } from "../../../../models/peptide";
import { millisecToMin } from "../../../../utilities/ui-helpers";
import TICPoint = com.bsi.peaks.model.dto.peptide.TICPoint;

interface TICCurveProps {
    ticPoints: TICPoint[];

    updateSelectedScan(point: TICPoint, scan?: number): void;
}

type MarginType = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

interface Point {
    x: number;
    y: number;
    ticPoint?: TICPoint;
}

interface LineSegment {
    p1: Point;
    p2: Point;
}

const containerId: string = "tic-container";
const ticSvgId: string = "tic-svg";
const ticContentId: string = "tic-content";
const ticSvgxGId: string = "tic-xG";
const ticSvgyGId: string = "tic-yG";
const ticHoverLine: string = "tic-hover-line";
const width: number = 860;
const height: number = 200;

class TICCurve extends React.PureComponent<TICCurveProps> {
    private margin: MarginType = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    };
    private width: number;
    private height: number;
    private rawData: TICPoint[];
    private data: LineSegment[];
    private x: d3.ScaleLinear<number, number>;
    private y: d3.ScaleLinear<number, number>;
    private selected: number;

    constructor(props: TICCurveProps) {
        super(props);
        this.createHoverLine = this.createHoverLine.bind(this);
        this.nextScan = this.nextScan.bind(this);
        this.prevScan = this.prevScan.bind(this);
        this.selected = 0;
    }

    public componentDidMount(): void {
        this.data = this.prepareData();
        this.renderChart();
    }

    public render(): JSX.Element {
        if (this.props.ticPoints === null || this.props.ticPoints === undefined) {
            return null;
        }

        return <div id={containerId} className={styles.dataview} style={{height: width - this.margin.top - this.margin.bottom + 23}}>
            <svg id={ticSvgId} width={width} height={height} className={styles.ticCurve} />
        </div>;
    }

    public nextScan(): void {
        this.selected = this.selected + 1 > this.data.length ? this.selected : this.selected + 1;
        const line: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("#".concat(ticHoverLine));
        if (this.data[this.selected] == null) {
            return;
        }

        line.attr("x1", this.x(this.data[this.selected].p1.x));
        line.attr("x2", this.x(this.data[this.selected].p1.x));

        this.props.updateSelectedScan(this.data[this.selected].p1.ticPoint);
    }

    public prevScan(): void {
        this.selected = this.selected - 1 < 0 ? this.selected : this.selected - 1;
        const line: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("#".concat(ticHoverLine));
        if (this.data[this.selected] == null) {
            return;
        }

        line.attr("x1", this.x(this.data[this.selected].p1.x));
        line.attr("x2", this.x(this.data[this.selected].p1.x));

        this.props.updateSelectedScan(this.data[this.selected].p1.ticPoint);
    }

    public setScan(scan: number): void {
        const scans: number[] = this.data.map((point: LineSegment) => point.p1.ticPoint.scanNum);
        this.selected = d3.bisectLeft(scans, scan);
        if (this.data[this.selected] == null) {
            return;
        }

        if (this.data[this.selected].p1.ticPoint.scanNum !== scan) {
            this.prevScan();
        }
        const line: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("#".concat(ticHoverLine));
        line.attr("x1", this.x(this.data[this.selected].p1.x));
        line.attr("x2", this.x(this.data[this.selected].p1.x));

        this.props.updateSelectedScan(this.data[this.selected].p1.ticPoint, scan);
    }

    public getSelectedScanNumber(): number {
        if (this.data[this.selected] == null) {
            return;
        }
        return this.data[this.selected].p1.ticPoint.scanNum;
    }

    private renderChart(): void {
        const svg: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select("#".concat(ticSvgId));
        svg.selectAll("*").remove();
        const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g").attr("id", ticContentId)
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

        this.width = parseFloat(svg.style("width").replace("px", "")) - this.margin.left - this.margin.right;
        this.height = parseFloat(svg.attr("height").replace("px", "")) - this.margin.top - this.margin.bottom;

        const maxTics: number = this.maxTics() * 1.1;

        // x/y axis scale
        this.x = d3.scaleLinear<number>().rangeRound([0, this.width]);
        this.y = d3.scaleLinear<number>().rangeRound([this.height, 0]);
        // probaby have issues with large data
        this.x.domain([0, millisecToMin(this.rawData[this.rawData.length - 1].retentionTime as number)]);
        this.y.domain([0, maxTics]);

        graph.append("clipPath") // clip path
            .attr("id", "clip").append("rect").attr("width", this.width).attr("height", this.height);

        // x/y axis label
        svg.append("text") // y axis label
            .attr("class", styles.axisLabel)
            .attr("transform", `translate(${this.margin.top}, ${this.margin.left - 10}) rotate(-90)`)
            .text("TIC");
        svg.append("text") // x axis label
            .attr("class", styles.axisLabel)
            .attr("transform", `translate(${this.width + this.margin.left - 5}, ${this.height + this.margin.bottom - 5}) rotate(-90)`)
            .text(`RT:(${millisecToMin(this.rawData[0].retentionTime as number).toFixed(4)} ~ `
                .concat(`${millisecToMin(this.rawData[this.props.ticPoints.length - 1].retentionTime as number).toFixed(4)})`
                .concat("(min)")));

        // background
        graph.append("rect")
            .attr("fill", "transparent")
            .attr("width", this.width)
            .attr("height", this.height);

        const xAxis: d3.Axis<number> = d3.axisBottom(this.x) as d3.Axis<number>;
        graph.append("g").attr("id", ticSvgxGId) //xG
            .attr("class", "axis axis--x")
            .attr("transform", `translate(0,${this.height})`)
            .call(xAxis);

        const yAxis: d3.Axis<number> = d3.axisLeft(this.y) as d3.Axis<number>;
        const yG: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = graph.append("g").attr("id", ticSvgyGId)
            .attr("class", "axis axis--y")
            .call(yAxis);
        yG.selectAll("text").remove();

        graph.selectAll(".points") // bars
            .data(this.data).enter().append("line")
            .attr("class", "points")
            .attr("x1", (p: LineSegment) => this.x(p.p1.x))
            .attr("y1", (p: LineSegment) => this.y(p.p1.y))
            .attr("x2", (p: LineSegment) => this.x(p.p2.x))
            .attr("y2", (p: LineSegment) => this.y(p.p2.y))
            .attr("stroke-width", "1")
            .attr("stroke", "black");

        this.createHoverLine();
    }

    private prepareData(): LineSegment[] {
        if (this.props.ticPoints == null) {
            return [];
        }
        const ticPoints: TICPoint[] = this.props.ticPoints;
        this.rawData = ticPoints.sort((a: TICPoint, b: TICPoint) => {
            return a.scanNum - b.scanNum;
        });

        const points: LineSegment[] = [];

        for (let i: number = 0; i < this.rawData.length - 1; i += 1) {
            points.push({
                p1: {
                    x: millisecToMin(this.rawData[i].retentionTime as number),
                    y: this.rawData[i].tic,
                    ticPoint: this.rawData[i]
                },
                p2: {
                    x: millisecToMin(this.rawData[i + 1].retentionTime as number),
                    y: this.rawData[i + 1].tic,
                    ticPoint: this.rawData[i]
                }
            });
        }

        return points;

    }

    private createHoverLine(): void {
        const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("#".concat(ticContentId));
        const line: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = graph.append("line")
            .attr("id", ticHoverLine)
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", 0)
            .attr("y2", this.height)
            .attr("stroke", "red");

        graph.on("click", onClick.bind(this))
             .on("wheel", () => {
                d3.event.preventDefault();
                d3.event.stopPropagation();
                });

        function onClick(): void {
            const x0: number = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);
            const rts: number[] = this.data.map((d: LineSegment) => d.p1.x);
            const index: number = d3.bisectLeft(rts, x0);
            const point: Point = this.data[index].p1;

            line.attr("x1", d3.mouse(d3.event.currentTarget)[0])
                .attr("x2", d3.mouse(d3.event.currentTarget)[0]);

            this.selected = index;
            this.props.updateSelectedScan(point.ticPoint);
        }
    }

    private maxTics(): number {
        return this.props.ticPoints == null ||
            this.props.ticPoints.length === 0 ?
            0 : Math.max(...this.props.ticPoints.map((ticPoint: TICPoint) => isNaN(ticPoint.tic) ? 0 : ticPoint.tic));
    }

}

export { TICCurve };
