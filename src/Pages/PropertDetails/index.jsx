import React, { useState } from 'react';
import "./style.css";

//images
import propertyCoverImg from "../../assets/Images/propertyCoverImg.png";
import sbiBannar from "../../assets/Images/sbiBannar.png";
import FilterIcon from "../../assets/Images/filterIcon.svg";
import dropIcon from "../../assets/Images/DropIcon.svg";
import CrossIcon from "../../assets/Images/crossIcon.png";
import Avatar from "../../assets/Images/Avatar.png"

//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, PropertiesSmallCard, PropertieBigCard, BlackBtn } from "../../Components/Tools"

//data
import { PropertiesData } from "../../assets/Data";


export default function PropertDetails({ navItem, setNavItem }) {



  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage">

        <div className="propertMainSection">
          <div className="propertieLeftSection">
            <p className='pageNavText' >{"Home>Industrial>Balestier/Toa Payoh "}</p>

            <div className="propertySection">

            </div>


          </div>
          <div className="propertieRightSection">
            <div className="brandProfileBox">
              <div className="avatarBox">
                <img src={Avatar} />
              </div>
              <p className='brandTitle'>Brendon Kuay</p>
              <span>ERA REALTY NETWORK PTE LTD</span>
              <span>CEA: R017302B / L3002382K</span>
              <BlackBtn btnText="WhatsApp Web" height="40px" />
            </div>


            <img src={sbiBannar} className='sbiBannar' />
          </div>
        </div>
        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Similar Listings</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="propertieCardBox">
            {
              PropertiesData?.splice(0, 4).map((el, i) => (
                <PropertiesSmallCard el={el} key={i} />
              ))
            }
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" btnText="Explore All" />
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}
