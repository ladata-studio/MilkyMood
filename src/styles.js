import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @keyframes glow {
    0% {
      box-shadow: rgb(252, 210, 23) 0 0 0px;
    }  

    100% {
      box-shadow: rgb(252, 210, 23) 0 10px 100px;
    }  
  }

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

export const ImageContainer = styled.div.attrs(({ isTogether }) => ({
  style: {
    animation: isTogether ? 'glow 3s infinite alternate' : 'none',
  },
}))`
  position: relative;
  max-height: 600px;
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Wrapper = styled.section.attrs(({ color }) => ({
  style: {
    backgroundColor: `hsl(${color}, 79%, 53%)`,
  },
}))`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 25px 0 20px;
  border: 2px solid #fbfbfb;
  border-radius: 100%;
  background: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 34px;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  color: #fbfbfb;
  z-index: 1;

  @media screen and (max-width: 700px) {
    width: 220px;
    font-size: 24px;
  }
`;
