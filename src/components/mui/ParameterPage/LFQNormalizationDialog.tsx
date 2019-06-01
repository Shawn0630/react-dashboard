import * as React from "react";
import * as styles from "./NormalizationDialog.scss";
import BaseNormalizationDialog from "./BaseNormalizationDialog";
import { LfqNormalizationProteinTable } from "./NormalizationProteinTable";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { LfqSampleRatioTable } from "./NormalizationSampleRatio";
import Radio from "@material-ui/core/Radio";
import { Loader } from "~components/shared/Loader";
import RadioGroup from "@material-ui/core/RadioGroup";
import { NormalizationMethod } from "~models/NormalizationMethod";
import { LfqSimpleProtein, NormalizationMethodType } from "~models/Parameters";
import { getOrDefault, parseNumbers } from "~utilities/ui-helper";

interface LFQNormalizationDialogProps {
    samples: string[];
    open: boolean;
    allProteinList: LfqSimpleProtein[];
    closeDialog(): void;
}

interface LFQNormalizationParams {
    normalizationMethod: NormalizationMethodType;
    manualExpectedRatios: string[];
    spikedExpectedRatios: string[];
    spikedProteinHitIdList: string[];
}

interface LFQNormalizationDialogStates {
    params: LFQNormalizationParams;
    invalidInputError: string;
    proteinFilterFunction(protein: LfqSimpleProtein): boolean;
}

export default class LFQNormalizationDialog extends React.PureComponent<LFQNormalizationDialogProps, LFQNormalizationDialogStates> {
    constructor(props: LFQNormalizationDialogProps) {
        super(props);

        this.state = {
            params: {
                normalizationMethod: NormalizationMethodType.NO_NORMALIZATION,
                spikedProteinHitIdList: [],
                manualExpectedRatios: ["1", "1"],
                spikedExpectedRatios: ["1", "1"],
            },
            proteinFilterFunction: this.noFilter,
            invalidInputError: ""
        };

        this.updateExpectedRatio = this.updateExpectedRatio.bind(this);
        this.changeNormalization = this.changeNormalization.bind(this);
        this.renderAllProteins = this.renderAllProteins.bind(this);
        this.renderSpikedIds = this.renderSpikedIds.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.updateSpikedProteinIds = this.updateSpikedProteinIds.bind(this);
        this.sortTable = this.sortTable.bind(this);
        this.updateProteinFilterFunction = this.updateProteinFilterFunction.bind(this);
        this.valid = this.valid.bind(this);
        this.renderExpectedNormalizationPage = this.renderExpectedNormalizationPage.bind(this);
    }

    public render(): JSX.Element {
        return <BaseNormalizationDialog normalizationParams={this.state.params}
                                        renderExpectedNormalizationPage={this.renderExpectedNormalizationPage}
                                        renderSpikedIds={this.renderSpikedIds}
                                        renderAllProteins={this.renderAllProteins}
                                        renderOptions={this.renderOptions}
                                        invalidInputError={this.state.invalidInputError}
                                        validate={this.valid}
                                        handleClose={this.props.closeDialog}
                                        handleSave={this.props.closeDialog}
                                        open={this.props.open}/>;
    }

    private renderOptions(): JSX.Element {
        return <RadioGroup name={"type"} onChange={this.changeNormalization}
            value={NormalizationMethod.toString(this.state.params.normalizationMethod)}>
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

    private renderExpectedNormalizationPage(): JSX.Element {
        const methodType: NormalizationMethodType = this.state.params.normalizationMethod;
        if (methodType === NormalizationMethodType.AUTO_NORMALIZATION || methodType === NormalizationMethodType.NO_NORMALIZATION) {
            return null;
        }

        let expectedRatios: string[];
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            expectedRatios = this.state.params.spikedExpectedRatios;
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            expectedRatios = this.state.params.manualExpectedRatios;
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
    private renderAllProteins(): JSX.Element {
        if (!this.renderSpikedIds()) {
            return null;
        }

        if (this.props.allProteinList == null) {
            return <Loader />;
        }

        return <LfqNormalizationProteinTable proteinSelected={this.updateSpikedProteinIds} maxHeight={410}
            onSort={this.sortTable} selectedProteinIds={this.state.params.spikedProteinHitIdList}
            allProteinList={this.props.allProteinList} onProteinFilter={this.updateProteinFilterFunction}
            items={this.props.allProteinList.filter(this.state.proteinFilterFunction)} pageSize={20} />;
    }
    private updateExpectedRatio(data: string, index: number): void {
        const methodType: NormalizationMethodType = this.state.params.normalizationMethod;
        let expectedRatios: string[];
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            expectedRatios = this.state.params.spikedExpectedRatios.slice();
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            expectedRatios = this.state.params.manualExpectedRatios.slice();
        }
        expectedRatios[index] = data;
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            this.setState({
                params: {
                    ...this.state.params,
                    spikedExpectedRatios: expectedRatios
                }
            });
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            this.setState({
                params: {
                    ...this.state.params,
                    manualExpectedRatios: expectedRatios
                }
            });
        }
    }
    private changeNormalization(event: object, value: string): void {
        this.setState({
            params: {
                ...this.state.params,
                normalizationMethod: NormalizationMethod.fromString(value)
            }
        });
    }
    private renderSpikedIds(): boolean {
        return !(this.state.params.normalizationMethod !== NormalizationMethodType.SPIKE_NORMALIZATION || this.props.allProteinList === undefined);//tslint:disable-line
    }
    private sortTable(onSort: (a: LfqSimpleProtein, b: LfqSimpleProtein) => number): void {
        //do nothing
    }
    private updateProteinFilterFunction(fn: (protein: LfqSimpleProtein) => boolean): void {
        this.setState({
            proteinFilterFunction: fn
        });
    }
    private noFilter: (protein: LfqSimpleProtein) => boolean = (protein: LfqSimpleProtein): boolean => true;
    private updateSpikedProteinIds(proteinIds: string[]): void {
        this.setState({
            params: {
                ...this.state.params,
                spikedProteinHitIdList: proteinIds
            }
        });
    }
    private valid(): boolean {
        let valid: boolean = true;
        const manualExpectedRatios: number[] = parseNumbers(this.state.params.manualExpectedRatios);
        const spikedExpectedRatios: number[] = parseNumbers(this.state.params.spikedExpectedRatios);

        const nullOrNegativeOnlyFilter: (n: number) => boolean = (n: number): boolean => {
            return n === null || n < 0;
        };

        if (this.state.params.normalizationMethod === NormalizationMethodType.MANUAL_NORMALIZATION &&
            manualExpectedRatios.filter(nullOrNegativeOnlyFilter).length !== 0) {
            this.setState({ invalidInputError: "Error: Invalid Expected Ratio(s)" });
            valid = false;
        } else if (this.state.params.normalizationMethod === NormalizationMethodType.SPIKE_NORMALIZATION &&
            spikedExpectedRatios.filter(nullOrNegativeOnlyFilter).length !== 0) {
            this.setState({ invalidInputError: "Error: Invalid Expected Ratio(s)" });
            valid = false;
        } else if (this.state.params.normalizationMethod === NormalizationMethodType.SPIKE_NORMALIZATION
            && this.state.params.spikedProteinHitIdList.length === 0) {
            this.setState({ invalidInputError: "Select At Least One Protein" });
            valid = false;
        } else {
            this.setState({ invalidInputError: "" });
        }

        return valid;
    }
}
