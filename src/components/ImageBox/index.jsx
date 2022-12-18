import React from 'react';
import { Image } from './styles';

const ImageBox = ({ x, y }) => {
  console.log(x, y);
  return (
    <Image
      x={x}
      y={y}
    />
  );
};

export default ImageBox;
