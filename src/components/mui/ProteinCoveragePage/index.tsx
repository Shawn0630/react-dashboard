import * as React from "react";
import ProteinCoverage from "./ProteinCoverage";
import { com } from "~models/example";
import IProteinPeptide = com.example.dto.IProteinPeptide;
import * as proteinPeptide from "../../../data/ProteinPeptide.json";

export default class ProteinCoveragePage extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <React.Fragment>
            <ProteinCoverage proteinPeptide={proteinPeptide as IProteinPeptide} aaPerLine={80} aaPerCol={10}/>
        </React.Fragment>;
    }
}
