import * as React from "react";
import { ResultState } from "../../../dva/result";
import { connect, SubscriptionAPI } from "dva";
import { SharedType } from "~/models/types";
import { PageRequest } from "~/dva/IndexedDbService";
import { com } from "~models/example";
import IDenovoCandidate = com.example.dto.IDenovoCandidate;
import { Loader } from "~components/shared/Loader";
import { ColumnDefinition, VirtualizedTable } from "./VirtualizedTable";
import { ColoredSequence } from "./DenovoColoredSequence";
import { PTMCell } from "./PTMCell";
import { config } from "~/config";

interface DenovoPageProps extends SubscriptionAPI {
    result: ResultState;
}
interface DenovoPageStates {
    curPage: number;
    isFiltering: boolean;
}

@connect(({result}: {result: ResultState}) => ({
    result
}))
export default class DenovoPage extends React.PureComponent<DenovoPageProps, DenovoPageStates> {

    constructor(props: DenovoPageProps) {
        super(props);

        this.state = {
            curPage: 1,
            isFiltering: false
        };

        this.getPage = this.getPage.bind(this);
        this.getRowClassName = this.getRowClassName.bind(this);
    }

    public componentDidMount(): void {
        const { dispatch } = this.props;
        const request: PageRequest = {
            type: SharedType.ResultType.DENOVOS,
            page: 1
        };
        dispatch({
            type: "result/getResultPage",
            payload: request
        });
    }

    // tslint:disable:max-func-body-length
    public render(): JSX.Element {
        if (this.props.result.denovos == null) {
            return <Loader />;
        }
        const columns: ColumnDefinition<IDenovoCandidate>[] = [
            {
                dataKey: "rowCount", width: 60,
                headerRenderer: () => "",
                cellRenderer: (props) => `${(this.state.curPage - 1) * config.resultPageSize + props.rowIndex + 1}`
            },
            {
                dataKey: "sequence",
                width: 400,
                flexGrow: 0,
                flexShrink: 0,
                headerRenderer: () => "Peptide",
                cellRenderer: (props) => props.rowData.sequence
                // <div data-for="confidence.tooltip"
                //     data-tip={JSON.stringify(this.generateDenovoCandidate(props.rowData))}>
                //     <ColoredSequence candidate={props.rowData.sequence} residues={residues} threshold={this.state.threshold}
                //         modifications={this.generateAbbrModi(props.rowData.modifications)}
                //         positionalConfidence={props.rowData.positionConfidence} />
                // </div>
            },
            {
                dataKey: "alc",
                width: 80,
                alignment: "right",
                flexGrow: 0,
                flexShrink: 0,
                headerRenderer: () => "ALC (%)",
                cellRenderer: (props) => (props.rowData.alc * 100).toFixed(1)
            },
            {
                dataKey: "length",
                width: 80,
                alignment: "right",
                flexGrow: 0,
                flexShrink: 0,
                headerRenderer: () => "Length",
                cellRenderer: (props) => props.rowData.sequence.length
            },
            {
                dataKey: "mz",
                width: 100,
                alignment: "right",
                flexGrow: 0,
                flexShrink: 0,
                headerRenderer: () => "m/z",
                cellRenderer: (props) => props.rowData.mass.toFixed(4)
            },
            {
                dataKey: "area",
                width: 100,
                alignment: "right",
                flexGrow: 0,
                flexShrink: 0,
                headerRenderer: () => "Area",
                cellRenderer: (props) => this.calculateArea(props.rowData)
            },
            {
                dataKey: "mass",
                width: 100,
                alignment: "right",
                flexGrow: 0,
                flexShrink: 0,
                headerRenderer: () => "Mass",
                cellRenderer: (props) => props.rowData.mass.toFixed(4)
            },
            {
                dataKey: "ppm",
                width: 70,
                alignment: "right",
                headerRenderer: () => "ppm",
                cellRenderer: (props) => props.rowData.ppm.toFixed(1)
            },
            // {
            //     dataKey: "ptm",
            //     width: 100,
            //     headerRenderer: () => "PTM",
            //     cellRenderer: (props) => <div data-for="ptms.tooltip"
            //         data-tip={JSON.stringify(this.generateAbbrModi(props.rowData.modifications))}>
            //         <PTMCell modifications={this.generateModificationList(props.rowData.modifications)} />
            //     </div>
            // }
        ];
        return <div style={{flex: 1}}>
            <VirtualizedTable {...this.props.result.denovos} pageSize={config.resultPageSize}
                height={301} columns={columns} getRowClassName={this.getRowClassName}
                gotoPage={this.getPage} onSelected={null} />
        </div>;
    }

    private calculateArea(candidate: IDenovoCandidate): string {
        if (candidate.area == null || candidate.area === 0) {
            return "";
        } else {
            return candidate.area.toExponential(2);
        }
    }

    private getPage(page: number, clearPreviousResult: boolean = false, clearViewFilter: boolean = false): void {
        const request: PageRequest = {
            type: SharedType.ResultType.DENOVOS,
            page: page,
        };
        this.setState({
            curPage: page
        });
        this.props.dispatch({
            type: "result/getResultPage",
            payload: request
        });
    }
    private getRowClassName(candidate: IDenovoCandidate): string {
        return null;
    }
}
