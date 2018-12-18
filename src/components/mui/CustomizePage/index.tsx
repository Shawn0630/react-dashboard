import * as React from "react";
import Grid from "@material-ui/core/Grid";
import MenuSelectDropDowns from "~components/mui/CustomizePage/MenuSelectDropDowns";
import AutoCompleteTextFieldWrapper from "./AutoCompleteTextFieldWrapper";
import { ExpandableDataItemWrapper } from "./ExpandableDataItemWrapper";

export default class ButtonsPage extends React.PureComponent {
    public render(): JSX.Element {
        return <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <MenuSelectDropDowns />
                </Grid>
                <Grid item xs={6}>
                    <AutoCompleteTextFieldWrapper />
                </Grid>
                <Grid item xs={6}>
                    <ExpandableDataItemWrapper />
                </Grid>
            </Grid>
        </React.Fragment>;
    }
}
