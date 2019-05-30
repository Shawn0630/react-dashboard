import * as React from "react";
import SpectrumFilter from "./ParameterSpectrumFilter";
import { SpectrumFilterParameters } from "~/models/Parameters";

interface ParameterPageStates {
    parameter: SpectrumFilterParameters;
}

export default class ParameterPage extends React.PureComponent<{}, ParameterPageStates> {

    constructor() {
        super(null);

        this.state = {
            parameter: {
                minPValue: 0,
                presentReferenceChannel: false,
            }
        };

        this.updateSpectrumFilter = this.updateSpectrumFilter.bind(this);

    }

    public render(): JSX.Element {
        return <React.Fragment>
            <SpectrumFilter parameters={this.state.parameter} onChange={this.updateSpectrumFilter} maxChannelCount={4}/>
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
}
