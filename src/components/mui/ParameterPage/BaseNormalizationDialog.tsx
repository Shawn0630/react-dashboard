import * as React from "react";
import * as styles from "./NormalizationDialog.scss";
import * as RGL from "react-grid-layout";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const ReactGridLayout: React.ComponentClass<RGL.ReactGridLayoutProps & RGL.WidthProviderProps> = RGL.WidthProvider(RGL); // tslint:disable-line

interface BaseNormalizationDialogProps<T> {
    normalizationParams: T;
    open: boolean;
    invalidInputError: string;
    renderOptions(): React.ReactNode;
    renderExpectedNormalizationPage(): React.ReactNode;
    renderAllProteins(): React.ReactNode;
    renderSpikedIds(): boolean;
    validate(normalizationParams: T): boolean;
    handleClose(): void;
    handleSave(normalizationParams: T): void;
}

interface BaseNormalizationDialogStates {}

export default class BaseNormalizationDialog<T> extends React.PureComponent<BaseNormalizationDialogProps<T>, BaseNormalizationDialogStates> { //tslint:disable-line
    constructor(props: BaseNormalizationDialogProps<T>) {
        super(props);

        this.state = {};

        this.handleSave = this.handleSave.bind(this);
    }

    public render(): JSX.Element {

        const layout: ReactGridLayout.Layout[] = [
            { i: "methods", x: 0, y: 0, w: 3, h: 3, static: true },
            { i: "expected-ratios", x: 0, y: 3, w: 3, h: 6, static: true },
            { i: "spiked-ids", x: 3, y: 0, w: 8, h: 9, static: true }
        ];

        let widthDialog: number = 1100;
        let widthGridLayout: string = "100%"; //the gridlayout width needs to be constant to not mess the ui
        if (!this.props.renderSpikedIds()) {
            widthDialog = 270;
            widthGridLayout = "400%"; //=70%/21% (old width/new width)
        }

        return <Dialog key={"test"} open={this.props.open} className={styles.dialog} maxWidth={false}>
            <DialogTitle>Normalization Methods</DialogTitle>
            <DialogContent>
                <div style={{ width: widthDialog }}>
                    <ReactGridLayout layout={layout} cols={11} rowHeight={45} margin={[2, 2]}
                        autoSize={true} useCSSTransforms={true}
                        style={{ maxWidth: widthGridLayout, width: widthGridLayout, minWidth: widthGridLayout, position: "relative" }}>
                        <div key="methods">
                            {this.props.renderOptions()}
                        </div>
                        <div key="expected-ratios">
                            {this.props.renderExpectedNormalizationPage()}
                        </div>
                        <div key="spiked-ids">
                            {this.props.renderAllProteins()}
                        </div>
                    </ReactGridLayout>
                    <div>
                        <Typography color="error">{this.props.invalidInputError}</Typography>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={this.props.handleClose}>Close</Button>
                <Button color="primary" onClick={this.handleSave}>Save</Button>
            </DialogActions>
        </Dialog>;
    }

    private handleSave(): void {
        if (this.props.validate(this.props.normalizationParams)) {
            this.props.handleSave(this.props.normalizationParams);
        }
    }
}
