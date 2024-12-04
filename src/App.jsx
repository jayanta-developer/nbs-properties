import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


//component
import Home from "./Pages/Home"
import PropertListings from "./Pages/PropertListings";
import PropertDetails from "./Pages/PropertDetails";
import Office from "./Pages/Office"

function App() {
  const [navItem, setNavItem] = useState("Home")

  return (
    <Routes>
      <Route path="/" element={<Home navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/properties" element={<PropertListings navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/property" element={<PropertDetails navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/office" element={<Office navItem={navItem} setNavItem={setNavItem} />} />
    </Routes>
  )
}

export default App