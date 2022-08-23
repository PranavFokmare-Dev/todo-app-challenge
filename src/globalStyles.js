import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing:border-box;
  }
  *, *::before,*::after{
    box-sizing:border-box;
  }
`;

export default GlobalStyle;
