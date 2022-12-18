import styled from 'styled-components';

export const Image = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  background-image: url('/image.jpeg');
  background-size: 400px 600px;
  background-position: ${({ x, y }) => `-${x * 100}px -${y * 100}px`};
`;
