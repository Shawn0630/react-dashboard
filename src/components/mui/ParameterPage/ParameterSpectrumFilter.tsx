import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import * as React from "react";
import { ErrorTextField } from "~components/shared/ErrorTextField";
import { SpectrumFilterParameters } from "~models/Parameters";
import { getOrDefault, parseNumber, renderOptions } from "~utilities/ui-helper";
import Typography from "@material-ui/core/Typography";
import {DropdownSelector} from "~components/shared/DropDownSelector";
import * as styles from "./ParameterSpectrumFilter.scss";
import { withStyles } from "@material-ui/core/styles";

interface SpectrumFilterProps {
    parameters: SpectrumFilterParameters;
    disabled?: boolean;
    maxChannelCount: number;
    onChange<K extends keyof SpectrumFilterParameters>(parameters: Pick<SpectrumFilterParameters, K>): void;
}

enum ThresholdOption {
    PVALUE = "PValue",
    FDR = "FDR"
}

const StyledFormControlLabel = withStyles(() => ({ //tslint:disable-line
    root: {
        marginRight: 0
    }
}))(FormControlLabel);

interface SpectrumFilterStates {
    minPValueError: string;
    maxFDRError: string;
    qualityError: string;
    reporterIonIntensityError: string;
    minPresentChannelCountError: string;
    option: ThresholdOption;
}

export default class SpectrumFilter extends React.PureComponent<SpectrumFilterProps, SpectrumFilterStates> {
    constructor(props: SpectrumFilterProps) {
        super(props);

        this.state = {
            minPValueError: "",
            maxFDRError: "",
            qualityError: "",
            reporterIonIntensityError: "",
            minPresentChannelCountError: "",
            option: this.props.parameters.minPValue != null ? ThresholdOption.PVALUE : ThresholdOption.FDR
        };

        this.changeMaxFDR = this.changeMaxFDR.bind(this);
        this.changeMinPValue = this.changeMinPValue.bind(this);
        this.changeThresholdOption = this.changeThresholdOption.bind(this);
        this.changeQuality = this.changeQuality.bind(this);
        this.changePresentReferenceChannel = this.changePresentReferenceChannel.bind(this);
        this.changeIntensity = this.changeIntensity.bind(this);
        this.changeMinPresentChannelCount = this.changeMinPresentChannelCount.bind(this);
    }
    public validate(): boolean {
       return true;
    }

    public render(): JSX.Element {
        console.log(this.props.disabled === true ||
            this.state.option !== ThresholdOption.FDR);
        return <Paper>
            <Typography variant="h5">
                <b>Spectrum Filter</b>
            </Typography>
            <FormControl className={styles.formControl}>
                <FormGroup row>
                    <RadioGroup
                        aria-label="spectrum-filter-threshold"
                        name="threshold"
                        row
                        value={this.state.option}
                        onChange={this.changeThresholdOption}
                    >
                        <StyledFormControlLabel value="PValue" control={<Radio color="primary" disabled={this.props.disabled}/>}
                            label={null} />
                        <ErrorTextField className={styles.minPValueTextField}
                            value={getOrDefault(this.props.parameters.minPValue)}
                            id="spectrum-filter-threshold-pvalue" errorText={this.state.minPValueError}
                            label={"-10lgP \u2265"} inputType="number" key="spectrum-filter-threshold-pvalue"
                            onChange={this.changeMinPValue}
                            disabled={this.props.disabled === true || this.state.option !== ThresholdOption.PVALUE}/>}
                        <StyledFormControlLabel value="FDR" control={<Radio color="primary" disabled={this.props.disabled}/>}
                            label={null} />
                        <DropdownSelector
                            label={"FDR(%) \u2264"} className={styles.dropDownSelector}
                            disabled={this.props.disabled === true || this.state.option !== ThresholdOption.FDR}
                            onChange={this.changeMaxFDR} type={"number"}
                            errorText={this.state.maxFDRError} value={getOrDefault(this.props.parameters.maxFDR)}
                            options={{
                                "0.1%": 0.1,
                                "0.5%": 0.5,
                                "1.0%": 1,
                                "2.0%": 2,
                                "5.0%": 5
                            }} />
                    </RadioGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={getOrDefault(this.props.parameters.presentReferenceChannel, false)}
                                onChange={this.changePresentReferenceChannel}
                                value="presentReferenceChannel"
                                color="primary"
                                disabled={this.props.disabled}
                            />
                        }
                        label={
                            <span style={{ alignSelf: "center" }}>
                                <Typography variant="display3">
                                    Reference Channel Present
                                </Typography>
                            </span>
                        }
                    />
                </FormGroup>
            </FormControl>
            <FormControl className={styles.formControl} style={{paddingLeft: 15}}>
                <FormGroup row>
                    <DropdownSelector
                        label={"Quality:"} className={styles.dropDownSelector}
                        disabled={this.props.disabled} onChange={this.changeQuality} type={"number"}
                        errorText={this.state.qualityError} value={getOrDefault(this.props.parameters.quality)}
                        options={{
                            "0": 0,
                            "15": 15,
                            "20": 20,
                            "30": 30,
                            "40": 40
                        }}/>
                    <DropdownSelector
                        label={"Reporter Ion Intensity \u2265:"} className={styles.dropDownSelector}
                        disabled={this.props.disabled} onChange={this.changeIntensity} type={"number"}
                        errorText={this.state.reporterIonIntensityError} value={getOrDefault(this.props.parameters.minReporterIonIntensity)}
                        options={{
                            "0E0": 0,
                            "1E4": 10000,
                            "1E5": 100000,
                            "1E6": 1000000,
                            "1E7": 10000000,
                            "1E8": 100000000,
                            "1E9": 1000000000
                        }} />
                    <DropdownSelector
                        label={"Number of Channels Present \u2265:"} className={styles.dropDownSelector}
                        disabled={this.props.disabled} onChange={this.changeMinPresentChannelCount} type={"number"}
                        errorText={this.state.minPresentChannelCountError}
                        value={getOrDefault(this.props.parameters.minPresentChannelCount)}
                        options={renderOptions(1, this.props.maxChannelCount + 1)} />
                </FormGroup>
            </FormControl>
        </Paper>;
    }

    private changeMinPValue(pValue: string): void {
        this.props.onChange({
            minPValue: parseNumber(pValue)
        });
    }

    private changeMaxFDR(fdr: string): void {
        this.props.onChange({
            maxFDR: parseNumber(fdr)
        });
    }

    private changeQuality(quality: string): void {
        this.props.onChange({
            quality: parseNumber(quality)
        });
    }

    private changeIntensity(quality: string): void {
        this.props.onChange({
            minReporterIonIntensity: parseNumber(quality)
        });
    }

    private changeMinPresentChannelCount(channelCount: string): void {
        this.props.onChange({
            minPresentChannelCount: parseNumber(channelCount)
        });
    }

    private changeThresholdOption(event: React.ChangeEvent<HTMLInputElement>, value: string): void {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            option: event.target.value as ThresholdOption
        });

        if (event.target.value === ThresholdOption.FDR) {
            this.changeMinPValue("");
        } else if (event.target.value === ThresholdOption.PVALUE) {
            this.changeMaxFDR("");
        }
    }

    private changePresentReferenceChannel(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void {
        this.props.onChange({
            presentReferenceChannel: !(getOrDefault(this.props.parameters.presentReferenceChannel, false) as boolean)
        });
    }
}
