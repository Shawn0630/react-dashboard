import * as React from "react";
import * as d3 from "d3";

const green: string = "rgb(0, 255, 0)";
const red: string = "rgb(255, 0, 0)";
const grey: string = "rgb(207, 211, 216)";

interface ScatterChartProps {
    graphId: string;
    width: number;
    height: number;
    yLabel: string;
}

interface Data {
    xs: number[];
    ys: number[];
}
interface Point {
    x: number;
    y: number;
    color?: string;
}

type MarginType = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

type Size = {
    width: number;
    heigth: number;
};

class ScatterChart extends React.PureComponent<ScatterChartProps> {

    private datas: Data[] = [];
    private margin: MarginType = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 60
    };
    private boxSize: Size = {
        width: 5,
        heigth: 5
    };
    private height: number;
    private width: number;
    private ratio: number;
    private minX: number;
    private maxX: number;
    private minY: number;
    private maxY: number;
    private xScale: d3.ScaleLinear<number, number>;
    private yScale: d3.ScaleLinear<number, number>;
    private xAxis: any; //tslint:disable-line
    private yAxis: any; //tslint:disable-line
    private idleTimeout: any; //tslint:disable-line
    private idleDelay: any; //tslint:disable-line

    constructor(props: ScatterChartProps) {
        super(props);
        this.datas.push(this.fillData());

        this.idleTimeout = null;
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

    private fillData(): Data {
        const base: number = 100;
        const randomX: Function = d3.randomNormal(200, 1000);
        const randomY: Function = d3.randomNormal(200, 1000);
        const data: Data = {
            xs: [],
            ys: []
        };
        for (let i: number = 0; i < 40; i += 1) {
            data.xs.push(base + randomX());
            data.ys.push(base + randomY());
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

        this.height = this.props.height - this.margin.top - this.margin.bottom;
        this.width = this.props.width - this.margin.right - this.margin.left;
        this.ratio = this.height / this.width;

        const g: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`)
            .attr("overflow", "hidden");

        this.minX = d3.min(this.datas, (d: Data): number => d3.min(d.xs));
        this.maxX = d3.max(this.datas, (d: Data): number => d3.max(d.xs));
        this.minY = d3.min(this.datas, (d: Data): number => d3.min(d.ys));
        this.maxY = d3.max(this.datas, (d: Data): number => d3.max(d.ys));

        this.xScale = d3.scaleLinear()
            .range([0, this.width])
            .domain([this.minX, this.maxX]);
        this.yScale = d3.scaleLinear()
            .range([this.height, 0])
            .domain([this.minY, this.maxY]);

        this.xAxis = d3.axisBottom(this.xScale);
        this.yAxis = d3.axisLeft(this.yScale);

        g.append("g")
            .attr("class", "xAxis")
            .attr("transform", `translate(0, ${this.height})`)
            .call(this.xAxis);
        g.append("g")
            .attr("class", "yAxis")
            .call(this.yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 10)
            .attr("dy", ".1em")
            .attr("text-anchor", "end")
            .attr("fill", "rgb(54, 54, 54)")
            .attr("font-size", "1.2em")
            .text(this.props.yLabel);
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

        const points: Point[] = this.convertPointsArray(this.datas[0], green);

        main.selectAll(".circle")
            .data(points).enter().append("circle")
            .attr("cx", (point: Point) => this.xScale(point.x))
            .attr("cy", (point: Point) => this.yScale(point.y))
            .attr("r", 4)
            .attr("fill", "white")
            .attr("stroke", (point: Point) => point.color)
            .attr("stroke-width", 1)
            .attr("class", "circles");

        const brush = d3.brush().on("end",(idleTimeout) => { //tslint:disable-line
            const s = d3.event.selection; //tslint:disable-line
            let newXScale: d3.ScaleLinear<number, number>;
            let newYScale: d3.ScaleLinear<number, number>;
            if (s === null) {
                if (this.idleTimeout === null) {
                    this.idleTimeout = setTimeout(this.idled, 350);

                    return;
                }
                newXScale = this.xScale.copy().domain([this.minX, this.maxX]);
                newYScale = this.yScale.copy().domain([this.minY, this.maxY]);
            } else {
                newXScale = this.xScale.copy().domain([s[0][0] * this.ratio, s[1][0]].map(this.xScale.invert, this.xScale));
                newYScale = this.yScale.copy().domain([s[1][1], s[0][1] * this.ratio].map(this.yScale.invert, this.yScale));
                svg.select(".brush").call(brush.move, null);
            }
            this.zoom(g, main, newXScale, newYScale);
        });

        main.append("g")
            .attr("class", "brush")
            .call(brush);

        return svg;
    }

    private referenceChartId(): string {
        return "#".concat(this.props.graphId);
    }
    private zoom(g: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                 main: d3.Selection<d3.BaseType, {}, HTMLElement, {}>,
                 newXScale: d3.ScaleLinear<number, number>,
                 newYScale: d3.ScaleLinear<number, number>): void {
        const t = g.transition().duration(750);//tslint:disable-line
        this.xScale = newXScale;
        this.yScale = newYScale;
        g.select(".xAxis").transition(t).call(this.xAxis.scale(this.xScale));
        g.select(".yAxis").transition(t).call(this.yAxis.scale(this.yScale));
        main.selectAll(".circles").transition(t)
        .attr("cx", (point: Point) => newXScale(point.x))
        .attr("cy", (point: Point) => newYScale(point.y));
    }
    private convertPointsArray(data: Data, c: string): Point[] {
        const points: Point[] = [];
        for (let i: number = 0; i < data.xs.length; i += 1) {
            points.push({
                x: data.xs[i],
                y: data.ys[i],
                color: c
            });
        }

        return points;
    }
    private idled(): void {
        this.idleTimeout = null;
    }
}
export {ScatterChart};
