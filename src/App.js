import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom"
import OnasPage from "./pages/OnasPage";
import SafetyPage from "./pages/SafetyPage";
function App() {
  return (
    <div className="main">

      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<OnasPage />} />
        <Route path="/safety" element={<SafetyPage />} />
      </Routes>
    </div>
  );
}

export default App;
