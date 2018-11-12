import { createMuiTheme, Theme } from "@material-ui/core/styles";

const muiThemeCore: Theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            subheading: {
                fontSize: 14
            }
        }
    }
});

export { muiThemeCore };
