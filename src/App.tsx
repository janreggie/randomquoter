import React from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import QuoteContainer from './QuoteContainer';

const App = () => (
  <div id="App">
    <Header />
    <QuoteContainer />
    <Footer />
  </div>
);

export default App;
