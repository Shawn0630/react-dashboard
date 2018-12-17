import * as React from "react";

import SampleDialogWrapper from "./SampleDialogWrapper";
import DroppableContainer from "./DroppableContainer";

export default class FileBrowserPage extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <React.Fragment>
            <SampleDialogWrapper />
            <DroppableContainer />
        </React.Fragment>;
    }
}
