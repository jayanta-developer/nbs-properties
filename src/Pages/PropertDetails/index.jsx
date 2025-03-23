import React, { useState } from 'react';
import "./style.css";

//images
import sbiBannar from "../../assets/Images/sbiBannar.png";
import Avatar from "../../assets/Images/avatar.png"
import hartIcon from "../../assets/Images/heartIcon.svg"
import shareIcon from "../../assets/Images/shareIcon.svg"
import optionIcon from "../../assets/Images/dotsIcon.svg";
import PropertieIntImg from "../../assets/Images/PropertieIntImg1.png"
import locationIcon from "../../assets/Images/locationIcon2.svg"
import badIcon from "../../assets/Images/bedIcon.svg";
import bathroomIcon from "../../assets/Images/bathroomIcon.svg"
import BalconyIcon from "../../assets/Images/BalconyIcon.svg"
import airConditionerIcon from "../../assets/Images/air-conditioner.svg"
import carParkingIcon from "../../assets/Images/car-parking.svg"
import cctvIcon from "../../assets/Images/cctv.svg"
import availabilityIcon from "../../assets/Images/availability.svg"
import mapImg from "../../assets/Images/mapImg.png"
import shoppingCartIcon from "../../assets/Images/shopping-cartIcon.svg"
import walkIcon from "../../assets/Images/walk.svg"
import AddIcon from "../../assets/Images/addIcon.svg"
import userImg from "../../assets/Images/userImg.png";

import propertieImg1 from "../../assets/Images/propertieImg1.png";
import propertieImg2 from "../../assets/Images/propertieImg2.png";
import propertieImg3 from "../../assets/Images/propertieImg3.png";
import propertieImg4 from "../../assets/Images/propertieImg4.png";
import propertieImg5 from "../../assets/Images/propertieImg5.png";
import propertieImg6 from "../../assets/Images/propertieImg6.png";

//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, PropertiesSmallCard, BlackBtn, WhiteBtn } from "../../Components/Tools"

//data
import { PropertiesData, questionList } from "../../assets/Data";


export default function PropertDetails({ navItem, setNavItem }) {
  const [nearSectionTab, setNearSectionTab] = useState("Shopping");
  const [questionTab, setQuestionTab] = useState()
  const nearYourTabList = ["Saved Places", "Train", "Bus", "Shopping", "Food & Drink", "Bank", "Post Office"]



  const proData1 = {
    img: propertieImg1,
    location: "Matunga East, Mumbai, Maharastra, 720156 ",
    BHK: "3",
    SQFT: "1250",
    PSF: "2,992",
    price: "7.25",
    agentImg: userImg,
    agentName: "David Warner",
  }
  const proData2 = {
    img: propertieImg2,
    location: "Matunga East, Mumbai, Maharastra, 720156 ",
    BHK: "3",
    SQFT: "1250",
    PSF: "2,992",
    price: "7.25",
    agentImg: userImg,
    agentName: "David Warner",
  }
  const proData3 = {
    img: propertieImg3,
    location: "Matunga East, Mumbai, Maharastra, 720156 ",
    BHK: "3",
    SQFT: "1250",
    PSF: "2,992",
    price: "7.25",
    agentImg: userImg,
    agentName: "David Warner",
  }
  const proData4 = {
    img: propertieImg4,
    location: "Matunga East, Mumbai, Maharastra, 720156 ",
    BHK: "3",
    SQFT: "1250",
    PSF: "2,992",
    price: "7.25",
    agentImg: userImg,
    agentName: "David Warner",
  }


  const LocationNearShop = ({ title, dist }) => {
    return (
      <div className="mapNearLocRow">
        <div className="disFBox">
          <div className="disIconBox"><img src={shoppingCartIcon} /> </div>
          <div className="disTextBox"><p className='disLocText'>{title}</p></div>
        </div>
        <div className="distaninBox">
          <img src={walkIcon} />
          <p>{dist} m</p>
        </div>
      </div>
    )
  }

  const QuestionRow = ({ title, summery, questionTab, setQuestionTab, i }) => {
    return (
      <div className="questionTabItem">
        <div className="quesBox1" onClick={() => hendelQuestionClick(i)}>
          <p className='questionText'>{title}</p>
          <img src={AddIcon} />
        </div>
        <div className={questionTab === i ? "quesBox2 quesBox2Active" : "quesBox2"}>
          <p>{summery}</p>
        </div>
      </div>
    )
  }

  const hendelQuestionClick = (i) => {
    if (questionTab === i) {
      setQuestionTab(null)
    } else {
      setQuestionTab(i)
    }
  }

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
                <p className="propDtalHeader">About This Home</p>
                <p className="propMDSubText1">NBS developers llp has lauched passcode one vikhroli in vikhroli east, mumbai. It offers under construction units. Popular configurations include 1 bhk, 1.5 bhk, 2 bhk, 2.5 bhk units. As per the area plan, units are in the size range of 398.0 - 697.0 sq.Ft.. The possession date of passcode one vikhroli is dec, 2026. The address of passcode one vikhroli is vikhroli.</p>

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
                  <BlackBtn height="50px" width="200px" btnText="Contact Agent" />
                </div>
              </div>
            </div>


            <div className="propertySection AmenitiesSection">
              <p className="propDtalHeader">Amenities</p>
              <div className="roomFasalityBox">
                <div className="roomFasalityItem">
                  <img src={airConditionerIcon} />
                  <p>Air-Conditioning</p>
                </div>
                <div className="roomFasalityItem">
                  <img src={carParkingIcon} />
                  <p>Car Parking</p>
                </div>
                <div className="roomFasalityItem">
                  <img src={cctvIcon} />
                  <p>CCTV Security</p>
                </div>
                <div className="roomFasalityItem">
                  <img src={availabilityIcon} />
                  <p>24-hour access</p>
                </div>
              </div>
              <div className="centerBtnBox">
                <BlackBtn height="50px" width="200px" btnText="View all Amenities" />
                <WhiteBtn height="50px" width="200px" btnText="Download Brochure" />
              </div>
            </div>

            <div className="propertySection whatNearSection">
              <p className="propDtalHeader">What's nearby</p>
              <div className="roomFasalityBox">
                {
                  nearYourTabList?.map((el, i) => (
                    <div className={nearSectionTab === el ? "nearSectionTab nearSectionTabActive" : "nearSectionTab"} onClick={() => setNearSectionTab(el)} key={i}><p>{el}</p></div>
                  ))
                }
              </div>
              <div className="mapOuterBox">
                <div className="mapListBox">
                  <LocationNearShop title="HardwareCity Pioneer Junction" dist="390" />
                  <LocationNearShop title="AB Minimart" dist="720" />
                  <LocationNearShop title="AB Minimart" dist="720" />
                  <LocationNearShop title="Li Li Cheng Minimart" dist="500" />
                  <LocationNearShop title="Pioneer Mall" dist="500" />
                  <LocationNearShop title="Giant Hypermarket" dist="280" />
                </div>
                <div className="mapBox">
                  <img src={mapImg} alt="" />
                </div>
              </div>
            </div>


            <div className="propertySection">
              <p className="propDtalHeader">Frequently Asked Questions</p>
              <div className="questionTabBox">
                {
                  questionList?.map((el, i) => (
                    <QuestionRow title={el.title} summery={el.summery} key={i} setQuestionTab={setQuestionTab} questionTab={questionTab} i={i} />
                  ))
                }
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
              <BlackBtn btnText="WhatsApp Web" width="200px" height="40px" />
            </div>


            <img src={sbiBannar} className='sbiBannar' />
          </div>
        </div>
        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Similar Listings</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="propertieCardBox">
            <PropertiesSmallCard el={proData1} />
            <PropertiesSmallCard el={proData2} />
            <PropertiesSmallCard el={proData3} />
            <PropertiesSmallCard el={proData4} />
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" width={200} btnText="Explore All" />
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}
