import React, { useState } from 'react';
import "./style.css"


//images
import Clogo from "../../assets/Images/Clogo.svg";
import SearchIcon from "../../assets/Images/searchIcon.svg"

//components
import { BlackBtn, WhiteBtn } from "../Tools";

export default function NavBar({ navItem, setNavItem }) {
  const [searchBox, setSearcBox] = useState(false);

  const navItems = [
    "Home",
    "Buy",
    "Rent",
    "Office",
    "Retail",
    "Industrial",
    "F & B"
  ]

  return (
    <>
      <div className="navBarContainer">
        <div className="clogBox"><img src={Clogo} /></div>
        <div className="navItemBox">
          {
            navItems?.map((el, i) => (
              <p className={navItem === el ? 'navItem AtivenavItem' : "navItem"} onClick={() => setNavItem(el)} key={i}>{el}</p>
            ))
          }
        </div>
        <div className="navLogoBox">
          <div className={searchBox ? "SearchInputBox SearchInputBoxActive" : "SearchInputBox"}>
            <input type="text" placeholder='Search...' />
          </div>
          <img className='searchIcon' src={SearchIcon} alt="" onClick={() => setSearcBox(!searchBox)} />
          <WhiteBtn btnText="Login" height="42px" />
          <BlackBtn height="42px" btnText="Sign Up" />
        </div>
      </div>
    </>
  )
}
