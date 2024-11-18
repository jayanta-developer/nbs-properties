import React from 'react';
import "./style.css"


//images
import Clogo from "../../assets/Images/Clogo.svg";
import SearchIcon from "../../assets/Images/searchIcon.svg"
//components
import { BlackBtn, WhiteBtn } from "../../Components/AppBtn"

export default function NavBar() {

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
              <p className='navItem' key={i}>{el}</p>
            ))
          }
        </div>
        <div className="navLogoBox">
          <img className='searchIcon' src={SearchIcon} alt="" />
          <WhiteBtn btnText="Login" height="42px" />
          <BlackBtn height="42px" btnText="Sign Up" />
        </div>

      </div>
    </>
  )
}
