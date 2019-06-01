import * as React from "react";
import * as Styles from "./NormalizationSampleRatio.scss";
import { PagedTable, PagedTableProps, PagedTableState } from "~components/shared/IPagedTable";
import { InputField } from "~components/shared/InputField";
import { ExpectedRatios } from "~/models/Parameters";

interface LfqSampleRatioTableProps {
    expectedRatios: ExpectedRatios[];
    updateExpectedRatio(data: string, index: number): void;
}

export default class ReporterIonQNormalizationSampleRatio extends PagedTable<number, LfqSampleRatioTableProps, PagedTableState<number>> {
    constructor(props: PagedTableProps<number> & LfqSampleRatioTableProps) {
        super(props);

        this.state = {
            currentPage: 0,
            sorters: {},
            sorterState: {}
        };
    }
    protected renderHeader(): JSX.Element {
        return <tr>
            <th>Channel</th>
            <th>Name</th>
            <th>Factor</th>
            <th>Expected Ratios</th>
        </tr>;
    }
    protected renderRow(item: number, index: number): JSX.Element {
        return <tr key={index.toString()}>
            <td className={Styles.samplesCell}>{this.props.expectedRatios[item].spikedChannelName}</td>
            <td className={Styles.samplesCell}>
                {`${this.props.expectedRatios[item].sampleName}:${this.props.expectedRatios[item].spikedChannelName}`}
            </td>
            <td className={Styles.samplesCell}>1</td>
            <td className={Styles.expectedRatioCell}>
                <InputField value={this.props.expectedRatios[item].ratio.toString()} index={item}
                    onChange={this.props.updateExpectedRatio} type="number" />
            </td>
        </tr>;
    }
}
