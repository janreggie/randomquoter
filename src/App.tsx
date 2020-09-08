import React from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import QuoteContainer from './QuoteContainer';

function App() {
  return (
    <div id="App">
      <Header />
      <QuoteContainer />
      <Footer />
    </div>
  );
}

export default App;
