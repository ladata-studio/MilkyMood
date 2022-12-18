import styled from 'styled-components';
import { Marginals } from '../../styles';
import { ReactComponent as LogoSVG } from './logo.svg';

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;

  @media screen and (max-width: 700px) {
    padding: 15px;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 760px;
  height: auto;
`;

