import Button from "@material-ui/core/Button";
import * as React from "react";
import { ExperimentAlias, SpectrumFilterParameters } from "~/models/Parameters"

import * as experiments from "../../../data/ExperimentAlias.json";
import * as normalizationParams from "../../../data/NormalizationParams.json";
import * as samples from "../../../data/Samples.json";
import { com } from "../../../models/example";
import LFQNormalizationDialog from "./LFQNormalizationDialog";
import SpectrumFilter from "./ParameterSpectrumFilter";
import ReporterIonQIntraSampleNormalization from "./ReporterIonQIntraSampleNormalization";

import ISample = com.example.dto.ISample;
interface ParameterPageStates {
    parameter: SpectrumFilterParameters;
    openDialog: boolean;
}

export default class ParameterPage extends React.PureComponent<{}, ParameterPageStates> {
    private sampleNames: string[] = [];

    constructor() {
        super(null);

        this.state = {
            parameter: {
                minPValue: 0,
                presentReferenceChannel: false,
            },
            openDialog: false
        };

        for(const sample of samples as ISample[]) {
            this.sampleNames.push(sample.name);
        }

        const manualExpectedRatios: IExpectedRatios[] = [];
        const spikedExpectedRatios: IExpectedRatios[] = [];

        for (const sample of (samples as ISample[])) {
            manualExpectedRatios.push({
                sampleName: sample.sampleName,
                sampleId: sample.sampleId,
                spikedChannelName: sample.spikedChannelName,
                channelAlias: sample.channelAlias,
                ratio: 1
            });
            spikedExpectedRatios.push({
                sampleName: sample.sampleName,
                sampleId: sample.sampleId,
                spikedChannelName: sample.spikedChannelName,
                channelAlias: sample.channelAlias,
                ratio: 1
            });
        }

        this.updateSpectrumFilter = this.updateSpectrumFilter.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

    }

    public render(): JSX.Element {
        return <React.Fragment>
            <LFQNormalizationDialog open={this.state.openDialog} samples={this.sampleNames} allProteinList={[]}
                                        closeDialog={this.closeDialog} />
            <SpectrumFilter parameters={this.state.parameter} onChange={this.updateSpectrumFilter} maxChannelCount={4}/>
            <Button color="primary" onClick={this.openDialog}>
                Primary
            </Button>
            <ReporterIonQIntraSampleNormalization enableInterExperimentNormalization={true}
                                                  normalizationParams={}
                                                  samples={samples as ISample[]}
                                                  experimentAlias={experiments as ExperimentAlias[]}
                                                  save={null}/>
        </React.Fragment>;
    }

    private updateSpectrumFilter(parameters: SpectrumFilterParameters): void {
       this.setState({
           parameter: {
               ...this.state.parameter,
               ...parameters,
           }
       });
    }

    private openDialog(): void {
        this.setState({
            openDialog: true
        });
    }

    private closeDialog(): void {
        this.setState({
            openDialog: false
        });
    }
}
