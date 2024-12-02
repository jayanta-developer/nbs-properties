import React, { useState } from 'react';
import "./style.css";

//images
import propertyCoverImg from "../../assets/Images/propertyCoverImg.png";
import sbiBannar from "../../assets/Images/sbiBannar.png";
import FilterIcon from "../../assets/Images/filterIcon.svg";
import dropIcon from "../../assets/Images/DropIcon.svg";
import CrossIcon from "../../assets/Images/crossIcon.png";
import Avatar from "../../assets/Images/Avatar.png"
import hartIcon from "../../assets/Images/heartIcon.svg"
import shareIcon from "../../assets/Images/shareIcon.svg"
import optionIcon from "../../assets/Images/dotsIcon.svg";
import PropertieIntImg from "../../assets/Images/PropertieIntImg1.png"
import locationIcon from "../../assets/Images/locationIcon2.svg"
import badIcon from "../../assets/Images/bedIcon.svg";
import bathroomIcon from "../../assets/Images/bathroomIcon.svg"
import BalconyIcon from "../../assets/Images/BalconyIcon.svg"



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
      <div className="PropertListPage propertyDetailsPage">

        <div className="propertMainSection">
          <div className="propertieLeftSection">
            <p className='pageNavText' >{"Home>Industrial>Balestier/Toa Payoh "}</p>

            <div className="propertySection">
              <div className="propTitleNav">
                <p className="proprteyTitle">2 BHK 791 Sq-ft Flat For Sale </p>
                <div className="propOptiopBox">
                  <p><img src={hartIcon} /> Shortlist</p>
                  <p><img src={shareIcon} /> Share</p>
                  <img src={optionIcon} />
                </div>
              </div>
              <div className="propInBox">
                <div className="propImgBox">
                  <div className="propImgInBox1">
                    <div className="propRow"><img src={PropertieIntImg} /></div>
                    <div className="propRow"><img src={PropertieIntImg} /></div>
                    <div className="propRow"><img src={PropertieIntImg} /></div>
                  </div>
                  <div className="propImgInBox2">
                    <img src={PropertieIntImg} />
                  </div>

                </div>
                <div className="propTextBox">
                  <div className="propPriceBox">
                    <p className='propPriceText'>$ 380,000</p>
                    <div className="proceNotBox">
                      <p>Negotiable</p>
                    </div>
                  </div>

                  <p className="propNText">5 Soon Lee Street Boon Lay / Jurong / Tuas (D22)</p>
                  <p className="propNText"><img src={locationIcon} /> Location would be hereRuby Park</p>

                  <div className="propFetuerBox">
                    <div className="featuresBox">
                      <img src={badIcon} />
                      <p>Beds <br /> <samp>2</samp></p>
                    </div>
                    <div className="featuresBox">
                      <img src={bathroomIcon} />
                      <p>Bathroom <br /> <samp>2</samp></p>
                    </div>
                    <div className="featuresBox">
                      <img src={BalconyIcon} />
                      <p>Balcony <br /> <samp>1</samp></p>
                    </div>
                  </div>

                  <div className="propBotomInfoBox">
                    <div className="propBtomIBox">
                      <p>Build-Up-Area</p>
                      <span>969 sqft (S$ 392 psf)</span>
                    </div>
                    <div className="propBtomIBox">
                      <p>Developer</p>
                      <span>Factory / Workshop (B2)</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="propMDetailsSection">
                <p className="propDtalHeader">More details</p>
                <p className="propMDSubText1">B2 Industrial Unit For Sale with High Rental Yield</p>
                <p className="propMDSubText2">B2 Industrial Unit For Sale with High Rental Yield</p>

                <p className="propSeemore">Show More {">>"}</p>


                <div className="propBotomInfoBox">
                  <div className="propBtomIBox">
                    <p>Property Type</p>
                    <span>Factory / Workshop (B2) For Sale</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Floor Size</p>
                    <span>969 sqft</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Furnishing</p>
                    <span>Fully Fitted</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>PSF</p>
                    <span>$ 392.16 psf</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Currently Tenanted</p>
                    <span>Until 31 Aug 2025</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Tenure</p>
                    <span>30-year Leasehold</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Listed On</p>
                    <span>7 Nov 2024</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Listing ID</p>
                    <span>25345514</span>
                  </div>
                </div>

                <div className="centerBtnBox">
                  <BlackBtn height="50px" btnText="Contact Agent" />
                </div>



              </div>
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