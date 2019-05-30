import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { PopperPlacementType } from "@material-ui/core/Popper";
import createTypography from "@material-ui/core/styles/createTypography";
import createPalette, { PaletteOptions } from "@material-ui/core/styles/createPalette";
const palette: PaletteOptions = createPalette({
    type: "light",
});

const muiThemeCore: Theme = createMuiTheme({
    typography: createTypography(createPalette(palette), {
        fontFamily: [
            "Roboto",
            "sans-serif",
            "Courier New",
            "Material Icons"].join(","),
        display4: {
            fontFamily: "Courier New",
            fontSize: 20
        },
        body2: {
            fontSize: 9
        },
        display2: {
            fontFamily: "Courier New",
            fontWeight: 700,
            fontSize: 18
        },
        display3: {
            fontSize: 15
        },
        title: {
            fontFamily: "Roboto",
            fontSize: 20,
            fontWeight: 500
        },
        display1: {
            fontSize: 17,
            fontFamily: "Material Icons"
        },
        headline: {
            fontSize: 18
        }
    }),
    overrides: {
        MuiFormLabel: {
            root: {
                color: "black",
                fontSize: 16,
                "&$disabled": {
                    color: "black"
                }
            }
        },
        MuiDialog: {
            paperWidthMd: {
                maxWidth: 1280
            }
        },
        MuiInputBase: {
            root: {
                fontSize: 16
            }
        },
        MuiTypography: {
            subheading: {
                fontSize: 14
            }
        }
    }
});

export namespace DefaultStylings {
    export const POPPER_ON_THE_LEFT: PopperPlacementType = "left";
    export const POPPER_ON_THE_RIGHT: PopperPlacementType = "right-start";
    export const POPPER_AT_THE_BOTTOM: PopperPlacementType = "bottom";
    export const disabledCursor: string = "no-drop";
}

const disableCursorStyle: {} = {
    cursor: DefaultStylings.disabledCursor,
    pointerEvents: "all"
};

export { muiThemeCore, disableCursorStyle };
