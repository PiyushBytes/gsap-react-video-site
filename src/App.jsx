import React from "react";
import { Link, Links, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <div className="text-zinc-200">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
