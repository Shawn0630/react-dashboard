import * as React from "react";
import { Heatmap } from "./Heatmap";
import * as data from "../../../data/Heatmap.json";
import * as samples from "../../../data/Samples.json";
import * as groups from "../../../data/Groups.json";
import { com } from "../../../models/example";
import IDendrogram = com.example.dto.IDendrogram;
import IGroup = com.example.dto.IGroup;
import ISample = com.example.dto.ISample;

export default class HeatmapPage extends React.PureComponent<null> {
    public render(): JSX.Element {
        return <Heatmap graphId="heatmap" width={1200} height={1200}
                    maxProteinsReachedBackend={false} data={data as IDendrogram}
                    groups={groups as IGroup[]} samples={samples as ISample[]}/>;
    }
}
