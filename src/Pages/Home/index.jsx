import React, { useState } from 'react';
import "./style.css"

//images
import homeBackground from "../../assets/Images/homeBackground.png";
import locationIcon from "../../assets/Images/locationIcon.svg";
import targetIcon from "../../assets/Images/targetIcon.svg"
import buildingIcon from "../../assets/Images/bullingIcon.svg"
import propertyIcon from "../../assets/Images/propertyIcon.svg"
import dollerIcon from "../../assets/Images/dollerIcon.svg"
import searchIcon from '../../assets/Images/searchWhiteIcon.svg'
import serviceImg1 from "../../assets/Images/serviceCard1.png"
import serviceImg2 from "../../assets/Images/serviceCard2.png"
import serviceImg3 from "../../assets/Images/serviceCard3.png"
import nbsImg from "../../assets/Images/nbsImg.png"
import nbsBlackIcon from "../../assets/Images/nbsBlackIcon.svg"
import difBgImg from "../../assets/Images/difBgImg.png";
import trust1 from "../../assets/Images/trust1.svg"
import trust2 from "../../assets/Images/trust2.svg"
import trust3 from "../../assets/Images/trust3.svg"
import trust4 from "../../assets/Images/trust4.svg"
import roundArrow from "../../assets/Images/roundArrow.svg"


//components
import NavBar from '../../Components/NavBar';
import { WhiteFillBtn, DropBox, BlackBtn, OutLineBtn } from "../../Components/Tools"
import UncontrolledExample from "../../Components/Slider";
import Footer from "../../Components/Footer";


//Data
import { nearYouPropertie, PropertiesData, BlogData } from "../../assets/Data"

export default function Home({ navItem, setNavItem }) {
  const [drop1, setDrop1] = useState(false);
  const [dropVal1, setDropVal1] = useState("Property type");
  const [drop2, setDrop2] = useState(false);
  const [dropVal2, setDropVal2] = useState("Property type");
  const [drop3, setDrop3] = useState(false);
  const [dropVal3, setDropVal3] = useState("Property type");
  const drop1List = ["item1", "item2", "item3"];
  const [homeTab, setHomeTab] = useState(0)



  const ServiceCard = ({ img, title, subTitle }) => {
    return (
      <div className="serviceCard">
        <img src={img} />
        <p>{title}</p>
        <span>{subTitle}</span>

      </div>
    )
  }

  const TrustCard = ({ header, subHeader, icon }) => {
    return (
      <div className="trustCard">
        <img src={icon} />
        <p className='trustHeader'>{header}</p>
        <samp>{subHeader}</samp>
      </div>
    )
  }

  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="homeContainer">
        <div className="homeTopSection">
          {/* <img src={homeBackground} className='homeTopBg' /> */}
          <UncontrolledExample />
          <p className='homeHeader'>Welcome to NBS Property</p>
          <p className='homeSubHeader'>Search below for property or rent house. </p>
          <WhiteFillBtn height="50px" btnText="Learn More" />
          <div className="topHomeTavSection">
            <div className="thTabInBox">
              <div onClick={() => setHomeTab(0)} style={{ background: "#ffb605" }} className={homeTab === 0 ? "tabBox ActivetabBuyBox" : "tabBox"}>
                <div><p>Buy</p></div>
              </div>
              <div onClick={() => setHomeTab(1)} style={{ background: "#80808091" }} className={homeTab === 1 ? "tabBox ActivetabRentBox" : "tabBox"}>
                <div><p>Rent</p></div>
              </div>
            </div>

          </div>
          <div className="HomeBtnBox">
            <div className="locationInputBox">
              <img src={locationIcon} />
              <p>Your preferred location</p>
              <img src={targetIcon} className='targetIcon' />
            </div>

            <DropBox icon={buildingIcon} drop={drop1} setDrop={setDrop1} dropVal={dropVal1} setDropVal={setDropVal1} dropList={drop1List} />
            <DropBox icon={propertyIcon} drop={drop2} setDrop={setDrop2} dropVal={dropVal2} setDropVal={setDropVal2} dropList={drop1List} />
            <DropBox icon={dollerIcon} drop={drop3} setDrop={setDrop3} dropVal={dropVal3} setDropVal={setDropVal3} dropList={drop1List} />

            <BlackBtn icon={searchIcon} btnText="SEARCH" height="40px" />
          </div>
        </div>

        {/* Our service */}
        <div className="serviceSection">
          <p className='SectionHeader'>Our Services</p>
          <p className="sectionSubText">Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>

          <div className="serviceCardBox">
            <ServiceCard img={serviceImg1} title="Residential" subTitle="Lorem ipsum dolor sit amet consectetur. Nunc odio nec massa egestas egestas. Id purus quam volutpat." />
            <ServiceCard img={serviceImg2} title="Commercial" subTitle="Lorem ipsum dolor sit amet consectetur. Consectetur amet ac faucibus porttitor et in massa." />
            <ServiceCard img={serviceImg3} title="Industrial" subTitle="Lorem ipsum dolor sit amet consectetur. Felis duis neque velit duis lectus tincidunt tortor amet." />
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" btnText="Explore All" />
          </div>
        </div>

        {/* about nbs */}
        <div className="aboutNbsSection">
          <p className="subText">About NBS</p>
          <p className='SectionHeader'>What Is NBS Property?</p>

          <div className="anbs">
            <div className="nbsImgBox">
              <img src={nbsImg} alt="" className='nbsImg' />
              <div className="nbsInImgBox">
                <img src={nbsBlackIcon} alt="" />
              </div>
            </div>
            <div className="nbsTextBox">
              <p className="SectionHeader">Who We Are</p>
              <p className="sectionSubText">Lorem ipsum dolor sit amet consectetur. Consequat et est varius a leo. In id fringilla sagittis eu. Nec et lorem gravida rhoncus eget egestas tortor augue blandit. Suspendisse lacus morbi diam dui diam mi justo ut.</p>
              <p className="sectionSubText">Arcu ultrices luctus tincidunt dui nibh ante urna. Vel felis nunc in tincidunt non vitae dui. Proin tristique aenean morbi risus ultrices amet. Nunc proin massa sed laoreet euismod a magna at. Suspendisse nibh dolor elit commodo lectus commodo. Habitant nunc risus gravida in odio. Ut nunc amet in cursus malesuada augue amet pellentesque. Tortor nulla est ornare augue. Proin.</p>
              <div className="nbsBtnBox">
                <BlackBtn height="40px" btnText="Explore Services" />
                <OutLineBtn height="40px" btnText="Contact Us Now" />
              </div>
            </div>
          </div>
        </div>

        <div className="trustSection">
          <div className="trustBox">
            <div className="trustInBox">
              <TrustCard icon={trust1} header="Trust Section 1" subHeader="Lorem ipsum dolor sit amet consectetur. Morbi mauris blandit enim nisl. Purus facilisi bibendum magna consequat. Odio nec." />
              <TrustCard icon={trust2} header="Trust Section 2" subHeader="Lorem ipsum dolor sit amet consectetur. Pellentesque integer libero amet gravida eu elementum faucibus amet faucibus. Cursus." />
              <TrustCard icon={trust3} header="Trust Section 3" subHeader="Lorem ipsum dolor sit amet consectetur. Metus duis lacus tincidunt tortor. Ipsum non sociis tellus tortor urna proin orci ultrices." />
              <TrustCard icon={trust4} header="Trust Section 4" subHeader="Lorem ipsum dolor sit amet consectetur. Vestibulum mollis lacus faucibus gravida sed viverra donec nisl donec. Risus non neque." />
            </div>
            <div className="wmDifferent">
              <p className='wmDfHeader'>What Make Us Different?</p>
              <p className='sectionSubText'>Lorem ipsum dolor sit amet consectetur. Diam scelerisque sollicitudin tristique enim integer sed nunc ultricies nisi. Urna lacinia tempor lacus placerat velit.</p>
              <div className="wmdBtnBox">
                <BlackBtn btnText="Explore Services" height="40px" />
              </div>
              <img src={difBgImg} />
            </div>
          </div>

          <div className="NearUSection">
            <p className='SectionHeader'>Properties located near you</p>

            <div className="nearLoCardBox">
              {
                nearYouPropertie?.map((el, i) => (
                  <div key={el} className="nearLoCard">
                    <p>{el.num}+</p>
                    <span>{el.sum}</span>
                    <div className="nlCardLine">
                      <img src={roundArrow} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>

        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Available Properties Near You</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="propertieCardBox">
            {
              PropertiesData?.map((el, i) => (
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

        {/* Blogs section */}
        <div className="BlogSection">
          <p className='SectionHeader'>Our Blogs</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="blogDisplaySection">
            <div className="RightBlogBox">
              <div className="RBlogImgBox">
                <img src={BlogData[0].img} alt="" />
              </div>
              <p className='blogTitle'>{BlogData[0].title}</p>
              <p className="blogSumText">{BlogData[0].summery}</p>
            </div>
            <div className="LeftBlogBox">
              {
                BlogData?.slice(-3).map((el, i) => (
                  <div className="blogRowCard">
                    <div className="brImgBox">
                      <img src={el.img} alt="" />
                    </div>
                    <div className="brTextBox">
                      <p className='blogTitle'>{el.title}</p>
                      <p className="blogSumText">{el.summery}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" btnText="View All Blogs" />
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}
