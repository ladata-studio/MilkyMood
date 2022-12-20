import styled from 'styled-components';
import { AbsoluteCenter } from '../../styles';

export const Modal = styled.div`
  ${AbsoluteCenter}
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

export const CloseButton = styled.button`
  position: absolute;
  top: 60px;
  right: 60px;
  height: 33px;
  width: 33px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    height: 33px;
    width: 2px;
    background-color: #0519ce;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 700px) {
    right: 30px;
    top: 30px;
  }
`;