import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import * as RGL from "react-grid-layout";
import { NormalizationMethod } from "~models/NormalizationMethod";
import {
    ExpectedRatios,
    ExperimentAlias,
    LfqSimpleProtein,
    NormalizationMethodType,
    ReporterIonQNormalization,
    SampleSelection,
} from "~models/Parameters";
import { parseNumber } from "~utilities/ui-helper";

import * as styles from "./NormalizationDialog.scss";
import ReporterIonQRatioTable from "./ReporterIonQRatioTable";
import { com } from "~models/example";
import ISample = com.example.dto.ISample;

const ReactGridLayout: React.ComponentClass<RGL.ReactGridLayoutProps & RGL.WidthProviderProps> = RGL.WidthProvider(RGL); // tslint:disable-line

interface ReporterIonQIntraSampleNormalizationProps {
    samples: ISample[];
    enableInterExperimentNormalization: boolean;
    experimentAlias: ExperimentAlias[];
    normalizationParams: ReporterIonQNormalization;
    allProteinList?: LfqSimpleProtein;
    onChange<K extends keyof ReporterIonQNormalization>(parameters: Pick<ReporterIonQNormalization, K>): void;
}

interface ReporterIonQIntraSampleNormalizationStates {
    displaySample: string;
    invalidInputError: string;
}

export default class ReporterIonQIntraSampleNormalization extends React.PureComponent<ReporterIonQIntraSampleNormalizationProps, ReporterIonQIntraSampleNormalizationStates> { //tslint:disable-line
    private samples: SampleSelection[] = [];

    constructor(props: ReporterIonQIntraSampleNormalizationProps) {
        super(props);

        const manualExpectedRatios: ExpectedRatios[] = [];
        const spikedExpectedRatios: ExpectedRatios[] = [];

        if (this.props.experimentAlias != null) {
            for (const sample of this.props.experimentAlias) {
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
        this.samples = this.getSamples(this.props.experimentAlias);

        this.state = {
            invalidInputError: "",
            displaySample: this.samples.length === 0 ? null : this.samples[0].id
        };

        this.updateExpectedRatio = this.updateExpectedRatio.bind(this);
        this.changeDisplaySample = this.changeDisplaySample.bind(this);
        this.changeNormalization = this.changeNormalization.bind(this);
    }

    public render(): JSX.Element {

        const layout: ReactGridLayout.Layout[] = [
            { i: "methods", x: 0, y: 0, w: 5, h: 0, static: true },
            { i: "expected-ratios", x: 0, y: 3, w: 5, h: 3, static: true },
            { i: "spiked-ids", x: 5, y: 0, w: 5, h: 3, static: true }
        ];

        let widthDialog: number = 1100;
        let widthGridLayout: string = "100%"; //the gridlayout width needs to be constant to not mess the ui
        if (!this.renderSpikedIds()) {
            widthDialog = 270;
            widthGridLayout = "400%"; //=70%/21% (old width/new width)
        }

        return <div style={{ width: widthDialog }}>
            <ReactGridLayout layout={layout} cols={11} rowHeight={45} margin={[2, 2]}
                autoSize={true} useCSSTransforms={true}
                style={{ maxWidth: widthGridLayout, width: widthGridLayout, minWidth: widthGridLayout, position: "relative" }}>
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
                <Typography color="error">{this.state.invalidInputError}</Typography>
            </div>
        </div>;
    }

    public validate(): boolean {
        return true;
    }

    private renderOptions(): JSX.Element {
        return <RadioGroup name={"type"} onChange={this.changeNormalization}
            value={NormalizationMethod.reporterIonQtoString(this.props.normalizationParams.normalizationMethod)}>
            {
                Object.keys(NormalizationMethod.reporterIonNormalizationMethods).map((type: string) => {
                    let isDisable: boolean = false;
                    if (type === "Normalize to Spike" && !this.renderSpikedIds()) {
                        isDisable = true;
                    }
                    if (this.props.enableInterExperimentNormalization === false &&
                        type !== "No Normalization") {
                        isDisable = true;
                    }
                    return <FormControlLabel key={type} label={type} value={type} disabled={isDisable}
                        control={<Radio color="primary" disableRipple style={{ height: 30 }} />} />;
                })
            }
        </RadioGroup>;
    }

    private changeNormalization(event: object, value: string): void {
        this.props.onChange({
            normalizationMethod: NormalizationMethod.reporterIonQfromString(value)
        });
    }

    private renderExpectedNormalizationPage(): JSX.Element {
        const methodType: NormalizationMethodType = this.props.normalizationParams.normalizationMethod;
        if (methodType === NormalizationMethodType.AUTO_NORMALIZATION || methodType === NormalizationMethodType.NO_NORMALIZATION) {
            return null;
        }

        let expectedRatios: ExpectedRatios[];
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            expectedRatios = this.props.normalizationParams.spikedExpectedRatios;
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            expectedRatios = this.props.normalizationParams.manualExpectedRatios;
        }
        if (this.state.displaySample != null) {
            expectedRatios = expectedRatios.filter((item: ExpectedRatios) => item.sampleId === this.state.displaySample);
        }
        const items: number[] = expectedRatios.map((value: ExpectedRatios, index: number) => index);
        const pageSize: number = 20;
        const maxHeight: number = items.length > pageSize ? 270 - 46 : 270;

        return <React.Fragment>
            <span className={styles.inlineText}>{"Experiment"}</span>
            <Select value={this.state.displaySample} onChange={this.changeDisplaySample}
                    style={{ width: 150, height: 28, marginTop: 25 }}>
                {this.renderSampleOptions(this.samples)}
            </Select>
            <div id="expectedRatiosTable" className={styles.sampleTable}>
                <ReporterIonQRatioTable expectedRatios={expectedRatios}
                    pageSize={items.length > pageSize ? pageSize : -1} onSort={null} items={items}
                    updateExpectedRatio={this.updateExpectedRatio} maxHeight={maxHeight} />
            </div>
        </React.Fragment>;
    }

    private updateExpectedRatio(data: string, index: number): void {
        const methodType: NormalizationMethodType = this.props.normalizationParams.normalizationMethod;
        let expectedRatios: ExpectedRatios[];
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            expectedRatios = this.props.normalizationParams.spikedExpectedRatios.slice();
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            expectedRatios = this.props.normalizationParams.manualExpectedRatios.slice();
        }
        expectedRatios[index].ratio = parseNumber(data);
        if (methodType === NormalizationMethodType.SPIKE_NORMALIZATION) {
            this.props.onChange({
                spikedExpectedRatios: expectedRatios
            });
        } else if (methodType === NormalizationMethodType.MANUAL_NORMALIZATION) {
            this.props.onChange({
                manualExpectedRatios: expectedRatios
            });
        }
    }

    private renderSpikedIds(): boolean {
        return !(this.props.normalizationParams.normalizationMethod !== NormalizationMethodType.SPIKE_NORMALIZATION ||
            this.props.allProteinList === undefined);//tslint:disable-line
    }

    private renderAllProteins(): JSX.Element {
        if (!this.renderSpikedIds()) {
            return null;
        }
        return null;
    }

    private getSamples(experimentAlias: ExperimentAlias[]): SampleSelection[] {
        if (experimentAlias == null) {
            return [];
        }

        const samples: SampleSelection[] = [];
        const sampleIds: string[] = [];
        for (const alias of experimentAlias) {
            if (sampleIds.indexOf(alias.sampleId) < 0) {
                samples.push({
                    name: alias.sampleName,
                    id: alias.sampleId
                });
                sampleIds.push(alias.sampleId);
            }
        }

        return samples;
    }

    private renderSampleOptions(samples: SampleSelection[]): JSX.Element[] {
        const sampleOptions: JSX.Element[] = [];
        //if there is any sample exists in group, only get base sample from group
        samples.map((sample: SampleSelection, index: number) => {
            sampleOptions.push(<MenuItem key={index} value={sample.id}>{sample.name}</MenuItem>);
        });

        return sampleOptions;
    }

    private changeDisplaySample(event: React.ChangeEvent<HTMLSelectElement>): void {
        this.setState({
            displaySample: event.target.value
        });
    }
}
