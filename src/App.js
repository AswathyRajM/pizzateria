import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Hero } from "./components/Hero";
import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <Router>
    <GlobalStyles/>
    <Hero/>
    </Router>
  );
}

export default App;
