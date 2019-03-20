import * as React from "react";
import * as d3 from "d3";

interface ColorLegendProps {
  graphId: string;
  width: number;
  height: number;
  maxPsm: number;
}

type Margin = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export default class ColorLegend extends React.PureComponent<ColorLegendProps> {
  private margin: Margin = {
    left: 10,
    right: 20,
    top: 10,
    bottom: 10
  };

  constructor(props: ColorLegendProps) {
    super(props);
  }

  public componentDidMount(): void {
      this.drawChart();
  }

  public render(): JSX.Element {
    return <svg id={this.props.graphId}
              width={this.props.width + this.margin.left + this.margin.right}
              height={this.props.height + this.margin.top + this.margin.bottom}/>;
  }

  private drawChart(): void {
    const svg: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select(this.referenceChartId());
    const legend: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("class", "legend")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    this.drawColorBar(legend);
  }

  private referenceChartId(): string {
    return "#".concat(this.props.graphId);
  }

  private drawColorBar(svg: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
    const gradientPadding: Margin = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };
    const width: number = this.props.width;
    const height: number = this.props.height;
    const gradientWidth: number = width - gradientPadding.left - gradientPadding.right;
    const gradientHeight: number = height - gradientPadding.top - gradientPadding.bottom;
    const colorScale: string[] = ["#ffffff", "#b40000"];
    svg.selectAll("*").remove();

    // create colour scale
    d3.scaleLinear<d3.RGBColor, number>()
        .domain(this.lineSpace(-4, 4, colorScale.length))
        .range([d3.rgb(colorScale[0]), d3.rgb(colorScale[colorScale.length - 1])]);

    // append gradient bar
    const gradient: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("defs")
        .append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%") // bottom
        .attr("y1", "100%")
        .attr("x2", "0%") // to top
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

    // programatically generate the gradient for the legend
    // this creates an array of [pct, colour] pairs as stop
    // values for legend
    const percentage: string[] = this.lineSpace(0, 100, colorScale.length).map((perc: number) => {
        return `${Math.round(perc)}%`;
    });

    const colourPcts: string[][] = d3.zip(percentage, colorScale);

    colourPcts.forEach((d: string[]) => {
        gradient.append("stop")
            .attr("offset", d[0])
            .attr("stop-color", d[1])
            .attr("stop-opacity", 1);
    });

    svg.append("rect")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("width", gradientWidth)
        .attr("height", gradientHeight)
        .attr("transform", `translate(${gradientPadding.left}, ${gradientPadding.top})`)
        .style("fill", "url(#gradient)");

    // create a scale and axis for the legend
    const legendScale: d3.ScaleLinear<number, number> = d3.scaleLinear()
        .domain([0, this.props.maxPsm])
        .range([gradientHeight, 0]);

    const legendAxis: d3.Axis<{}> = d3.axisRight(legendScale)
        .tickValues([0, this.props.maxPsm / 2, this.props.maxPsm])
        .tickFormat(d3.format("d"));

    svg.append("g")
        .attr("class", "legend axis")
        .attr("transform", `translate(${gradientWidth + gradientPadding.left}, ${gradientPadding.top})`)
        .call(legendAxis);
  }
  private lineSpace(start: number, end: number, n: number): number[] {
    const out: number[] = [];
    const delta: number = (end - start) / (n - 1);

    let i: number = 0;
    while (i < (n - 1)) {
        out.push(start + (i * delta));
        i = i + 1;
    }
    out.push(end);

    return out;
  }
}
