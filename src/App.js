import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { GlobalStyles } from './globalStyles';
import { ProductsData } from './components/Products/data';
import Featured from './components/Featured';
import Footer from './components/Footer';
import InstructionBoard from './components/Text.js';
import Rating from './components/Test';

function App() {
  return (
    // <Router>
    //   <GlobalStyles />
    //   <Hero />
    //   <Products heading={"Choose your favourite"} data={ProductsData} />
    //   <Featured />
    //   <Footer />
    // </Router>
    <Rating />
  );
}

export default App;
