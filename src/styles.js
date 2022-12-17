import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #2828E6;
    font-family: 'Work Sans';
    font-size: 500;
    color: #FBFBFB;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;
