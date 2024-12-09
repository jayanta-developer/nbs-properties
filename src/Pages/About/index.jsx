import React from 'react';
import "./style.css"

//images
import BgImg from "../../assets/Images/aboutBg.png";
import aboutHomeImg from "../../assets/Images/aboutHomeImg.png"

import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

export default function About({ navItem, setNavItem }) {
  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="aboutPage">
        <div className="bgPanal">
          <img src={BgImg} />
          <p>About Us</p>
        </div>

        <div className="anbs">
          <div className="nbsImgBox">
            <img src={aboutHomeImg} alt="" />
          </div>
          <div className="nbsTextBox">
            <p className="SectionHeader">About Us</p>
            <p className="">Welcome to HRH, your trusted partner in property excellence. With a legacy of delivering superior real estate solutions, we pride ourselves on offering unparalleled service, expert advice, and a comprehensive portfolio of properties that cater to diverse needs and preferences.</p>
            <p className="">HRH is a global leader in construction and real estate development. For over two decades, we have been at the forefront of creating iconic structures and developing communities that blend seamlessly with their surroundings. Our dedication to sustainability, innovation, and excellence has earned us a reputation as a trusted name in the industry.</p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
