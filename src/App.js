import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div> About</div>} />
          <Route path="/service" element={<div> service </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
