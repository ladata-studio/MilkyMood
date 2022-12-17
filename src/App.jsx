import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  );
};

export default App;
