import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Add from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Share from "@material-ui/icons/Share";
import { OrderedMap } from "immutable";
import { Divider } from "material-ui";
import * as React from "react";
import * as dnd from "react-dnd";
import { ActivationMethod } from "~models/Attributes";
import { convertActionMethodToString, DEFAULT_FRACTIONINFO, FractionInfo } from "~models/FractionInfo";
import { com } from "~models/example";
import * as styles from "./SampleDialog.scss";
import { withDragDropContext } from "~utilities/dnd-helper";
import { MenuSelectDropDown } from "../../shared/MenuSelectDropDown";
import { DroppableFileList } from "./DraggableFileContainer";
import * as sharedStyles from "~styles/shared.scss";
import FileBrowserWrapper from "./FileBrowserWrapper";
import * as root from "../../../data/FileNode.json";
import ISample = com.example.dto.ISample;
import IFraction = com.example.dto.Sample.IFraction;
import FileNode = com.example.dto.FileNode;

interface SampleSubmissionPanelProps {
    enzymeOptions: string[];
    instrumentOptions: string[];
    existingFiles: OrderedMap<string, File>;
    samples: ISample[];
    existedSample?: ISample[];
    beforeMount(sampleSubmissionPanel: SampleSubmissionPanel): void;
}

interface SelectableFile {
    name: string;
    file?: File;
    selected: boolean;
}

interface SampleData {
    fractions: SelectableFile[];
    listIndex: number;
    sampleName: string;
    selected: boolean;
    instrument?: string;
    enzyme?: string;
    activationMethod?: string;
}
interface SampleSubmissionPanelStates {
    sampleList: SampleData[];
    searchPattern: string;
    existingFiles: OrderedMap<string, File>;
    instrument: string;
    enzyme: string;
    activationMethod: string;
    checkSampleListHeader: boolean;
    sampleNameError: boolean[];
    hasSampleNameError: boolean;
}

const SPEC_BY_SAMPLE: string = "Specified by Sample";
class SampleSubmissionPanel extends React.PureComponent<SampleSubmissionPanelProps, SampleSubmissionPanelStates> {
    private existedSampleName: string[];
    private fileBrowserRef: FileBrowserWrapper = null;
    constructor(props: SampleSubmissionPanelProps) {
        super(props);
        const sampleList: SampleData[] = this.convertSampleList(this.props.samples);
        const defaultFractionInfo: FractionInfo = this.getDefaultFractionInfo([...this.props.samples, ...this.props.existedSample]);
        this.state = {
            sampleList: sampleList,
            searchPattern: "",
            existingFiles: this.props.existingFiles,
            instrument: defaultFractionInfo.instrument,
            enzyme: defaultFractionInfo.enzyme,
            activationMethod: defaultFractionInfo.activationMethod,
            checkSampleListHeader : false,
            sampleNameError: [],
            hasSampleNameError: false,
        };
        this.existedSampleName = this.props.existedSample == null ? [] : this.props.existedSample.map((sample: ISample) => sample.name);

        this.getFileBrowserRef = this.getFileBrowserRef.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.indexOf = this.indexOf.bind(this);
        this.moveFile = this.moveFile.bind(this);
        this.pushFile = this.pushFile.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.checkSampleListHeader = this.checkSampleListHeader.bind(this);
        this.checkSampleList = this.checkSampleList.bind(this);
        this.changeEnzyme = this.changeEnzyme.bind(this);
        this.changeSampleName = this.changeSampleName.bind(this);
        this.changeSampleEnzyme = this.changeSampleEnzyme.bind(this);
        this.changeActivationMethod = this.changeActivationMethod.bind(this);
        this.changeSampleActivationMethod = this.changeSampleActivationMethod.bind(this);
        this.changeInstrument = this.changeInstrument.bind(this);
        this.changeSampleInstrument = this.changeSampleInstrument.bind(this);
        this.newSample = this.newSample.bind(this);
        this.splitToSamples = this.splitToSamples.bind(this);
        this.addToSample = this.addToSample.bind(this);
        this.removeFraction = this.removeFraction.bind(this);
    }

    public validate(): boolean {
        const existingSampleNames: string[] = [];
        let hasSampleNameError: boolean = false;
        const sampleNameError: boolean[] = [];
        for (const sample of this.state.sampleList) {
            if (sample.listIndex === 0) {
                continue;
            } else {
                if (existingSampleNames.filter((name: string) => name === sample.sampleName).length > 0 || sample.sampleName === "" ||
                    this.existedSampleName.filter((name: string) => name === sample.sampleName).length > 0) {
                    sampleNameError.push(true);
                    hasSampleNameError = true;
                } else {
                    sampleNameError.push(false);
                }
                existingSampleNames.push(sample.sampleName);
            }
        }

        this.setState({
            sampleNameError: sampleNameError,
            hasSampleNameError: hasSampleNameError,
        });

        return !hasSampleNameError;
    }

    public getSampleList(): SampleData[] {
        return this.state.sampleList.length > 1 ? this.state.sampleList.slice(1, this.state.sampleList.length) : [];
    }
    public getFileList(): SampleData {
        return this.state.sampleList[0];
    }
    public getExistingFile(): OrderedMap<string, File> {
        return this.state.existingFiles;
    }

    public render(): JSX.Element {
        return <div>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                    <FileBrowserWrapper root={FileNode.fromObject(root)} ref={this.getFileBrowserRef}
                                        existingFiles={this.props.existingFiles}/>
                    </Grid>
                    <Grid item xs={1} className={styles.iconButtons}>
                        <IconButton onClick={this.newSample} className={styles.iconButton}>
                            <Add />
                        </IconButton>
                        <IconButton onClick={this.splitToSamples} className={styles.iconButton}>
                            <Share />
                        </IconButton>
                        <IconButton onClick={this.addToSample} className={styles.iconButton}>
                            <ArrowForward />
                        </IconButton>
                        <IconButton onClick={this.removeFraction} className={styles.iconButton}>
                            <ArrowBack />
                        </IconButton>
                    </Grid>
                    <Grid item xs={8} className={styles.samplePanel}>
                        {this.renderSampleListHeader()}
                        <Paper id={"samplePanel"}
                            style={{
                                height: 500, overflow: "auto", width: 880,
                                borderStyle: this.state.hasSampleNameError ? "solid" : null,
                                borderColor: this.state.hasSampleNameError ? "red" : null
                            }}>
                            {this.renderSampleList()}
                            {this.renderExistedSampleList()}
                        </Paper>
                        { this.state.hasSampleNameError ?
                        <div style={{ color: "red" }}>{`Errors in ${this.state.hasSampleNameError ? "Sample Names" : ""}.`}
                            </div> : null}
                    </Grid>
                </Grid>
        </div>;
    }
    public componentWillMount(): void {
        this.props.beforeMount(this);
    }
    private getFileBrowserRef(ref: FileBrowserWrapper): void {
        this.fileBrowserRef = ref;
    }
    private convertSampleList(samples: ISample[]): SampleData[] {
        const sampleList: SampleData[] = [];
        let index: number = 0;
        for (const sample of samples) {
            const convertSample: SampleData = {
                fractions: [],
                listIndex: index,
                sampleName: sample.name,
                selected: false,
                enzyme: sample.enzyme,
                instrument: sample.instrument,
                activationMethod: convertActionMethodToString(sample.activationMethod)
            };
            for (const fraction of sample.fractions) {
                convertSample.fractions.push({
                    name: this.props.existingFiles.get(fraction.sourceFile).name,
                    file: this.props.existingFiles.get(fraction.sourceFile),
                    selected: false
                });
            }
            index = index + 1;
            sampleList.push(convertSample);
        }

        return sampleList;
    }
    private getDefaultFractionInfo(samples: ISample[]): FractionInfo {
        if (samples.length === 0) {
            if (localStorage.getItem("preFractionInfo") != null) {
                return JSON.parse(localStorage.getItem("preFractionInfo"));
            } else {
                return DEFAULT_FRACTIONINFO;
            }
        } else {
            return {
                enzyme: samples.every((sample: ISample) => sample.enzyme === samples[0].enzyme) ?
                        samples[0].enzyme : SPEC_BY_SAMPLE,
                instrument: samples.every((sample: ISample) => sample.instrument === samples[0].instrument) ?
                            samples[0].instrument : SPEC_BY_SAMPLE,
                activationMethod: samples.every((sample: ISample) => sample.activationMethod === samples[0].activationMethod) ? //tslint:disable-line
                                  convertActionMethodToString(samples[0].activationMethod) : SPEC_BY_SAMPLE
            };
        }
    }
    private indexOf(fileName: string, listIndex: number): number {
        const names: string[] = this.state.sampleList[listIndex].fractions.map((file: SelectableFile) => file.name);

        return names.indexOf(fileName);
    }
    private renderSampleListHeader(): JSX.Element {
        return <Grid container spacing={0} className={styles.sampleListHeader}>
            <Grid item xs={3}>
                <FormControlLabel label="Select All"
                control={
                    <Checkbox color="primary" onChange={this.checkSampleListHeader} checked={this.state.checkSampleListHeader}/>
                }/>
            </Grid>
            <Grid item xs={3}>
                <MenuSelectDropDown id="enzyme" value={this.state.enzyme} label="Enzyme"
                    key="enzyme" onChange={this.changeEnzyme} className={styles.selectField}>
                    <MenuItem key={-1} value={SPEC_BY_SAMPLE}>
                        {SPEC_BY_SAMPLE}
                    </MenuItem>
                    {this.props.enzymeOptions.map((enzyme: string, index: number) =>
                        <MenuItem key={index} value={enzyme}>
                            {enzyme}
                        </MenuItem>
                    )}
                </MenuSelectDropDown>
            </Grid>
            <Grid item xs={3}>
                <MenuSelectDropDown id="activationMethod" value={this.state.activationMethod} label="Activation Method"
                    key="activationMethod" onChange={this.changeActivationMethod} className={styles.selectField}>
                    <MenuItem key={-1} value={SPEC_BY_SAMPLE}>
                        {SPEC_BY_SAMPLE}
                    </MenuItem>
                    {Object.keys(ActivationMethod.supportedActivationMethods()).map((am: string, index: number) =>
                        <MenuItem key={index} value={ActivationMethod.parse(am)}>
                            {ActivationMethod.parse(am)}
                        </MenuItem>
                    )}
                </MenuSelectDropDown>
            </Grid>
            <Grid item xs={3}>
                <MenuSelectDropDown id="instrument" value={this.state.instrument} label="Instrument"
                    key="instrument" onChange={this.changeInstrument} className={styles.selectField}>
                    <MenuItem key={-1} value={SPEC_BY_SAMPLE}>
                        {SPEC_BY_SAMPLE}
                    </MenuItem>
                    {this.props.instrumentOptions.map((instrument: string, index: number) =>
                        <MenuItem key={index} value={instrument} >
                            {instrument}
                        </MenuItem>
                    )}
                </MenuSelectDropDown>
            </Grid>
        </Grid>;
    }
    private renderSampleList(): JSX.Element[] {
        return this.state.sampleList.map((sampleData: SampleData, index: number) => {
            return this.renderSampleListRow(sampleData, this.state.sampleNameError[index - 1], index);
        });
    }
    private renderExistedSampleList(): JSX.Element[] {
        if (this.props.existedSample == null) {
            return null;
        }

        const sampleList: SampleData[] = [];

        for (const sample of this.props.existedSample) {
            sampleList.push({
                fractions: sample.fractions.map((fraction: IFraction) => {
                    return {
                        selected: false,
                        name: fraction.sourceFile
                    };
                }),
                listIndex: -1,
                sampleName: sample.name,
                selected: false,
                enzyme: sample.enzyme,
                instrument: sample.instrument,
                activationMethod: convertActionMethodToString(sample.activationMethod)
            });
        }

        return sampleList.map((sampleData: SampleData, index: number) => {
            return this.renderSampleListRow(sampleData, false, index, true);
        });
    }

    private renderSampleListRow(sampleData: SampleData, nameError: boolean, index: number, disable?: boolean): JSX.Element {
        return <div key={`sample_${index}_${disable}`}>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                {
                    disable != null && disable ?
                    <Input id={`${sampleData.listIndex}`} value={sampleData.sampleName} style={{ width: 150, marginLeft: 30}}
                            disabled/> :
                    <FormControlLabel
                        label={
                            <FormControl>
                                <Input id={`${sampleData.listIndex}`} value={sampleData.sampleName} style={{ width: 150 }}
                                    onChange={this.changeSampleName(sampleData.listIndex)} autoFocus={nameError ? true : false} />
                                <FormHelperText>
                                    {nameError === true ? sampleData.sampleName === "" ?
                                    "Empty sample name" : "duplicated sample name" : null}
                                </FormHelperText>
                            </FormControl>
                            }
                        control={
                            <Checkbox color="primary"
                                onChange={this.checkSampleList(sampleData.listIndex)} checked={sampleData.selected} />
                        }/>
                }
                </Grid>
                <Grid item xs={3}>
                {
                    disable != null && disable ?
                    <Input id={`sample_${index}_enzyme`} value={sampleData.enzyme} className={styles.selectField}
                        disabled /> :
                    <MenuSelectDropDown id={`sample_${index}_enzyme`} value={sampleData.enzyme} disabled={disable != null && disable}
                        onChange={this.changeSampleEnzyme(sampleData.listIndex)} className={styles.selectField}>
                    {
                        this.props.enzymeOptions.map((enzyme: string, enzymeOptionIndex: number) =>
                            <MenuItem key={`sample_${index}_enzyme_${enzymeOptionIndex}`} value={enzyme}>
                                {enzyme}
                            </MenuItem>
                    )}
                    </MenuSelectDropDown>
                }
                </Grid>
                <Grid item xs={3}>
                {
                    disable != null && disable ?
                    <Input id={`sample_${index}_activation`} value={sampleData.activationMethod} className={styles.selectField}
                            disabled /> :
                    <MenuSelectDropDown id={`sample_${index}_activation`} value={sampleData.activationMethod}
                        disabled={disable != null && disable}
                        onChange={this.changeSampleActivationMethod(sampleData.listIndex)} className={styles.selectField}>
                    {
                        Object.keys(ActivationMethod.supportedActivationMethods()).map((am: string, activationMethodIndex: number) =>
                        <MenuItem key={`sample_${index}_activationMethod_${activationMethodIndex}`} value={ActivationMethod.parse(am)}>
                            {ActivationMethod.parse(am)}
                        </MenuItem>
                    )}
                    </MenuSelectDropDown>
                }
                </Grid>
                <Grid item xs={3}>
                {
                    disable != null && disable ?
                    <Input id={`sample_${index}_instrument`} value={sampleData.instrument} className={styles.selectField}
                           disabled /> :
                    <MenuSelectDropDown id={`sample_${index}_instrument`} value={sampleData.instrument}
                        disabled={disable != null && disable}
                        onChange={this.changeSampleInstrument(sampleData.listIndex)} className={styles.selectField}>
                        {
                            this.props.instrumentOptions.map((instrument: string, instrumentIndex: number) =>
                            <MenuItem key={`sample_${index}_instrument_${instrumentIndex}`} value={instrument}>
                                {instrument}
                            </MenuItem>
                        )}
                    </MenuSelectDropDown>
                }
                </Grid>
            </Grid>
            {
                disable != null && disable ?
                <div>
                    <ul className={sharedStyles.tree}>
                        {sampleData.fractions.map((file: SelectableFile, fractionIndex: number) => {
                            return <li key={`sample_${index}_fraction_$${fractionIndex}`} className={sharedStyles.disabled}>
                                <span>{file.name}</span>
                            </li>;
                        })}
                    </ul>
                </div> :
                <div key={`sample_list_${index}`} style={{ marginLeft: 25 }}>
                    <DroppableFileList moveFile={this.moveFile} fileList={sampleData.fractions} onCheck={this.onCheck}
                        searchPattern={this.state.searchPattern}
                        onRemove={this.onRemove} removeFile={this.removeFile} pushFile={this.pushFile} listIndex={sampleData.listIndex} />
                </div>
            }
            {/* <div key={`sample_divider_${index}`} style={{ paddingTop: 5 }}>
                <Divider />
            </div> */}
        </div>;
    }
    private checkSampleListHeader(event: React.ChangeEvent<HTMLInputElement>): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        updatedSampleList.map((sample: SampleData) => {
            sample.selected = event.target.checked;
            for (const file of sample.fractions) {
                file.selected = event.target.checked;
            }
        });

        this.setState({
            sampleList: updatedSampleList,
            checkSampleListHeader: event.target.checked
        });
    }
    private checkSampleList(listIndex: number): (event: React.ChangeEvent<HTMLInputElement>) => void {
        return (event: React.ChangeEvent<HTMLInputElement>): void => {
            const updatedSampleList: SampleData[] = [...this.state.sampleList];
            updatedSampleList[listIndex].selected = event.target.checked;
            const updatedFiles: SelectableFile[] = [...this.state.sampleList[listIndex].fractions];
            for (const file of updatedFiles) {
                file.selected = event.target.checked;
            }
            this.setState({
                sampleList: updatedSampleList,
                checkSampleListHeader:
                    updatedSampleList.filter((sample: SampleData) => sample.selected === true).length === updatedSampleList.length
            });
        };
    }
    private moveFile(sourceIndex: number, targetIndex: number, listIndex: number): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        let updatedFiles: SelectableFile[] = [...updatedSampleList[listIndex].fractions];
        const curIndex: number = sourceIndex;
        const curFile: SelectableFile = updatedFiles[curIndex];

        if (curIndex < targetIndex) {
            const back: SelectableFile[] = updatedFiles;
            const front: SelectableFile[] = back.splice(0, targetIndex + 1);
            front.splice(curIndex, 1);
            front.push(curFile);
            updatedFiles = front.concat(back);
        } else if (curIndex > targetIndex) {
            const back: SelectableFile[] = updatedFiles;
            back.splice(curIndex, 1);
            const front: SelectableFile[] = back.splice(0, targetIndex);
            front.push(curFile);
            updatedFiles = front.concat(back);
        }

        updatedSampleList[listIndex] = {...updatedSampleList[listIndex],
            fractions: updatedFiles
        };

        this.setState({
            sampleList: updatedSampleList
        });
    }
    private removeFile(filename: string, listIndex: number): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const updatedFractions: SelectableFile[] = [...updatedSampleList[listIndex].fractions];
        for (let i: number = 0; i < updatedFractions.length; i += 1) {
            if (updatedFractions[i].name === filename) {
                updatedFractions.splice(i, 1);
                break;
            }
        }
        updatedSampleList[listIndex] = {
            ...updatedSampleList[listIndex],
            fractions: updatedFractions,
            selected: updatedFractions.length === 0 ? false : updatedSampleList[listIndex].selected
        };
        this.setState({
            sampleList: updatedSampleList
        });
    }
    private pushFile(filename: string, listIndex: number): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const updatedFiles: SelectableFile[] = [...updatedSampleList[listIndex].fractions];
        updatedFiles.push({
            name: filename,
            selected: false
        });
        updatedSampleList[listIndex] = {
            ...updatedSampleList[listIndex],
            fractions: updatedFiles,
            selected: false
        };
        this.setState({
            sampleList: updatedSampleList
        });
    }

    private onRemove(filename: string, listIndex: number): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const updatedFractions: SelectableFile[] = [...updatedSampleList[listIndex].fractions];
        let updatedExistingFiles: OrderedMap<string, File> = this.state.existingFiles;
        for (let i: number = 0; i < updatedFractions.length; i += 1) {
            if (updatedFractions[i].name === filename) {
                updatedFractions.splice(i, 1);
                break;
            }
        }
        updatedSampleList[listIndex] = {
            ...updatedSampleList[listIndex],
            fractions: updatedFractions,
            selected: updatedFractions.length === 0 ? false : updatedSampleList[listIndex].selected
        };

        const updatedFiles: SelectableFile[] = [...updatedSampleList[0].fractions];
        updatedFiles.push({
            name: filename,
            selected: false
        });
        updatedSampleList[0] = {
            ...updatedSampleList[0],
            fractions: updatedFiles,
            selected: false
        };

        this.setState({
            sampleList: updatedSampleList,
            existingFiles: updatedExistingFiles
        });
    }
    private onCheck(file: string, listIndex: number, index: number, checked: boolean): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const updatedFractions: SelectableFile[] = [...updatedSampleList[listIndex].fractions];
        let updatedCheckSampleListHeader: boolean = false;
        updatedFractions[index].selected = checked;
        let checkFractions: number = 0;
        for (const fraction of updatedFractions) {
            if (fraction.selected) {
                checkFractions = checkFractions + 1;
            }
        }
        if (checkFractions === updatedFractions.length) {
            updatedSampleList[listIndex].selected = true;
            let checkSampleLists: number = 0;
            for (let i: number = 1; i < updatedSampleList.length; i = i + 1) {
                if (updatedSampleList[i].selected) {
                    checkSampleLists = checkSampleLists + 1;
                }
            }
            if (checkSampleLists === updatedSampleList.length - 1) {
                updatedCheckSampleListHeader = true;
            }
        } else {
            updatedSampleList[listIndex].selected = false;
        }
        this.setState({
            sampleList: updatedSampleList,
            checkSampleListHeader: updatedCheckSampleListHeader
        });
    }
    private changeEnzyme(event: React.ChangeEvent<HTMLSelectElement>): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        if (event.target.value === SPEC_BY_SAMPLE) {
            this.setState({
                enzyme: event.target.value
            });

            return;
        }
        for (let i: number = 1; i < updatedSampleList.length; i = i + 1) {
            updatedSampleList[i].enzyme = event.target.value;
        }
        this.setState({
            enzyme: event.target.value,
            sampleList: updatedSampleList
        });
    }
    private changeSampleEnzyme(listIndex: number): (event: React.ChangeEvent<HTMLSelectElement>) => void {
        return (event: React.ChangeEvent<HTMLSelectElement>): void => {
            const updatedSampleList: SampleData[] = [...this.state.sampleList];
            updatedSampleList[listIndex].enzyme = event.target.value;
            const updatedEnzyme: string = this.getEnzymeFromSampeList(updatedSampleList);
            updatedSampleList[0].enzyme = updatedEnzyme;
            this.setState({
                sampleList: updatedSampleList,
                enzyme: updatedEnzyme
            });
        };
    }
    private changeActivationMethod(event: React.ChangeEvent<HTMLSelectElement>): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        if (event.target.value === SPEC_BY_SAMPLE) {
            this.setState({
                activationMethod: event.target.value
            });

            return;
        }
        for (let i: number = 1; i < updatedSampleList.length; i = i + 1) {
            updatedSampleList[i].activationMethod = event.target.value;
        }
        this.setState({
            activationMethod: event.target.value,
            sampleList: updatedSampleList
        });
    }
    private changeSampleActivationMethod(listIndex: number): (event: React.ChangeEvent<HTMLSelectElement>) => void {
        return (event: React.ChangeEvent<HTMLSelectElement>): void => {
            const updatedSampleList: SampleData[] = [...this.state.sampleList];
            updatedSampleList[listIndex].activationMethod = event.target.value;
            const updatedActivationMethod: string = this.getActivationMethodFromSampeList(updatedSampleList);
            updatedSampleList[0].activationMethod = updatedActivationMethod;
            this.setState({
                sampleList: updatedSampleList,
                activationMethod: updatedActivationMethod
            });
        };
    }
    private changeInstrument(event: React.ChangeEvent<HTMLSelectElement>): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        if (event.target.value === SPEC_BY_SAMPLE) {
            this.setState({
                instrument: event.target.value
            });

            return;
        }
        for (let i: number = 1; i < updatedSampleList.length; i = i + 1) {
            updatedSampleList[i].instrument = event.target.value;
        }
        this.setState({
            instrument: event.target.value,
            sampleList: updatedSampleList
        });
    }
    private changeSampleInstrument(listIndex: number): (event: React.ChangeEvent<HTMLSelectElement>) => void {
        return (event: React.ChangeEvent<HTMLSelectElement>): void => {
            const updatedSampleList: SampleData[] = [...this.state.sampleList];
            updatedSampleList[listIndex].instrument = event.target.value;
            const updatedInstrument: string = this.getInstrumentFromSampeList(updatedSampleList);
            updatedSampleList[0].instrument = updatedInstrument;
            this.setState({
                sampleList: updatedSampleList,
                instrument: updatedInstrument
            });
        };
    }
    private changeSampleName(listIndex: number): (event: React.ChangeEvent<HTMLInputElement>) => void {
        return (event: React.ChangeEvent<HTMLInputElement>): void => {
            const updatedSampleList: SampleData[] = [...this.state.sampleList];

            updatedSampleList[listIndex].sampleName = event.currentTarget.value;
            this.setState({
                sampleList: updatedSampleList
            });

        };
    }
    private getEnzymeFromSampeList(sampleList: SampleData[]): string {
        const value: string = sampleList[1].enzyme;
        for (let i: number = 2; i < sampleList.length; i = i + 1) {
            if (value === sampleList[i].enzyme) {
                continue;
            } else {
                return SPEC_BY_SAMPLE;
            }
        }

        return value;
    }
    private getActivationMethodFromSampeList(sampleList: SampleData[]): string {
        const value: string = sampleList[1].activationMethod;
        for (let i: number = 2; i < sampleList.length; i = i + 1) {
            if (value === sampleList[i].activationMethod) {
                continue;
            } else {
                return SPEC_BY_SAMPLE;
            }
        }

        return value;
    }
    private getInstrumentFromSampeList(sampleList: SampleData[]): string {
        const value: string = sampleList[1].instrument;
        for (let i: number = 2; i < sampleList.length; i = i + 1) {
            if (value === sampleList[i].instrument) {
                continue;
            } else {
                return SPEC_BY_SAMPLE;
            }
        }

        return value;
    }
    private newSample(): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const selectedFiles: string[] = this.fileBrowserRef.getSelectedFiles();
        const updatedFractionList: SelectableFile[] = selectedFiles.map((name: string) => {
            return {
                name: name,
                selected: this.state.checkSampleListHeader
            };
        });
        updatedSampleList.push({
            fractions: updatedFractionList,
            listIndex: updatedSampleList.length,
            sampleName: `Sample ${updatedSampleList.length + this.existedSampleName.length}`,
            selected: this.state.checkSampleListHeader,
            enzyme: this.state.enzyme === SPEC_BY_SAMPLE || this.state.enzyme === "" ?
                updatedSampleList[updatedSampleList.length - 1].enzyme : this.state.enzyme,
            instrument: this.state.instrument === SPEC_BY_SAMPLE || this.state.instrument === "" ?
                updatedSampleList[updatedSampleList.length - 1].instrument : this.state.instrument,
            activationMethod: this.state.activationMethod === SPEC_BY_SAMPLE || this.state.activationMethod === "" ?
                updatedSampleList[updatedSampleList.length - 1].activationMethod : this.state.activationMethod
        });
        this.setState({
            sampleList: updatedSampleList
        });
        this.fileBrowserRef.removeSelectedFiles();
    }
    private splitToSamples(): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const selectedFile: string[] = this.fileBrowserRef.getSelectedFiles();
        selectedFile.map((file: string) => {
                updatedSampleList.push({
                    fractions: [{
                        name: file,
                        selected: false
                    }],
                    listIndex: updatedSampleList.length,
                    sampleName: `Sample ${updatedSampleList.length + this.existedSampleName.length}`,
                    selected: false,
                    enzyme: this.state.enzyme === SPEC_BY_SAMPLE || this.state.enzyme === "" ?
                            "" : this.state.enzyme,
                    instrument: this.state.instrument === SPEC_BY_SAMPLE || this.state.instrument === "" ?
                            "" : this.state.instrument,
                    activationMethod: this.state.activationMethod === SPEC_BY_SAMPLE || this.state.activationMethod === "" ?
                            "" : this.state.activationMethod
                });
        });
        this.setState({
            sampleList: updatedSampleList
        });
        this.fileBrowserRef.removeSelectedFiles();
    }

    private addToSample(): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const selectedFiles: string[] = this.fileBrowserRef.getSelectedFiles();
        const selectedSample: SampleData[] = updatedSampleList.filter((value: SampleData) => value.selected === true);
        if (selectedSample.length === 1) {
            const updatedFractionList: SelectableFile[] = selectedFiles.map((name: string) => {
                return {
                    name: name,
                    selected: true
                };
            });
            selectedSample[0].fractions.push(...updatedFractionList);
            this.setState({
                sampleList: updatedSampleList
            });
            this.fileBrowserRef.removeSelectedFiles();
        }
    }

    private removeFraction(): void {
        const updatedSampleList: SampleData[] = [...this.state.sampleList];
        const fileList: string[] = [];
        for (let i: number = 0; i < updatedSampleList.length; i = i + 1) {
            const updatedFractionList: SelectableFile[] = updatedSampleList[i].fractions;
            for (let j: number = 0; j < updatedFractionList.length; j = j + 1) {
                if (updatedFractionList[j].selected === true) {
                    fileList.push(updatedFractionList[j].name);
                    updatedFractionList.splice(j, 1);
                    j = j - 1;
                }
            }
            if (updatedSampleList[i].selected === true) {
                updatedSampleList.splice(i, 1);
                i = i - 1;
            }
        }
        for (let i: number = 0; i < updatedSampleList.length; i = i + 1) {
            updatedSampleList[i].listIndex = i;
        }
        this.setState({
            sampleList: updatedSampleList,
            checkSampleListHeader: false
        });
    }
}
// tslint:disable-next-line
const DraggableSampleSubmissionPanel: dnd.ContextComponentClass<SampleSubmissionPanelProps> = withDragDropContext(SampleSubmissionPanel);
export { DraggableSampleSubmissionPanel, SelectableFile, SampleSubmissionPanel };
