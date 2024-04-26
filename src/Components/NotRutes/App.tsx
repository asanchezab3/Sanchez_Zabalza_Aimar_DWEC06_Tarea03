import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Error from "../Error";
import About from "../About";
import Cooktail from "../Cooktail";

//Componente principal de la app
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<Cooktail />} />
          <Route path="/error-cooktail" element={<Error type={"cooktail"}/>} />
          <Route path="*" element={<Error type={"not"}/>} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
