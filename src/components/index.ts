import VolcanoPlotPage from "~components/charts/VolcanoPlotPage";
import HeatmapPage from "~components/charts/HeatmapPage";
import ButtonsPage from "~components/mui/ButtonsPage";
import Login from "~components/Login";
import NotFound from "~components/NotFound";
import CustomizePage from "~components/mui/CustomizePage";
import FileManagerPage from "~components/antd/FileManagerPage";

const Components: { [key: string]: React.ComponentClass } = { // tslint:disable-line
    VolcanoPlotPage,
    HeatmapPage,
    ButtonsPage,
    Login,
    NotFound,
    CustomizePage,
    FileManagerPage
};

export default Components;
