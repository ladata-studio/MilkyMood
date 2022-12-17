import styled from 'styled-components';
import { Marginals } from '../../styles';

export const Footer = styled.footer`
  ${Marginals}
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  padding: 15px;
`;

export const H2 = styled.h2`
  margin: 0;
  padding: 16px;
  font-size: 64px;
  line-height: 0.7;
  font-weight: 600;
`;

export const H2Middle = styled(H2)`
  position: relative;
  flex-grow: 1;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: 55%;
    right: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #fbfbfb;
  }
`;
