import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


//component
import Home from "./Pages/Home"
import PropertListings from "./Pages/PropertListings";
import PropertDetails from "./Pages/PropertDetails";
import Office from "./Pages/Office";
import OfficeDetails from "./Pages/OfficeDetails"
import PostReview from "./Pages/PostReview";
import LogIn from "./Pages/Auth";
import About from "./Pages/About"
import Blogs from "./Pages/Blogs";

function App() {
  const [navItem, setNavItem] = useState("Home");

  return (
    <Routes>
      <Route path="/" element={<Home navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/properties" element={<PropertListings navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/property-details" element={<PropertDetails navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/office" element={<Office navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/office-details" element={<OfficeDetails navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/post-review" element={<PostReview navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/logIn" element={<LogIn navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/about-us" element={<About navItem={navItem} setNavItem={setNavItem} />} />
      <Route path="/blogs" element={<Blogs navItem={navItem} setNavItem={setNavItem} />} />
    </Routes>
  )
}

export default App