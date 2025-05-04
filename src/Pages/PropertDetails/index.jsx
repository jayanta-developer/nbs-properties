import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import sbiBannar from "../../assets/Images/sbiBannar.png";
import Avatar from "../../assets/Images/avatar.png";
import hartIcon from "../../assets/Images/heartIcon.svg";
import shareIcon from "../../assets/Images/shareIcon.svg";
import optionIcon from "../../assets/Images/dotsIcon.svg";
import PropertieIntImg from "../../assets/Images/PropertieIntImg1.png";
import locationIcon from "../../assets/Images/locationIcon2.svg";
import badIcon from "../../assets/Images/bedIcon.svg";
import bathroomIcon from "../../assets/Images/bathroomIcon.svg";
import BalconyIcon from "../../assets/Images/BalconyIcon.svg";
import airConditionerIcon from "../../assets/Images/air-conditioner.svg";
import carParkingIcon from "../../assets/Images/car-parking.svg";
import cctvIcon from "../../assets/Images/cctv.svg";
import availabilityIcon from "../../assets/Images/availability.svg";
import mapImg from "../../assets/Images/mapImg.png";
import shoppingCartIcon from "../../assets/Images/shopping-cartIcon.svg";
import walkIcon from "../../assets/Images/walk.svg";
import AddIcon from "../../assets/Images/addIcon.svg";
import userImg from "../../assets/Images/userImg.png";
import agentImg from "../../assets/Images/Agent.jpg";

import propertieImg1 from "../../assets/Images/propertieImg1.png";
import propertieImg2 from "../../assets/Images/propertieImg2.png";
import propertieImg3 from "../../assets/Images/propertieImg3.png";
import propertieImg4 from "../../assets/Images/propertieImg4.png";

//components
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { PropertiesSmallCard, BlackBtn } from "../../Components/Tools";
import GoogleMapComponent from "../../Components/Map";

//data
import { FetchProperty } from "../../Store/PropertySlice";
import { FetchUsers } from "../../Store/UserSlice"
import { useDispatch, useSelector } from "react-redux";

export default function PropertDetails({ navItem, setNavItem }) {
  const navigate = useNavigate();

  const propertyId = localStorage.getItem("propertyId");
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.properys);

  const currentProperty = data?.find((val) => val._id === propertyId);
  const Agent = useSelector((state) => state.user);
  const agentData = Agent?.data?.filter((ag) => ag.role === "Agent")
  const currentAgent = agentData?.find((val) => val?._id === currentProperty?.agent)


  const [questionTab, setQuestionTab] = useState();


  const LocationNearShop = ({ title, dist }) => {
    return (
      <div className="mapNearLocRow">
        <div className="disFBox">
          <div className="disIconBox">
            <img src={shoppingCartIcon} />{" "}
          </div>
          <div className="disTextBox">
            <p className="disLocText">{title}</p>
          </div>
        </div>
        <div className="distaninBox">
          <img src={walkIcon} />
          <p>{dist} m</p>
        </div>
      </div>
    );
  };

  const QuestionRow = ({ title, summery, questionTab, setQuestionTab, i }) => {
    return (
      <div className="questionTabItem">
        <div className="quesBox1" onClick={() => hendelQuestionClick(i)}>
          <p className="questionText">{title}</p>
          <img src={AddIcon} />
        </div>
        <div
          className={questionTab === i ? "quesBox2 quesBox2Active" : "quesBox2"}
        >
          <p>{summery}</p>
        </div>
      </div>
    );
  };

  const hendelQuestionClick = (i) => {
    if (questionTab === i) {
      setQuestionTab(null);
    } else {
      setQuestionTab(i);
    }
  };

  useEffect(() => {
    dispatch(FetchProperty());
    dispatch(FetchUsers());
    if (data?.length < 0) {
      dispatch(FetchProperty());
    }
    if (Agent.data?.length < 0) {
      dispatch(FetchUsers());
    }
  }, []);
  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage propertyDetailsPage">
        {status === "error" ? (
          <h2>Internal server error!</h2>
        ) : status === "loading" ? (
          <h2>Loading...</h2>
        ) : status === "idle" ? (
          <div className="propertMainSection">
            <div className="propertieLeftSection">
              <p className="pageNavText">
                {"Home>Industrial>Balestier/Toa Payoh "}
              </p>

              <div className="propertySection">
                <div className="propTitleNav">
                  <p className="proprteyTitle">{currentProperty?.title}</p>
                  <div className="propOptiopBox">
                    <p>
                      <img src={hartIcon} /> Shortlist
                    </p>
                    <p>
                      <img src={shareIcon} /> Share
                    </p>
                    <img src={optionIcon} />
                  </div>
                </div>
                <div className="propInBox">
                  <div className="propImgBox">
                    <div className="propImgInBox1">
                      {/* {
                            data?.images[1] ?
                              <div className="propRow"><img src={data?.images[1]} /></div> :
                              null
                          }
                          {
                            data?.images[2] ?
                              <div className="propRow"><img src={data?.images[2]} /></div> :
                              null
                          }
                          {
                            data?.images[3] ?
                              <div className="propRow"><img src={data?.images[3]} /></div> :
                              null
                          } */}
                      {currentProperty?.images?.slice(0, 3).map((img, i) => (
                        <div className="propRow" key={i}>
                          <img src={img} />
                        </div>
                      ))}
                    </div>
                    <div className="propImgInBox2">
                      {currentProperty?.images?.slice(0, 1).map((img, i) => (
                        <img key={i} src={img} />
                      ))}
                    </div>
                  </div>
                  <div className="propTextBox">
                    <div className="propPriceBox">
                      <p className="propPriceText">
                        $ {currentProperty?.price}
                      </p>
                      <div className="proceNotBox">
                        <p>Negotiable</p>
                      </div>
                    </div>

                    {/* <p className="propNText">5 Soon Lee Street Boon Lay / Jurong / Tuas (D22)</p> */}
                    <p className="propNText">
                      <img src={locationIcon} /> {currentProperty?.address}
                    </p>

                    <div className="propFetuerBox">
                      <div className="featuresBox">
                        <img src={badIcon} />
                        <p>
                          Room <br /> <samp>{currentProperty?.room}</samp>
                        </p>
                      </div>
                      <div className="featuresBox">
                        <img src={bathroomIcon} />
                        <p>
                          Bathroom <br /> <samp>{currentProperty?.bath}</samp>
                        </p>
                      </div>
                      <div className="featuresBox">
                        <img src={BalconyIcon} />
                        <p>
                          Balcony <br /> <samp>1</samp>
                        </p>
                      </div>
                    </div>

                    <div className="propBotomInfoBox">
                      <div className="propBtomIBox">
                        <p>Build-Up-Area</p>
                        <span>{currentProperty?.area} sqft</span>
                      </div>
                      <div className="propBtomIBox">
                        <p>Developer</p>
                        <span>{currentProperty?.propertyType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="propMDetailsSection">
                  <p className="propDtalHeader">About This Home</p>
                  <p className="propMDSubText1">{currentProperty?.summary}</p>

                  <p className="propSeemore">Show More {">>"}</p>

                  <div className="propBotomInfoBox">
                    <div className="propBtomIBox">
                      <p>Property Type</p>
                      <span>{currentProperty?.propertyType}</span>
                    </div>
                    <div className="propBtomIBox">
                      <p>Floor Size</p>
                      <span>{currentProperty?.foolrSize} sqft</span>
                    </div>
                    <div className="propBtomIBox">
                      <p>Furnishing</p>
                      <span>Fully Fitted</span>
                    </div>
                    {/* <div className="propBtomIBox">
                          <p>PSF</p>
                          <span>$ 392.16 psf</span>
                        </div> */}
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
                      <span>{currentProperty?.listedOn}</span>
                    </div>
                    <div className="propBtomIBox">
                      <p>Listing ID</p>
                      <span>25345514</span>
                    </div>
                  </div>

                  <div className="centerBtnBox">
                    <BlackBtn
                      height="50px"
                      width="200px"
                      btnText="Contact Agent"
                    />
                  </div>
                </div>
              </div>

              <div className="propertySection AmenitiesSection">
                <p className="propDtalHeader">Amenities</p>
                {/* <div className="roomFasalityBox ">
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
                    </div> */}
                <div className="roomFasalityBox ">
                  {currentProperty?.amenities?.map((an, i) => (
                    <div className="roomFasalityItem" key={i}>
                      {/* <img src={airConditionerIcon} /> */}
                      <p>{an}</p>
                    </div>
                  ))}
                </div>
                <div className="centerBtnBox">
                  {/* <BlackBtn height="50px" width="200px" btnText="View all Amenities" /> */}
                  {/* <WhiteBtn height="50px" width="240px" btnText="Download Brochure" /> */}
                </div>
              </div>

              <div className="propertySection whatNearSection">
                <p className="propDtalHeader">What's nearby</p>
                <div className="roomFasalityBox">
                  {/* {
                        nearYourTabList?.map((el, i) => (
                          <div className={nearSectionTab === el ? "nearSectionTab nearSectionTabActive" : "nearSectionTab"} onClick={() => setNearSectionTab(el)} key={i}><p>{el}</p></div>
                        ))
                      } */}
                </div>
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

                  <GoogleMapComponent
                    lat={currentProperty?.map?.lat}
                    lng={currentProperty?.map?.lng}
                  />
                </div>
              </div>

              <div className="propertySection">
                <p className="propDtalHeader">Contact with Agent</p>
                <div className="agentBox">
                  <div className="agImgBox">
                    <img src={agentImg} alt="agentImg" />
                  </div>
                  <div className="agInfoBox">
                    <h2>Sr. {currentAgent?.name}</h2>
                    <p> {currentAgent?.role}</p>
                    <p>
                      Responds quickly in <span>15 mins</span>
                    </p>
                  </div>
                </div>

                <h2 className="agLabelText">Whats' your enquiry about?</h2>
                <div className="agCheckBox">
                  <div className="checkBox">
                    <input type="checkBox" />
                    <p>Scheduling Inspection</p>
                  </div>
                  <div className="checkBox">
                    <input type="checkBox" />
                    <p>Price Information</p>
                  </div>
                  <div className="checkBox">
                    <input type="checkBox" />
                    <p>Booking</p>
                  </div>
                </div>

                <div className="inputBox agInput">
                  <p>Email Address *</p>
                  <input type="text" />
                </div>
                <div className="inputBox agInput">
                  <p>Message *</p>
                  <textarea type="text" />
                </div>
                <BlackBtn btnText="Submit" height="40px" width="200px" />
              </div>

              <div className="propertySection">
                <p className="propDtalHeader">Frequently Asked Questions</p>
                <div className="questionTabBox">
                  {currentProperty?.FAQ?.map((el, i) => (
                    <QuestionRow
                      title={el.question}
                      summery={el.answer}
                      key={i}
                      setQuestionTab={setQuestionTab}
                      questionTab={questionTab}
                      i={i}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="propertieRightSection">
              <div className="brandProfileBox">
                <div className="avatarBox">
                  <img src={Avatar} />
                </div>
                <p className="brandTitle">Brendon Kuay</p>
                <span>ERA REALTY NETWORK PTE LTD</span>
                <span>CEA: R017302B / L3002382K</span>
                <BlackBtn btnText="WhatsApp Web" width="200px" height="40px" />
              </div>

              <img src={sbiBannar} className="sbiBannar" />
            </div>
          </div>
        ) : null}

        {/* Available Properties */}
        <div className="AbelPropt">
          <p className="SectionHeader">Similar Listings</p>
          <p className="sectionSubText">
            Industrial development is our main line of business. We do Factory
            Construction, Warehouse and others
          </p>
          <div className="propertieCardBox">
            {data?.slice(0, 4)?.map((el, i) => (
              <PropertiesSmallCard
                {...el}
                key={i}
                onClick={() => {
                  localStorage.setItem("propertyId", el?._id);
                  navigate("/property-details");
                  GoTop();
                }}
              />
            ))}
          </div>
        </div>
        <div className="centerBtnBox">
          <BlackBtn
            height="50px"
            width="200px"
            btnText="Explore All"
            onClick={() => {
              navigate("/properties");
              GoTop();
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
