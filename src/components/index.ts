import * as React from "react";
import VolcanoPlotPage from "~components/charts/VolcanoPlotPage";
import HeatmapPage from "~components/charts/HeatmapPage";
import ButtonsPage from "~components/mui/ButtonsPage";
import Login from "~components/Login";
import NotFound from "~components/NotFound";
import CustomizePage from "~components/mui/CustomizePage";
import SpectrumViewPage from "~components/charts/SpectrumViewPage";
import FileBrowserPage from "~components/mui/FileBrowserPage";
import ProteinCoveragePage from "~components/mui/ProteinCoveragePage";
import DenovoPage from "~components/mui/DenovoPage";
import ParameterPage from "~components/mui/ParameterPage";

const Components: { [key: string]: React.ComponentClass } = { // tslint:disable-line
    VolcanoPlotPage,
    HeatmapPage,
    ButtonsPage,
    Login,
    NotFound,
    CustomizePage,
    SpectrumViewPage,
    FileBrowserPage,
    ProteinCoveragePage,
    DenovoPage,
    ParameterPage
};

export default Components;
