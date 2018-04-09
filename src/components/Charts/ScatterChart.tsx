import * as React from "react";
import * as styles from "../../styles/chart.scss";
import * as d3 from "d3";

const green: string = "rgb(0, 255, 0)";
const red: string = "rgb(255, 0, 0)";
const grey: string = "rgb(207, 211, 216)";

interface ScatterChartProps {
    height: number;
    width: number;
    xAxisTitle?: string;
    yAxisTitle?: string;
    graphId: string;
}

interface ScatterData {
    ratios: number[];
    significances: number[];
}

interface Point {
    x: number;
    y: number;
    color?: string;
}

interface Axis {
    xAxis: d3.Selection<d3.BaseType, {}, HTMLElement, {}>;
    yAxis: d3.Selection<d3.BaseType, {}, HTMLElement, {}>;
}

type MarginType = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

type Size = {
    width: number;
    height: number;
};

interface ScatterChartState {
}

class ScatterChart extends React.PureComponent<ScatterChartProps> {

    private datas: ScatterData[] = [];
    private margin: MarginType = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 60
    };
    private boxSize: Size = {
        width: 5,
        height: 5
    };
    private height: number;
    private width: number;
    private ratio: number;
    private minX: number;
    private maxX: number;
    private minY: number;
    private maxY: number;
    private xDiff: number;
    private yDiff: number;
    private xScale: d3.ScaleLinear<number, number>;
    private yScale: d3.ScaleLinear<number, number>;
    private xAxis: any; //tslint:disable-line
    private yAxis: any; //tslint:disable-line
    private idleTimeout: any; //tslint:disable-line
    private idleDelay: any; //tslint:disable-line
    private xLabel: string;
    private yLabel: string;
    constructor(props: ScatterChartProps) {
        super(props);
        this.datas.push(this.fillData());

        this.idleTimeout = null;
        this.xLabel = "Ratios";
        this.yLabel = "Significance";
        this.zoom = this.zoom.bind(this);
        this.idled = this.idled.bind(this);
    }
    public componentDidMount(): void {
        const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = this.drawGraph();
    }
    public componentDidUpdate(): void {
        //const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = this.drawGraph();
    }
    public render(): JSX.Element {
        return <div id={this.props.graphId}>
        </div>;
    }

    private fillData(): ScatterData {
        const base: number = 100;
        const randomX: Function = d3.randomNormal(200, 1000);
        const randomY: Function = d3.randomNormal(200, 1000);
        const data: ScatterData = {
            ratios: [],
            significances: []
        };
        for (let i: number = 0; i < 40; i += 1) {
            data.ratios.push(base + randomX());
            data.significances.push(base + randomY());
        }

        return data;
    }
    //tslint:disable-next-line
    private drawGraph(): d3.Selection<d3.BaseType, {}, HTMLElement, {}> {
        const svg: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select(this.referenceChartId())
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

        svg.select("*").remove();
        svg.attr("class", styles.scatter);

        this.height = this.props.height - this.margin.top - this.margin.bottom;
        this.width = this.props.width - this.margin.right - this.margin.left;
        this.ratio = this.height / this.width;
        const xAxisPos: Point = {
            x: this.props.width / 2,
            y: this.props.height - 15
        };
        const yAxisPos: Point = {
            x: 20,
            y: this.props.height / 2
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

        const g: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`)
            .attr("overflow", "hidden");

        this.minX = d3.min(this.datas, (d: ScatterData): number => d3.min(d.ratios));
        this.maxX = d3.max(this.datas, (d: ScatterData): number => d3.max(d.ratios));
        this.minY = d3.min(this.datas, (d: ScatterData): number => d3.min(d.significances));
        this.maxY = d3.max(this.datas, (d: ScatterData): number => d3.max(d.significances));

        this.xScale = d3.scaleLinear()
            .range([0, this.width])
            .domain([this.minX, this.maxX]);
        this.yScale = d3.scaleLinear()
            .range([this.height, 0])
            .domain([this.minY, this.maxY]);

        this.xDiff = 0;
        const xTicks: number[] = this.xScale.ticks();
        if (xTicks.length > 2) {
            this.xDiff = Math.abs(xTicks[0] - xTicks[1]);
            this.xScale.domain([this.minX - this.xDiff, this.maxX + this.xDiff]);
        }

        this.yDiff = 0;
        const yTicks: number[] = this.yScale.ticks();
        if (yTicks.length > 2) {//increase range by one tick
            this.yDiff = Math.abs(yTicks[0] - yTicks[1]);
            this.yScale.domain([this.minY - this.yDiff, this.maxY + this.yDiff]);
        }

        this.xAxis = d3.axisBottom(this.xScale).tickValues(this.xScale.ticks(8)) as d3.Axis<number>;
        this.yAxis = d3.axisLeft(this.yScale).tickValues(this.yScale.ticks(8)).tickSizeInner(-this.width) as d3.Axis<number>;

        const xG: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = g.append("g")
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

        const zoom: d3.ZoomBehavior<Element, {}> = d3.zoom()
            .scaleExtent([1, 64])
            .translateExtent([[0, this.margin.bottom + this.margin.top], [this.width, this.height]])
            .on("zoom", () => {
                const zoomTransform: d3.ZoomTransform = d3.event.transform;
                const newXScale: d3.ScaleLinear<number, number> = this.xScale.copy()
                    .domain([this.minX / zoomTransform.k, this.maxX / zoomTransform.k]);
                const newYScale: d3.ScaleLinear<number, number> = this.yScale.copy()
                    .domain([this.minY / zoomTransform.k, this.maxY / zoomTransform.k]);
                this.xScale = newXScale;
                this.yScale = newYScale;
                this.zoom(g, main, yG);
            });

        main.call(zoom);

        const brush: d3.BrushBehavior<{}> = d3.brush().on("end", (idleTimeout) => { //tslint:disable-line
            const s = d3.event.selection; //tslint:disable-line
            let newXScale: d3.ScaleLinear<number, number>;
            let newYScale: d3.ScaleLinear<number, number>;
            if (s === null) {
                if (this.idleTimeout === null) {
                    this.idleTimeout = setTimeout(this.idled, 350);

                    return;
                }
                newXScale = this.xScale.copy().domain([this.minX - this.xDiff, this.maxX + this.xDiff]);
                newYScale = this.yScale.copy().domain([this.minY - this.yDiff, this.maxY + this.yDiff]);
            } else {
                newXScale = this.xScale.copy().domain([s[0][0] * this.ratio, s[1][0]].map(this.xScale.invert, this.xScale));
                newYScale = this.yScale.copy().domain([s[1][1], s[0][1] * this.ratio].map(this.yScale.invert, this.yScale));
                svg.select(".brush").call(brush.move, null);
            }
            this.xScale = newXScale;
            this.yScale = newYScale;
            this.zoom(svg, main, yG);
        });

        main.append("g")
            .attr("class", "brush")
            .call(brush);

        const points: Point[] = this.convertPointsArray(this.datas[0], green);
        const tooltip: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = d3.select("body").append("div")
            .attr("class", styles.tooltip)
            .style("opacity", 0);
        main.selectAll(".circle")
            .data(points).enter().append("circle")
            .attr("cx", (point: Point) => this.xScale(point.x))
            .attr("cy", (point: Point) => this.yScale(point.y))
            .attr("r", 2)
            .attr("fill", "white")
            .attr("stroke", (point: Point) => point.color)
            .attr("stroke-width", 1)
            .attr("clip-path", "url(#clip)")
            .attr("class", "circles")
            .on("mouseover", (point: Point) => {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`Protein`)//tslint:disable-line
                    .style("left", `${(d3.event.pageX as number) + 15}px`)
                    .style("top", `${(d3.event.pageY as number)}px`);
            })
            .on("mouseout", (point: Point) => {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        return svg;
    }

    private referenceChartId(): string {
        return "#".concat(this.props.graphId);
    }
    private zoom(g: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                 main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                 yG: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
        const t = g.transition().duration(750);//tslint:disable-line
        this.xAxis = d3.axisBottom(this.xScale).tickValues(this.xScale.ticks(8));
        this.yAxis = d3.axisLeft(this.yScale).tickValues(this.yScale.ticks(8)).tickSizeInner(-this.width);
        g.select(".xAxis").transition(t).call(this.xAxis);
        g.select(".yAxis").transition(t).call(this.yAxis);
        main.selectAll(".circles").transition(t)
            .attr("cx", (point: Point) => this.xScale(point.x))
            .attr("cy", (point: Point) => this.yScale(point.y));
    }
    private remove(main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>, brush: d3.BrushBehavior<{}>): void {//tslint:disable-line
        main.selectAll(".rect").selectAll(".selection").call(brush.move, null);
    }
    private convertPointsArray(data: ScatterData, c: string): Point[] {
        const points: Point[] = [];
        for (let i: number = 0; i < data.ratios.length; i += 1) {
            points.push({
                x: data.ratios[i],
                y: data.significances[i],
                color: c
            });
        }

        return points;
    }
    private idled(): void {
        this.idleTimeout = null;
    }
    private generateTooltip(): string {
        return "Protein";
    }

}
export { ScatterChart };
