import * as React from "react";
import * as RGL from "react-grid-layout";
import * as styles from "./NormalizationDialog.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { parseNumbers } from "~utilities/ui-helper";
import { LfqNormalizationProteinTable } from "./NormalizationProteinTable";
import { LfqSampleRatioTable } from "./NormalizationSampleRatio";
import { Loader } from "~components/shared/Loader";
import { NormalizationMethod } from "~models/NormalizationMethod";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import { LfqSimpleProtein, NormalizationMethodType } from "~models/Parameters";
const ReactGridLayout: React.ComponentClass<RGL.ReactGridLayoutProps & RGL.WidthProviderProps> = RGL.WidthProvider(RGL); // tslint:disable-line

interface QFilterNormalizationDialogProps {
    open: boolean;
    samples: string[];
    allProteinList: LfqSimpleProtein[];
    closeDialog(): void;
}

interface QFilterNormalizationDialogState {
    normalizationMethod: NormalizationMethodType;
    manualExpectedRatios: string[];
    spikedExpectedRatios: string[];
    spikedProteinHitIdList: string[];
    InvalidInputError: string;
    proteinFilterFunction(protein: LfqSimpleProtein): boolean;
}

class LfqFilterNormalizationDialog extends React.PureComponent<QFilterNormalizationDialogProps, QFilterNormalizationDialogState> {
    constructor(props: QFilterNormalizationDialogProps) {
        super(props);

        this.state = {
            normalizationMethod: NormalizationMethodType.NO_NORMALIZATION,
            spikedProteinHitIdList: [],
            manualExpectedRatios: [],
            spikedExpectedRatios: [],
            InvalidInputError: "",
            proteinFilterFunction: this.noFilter
        };

        this.changeNormalization = this.changeNormalization.bind(this);
        this.updateSpikedProteinIds = this.updateSpikedProteinIds.bind(this);
        this.sortTable = this.sortTable.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.updateProteinFilterFunction = this.updateProteinFilterFunction.bind(this);
        this.updateExpectedRatio = this.updateExpectedRatio.bind(this);
    }
    public componentWillReceiveProps(nextProps: QFilterNormalizationDialogProps): void {
        this.setState({
            normalizationMethod: NormalizationMethodType.NO_NORMALIZATION,
            spikedProteinHitIdList: [],
            manualExpectedRatios: [],
            spikedExpectedRatios: [],
            InvalidInputError: "",
            proteinFilterFunction: this.noFilter
        });
    }
    public render(): JSX.Element {

        const layout: ReactGridLayout.Layout[] = [
            { i: "methods", x: 0, y: 0, w: 3, h: 3, static: true },
            { i: "expected-ratios", x: 0, y: 3, w: 3, h: 6, static: true },
            { i: "spiked-ids", x: 3, y: 0, w: 8, h: 9, static: true }
        ];

        let widthDialog: number = 1100;
        let widthGridLayout: string = "100%"; //the gridlayout width needs to be constant to not mess the ui
        if (!this.renderSpikedIds()) {
            widthDialog = 270;
            widthGridLayout = "400%"; //=70%/21% (old width/new width)
        }

        return <Dialog key={"test"} open={this.props.open} className={styles.dialog} maxWidth={false}>
            <DialogTitle>Normalization Methods</DialogTitle>
            <DialogContent>
                <div style={{ width: widthDialog }}>
                    <ReactGridLayout layout={layout} cols={11} rowHeight={45} margin={[2, 2]}
                        autoSize={true} useCSSTransforms={true}
                        style={{ maxWidth: widthGridLayout, width: widthGridLayout, minWidth: widthGridLayout }}>
                        <div key="methods">
                               {this.renderOptions()}
                        </div>
                        <div key="expected-ratios">
                            {this.renderExpectedNormalizationPage()}
                        </div>
                        <div key="spiked-ids">
                            {this.renderAllProteins()}
                        </div>
                    </ReactGridLayout>
                    <div>
                        <Typography color="error">{this.state.InvalidInputError}</Typography>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={this.handleClose}>Close</Button>
                <Button color="primary" onClick={this.handleSave}>Save</Button>
            </DialogActions>
        </Dialog>;
    }
    private renderOptions(): JSX.Element {
        return <RadioGroup name={"type"} onChange={this.changeNormalization}
            value={NormalizationMethod.toString(this.state.normalizationMethod)}>
            {
            Object.keys(NormalizationMethod.normalizationMethods).map((type: string) => {
                let isDisable: boolean = false;
                if (type === "Use Internal Standard Proteins" && !this.renderSpikedIds()) {
                    isDisable = true;
                }
                return <FormControlLabel key={type} label={type} value={type} disabled={isDisable}
                    control={<Radio color="primary" disableRipple style={{ height: 30 }} />} />;
            })
            }
        </RadioGroup>;
    }
    private renderSpikedIds(): boolean {
        return !(this.state.normalizationMethod !== NormalizationMethodType.SPIKE_NORMALIZATION || this.props.allProteinList === undefined);
    }
    private renderExpectedNormalizationPage(): JSX.Element {
        const methodType: NormalizationMethodType = this.state.normalizationMethod;
        if (methodType === NormalizationMethodType.AUTO_NORMALIZATION || methodType === NormalizationMethodType.NO_NORMALIZATION) {
            return null;
        }

        let expectedRatios: string[];
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            expectedRatios = this.state.spikedExpectedRatios;
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            expectedRatios = this.state.manualExpectedRatios;
        }
        const items: number[] = expectedRatios.map((value: string, index: number) => index);
        const pageSize: number = 20;
        const maxHeight: number = items.length > pageSize ? 270 - 46 : 270;

        return <div id="expectedRatiosTable" className={styles.sampleTable}>
            <LfqSampleRatioTable samples={this.props.samples} expectedRatios={expectedRatios}
                pageSize={items.length > pageSize ? pageSize : -1} onSort={null} items={items}
                updateExpectedRatio={this.updateExpectedRatio} maxHeight={maxHeight}
            />
        </div>;
    }
    private updateExpectedRatio(data: string, index: number): void {
        const methodType: NormalizationMethodType = this.state.normalizationMethod;
        let expectedRatios: string[];
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            expectedRatios = this.state.spikedExpectedRatios.slice();
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            expectedRatios = this.state.manualExpectedRatios.slice();
        }
        expectedRatios[index] = data;
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            this.setState({
                spikedExpectedRatios: expectedRatios
            });
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            this.setState({
                manualExpectedRatios: expectedRatios
            });
        }
    }
    private renderAllProteins(): JSX.Element {
        if (!this.renderSpikedIds()) {
            return null;
        }

        if (this.props.allProteinList == null) {
            return <Loader />;
        }

        return <LfqNormalizationProteinTable proteinSelected={this.updateSpikedProteinIds} maxHeight={410}
            onSort={this.sortTable} selectedProteinIds={this.state.spikedProteinHitIdList}
            allProteinList={this.props.allProteinList} onProteinFilter={this.updateProteinFilterFunction}
            items={this.props.allProteinList.filter(this.state.proteinFilterFunction)} pageSize={20} />;
    }
    private updateProteinFilterFunction(fn: (protein: LfqSimpleProtein) => boolean): void {
        this.setState({
            proteinFilterFunction: fn
        });
    }
    private changeNormalization(event: object, value: string): void {
        this.setState({
            normalizationMethod: NormalizationMethod.fromString(value)
        });
    }
    private updateSpikedProteinIds(proteinIds: string[]): void {
        this.setState({
            spikedProteinHitIdList: proteinIds
        });
    }
    private sortTable(onSort: (a: LfqSimpleProtein, b: LfqSimpleProtein) => number): void {
        //do nothing
    }
    private valid(): boolean {
        let valid: boolean = true;
        const manualExpectedRatios: number[] = parseNumbers(this.state.manualExpectedRatios);
        const spikedExpectedRatios: number[] = parseNumbers(this.state.spikedExpectedRatios);

        const nullOrNegativeOnlyFilter: (n: number) => boolean = (n: number): boolean => {
            return n === null || n < 0;
        };

        if (manualExpectedRatios.filter(nullOrNegativeOnlyFilter).length !== 0) {
            this.setState({ InvalidInputError: "Error: Invalid Expected Ratio(s)" });
            valid = false;
        } else if (spikedExpectedRatios.filter(nullOrNegativeOnlyFilter).length !== 0) {
            this.setState({ InvalidInputError: "Error: Invalid Expected Ratio(s)" });
            valid = false;
        } else if (this.state.normalizationMethod === NormalizationMethodType.SPIKE_NORMALIZATION
            && this.state.spikedProteinHitIdList.length === 0) {
            this.setState({ InvalidInputError: "Select At Least One Protein" });
            valid = false;
        } else {
            this.setState({ InvalidInputError: "" });
        }

        return valid;
    }
    private handleClose(): void {
        this.setState({
            proteinFilterFunction: this.noFilter,
            InvalidInputError: ""
        });
        this.props.closeDialog();
    }
    private handleSave(): void {
        if (this.valid()) {
            this.handleClose();
        }
    }
    private numbersToStrings(inputs: number[]): string[] {
        if (inputs == null || inputs.length === 0) {
            // set default value for creating new analysis
            inputs.push(...Array.apply(1, Array(this.props.samples.length)).map((item: any, index: number) => 1)); // tslint:disable-line
        }
        return inputs.map((value: number) => value.toString());
    }
    private noFilter: (protein: LfqSimpleProtein) => boolean = (protein: LfqSimpleProtein): boolean => true;
}

export { LfqFilterNormalizationDialog as QFilterNormalizationDialog };
