import * as React from "react";
import { com } from "~models/example";
import { ModificationHelper } from "~utilities/modification-helper";
import Sample = com.example.dto.Sample;
import IFraction = com.example.dto.Sample.IFraction;
import ISupportPeptide = com.example.dto.ISupportPeptide;
import IAbbreviatedModification = com.example.dto.IAbbreviatedModification;
import StatisticsOfFilteredResult = com.example.dto.StatisticsOfFilteredResult;
import LfqStatisticsOfFilteredResult = com.example.dto.LfqStatisticsOfFilteredResult;

import * as proteinPeptide from "../../../data/DBProteinPeptides.json";
import * as samples from "../../../data/Samples.json";
import * as stats from "../../../data/DBFilteredStatistics.json";
import { CoverageProteinPeptide, Option, ProteinsCoverage } from "./ProteinCoverageViaCanvas";

interface ProteinCoverageStates {
    maxPsm: number;
    selectedModifications: { [name: string]: boolean };
}

export default class ProteinCoveragePage extends React.PureComponent<{}, ProteinCoverageStates> {
    public constructor() {
        super({});

        this.state = {
            maxPsm: 0,
            selectedModifications: this.createPreSelectedModificationData((proteinPeptide as CoverageProteinPeptide).peptides)
        };

        this.updateMaxValue = this.updateMaxValue.bind(this);
        this.createPreSelectedModificationData = this.createPreSelectedModificationData.bind(this);
    }

    public render(): JSX.Element {
        const fractions: { [key: string]: string } = {};
        (samples as Sample[]).forEach((sample: Sample) => {
            sample.fractions.forEach((fraction: IFraction) => {
                fractions[fraction.id] = fraction.sourceFile;
            });
        });
        debugger;
        return <React.Fragment>
            <ProteinsCoverage key="coverage" proteinPeptide={proteinPeptide as CoverageProteinPeptide}
                sampleFrequency={null} samples={samples as Sample[]} updateMaxValue={this.updateMaxValue}
                fractions={fractions} tooltipHeight={0} sampleId={null} aaPerLine={110} aaPerCol={10}
                selectedModifications={this.state.selectedModifications} ptmMap={(stats as StatisticsOfFilteredResult).modifications}
                peptideSelected={null} selectedPeptide={null}
                option={Option.PROTEIN_COVERAGE} />,
        </React.Fragment>;
    }

    private updateMaxValue(value: number): void {
        this.setState({
            maxPsm: value
        });
    }

    private createPreSelectedModificationData(supportPeptides: ISupportPeptide[]): { [name: string]: boolean } {
        const selectedModifications: { [name: string]: boolean } = {};
        for (const peptide of supportPeptides) {
            const abbrModiList: IAbbreviatedModification[] = ModificationHelper.getAbbrModiList(
                peptide.peptide.modifications,
                (stats as StatisticsOfFilteredResult).modifications);
            abbrModiList.map((modi: IAbbreviatedModification, index: number) => {
                selectedModifications[modi.name] = true;
            });
        }
        return selectedModifications;
    }
}
