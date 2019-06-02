import * as d3 from "d3";
import { Map } from "immutable";
import * as React from "react";

import { com } from "../../../models/example";
import { HeatmapHelper } from "./heatmap-helper";
import * as styles from "./Heatmap.scss";

import ISample = com.example.dto.ISample;
import IGroup = com.example.dto.IGroup;
import IDendrogram = com.example.dto.IDendrogram;
import IHeatMapRow = com.example.dto.IHeatMapRow;
//tslint:disable-next-line
interface HeatmapProps {
    graphId: string;
    width: number;
    height: number;
    data: IDendrogram;
    maxProteinsReachedBackend: boolean;
    groups: IGroup[];
    samples: ISample[];
}
//tslint:disable-next-line
interface HeatmapState {
}

interface Node {
    row: IHeatMapRow;
    children: Node[];
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

type Location = {
    x: number;
    y: number;
};

class Heatmap extends React.PureComponent<HeatmapProps, HeatmapState> {

    private margin: MarginType = {
        top: 100,
        right: 60,
        bottom: 50,
        left: 10
    };

    private maxTreeHeight: number = 100;
    private depthWidth: number = 5;
    private childrenWidth: number = 15;
    private ceilWidth: number = 65;
    private alignedTreeData: d3.HierarchyNode<Node>;
    private tooltips: Map<Location, string> = Map<Location, string>();

    private canvasId: string = "heatmap-canvas";
    private canvas: HTMLCanvasElement;

    constructor(props: HeatmapProps) {
        super(props);

        this.drawChart = this.drawChart.bind(this);
        this.constructTree = this.constructTree.bind(this);
        this.alignedTree = this.alignedTree.bind(this);
        this.onHover = this.onHover.bind(this);
    }

    public render(): JSX.Element {
        const minSize: Size = {
            width: 500,
            height: 500
        };
        if (this.props.maxProteinsReachedBackend) {
            return <span>
                Server exceeded the protein number limit, protein heatmap is hidden.
            </span>;
        } else if (this.props.data != null) {
            if (this.props.samples.length <= 50) {
                this.ceilWidth = 65;
            } else if (this.props.samples.length <= 75) {
                this.ceilWidth = 45;
            } else if (this.props.samples.length <= 100) {
                this.ceilWidth = 35;
            } else {
                this.ceilWidth = 25;
            }
            const graphSize: Size = this.calculateGraphSize();
            return <div id={this.props.graphId} style={{position: "relative"}}>
                <svg width={graphSize.height + this.margin.left + this.margin.right < minSize.width ?
                            minSize.width : graphSize.height + this.margin.left + this.margin.right}
                    height={graphSize.width + this.margin.top + this.margin.bottom < minSize.height ?
                            minSize.height : graphSize.width + this.margin.top + this.margin.bottom}
                    style={{position: "absolute", left: 0, right: 0}}        />
                <canvas id={this.canvasId} onMouseMove={this.onHover} role="img"/>
                <div className={styles.tooltip} id="tooltip">
                </div>
            </div>;
        } else {
            return <span>No proteins available under the filter.</span>;
        }
    }

    public componentDidMount(): void {
        if (this.props.data != null && !this.props.maxProteinsReachedBackend) {
            this.drawChart();
        }
    }

    private calculateGraphSize(): Size {
        const xPos: number = 140;
        const data: Node = this.constructTree(this.props.data);
        const treeData: d3.HierarchyNode<Node> = d3.hierarchy(data);
        const alignedData: Node = this.alignedTree(data, 0, treeData.height);
        this.alignedTreeData = d3.hierarchy(alignedData);

        return {
            width: this.alignedTreeData.leaves().length * this.childrenWidth,
            height: this.alignedTreeData.depth * this.depthWidth + this.margin.left +
                    xPos + this.props.samples.length * this.ceilWidth + 800
        };
    }
    //tslint:disable-next-line
    private drawChart(): void {
        const xPos: number = 140;

        const graphSize: Size = {
            width: this.alignedTreeData.leaves().length * this.childrenWidth,
            height: this.alignedTreeData.depth * this.depthWidth + this.margin.left + xPos +
                    this.props.samples.length * this.ceilWidth + 800
        };

        const treemap: d3.TreeLayout<Node> = d3.tree<Node>().size([graphSize.width, graphSize.height]);
        const nodes: d3.HierarchyPointNode<Node> = treemap(this.alignedTreeData);
        const links: d3.HierarchyPointLink<Node>[] = nodes.links();
        const descendants: d3.HierarchyPointNode<Node>[] = nodes.descendants();
        const leaves: d3.HierarchyPointNode<Node>[] = nodes.leaves();

        const svg: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select(this.referenceChartId()).select("svg");
        this.canvas = d3.select("#".concat(this.canvasId))
                .attr("width", graphSize.height)
                .attr("height", graphSize.width)
                .attr("style", `position: relative; top: ${this.margin.top}px; left: ${this.margin.left}px`)
                .node() as HTMLCanvasElement;
        svg.selectAll("*").remove();

        const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

        descendants.forEach((n: d3.HierarchyPointNode<{}>) => {
            n.y = n.depth * this.depthWidth;
        });

        const ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
        leaves.forEach((leaf: d3.HierarchyPointNode<Node>) => {
            const accession: string = leaf.data.row.accession.substring(0, 20)
                                        .concat(leaf.data.row.accession.length > 20 ? "..." : "");
            this.tooltips = this.tooltips.set({x: leaf.y + 10, y: leaf.x}, leaf.data.row.accession);
            ctx.beginPath();
            ctx.arc(leaf.y, leaf.x, 2, 0, Math.PI * 2);
            ctx.stroke();
            ctx.font = "10px";
            ctx.fillText(leaf.data.row == null ? "" : accession, leaf.y + 10, leaf.x);
        });
        links.forEach((link: d3.HierarchyPointLink<Node>) => {
            ctx.beginPath();
            ctx.moveTo(link.source.y, link.source.x);
            ctx.lineTo(link.source.y, link.target.x);
            ctx.lineTo(link.target.y, link.target.x);
            ctx.stroke();
        });
        this.props.samples.forEach((sample: ISample, index: number) => {
            ctx.beginPath();
            ctx.fillText(sample.name, leaves[0].depth * this.depthWidth + this.margin.left + xPos + index * this.ceilWidth + 30, 0);
            leaves.forEach((leaf: d3.HierarchyPointNode<Node>) => {
                ctx.fillStyle = HeatmapHelper.getColorFromLevel(1 / 16, leaf.data.row.colour[index], 16).toString();
                ctx.fillRect(leaf.y + xPos + index * this.ceilWidth, leaf.x - 10, this.ceilWidth, this.childrenWidth);
            });
            svg.append("text")
                .attr("transform",
                      `translate(${leaves[0].depth * this.depthWidth + this.margin.left +
                                    xPos + index * this.ceilWidth + this.ceilWidth / 2}, 60) rotate(-45)`)
                .text(`${sample.name}`);
            svg.append("rect")
                .attr("transform", `translate(${leaves[0].depth * this.depthWidth + this.margin.left + xPos + index * this.ceilWidth},65)`)
                .attr("width", this.ceilWidth)
                .attr("height", 20)
                .attr("style", `fill:${this.getSampleColor(sample.id, this.props.groups)}`);
        });

        const colorbar: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform",
                  `translate(${leaves[0].depth * this.depthWidth + this.margin.left + xPos +
                                this.props.samples.length * this.ceilWidth},25)`);

        this.drawColorBar(colorbar);

        const legend: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
        .attr("transform",
              `translate(${leaves[0].depth * this.depthWidth + this.margin.left * 2 + xPos +
                            this.props.samples.length * this.ceilWidth}, 300)`);

        this.drawLengend(legend);
    }

    private referenceChartId(): string {
        return "#".concat(this.props.graphId);
    }

    private diagonal(link: d3.HierarchyPointLink<{}>): string {
        return `M ${link.source.y} ${link.source.x} L ${link.source.y} ${link.target.x} L ${link.target.y} ${link.target.x}`;
    }

    private alignedTree(tree: Node, depth: number, height: number): Node {
       const root: Node = {
           row: tree.row,
           children: []
       };

       this.alignedTreeDFS(root, tree, depth + 1, height);

       return root;
    }

    private alignedTreeDFS(root: Node, tree: Node, depth: number, height: number): void {

        if (tree.children.length === 0) {
            this.addDesecendant(root, height - depth);

            return;
        }

        for (let i: number = 0; i < tree.children.length; i += 1) {
            root.children.push({
                row: tree.children[i].row,
                children: []
            });
            this.alignedTreeDFS(root.children[i], tree.children[i], depth + 1, height);
        }

    }

    private addDesecendant(root: Node, depth: number): void {
        let currentNode: Node = root;
        for (let i: number = 0; i <= depth; i += 1) {
            currentNode.children.push({
                row: root.row,
                children: []
            });
            currentNode = currentNode.children[0];
        }
    }

    private constructTree(root: IDendrogram): Node {
        const treeRoot: Node = {
            row : null,
            children: []
        };

        this.constructTreeDFS(root, treeRoot, 0, this.maxTreeHeight);

        return treeRoot;
    }

    private constructTreeDFS(root: IDendrogram, tree: Node, depth: number, maxTreeHeight: number): void {

        if (depth > maxTreeHeight) {
            const rows: IHeatMapRow[] = this.getTreeRows(root);
            for (const r of rows) {
                tree.children.push({
                    row: r,
                    children: [{
                        row: r,
                        children: []
                    }]
                });
            }

            return;
        }

        if (root.row != null) {
            tree.row = root.row;
            tree.children.push({
                row: root.row,
                children: []
            });

            return;
        }

        tree.children.push({
            row: null,
            children: []
        });
        this.constructTreeDFS(root.left, tree.children[0], depth + 1, maxTreeHeight);

        tree.children.push({
            row: null,
            children: []
        });
        this.constructTreeDFS(root.right, tree.children[1], depth + 1, maxTreeHeight);

        return;
    }

    private getTreeRows(root: IDendrogram): IHeatMapRow[] {
        const rows: IHeatMapRow[] = [];

        this.getTreeRowsDFS(root, rows);

        return rows;
    }

    private getTreeRowsDFS(root: IDendrogram, rows: IHeatMapRow[]): void {
        if (root.row != null) {
            rows.push(root.row);

            return;
        }

        this.getTreeRowsDFS(root.left, rows);
        this.getTreeRowsDFS(root.right, rows);
    }

    private getSampleColor(sampleId: string, groups: IGroup[]): string {
        for (const group of groups) {
            const color: string = group.hexColour;
            for (const id of group.sampleIds) {
                if (sampleId === id) {
                    return color;
                }
            }
        }

        return "#000000";
    }

    private drawColorBar(svg: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
        const gradientPadding: MarginType = {
            top: 30,
            right: 35,
            bottom: 10,
            left: 35
        };
        const width: number = 100;
        const height: number = 220;
        const gradientWidth: number = width - gradientPadding.left - gradientPadding.right;
        const gradientHeight: number = height - gradientPadding.top - gradientPadding.bottom;
        const colorScale: string[] = ["#ff0000", "#AA0000", "#550000", "#005500", "#00AA00", "#00ff00"];
        svg.selectAll("*").remove();

        svg.append("text")
            .attr("transform", "translate(25, 20)")
            .attr("font-size", "12")
            .text("log2(Ratio)");

        // create colour scale
        d3.scaleLinear<d3.RGBColor, number>()
            .domain(this.linspace(-4, 4, colorScale.length))
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
        const percentage: string[] = this.linspace(0, 100, colorScale.length).map((perc: number) => {
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
            .domain([-4, 4])
            .range([gradientHeight, 0]);

        const legendAxis: d3.Axis<{}> = d3.axisRight(legendScale)
            .tickValues([-4, 0, 4])
            .tickFormat(d3.format("d"));

        svg.append("g")
            .attr("class", "legend axis")
            .attr("transform", `translate(${gradientWidth + gradientPadding.left}, ${gradientPadding.top})`)
            .call(legendAxis);
    }

    private linspace(start: number, end: number, n: number): number[] {
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

    private drawLengend(svg: d3.Selection<d3.BaseType, {}, HTMLElement, {}>): void {
        const padding: MarginType = {
            top: 30,
            right: 35,
            bottom: 10,
            left: 35
        };
        let index: number = 0;
        const ceilWidth: number = 65;
        const ceilHeight: number = 20;
        for (const group of this.props.groups) {
            svg.append("rect")
                .attr("dy", ".25em")
                .attr("x", padding.left)
                .attr("y", index * ceilHeight)
                .attr("width", ceilWidth)
                .attr("height", ceilHeight)
                .attr("style", `fill:${group.hexColour}`);
            svg.append("text")
                .attr("dy", ".25em")
                .attr("x", `${padding.left + ceilWidth + 20}`)
                .attr("y", index * ceilHeight + ceilHeight / 2)
                .text(`${group.groupName}`);
            index = index + 2;
        }
    }

    private onHover(e: React.MouseEvent<HTMLCanvasElement>): void {
        const r: ClientRect = this.canvas.getBoundingClientRect();
        const x: number = e.clientX - r.left;
        const y: number = e.clientY - r.top;
        const hovered: Location[] = this.tooltips.keySeq().toArray()
            .filter((location: Location) => (location.x <= x && x <= location.x + this.ceilWidth * 5) &&
                        (location.y - this.childrenWidth / 2 <= y && y <= location.y + this.childrenWidth - this.childrenWidth / 2));
        if (hovered.length === 1) {
            const node: HTMLElement = document.getElementById("tooltip");
            while (node.firstChild != null) {
                node.removeChild(node.firstChild);
            }
            document.getElementById("tooltip").style.display = "inline-block";
            document.getElementById("tooltip").style.position = "absolute";
            document.getElementById("tooltip").style.left = (x - 20).toString().concat("px");
            document.getElementById("tooltip").style.top = (y + 120).toString().concat("px");
            const tooltip: HTMLDivElement = document.createElement("div");
            const accession: HTMLDivElement = document.createElement("div");
            accession.innerHTML = this.tooltips.get(hovered[0]) //tslint:disable-line
            tooltip.appendChild(accession);
            document.getElementById("tooltip").appendChild(tooltip);
        } else {
            document.getElementById("tooltip").style.display = "none";
        }
    }
}

export {Heatmap};
