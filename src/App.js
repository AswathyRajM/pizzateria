import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { GlobalStyles } from "./globalStyles";
import { ProductsData } from  './components/Products/data'

function App() {
  return (
    <Router>
    <GlobalStyles/>
      <Hero />
      <Products heading={'Choose your favourite'} data={ProductsData}/>
    </Router>
  );
}

export default App;
