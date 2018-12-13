import * as React from "react";
import VolcanoPlot from "./VolcanoPlot";
import * as proteins from "../../../data/VolcanoPlot.json";
import { com } from "../../../models/example";
import ProteinFoldChange = com.example.dto.ProteinFoldChange;

export default class VolcanoPlotPage extends React.PureComponent<null> {
    public render(): JSX.Element {
        return <VolcanoPlot proteins={proteins as ProteinFoldChange[]} graphId="volcanoPlot"
                            width={700} height={400} interaction={true} />;
    }
}
