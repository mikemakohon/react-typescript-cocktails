import React from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { SingleCocktail } from "./pages/SingleCocktail";

// components
import { Navigation } from "./components/Navigation";

// styles
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    // <div className="App">
    <>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
    // </div>
  );
}

export default App;
