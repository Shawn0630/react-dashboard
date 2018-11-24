import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { PopperPlacementType } from "@material-ui/core/Popper";

const muiThemeCore: Theme = createMuiTheme({
    overrides: {
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
