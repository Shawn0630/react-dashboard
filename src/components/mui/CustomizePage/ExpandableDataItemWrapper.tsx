import * as React from "react";
import List from "@material-ui/core/List";
import * as data from "~/data/Samples.json";
import * as sharedStyles from "~styles/shared.scss";
import { com } from "~models/example";
import ISample = com.example.dto.ISample;
import IFraction = com.example.dto.Sample.IFraction;
import ExpandableDataItem, { ListItemType } from "~components/shared/ExpandableDataItem";

interface SampleListItem extends ISample, ListItemType {}

const samples: ISample[] = data as ISample[];
const sampleList: SampleListItem[] = samples.map((sample: ISample) => {
    return {
        ...sample,
        text: sample.name
    };
});

export function ExpandableDataItemWrapper(): JSX.Element { //tslint:disable-line
    return <List dense>
        {sampleList.map((sample: SampleListItem, sampleIndex: number) =>
            <ExpandableDataItem key={`sample_${sampleIndex}`} data={sample} open>
            <div>
                <ul className={sharedStyles.tree}>
                    {sample.fractions.map((file: IFraction, fractionIndex: number) => {
                        return <li key={`sample_${sampleIndex}_fraction_$${fractionIndex}`} className={sharedStyles.disabled}>
                            <span>{file.sourceFile}</span>
                        </li>;
                    })}
                </ul>
            </div>
        </ExpandableDataItem>)}
    </List>;
}
