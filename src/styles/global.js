import { normalize } from "polished";
import { createGlobalStyle } from "styled-components/macro";

import { font } from "./helpers";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

:root {
    font-size: 62.5%;

  body {
    font: ${font()};
  }
}

*,
  &::before,
  &::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
