import React, { useState, useEffect } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom"


//images
import Clogo from "../../assets/Images/Clogo.svg";
import SearchIcon from "../../assets/Images/searchIcon.svg"
import OptionIcon from "../../assets/Images/OptionIcon.svg"
import RoundArrow from "../../assets/Images/angle-circle-right-icon.svg"

//components
import { BlackBtn, WhiteBtn } from "../Tools";

export default function NavBar({ navItem, setNavItem, Full }) {
  const navigate = useNavigate()
  const [searchBox, setSearcBox] = useState(false);
  const [sideMenu, setSideMenu] = useState(false)

  const navItems = [
    "Home",
    "Property",
    // "Rent",
    "Office",
    // "Retail",
    // "Industrial",
    "F & B",
    "Blog",
    "About Us",
  ]

  const handelNavigation = (el) => {
    if (el === "Home") {
      navigate("/")
    } else if (el === "Buy") {
      navigate("/properties")
    } else if (el === "Office") {
      navigate("/office")
    } else if (el === "F & B") {
      navigate("/F&B")
    } else if (el === "Blog") {
      navigate("/blogs")
    } else if (el === "About Us") {
      navigate("/about-us")
    }
  }

  useEffect(() => {
    if (sideMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideMenu]);

  return (
    <>
      <div className={Full ? "navBarContainer navBarContainerFull" : "navBarContainer"}>
        <div className="clogBox"><img src={Clogo} onClick={() => navigate("/")} /></div>
        <div className="navItemBox">
          {
            navItems?.map((el, i) => (
              <p className={navItem === el ? 'navItem AtivenavItem' : "navItem"} onClick={() => {
                handelNavigation(el)
                setNavItem(el)
              }} key={i}>{el}</p>
            ))
          }
        </div>
        <div className="navLogoBox">
          <div className={searchBox ? "SearchInputBox SearchInputBoxActive" : "SearchInputBox"}>
            <input type="text" placeholder='Search...' />
          </div>
          <img className='searchIcon' src={SearchIcon} alt="" onClick={() => setSearcBox(!searchBox)} />
          {/* <WhiteBtn btnText="Login" height="42px" /> */}
          <BlackBtn height="42px" width="120px" btnText="Sign Up" onClick={() => navigate("/logIn")} />
          <img src={OptionIcon} className='NavOptionIcon' alt="" onClick={() => setSideMenu(true)} />
        </div>


        {/* side menu */}
        <div className={sideMenu ? "SideMenu SideMenuActive" : "SideMenu"}>
          <img src={RoundArrow} className='sideMenuCloseArrow' onClick={() => setSideMenu(false)} />
          <div className="mobileSideMenuList">
            {
              navItems?.map((el, i) => (
                <p className={navItem === el ? 'navItem AtivenavItem' : "navItem"} onClick={() => {
                  setNavItem(el)
                  handelNavigation(el)
                }} key={i}>{el}</p>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
