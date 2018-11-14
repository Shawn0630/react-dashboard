import * as d3 from "d3";
import * as React from "react";

import { Color } from "../../../models/Color";
import { com } from "../../../models/example";
import * as styles from "./Heatmap.scss";
import { HeatmapHelper } from "./heatmap-helper";

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
    private alignedTreeData: d3.HierarchyNode<Node>;

    constructor(props: HeatmapProps) {
        super(props);

        this.drawChart = this.drawChart.bind(this);
        this.constructTree = this.constructTree.bind(this);
        this.alignedTree = this.alignedTree.bind(this);
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
            const graphSize: Size = this.calculateGraphSize();
            return <div id={this.props.graphId} >
                <svg width={graphSize.height + this.margin.left + this.margin.right < minSize.width ?
                            minSize.width : graphSize.height + this.margin.left + this.margin.right}
                    height={graphSize.width + this.margin.top + this.margin.bottom < minSize.height ?
                            minSize.height : graphSize.width + this.margin.top + this.margin.bottom} />
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
        const ceilWidth: number = 65;
        const data: Node = this.constructTree(this.props.data);
        const treeData: d3.HierarchyNode<Node> = d3.hierarchy(data);
        const alignedData: Node = this.alignedTree(data, 0, treeData.height);
        this.alignedTreeData = d3.hierarchy(alignedData);

        return {
            width: this.alignedTreeData.leaves().length * this.childrenWidth,
            height: this.alignedTreeData.depth * this.depthWidth + this.margin.left + xPos + this.props.samples.length * ceilWidth + 800
        };
    }

    private drawChart(): void {
        const xPos: number = 140;
        const ceilWidth: number = 65;

        const graphSize: Size = {
            width: this.alignedTreeData.leaves().length * this.childrenWidth,
            height: this.alignedTreeData.depth * this.depthWidth + this.margin.left + xPos + this.props.samples.length * ceilWidth + 800
        };

        const treemap: d3.TreeLayout<Node> = d3.tree<Node>().size([graphSize.width, graphSize.height]);
        const nodes: d3.HierarchyPointNode<Node> = treemap(this.alignedTreeData);
        const links: d3.HierarchyPointLink<Node>[] = nodes.links();
        const descendants: d3.HierarchyPointNode<Node>[] = nodes.descendants();
        const leaves: d3.HierarchyPointNode<Node>[] = nodes.leaves();

        const svg: d3.Selection<SVGElement, {}, HTMLElement, {}> = d3.select(this.referenceChartId()).select("svg");
        svg.selectAll("*").remove();

        const graph: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

        descendants.forEach((n: d3.HierarchyPointNode<{}>) => {
            n.y = n.depth * this.depthWidth;
        });

        const leaf: d3.Selection<d3.BaseType, d3.HierarchyPointNode<Node>, d3.BaseType, {}> = graph.selectAll("leaf");
        leaf.data(leaves).enter().append("circle")
            .attr("cx", (n: d3.HierarchyPointNode<Node>) => n.y)
            .attr("cy", (n: d3.HierarchyPointNode<Node>) => n.x)
            .attr("r", 2);
        leaf.data(leaves).enter().append("text")
            .attr("dy", ".25em")
            .attr("x", (n: d3.HierarchyPointNode<Node>) => n.y + 10)
            .attr("y", (n: d3.HierarchyPointNode<Node>) => n.x)
            .attr("text-anchor", "start")
            .attr("font-size", "10px")
            .text((n: d3.HierarchyPointNode<Node>) => {
                return n.data.row == null ? "" : n.data.row.accession;
            });
        for (let i: number = 0; i < this.props.samples.length; i += 1) {
            svg.append("text")
                .attr("transform",
                      `translate(${leaves[0].depth * this.depthWidth + this.margin.left + xPos + i * ceilWidth + 30},60) rotate(-45)`)
                .text(`${this.props.samples[i].name}`);
            svg.append("rect")
                .attr("transform", `translate(${leaves[0].depth * this.depthWidth + this.margin.left + xPos + i * ceilWidth},65)`)
                .attr("width", ceilWidth)
                .attr("height", 20)
                .attr("style", `fill:${this.getSampleColor(this.props.samples[i].id, this.props.groups)}`);

            leaf.data(leaves).enter().append("rect")
                .attr("dy", ".25em")
                .attr("x", (n: d3.HierarchyPointNode<Node>) => n.y + xPos + i * ceilWidth)
                .attr("y", (n: d3.HierarchyPointNode<Node>) => n.x - 10)
                .attr("width", ceilWidth)
                .attr("height", this.childrenWidth)
                .attr("style", (n: d3.HierarchyPointNode<Node>) => {
                    if (n.data.row == null) {
                        return null;
                    }
                    const color: Color = HeatmapHelper.getColorFromLevel(1 / 16, n.data.row.colour[i], 16);

                    return `fill:${color}`;
                });
        }
        // Update the links...
        graph.selectAll("path.link")
            .data(links).enter()
            .insert("path", "g")
            .attr("class", styles.treeLine)
            .attr("d", (d: d3.HierarchyPointLink<{}>) => {
                return this.diagonal(d);
            });

        const colorbar: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
            .attr("transform",
                  `translate(${leaves[0].depth * this.depthWidth + this.margin.left + xPos + this.props.samples.length * ceilWidth},25)`);

        this.drawColorBar(colorbar);

        const legend: d3.Selection<d3.BaseType, {}, HTMLElement, {}> = svg.append("g")
        .attr("transform",
              `translate(${leaves[0].depth * this.depthWidth + this.margin.left + xPos + this.props.samples.length * ceilWidth}, 300)`);

        this.drawLengend(legend);

    }

    private referenceChartId(): string {
        return "#".concat(this.props.graphId);
    }

    private diagonal(link: d3.HierarchyPointLink<{}>): string {

        // return `M ${link.source.y} ${link.source.x}C ${(link.source.y + link.target.y) / 2} ${link.source.x},
        //       ${(link.source.y + link.target.y) / 2} ${link.target.x},
        //       ${link.target.y} ${link.target.x}`;

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
}

export {Heatmap};
