import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";

import { GlobalStyles } from "./styles/Global";
import { lazy, Suspense } from "react";
import {CircularProgress} from "@mui/material";

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const SingleCocktail = lazy(() => import('./pages/SingleCocktail/SingleCocktail'));
const Error = lazy(() => import('./pages/Error/Error'));

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
        <Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cocktail/:id" element={<SingleCocktail />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Suspense>

    </>
  );
}

export default App;
