import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


//component
import Home from "./Pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App