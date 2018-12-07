import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Map, OrderedMap } from "immutable";
import * as React from "react";
import { com } from "~models/example";
import ISample = com.example.dto.ISample;
import IFraction = com.example.dto.Sample.IFraction;
import { convertStringToActionMehtod } from "~models/FractionInfo";
import { DraggableSampleSubmissionPanel, SampleSubmissionPanel } from "./SampleSubmissionPanel";
import { withStyles } from "@material-ui/core";

interface SampleDialogProps {
    open: boolean;
    files: Map<string, File>;
    enzymeOptions: string[];
    instrumentOptions: string[];
    samples: ISample[];
    existedSample?: ISample[];
    handleCancel(): void;
}

interface SelectableSample extends ISample {
    selected?: boolean;
    loadSuccess?: boolean;
}

export default withStyles({
    paperWidthMd: {
        maxWidth: 1280
    }
})(
    class SampleDialog extends React.PureComponent<SampleDialogProps> {
    private submissionPanel: SampleSubmissionPanel = null;
    constructor(props: SampleDialogProps) {
        super(props);

        this.setPanel = this.setPanel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render(): JSX.Element {
        return <Dialog fullWidth={true} maxWidth="md"
            open={this.props.open} disableBackdropClick disableEscapeKeyDown scroll="paper">
            <DialogTitle> Samples </DialogTitle>
            <DialogContent>
            <div>
                <DraggableSampleSubmissionPanel enzymeOptions={this.props.enzymeOptions} instrumentOptions={this.props.instrumentOptions}
                    existingFiles={this.props.files} samples={this.props.samples} existedSample={this.props.existedSample}
                    beforeMount={this.setPanel} />
            </div>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={this.handleCancel}> Cancel </Button>
                <Button color="primary" onClick={this.handleSave}> Save </Button>
            </DialogActions>
        </Dialog>;
    }
    private setPanel(panel: SampleSubmissionPanel): void {
        this.submissionPanel = panel;
    }
    private handleCancel(): void {
        this.setState({
            existingFile: this.props.files
        });
        this.props.handleCancel();
    }
    private handleSave(): void {
        let updatedExistingFile: OrderedMap<string, File> = OrderedMap<string, File>();
        if (this.submissionPanel.validate()) {
            const samples: SelectableSample[] = [];
            for (const sample of this.submissionPanel.getSampleList()) {
                // accept empty sample
                if (sample.files.length === 0) {
                    continue;
                }
                const fractions: IFraction[] = [];
                for (const fraction of sample.files) {
                    fractions.push({
                        sourceFile: fraction.name
                    });
                    updatedExistingFile = updatedExistingFile.set(fraction.name, fraction.file);
                }
                samples.push({
                    name: sample.sampleName,
                    enzyme: sample.enzyme,
                    instrument: sample.instrument,
                    activationMethod: convertStringToActionMehtod(sample.activationMethod),
                    fractions: fractions,
                    selected: true,
                    loadSuccess: true,
                });
            }
        }
    }
});
