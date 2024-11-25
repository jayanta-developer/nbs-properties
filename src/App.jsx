import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


//component
import Home from "./Pages/Home"

function App() {
  const [navItem, setNavItem] = useState("Home")

  return (
    <Routes>
      <Route path="/" element={<Home navItem={navItem} setNavItem={setNavItem} />} />
    </Routes>
  )
}

export default App