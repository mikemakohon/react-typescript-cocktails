import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./components/common/Error";
import { SingleCocktail } from "./pages/SingleCocktail";

import { Navigation } from "./components/Navigation";

import { GlobalStyles } from "./styles/Global";

function App() {
  return (
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
  );
}

export default App;
