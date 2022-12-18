import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle, ImageContainer, Wrapper } from './styles';
import ImageBox from './components/ImageBox';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          <ImageBox />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default App;
