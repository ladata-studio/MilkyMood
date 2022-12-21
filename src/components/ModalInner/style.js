import styled from 'styled-components';

export const Container = styled.div`
  max-width: 440px;
  color: #000000;
`;

export const SuccessContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 24px;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: 64px;
  line-height: 0.7;
  font-weight: 600;
  color: #0519ce;

  @media screen and (max-width: 700px) {
    font-size: 48px;
  }

  @media screen and (max-width: 450px) {
    font-size: 34px;
  }
`;

export const H4 = styled.h4`
  margin: 0;
  margin-top: 20px;
  font-size: 34px;
  line-height: 1;
  font-weight: 600;
  color: #0519ce;
`;

export const P = styled.p`
  margin: 20px 0;
  font-size: 16px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;
