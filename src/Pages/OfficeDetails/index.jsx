import React, { useState, useEffect } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import hartIcon from "../../assets/Images/heartIcon.svg"
import shareIcon from "../../assets/Images/shareIcon.svg"
import optionIcon from "../../assets/Images/dotsIcon.svg";
import PropertieIntImg from "../../assets/Images/PropertieIntImg1.png"
import locationIcon from "../../assets/Images/locationIcon2.svg"
import mapImg from "../../assets/Images/mapImg.png"
import shoppingCartIcon from "../../assets/Images/shopping-cartIcon.svg"
import walkIcon from "../../assets/Images/walk.svg"
import AddIcon from "../../assets/Images/addIcon.svg"
import userImg from "../../assets/Images/userImg.png";
import propertieImg1 from "../../assets/Images/propertieImg1.png";
import propertieImg2 from "../../assets/Images/propertieImg2.png";
import propertieImg3 from "../../assets/Images/propertieImg3.png";
import propertieImg4 from "../../assets/Images/propertieImg4.png";

//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, PropertiesSmallCard, BlackBtn, WhiteBtn, AgentCard, RatingBox, GoTop } from "../../Components/Tools"
import GoogleMapComponent from "../../Components/Map"

import { FetchOffice } from "../../Store/OfficeSlice"
import { FetchUsers } from "../../Store/UserSlice"
import { useDispatch, useSelector } from "react-redux";

export default function OfficeDetails({ navItem, setNavItem }) {
  const navigate = useNavigate()
  const currentOfficeId = localStorage.getItem("officeIndex")


  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.office);
  const currentOffice = data?.find((val) => val._id === currentOfficeId)
  const Agent = useSelector((state) => state.user);
  const agentData = Agent?.data?.filter((ag) => ag.role === "Agent")

  const [nearSectionTab, setNearSectionTab] = useState("Shopping");
  const [questionTab, setQuestionTab] = useState()
  const nearYourTabList = ["Saved Places", "Train", "Bus", "Shopping", "Food & Drink", "Bank", "Post Office"]

  const inde3 = [0, 0, 0];

  const buildingTableData = [
    {
      building: "What is the sale price of this unit at Pioneer Point?",
      floors: "NA",
      Units: "NA"
    },
    {
      building: "Building @ 6 Temasek Boulevard 038936",
      floors: "NA",
      Units: "NA"
    },
    {
      building: "Building @ 2 Temasek Boulevard 038982Building",
      floors: "NA",
      Units: "NA"
    },
    {
      building: "Building @ 6 Temasek Boulevard 038986",
      floors: "NA",
      Units: "NA"
    },
    {
      building: "Building @ 7 Temasek Boulevard 038987",
      floors: "NA",
      Units: "NA"
    },
  ]

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

  const ratingData = [
    {
      title: 'Interior / Units',
      rating: 3
    },
    {
      title: 'Common Areas',
      rating: 2
    },
    {
      title: 'Condo Facilities',
      rating: 4.5
    },
    {
      title: 'Transport Links',
      rating: 2.5
    },
    {
      title: 'Nearby Amenities',
      rating: 3
    },
    {
      title: 'Management',
      rating: 5
    },
  ]


  const LocationNearShop = ({ title, dist }) => {
    return (
      <div className="mapNearLocRow">
        <p className='disLocText'><img src={shoppingCartIcon} /> {title}</p>
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


  useEffect(() => {
    dispatch(FetchOffice());
    dispatch(FetchUsers());

    if (data?.length < 0) {
      dispatch(FetchOffice());
    }
    if (Agent.data?.length < 0) {
      dispatch(FetchUsers());
    }
  }, []);

  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage propertyDetailsPage officeDetailsPage">

        <div className="propertMainSection">
          <div className="propertieLeftSection">
            <p className='pageNavText' >{"Home> Commercial Building Directory> Boat Quay/Raffles Place  "}</p>

            <div className="propertySection">
              <div className="propTitleNav">
                <p className="proprteyTitle">{currentOffice?.title}</p>
                <div className="propOptiopBox">
                  <p><img src={hartIcon} /> Shortlist</p>
                  <p><img src={shareIcon} /> Share</p>
                  <img src={optionIcon} />
                </div>
              </div>
              <div className="propInBox">
                <div className="propImgBox">
                  <div className="propImgInBox1">
                    <div className="propRow"><img src={currentOffice?.images[1]} /></div>
                    <div className="propRow"><img src={currentOffice?.images[2]} /></div>
                    <div className="propRow"><img src={currentOffice?.images[3]} /></div>
                  </div>
                  <div className="propImgInBox2">
                    <img src={currentOffice?.images[0]} />
                  </div>

                </div>
                <div className="propTextBox">
                  <div className="propPriceBox">
                    <p className='propPriceText'>{currentOffice?.price}</p>
                    <div className="proceNotBox">
                      <p>Office</p>
                    </div>
                  </div>

                  <p className="propNText"><img src={locationIcon} /> {currentOffice?.address}</p>

                  <div className="propBotomInfoBox">
                    <div className="propBtomIBox">
                      <p>Configuration</p>
                      <span>{currentOffice?.configuration || "Suntec City Tower"}</span>
                    </div>
                    <div className="propBtomIBox">
                      <p>Build-Up-Area</p>
                      <span>{currentOffice?.ERACarpetArea || "969 sqft (S$ 392 psf)"}</span>
                    </div>

                  </div>
                  <div className="centerBtnBox">
                    <BlackBtn height="50px" width={150} btnText="Buy" />
                    <WhiteBtn height="50px" width={150} btnText="Rent" />
                  </div>
                </div>
              </div>


              <div className="propMDetailsSection">
                <p className="propDtalHeader">More details</p>
                <p className="propMDSubText1">{currentOffice?.overview}</p>

                <p className="propSeemore">Show More {">>"}</p>


                <div className="propBotomInfoBox">
                  <div className="propBtomIBox">
                    <p>Configuration</p>
                    <span>{currentOffice?.configuration || "Suntec City Tower"}</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>RERA Carpet Area</p>
                    <span>{currentOffice?.RERACarpetArea}</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Ready To Posses</p>
                    <span>{currentOffice?.ReadyToPosses}</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>Average Priceper sqft</p>
                    <span>{data?.AveragePricepersqft}</span>
                  </div>
                  <div className="propBtomIBox">
                    <p>RERA ID</p>
                    <span>{currentOffice?.RERAID}</span>
                  </div>

                </div>

                <div className="centerBtnBox">
                  <BlackBtn height="50px" width={200} btnText="Contact Agent" />
                </div>
              </div>
            </div>


            <div className="propertySection AmenitiesSection">
              <p className="propDtalHeader">Amenities</p>
              <div className="roomFasalityBox ">
                {
                  currentOffice?.amenities?.map((an, i) => (
                    <div className="roomFasalityItem" key={i}>
                      <p>{an}</p>
                    </div>
                  ))
                }

              </div>
              <div className="centerBtnBox">
                {/* <BlackBtn height="50px" width="200px" btnText="View all Amenities" /> */}
                {/* <WhiteBtn height="50px" width="240px" btnText="Download Brochure" /> */}
              </div>
            </div>



            {/* agents row section */}

            <div className="AbelPropt">
              <p className='SectionHeader'>Building Featured Agents</p>
              <div className="propertieCardBox AgentsRowSection">
                {
                  agentData?.splice(0, 4).map((el, i) => (
                    <AgentCard key={i} {...el} />
                  ))
                }
              </div>
              {/* <div className="centerBtnBox">
                <BlackBtn height="50px" width={200} btnText="Explore All" />
              </div> */}
            </div>

            <div className="propertySection whatNearSection">
              <p className="propDtalHeader">What's nearby</p>
              {/* <div className="roomFasalityBox">
                {
                  nearYourTabList?.map((el, i) => (
                    <div className={nearSectionTab === el ? "nearSectionTab nearSectionTabActive" : "nearSectionTab"} onClick={() => setNearSectionTab(el)} key={i}><p>{el}</p></div>
                  ))
                }
              </div> */}
              <div className="mapOuterBox">
                {/* <div className="mapListBox">
                  <LocationNearShop title="HardwareCity Pioneer Junction" dist="390" />
                  <LocationNearShop title="AB Minimart" dist="720" />
                  <LocationNearShop title="AB Minimart" dist="720" />
                  <LocationNearShop title="Li Li Cheng Minimart" dist="500" />
                  <LocationNearShop title="Pioneer Mall" dist="500" />
                  <LocationNearShop title="Giant Hypermarket" dist="280" />
                </div>
                <div className="mapBox">
                  <img src={mapImg} alt="" />
                </div> */}

                <GoogleMapComponent lat={currentOffice?.map?.lat} lng={currentOffice?.map?.lng} />
              </div>
            </div>


            <div className="propertySection buildingTable">
              <div className="buildingTableHeader">
                <div style={{ width: "65%" }} className="buildingTableCel"><p>Building</p></div>
                <div style={{ width: "17%" }} className="buildingTableCel"><p># Floors</p></div>
                <div style={{ width: "17%" }} className="buildingTableCel"><p># Units</p></div>

              </div>
              <div className="buldingTableMainBox">
                {
                  buildingTableData?.map((el, i) => (
                    <div className="buldingTableRow" key={i}>
                      <div style={{ width: "70%" }} className="buildingTableCel"><p>{el.building}</p></div>
                      <div style={{ width: "15%" }} className="buildingTableCel"><p>{el.floors}</p></div>
                      <div style={{ width: "15%" }} className="buildingTableCel"><p>{el.Units}</p></div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
          <div className="propertieRightSection">
            <div className="brandProfileBox ratingBox">
              <div className="ratingHeader">4.5 out of 5</div>
              <RatingBox width="18px" rating="4.5" />
              <p className="reviewSubText">Based on <samp> 4.5/5 review</samp></p>
              <div className="ratingItemBox">
                {
                  ratingData?.map((el, i) => (
                    <div key={i} className="ratingItemRow">
                      <p>{el.title}</p>
                      <RatingBox rating={el.rating} width="16px" />
                    </div>
                  ))
                }
              </div>
              <BlackBtn btnText="Add Review" width={200} height="40px" />
            </div>
          </div>
        </div>

        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Available Units</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="propertieCardBox">
            {data?.map((el, i) => (
              <PropertiesSmallCard {...el} key={i} onClick={() => {
                localStorage.setItem("officeIndex", el?._id)
                navigate("/office-details")
                GoTop()
              }} />
            ))}
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" width={200} btnText="Explore All" onClick={() => {
              navigate("/office")
              GoTop()
            }} />
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}
