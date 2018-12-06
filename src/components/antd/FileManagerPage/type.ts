import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";  //tslint:disable-line

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<{}>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
