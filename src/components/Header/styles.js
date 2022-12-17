import styled from 'styled-components';
import { ReactComponent as LogoSVG } from './logo.svg';

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100vw;
  padding: 30px;
  pointer-events: none;
  z-index: 1;
`;

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 760px;
  height: auto;
`;
