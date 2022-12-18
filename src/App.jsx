import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle, ImageContainer, Wrapper } from './styles';
import ImageBox from './components/ImageBox';

const App = () => {
  const coords = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      coords.push([j, i]);
    }
  }
  console.log(coords);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          {coords.map(([x, y], index) => (
            <ImageBox
              key={index}
              x={x}
              y={y}
            />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default App;
