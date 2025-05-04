import React, { useEffect, useState } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom"


//images
import locationIcon from "../../assets/Images/locationIcon.svg";
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
import crossWhite from "../../assets/Images/crossWhite.png"
import buildingWhiteIcon from "../../assets/Images/buildingIconV2.png"


//components
import NavBar from '../../Components/NavBar';
import { WhiteFillBtn, WhiteBtn, DropBox, BlackBtn, OutLineBtn, PropertiesSmallCard } from "../../Components/Tools"
import UncontrolledExample from "../../Components/Slider";
import Footer from "../../Components/Footer";


//Data
import { nearYouPropertie, BlogData } from "../../assets/Data"


import { FetchProperty } from "../../Store/PropertySlice"
import { useDispatch, useSelector } from "react-redux";
export default function Home({ navItem, setNavItem }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.properys);

  const [dropVal1, setDropVal1] = useState("Property type");
  const [dropVal2, setDropVal2] = useState("Property type");
  const [dropVal3, setDropVal3] = useState("Property type");
  const [homeTab, setHomeTab] = useState(0)
  const [locationDropVal, setlocationDropVal] = useState();
  const [searchPop, setSearchPop] = useState(false)


  const PropertyType = ["Apartments", "villas", "Commercia", "Plot A", "Plot B"];
  const PropertySize = ["22,215 sq.ft", "30,928 sq.ft", "24,394 sq.ft", "19,166 sq.ft", "34,200 sq.ft"];
  const PropertyBudget = ["15,000", "24,000", "30,000"];
  const LocationList = [
    "Pune Division",
    "Nashik Division",
    "Bangalore Division",
    "Nagpur Division",
    "Raigad",
    "Mumbai",
    "Thane",
    "Pune",
  ]

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

  const closePop = (e) => {
    if (e.target.id === "grayBox") {
      setSearchPop(false)
    }
  }

  useEffect(() => {
    dispatch(FetchProperty());
    if (data?.length < 0) {
      dispatch(FetchProperty());
    }
  }, []);

  return (
    <>
      {/* Pop Box */}
      <div id="grayBox" style={{ display: searchPop ? "flex" : "none" }} className="garyBox" onClick={closePop}>
        <div className="searchPopBox">
          <img src={crossWhite} className='crossIcon' alt="" onClick={() => setSearchPop(false)} />
          <div className="spHeader">
            <img src={buildingWhiteIcon} alt="" />
            <p>Find Your Dream Home</p>
          </div>
          <div className="searchPopBoxInput">
            <p style={{ color: "#fff" }}>Search location:</p>
            <DropBox icon={locationIcon} label="location" setDropVal={setlocationDropVal} dropList={LocationList} />
          </div>
          <div className="searchPopBoxInput">
            <p style={{ color: "#fff" }}>Property type:</p>
            <DropBox icon={buildingIcon} label="Select property" setDropVal={setDropVal3} dropList={PropertyType} />
          </div>
          <div style={{ marginBottom: "50px" }} className="searchPopBoxInput">
            <p style={{ color: "#fff" }}>Property type:</p>
            <DropBox icon={propertyIcon} label="Property Size" setDropVal={setDropVal1} dropList={PropertySize} />
          </div>
          <WhiteBtn btnText="SEARCH" height="40px" onClick={() => setSearchPop(false)} />
        </div>

      </div>
      <NavBar navItem={navItem} setNavItem={setNavItem} Full={true} />
      <div className="homeContainer">
        <div className="homeTopSection">
          <UncontrolledExample />
          <p className='homeHeader'>Welcome to NBS Property</p>
          <p className='homeSubHeader'>India's best home advisory & property transaction platform</p>
          <div className="MobileHomeBtnBox">
            <BlackBtn width="100%" icon={searchIcon} btnText="Search properties..." onClick={() => setSearchPop(true)} />
          </div>

          <div className="HomeBtnBox">
            <DropBox icon={locationIcon} label="location" setDropVal={setlocationDropVal} dropList={LocationList} />
            <DropBox icon={buildingIcon} label="Property type" setDropVal={setDropVal3} dropList={PropertyType} />
            <DropBox icon={propertyIcon} label="Property Size" setDropVal={setDropVal1} dropList={PropertySize} />
            <DropBox icon={dollerIcon} label="Budget" setDropVal={setDropVal2} dropList={PropertyBudget} />
            <BlackBtn icon={searchIcon} btnText="SEARCH" height="40px" width={170} />
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
            <BlackBtn height="50px" width={200} btnText="Explore All" />
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
                <BlackBtn width={200} height="40px" btnText="Explore Services" />
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
                <BlackBtn width={200} btnText="Explore Services" height="40px" />
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
              data?.slice(0, 4).map((el, i) => (
                <PropertiesSmallCard {...el} key={i} onClick={() => {
                  localStorage.setItem("propertyId", el?._id)
                  navigate("/property-details")
                  GoTop()
                }} />
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
                  <div key={i} className="blogRowCard">
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
            <BlackBtn height="50px" width={200} btnText="View All Blogs" />
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}
