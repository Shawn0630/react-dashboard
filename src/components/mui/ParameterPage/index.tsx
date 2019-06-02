import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {
    ExpectedRatios,
    ExperimentAlias,
    NormalizationMethodType,
    ReporterIonQNormalization,
    SpectrumFilterParameters,
} from "~/models/Parameters";

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
    normalizationParams: ReporterIonQNormalization;
    openDialog: boolean;
}

export default class ParameterPage extends React.PureComponent<{}, ParameterPageStates> {
    private sampleNames: string[] = [];

    constructor() {
        super(null);

        for (const sample of samples as ISample[]) {
            this.sampleNames.push(sample.name);
        }

        const manualExpectedRatios: ExpectedRatios[] = [];
        const spikedExpectedRatios: ExpectedRatios[] = [];

        if ((experiments as ExperimentAlias[]) != null) {
            for (const sample of (experiments as ExperimentAlias[])) {
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
        }

        this.state = {
            parameter: {
                minPValue: 0,
                presentReferenceChannel: false,
            },
            normalizationParams: {
                normalizationMethod: NormalizationMethodType.NO_NORMALIZATION,
                manualExpectedRatios: manualExpectedRatios,
                spikedExpectedRatios: spikedExpectedRatios,
                spikedProteinHitIdList: []
            },
            openDialog: false
        };

        this.updateSpectrumFilter = this.updateSpectrumFilter.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.updateNormalizationParams = this.updateNormalizationParams.bind(this);
    }

    public render(): JSX.Element {
        return <React.Fragment>
            <LFQNormalizationDialog open={this.state.openDialog} samples={this.sampleNames} allProteinList={[]}
                closeDialog={this.closeDialog} />
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    <SpectrumFilter parameters={this.state.parameter} onChange={this.updateSpectrumFilter} maxChannelCount={4} />
                </Grid>
                <Grid item xs={4}>
                    <Button color="primary" onClick={this.openDialog}>
                        Primary
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <ReporterIonQIntraSampleNormalization enableInterExperimentNormalization={true}
                        normalizationParams={this.state.normalizationParams}
                        samples={samples as ISample[]}
                        experimentAlias={experiments as ExperimentAlias[]}
                        onChange={this.updateNormalizationParams} />
                </Grid>
            </Grid>
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

    private updateNormalizationParams(parameters: ReporterIonQNormalization): void {
        this.setState({
            normalizationParams: {
                ...this.state.normalizationParams,
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
