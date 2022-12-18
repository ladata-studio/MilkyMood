import styled, { createGlobalStyle, css } from 'styled-components';

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

export const Marginals = css`
  position: fixed;
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  pointer-events: none;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
