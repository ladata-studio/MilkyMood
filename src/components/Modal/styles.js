import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: calc(100vw - 60px);
  max-width: 800px;
  padding: 60px;
  background-color: #fbfbfb;
  animation: glow 1s forwards;
  z-index: 3;

  @media screen and (max-width: 700px) {
    width: calc(100vw - 30px);
    padding: 30px;
  }
`;

export const BG = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 2;
`;
