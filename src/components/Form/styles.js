import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 12px;
  border: 2px solid #000000;
  font-family: 'Work Sans';
  font-size: 18px;
  font-size: 500;

  &:focus {
    outline: none;
    border-color: #0519ce;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
`;

export const Error = styled.span`
  color: #e26e2d;
`;

export const Submit = styled.input.attrs({
  type: 'submit',
})`
  float: right;
  padding: 12px;
  border: 2px solid #0519ce;
  background: none;
  color: #0519ce;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #0519ce;
    color: #fbfbfb;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;
