import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle, ImageContainer, Wrapper } from './styles';
import ImageBox from './components/ImageBox';

const coords = [];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    coords.push([j, i]);
  }
}

const App = () => {
  const [distance, setDistance] = useState(1);

  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    const distance = hypot / maxHypot;
    const easeDistance = easing(distance);
    setDistance(easeDistance);
  };

  const handleMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        color={Math.round(240 - distance * 40)}
      >
        <ImageContainer isTogether={distance < 0.001}>
          {coords.map(([x, y], index) => (
            <ImageBox
              key={index}
              x={x}
              y={y}
              percent={distance}
            />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default App;
