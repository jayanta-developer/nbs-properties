import React, { useEffect } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom"


//images
import BgImg from "../../assets/Images/aboutBg.png";
import aboutHomeImg from "../../assets/Images/aboutHomeImg.png"
import difBgImg from "../../assets/Images/difBgImg.png";
import trust1 from "../../assets/Images/trust1.svg"
import trust2 from "../../assets/Images/trust2.svg"
import trust3 from "../../assets/Images/trust3.svg"
import trust4 from "../../assets/Images/trust4.svg"
import roundArrow from "../../assets/Images/roundArrow.svg"


import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BlackBtn, PropertiesSmallCard } from "../../Components/Tools"


//data
import { nearYouPropertie } from "../../assets/Data"

import { FetchProperty } from "../../Store/PropertySlice"
import { useDispatch, useSelector } from "react-redux";
export default function About({ navItem, setNavItem }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.properys);


  const TrustCard = ({ header, subHeader, icon }) => {
    return (
      <div className="trustCard">
        <img src={icon} />
        <p className='trustHeader'>{header}</p>
        <samp>{subHeader}</samp>
      </div>
    )
  }




  useEffect(() => {
    dispatch(FetchProperty());
    if (data?.length < 0) {
      dispatch(FetchProperty());
    }
  }, []);
  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="aboutPage">
        <div className="bgPanal">
          <img src={BgImg} />
          <p>About Us</p>
        </div>

        <div className="aboutMainSection">
          <div className="anbs">
            <div className="nbsImgBox">
              <img src={aboutHomeImg} alt="" />
            </div>
            <div className="nbsTextBox">
              <p className="SectionHeader">About Us</p>
              <p className="sectionSubText">Welcome to HRH, your trusted partner in property excellence. With a legacy of delivering superior real estate solutions, we pride ourselves on offering unparalleled service, expert advice, and a comprehensive portfolio of properties that cater to diverse needs and preferences.</p>
              <p style={{ marginTop: "15px" }} className="sectionSubText">HRH is a global leader in construction and real estate development. For over two decades, we have been at the forefront of creating iconic structures and developing communities that blend seamlessly with their surroundings. Our dedication to sustainability, innovation, and excellence has earned us a reputation as a trusted name in the industry.</p>
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
                  <BlackBtn width={"fit-content"} btnText="Explore Services" height="40px" />
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

          <div className="centerBtnBox">
            <BlackBtn width="200px" btnText="Explore All" height="50px" onClick={() => {
              navigate("/properties")
              GoTop()
            }} />
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
