import React, { useEffect } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom"


//images
import BlogBanner from "../../assets/Images/BlogCoverPhoto.png"


//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { PropertiesSmallCard } from "../../Components/Tools";
import {BlackBtn,GoTop} from "../../Components/Tools"


//data
import { cultureData } from "../../assets/Data"


import { FetchProperty } from "../../Store/PropertySlice"
import { useDispatch, useSelector } from "react-redux";
export default function FandB({ navItem, setNavItem }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.properys);



  useEffect(() => {
    dispatch(FetchProperty());
    if (data?.length < 0) {
      dispatch(FetchProperty());
    }
  }, []);
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
      <Footer />
    </>
  )
}
