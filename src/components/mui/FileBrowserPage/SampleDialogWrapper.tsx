import * as React from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import { com } from "~models/example";
import ISample = com.example.dto.ISample;
import Sample = com.example.dto.Sample;
import { Map } from "immutable";
import SampleDialog from "./SampleDialog";
import { Enzyme} from "~models/Enzyme";
import { Instrument } from "~models/Instrument";
import * as enzymes from "../../../data/Enzyme.json";
import * as instruments from "../../../data/Instrument.json";
import * as existedSample from "../../../data/Samples.json";

interface SampleDialogProps {} //tslint:disable-line

interface SampleDialogState {
    open: boolean;
}

export default class SampleDialogWrapper extends React.PureComponent<SampleDialogProps, SampleDialogState> {
    constructor(props: SampleDialogProps) {
        super(props);

        this.state = {
            open: false
        };

        this.openSampleDialog = this.openSampleDialog.bind(this);
        this.closeSampleDialog = this.closeSampleDialog.bind(this);
    }

    public render(): JSX.Element {
        const enzymeOptions: string[] = (enzymes as Enzyme[]).map((item: Enzyme) => item.name);
        const instrumentOptions: string[] = (instruments as Instrument[]).map((item: Instrument) => item.name);
        const files: Map<string, File> = Map<string, File>();
        const samples: ISample[] = [];
        const existingSample: ISample[] = (existedSample as ISample[]).map((item: ISample) => Sample.fromObject(item));
        return <div>
        <Button variant="fab" color="primary" aria-label="Add" mini
                onClick={this.openSampleDialog}>
                <Add />
        </Button>
        <SampleDialog open={this.state.open} key="sample_dialog"
            files={files} samples={samples}
            enzymeOptions={enzymeOptions} instrumentOptions={instrumentOptions}
            handleCancel={this.closeSampleDialog} existedSample={existingSample} />
        </div>;
    }

    private closeSampleDialog(): void {
        this.setState({
            open: false
        });
    }
    private openSampleDialog(): void {
        this.setState({
            open: true
        });
    }

}
