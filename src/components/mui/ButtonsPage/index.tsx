import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextButtons from "./TextButtons";
import OutlinedButtons from "~components/mui/ButtonsPage/OutlinedButtons";
import ContainedButtons from "~components/mui/ButtonsPage/ContainedButtons";
import FloatingActionButtons from "~components/mui/ButtonsPage/FloatingActionButtons";
import FloatingActionButtonZoom from "~components/mui/ButtonsPage/FloatingActionButtonZoom";
import IconButtons from "~components/mui/ButtonsPage/IconButtons";

export default class ButtonsPage extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <TextButtons />
                </Grid>
                <Grid item xs={6}>
                    <OutlinedButtons />
                </Grid>
                <Grid item xs={6}>
                    <ContainedButtons />
                </Grid>
                <Grid item xs={6}>
                    <FloatingActionButtons/>
                </Grid>
                <Grid item xs={6}>
                    <FloatingActionButtonZoom />
                </Grid>
                <Grid item xs={6}>
                    <IconButtons />
                </Grid>
            </Grid>
        </React.Fragment>;
    }
}
