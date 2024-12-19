import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PresentAnimation from "./components/PresentAnimation";
import Instructions from "./pages/Instructions";
import CharacterSelect from "./pages/CharacterSelect";
import Map from "./pages/Map";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<PresentAnimation />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/character-select" element={<CharacterSelect />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
