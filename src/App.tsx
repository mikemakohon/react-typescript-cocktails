import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { SingleCocktail } from "./pages/SingleCocktail";

// components
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
