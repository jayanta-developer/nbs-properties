import React from 'react';
import "./style.css"


//images
import BlogBanner from "../../assets/Images/BlogCoverPhoto.png"


//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BlackBtn, PropertiesSmallCard } from "../../Components/Tools";


//data
import { cultureData, PropertiesData } from "../../assets/Data"



export default function FandB({ navItem, setNavItem }) {
  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />

      <div className="FandBPage">
        <h3 className='pbHeader'>Food & beverages</h3>
        <p className='pbSubHeader'>Lorem ipsum dolor sit amet consectetur. Elementum pretium enim scelerisque in ut.</p>

        <div className="coultureCardBox">
          {
            cultureData?.map((el, i) => (
              <div key={i} className="cultureCard">
                <img src={el.icon} />
                <p className='cultTitle'>{el?.title}</p>
                <p className='cultSubTitle'>{el?.summery}</p>
              </div>
            ))
          }
        </div>

        <img src={BlogBanner} className='propertyCoverImg' />
        <div className="AbelPropt">
          <p className='SectionHeader'>Available Banquet Hall Near You</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
          <div className="propertieCardBox">
            {
              PropertiesData?.splice(0, 4).map((el, i) => (
                <PropertiesSmallCard el={el} key={i} />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
