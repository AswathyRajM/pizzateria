import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { GlobalStyles } from "./globalStyles";
import { ProductsData } from "./components/Products/data";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import "./globalStyle.css";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading={"Choose your favourite"} data={ProductsData} />
      <Featured />
      <Footer />
    </Router>
  );
}

export default App;
