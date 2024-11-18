import React from 'react';
import "./style.css"
//images
import homeBackground from "../../assets/Images/homeBackground.png"
//components
import NavBar from '../../Components/NavBar';
import { WhiteFillBtn } from "../../Components/AppBtn"

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="homeContainer">

        <div className="homeTopSection">
          <img src={homeBackground} className='homeTopBg' />

          <p className='homeHeader'>Welcome to NBS Property</p>
          <p className='homeSubHeader'>Search below for property or rent house. </p>
          <WhiteFillBtn height="56px" btnText="Learn More" />


        </div>

      </div>
    </>
  )
}
