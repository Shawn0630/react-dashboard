import * as React from "react";
import { SpectrumFilterParameters } from "~/models/Parameters";

import * as samples from "../../../data/Samples.json";
import { com } from "../../../models/example";
import { QFilterNormalizationDialog } from "./NormalizationDialog";
import LFQNormalizationDialog from "./LFQNormalizationDialog";
import SpectrumFilter from "./ParameterSpectrumFilter"; //tslint:disable-line
import Button from "@material-ui/core/Button";

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
