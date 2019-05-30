import * as React from "react";
import * as Styles from "./NormalizationSampleRatio.scss";
import {PagedTable, PagedTableProps, PagedTableState} from "~components/shared/IPagedTable";
import {InputField} from "~components/shared/InputField";

interface LfqSampleRatioTableProps {
    samples: string[];
    expectedRatios: string[];
    updateExpectedRatio(data: string, index: number): void;
}

class LfqNormalizationSampleRatio extends PagedTable<number, LfqSampleRatioTableProps, PagedTableState<number>> {
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
            <th>Samples</th>
            <th>Expected Ratios</th>
        </tr>;
    }
    protected renderRow(item: number, index: number): JSX.Element {
        return <tr key={index.toString()}>
            <td className={Styles.samplesCell}>{this.props.samples[item]}</td>
            <td className={Styles.expectedRatioCell}>
                <InputField value={this.props.expectedRatios[item].toString()} index={item}
                    onChange={this.props.updateExpectedRatio} type="number"/>
            </td>
        </tr>;
    }
}

export {LfqNormalizationSampleRatio as LfqSampleRatioTable};
