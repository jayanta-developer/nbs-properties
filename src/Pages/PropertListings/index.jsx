import React, { useState } from 'react';
import "./style.css";

//images
import locationIcon from "../../assets/Images/locationIcon2.svg"
import PcardIcon1 from "../../assets/Images/pCardIcon1.svg"
import PcardIcon2 from "../../assets/Images/pCardIcon2.svg"

//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, OutLineBtn } from "../../Components/Tools"

//data
import { PropertiesData } from "../../assets/Data"


export default function PropertListings({ navItem, setNavItem }) {
  const [sortDrop, setSortDrop] = useState(false)
  const [sortDropVal, setSortDropVal] = useState("Sort by: Relevance")
  const sortDropList = ["Sort by: Relevance", "Sort by: Item1", "Sort by: item2"]


  const PropertieCard = ({ img, bhk, sqft, location, price, psf, agentImg, agentName }) => {
    return (
      <div className="propertieBigCard">
        <div className="propImgBox">
          <img src={img} alt="" />
        </div>
        <div className="proCInfoBox">
          <p className='proCBTitle'>{bhk}BHK {sqft}  Sq-ft Flat For Sale </p>
          <p className='propClocText'><img src={locationIcon} alt="" /> {location}</p>
          <div className="probCYlBox">
            <p className="propPrice">₹ {price}</p>
            <p className='propSqText'> <img src={PcardIcon1} /> {sqft} sqft</p>
            <p className='propSqText'> <img src={PcardIcon2} /> {psf} psf</p>
          </div>
          <div className="pcAgentBox">
            <div className="userPrf">
              <img src={agentImg} alt="" />
              <p>{agentName}</p>
            </div>
            <OutLineBtn btnText="Contact Agent" height="37px" />

          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage">
        <div className="propertieFilterBox">

        </div>

        <div className="propertMainSection">
          <div className="propertieLeftSection">
            <p className='pageNavText'>{"Home > Buy"}</p>

            <div className="propertieListHeaderBox">
              <p className="propLHText">379 Results | Properties for Sale in Kolkata</p>
              <DropBox dropList={sortDropList} drop={sortDrop} setDrop={setSortDrop} dropVal={sortDropVal} setDropVal={setSortDropVal} />
            </div>
            <div className="propertiesListBox">
              {
                PropertiesData?.map((el, i) => (
                  <PropertieCard key={i} price={el.price} location={el.location} sqft={el.SQFT} bhk={el.BHK} psf={el.PSF} img={el.img} agentImg={el.agentImg} agentName={el.agentName} />
                ))
              }
            </div>



          </div>

          <div className="propertieRightSection"></div>
        </div>
        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Available Properties Near You</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="propertieCardBox">
            {
              PropertiesData?.splice(0, 4).map((el, i) => (
                <div key={i} className="propertieCard">
                  <div className="propImgBox">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="propInfoBox">
                    <div className="propAriyaInfo">
                      <p>{el.BHK} BHK Flat</p>
                      <p>{el.SQFT} sqft</p>
                    </div>
                    <p className="propPrice">{el.price} Cr <samp>Onwards</samp></p>
                    <p className="propLocation">{el.location}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}
