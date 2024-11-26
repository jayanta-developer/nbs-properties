import React from 'react'
import "./style.css"

//images
import nbsBlackIcon from "../../assets/Images/footerClogo.svg"
import FacebookIcon from "../../assets/Images/FotFacebookIcon.svg"
import TwitterIcon from "../../assets/Images/FotTwitterIcon.svg"
import InstaIcon from "../../assets/Images/FotInstaIcon.svg"
import LinkdinIcon from "../../assets/Images/FotLinkdinIcon.svg"
import FooterPatnerImg1 from "../../assets/Images/FooterPatnarImg1.svg"
import FooterPatnerImg2 from "../../assets/Images/FooterPatnarImg2.svg"
import FooterPatnerImg3 from "../../assets/Images/FooterPatnarImg3.svg"
import FooterPatnerImg4 from "../../assets/Images/FooterPatnarImg4.svg"
import FooterPatnerImg5 from "../../assets/Images/FooterPatnarImg5.svg"
import GoTopIcon from "../../assets/Images/GoTopIcon.svg"

import { GoTop } from "../../Components/Tools"

export default function Footer() {


  const FooterRowItems = [
    "Login / Sign Up",
    "About us",
    "Blog",
    "FAQ’s",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions"
  ]
  return (
    <>
      <div className="FooterContainer">
        <div className="FooterTopBox">
          <img src={FooterPatnerImg1} />
          <img src={FooterPatnerImg2} />
          <img src={FooterPatnerImg3} />
          <img src={FooterPatnerImg4} />
          <img src={FooterPatnerImg5} />
        </div>


        <img src={nbsBlackIcon} alt="" className='FooterClogo' />

        <div className="footerRowBox">
          {
            FooterRowItems?.map((el, i) => (
              <p className='FooterRowItem' key={i}>{el}</p>
            ))
          }
        </div>

        <div className="footerMideaBox">
          <img src={FacebookIcon} />
          <img src={TwitterIcon} />
          <img src={InstaIcon} />
          <img src={LinkdinIcon} />
        </div>

        <p className="footerBottomText">© 2024 <samp>NBS Property</samp> All right & Reserved</p>
        <img src={GoTopIcon} className='goTopIcon' alt="" onClick={GoTop} />
      </div>
    </>
  )
}
