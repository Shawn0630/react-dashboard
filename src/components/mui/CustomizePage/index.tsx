import * as React from "react";
import Grid from "@material-ui/core/Grid";
import MenuSelectDropDowns from "~components/mui/CustomizePage/MenuSelectDropDowns";

export default class ButtonsPage extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <MenuSelectDropDowns />
                </Grid>
            </Grid>
        </React.Fragment>;
    }
}
