import React, { useState } from 'react';
import "./style.css";

//images
import propertyCoverImg from "../../assets/Images/propertyCoverImg.png";
import sbiBannar from "../../assets/Images/sbiBannar.png"
import FilterIcon from "../../assets/Images/filterIcon.svg"

//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, OutLineBtn, PropertiesSmallCard, PropertieBigCard } from "../../Components/Tools"

//data
import { PropertiesData } from "../../assets/Data";


export default function PropertListings({ navItem, setNavItem }) {
  const [sortDrop, setSortDrop] = useState(false)
  const [sortDropVal, setSortDropVal] = useState("Sort by: Relevance")
  const sortDropList = ["Sort by: Relevance", "Sort by: Item1", "Sort by: item2"]
  const [propertyTypeDrop, setPropertyTypeDrop] = useState(false)
  const [propertyTypeDropVal, setPropertyTypeDropVal] = useState("Property type")
  const [propertySizeDrop, setPropertySizeDrop] = useState(false)
  const [propertySizeDropVal, setPropertySizeDropVal] = useState("Property Size")
  const [budgetDrop, setBudgetDrop] = useState(false);
  const [budgetDropVal, setBudgetValDrop] = useState("Budget");
  const [psfDrop, setPsfDrop] = useState(false);
  const [psfDropVal, setPsfDropDrop] = useState("PSF");


  const dropList = ["Item1", "Item2", "Item3"]

  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage">
        <div className="propertieFilterBox">



          <DropBox dropList={dropList} drop={propertyTypeDrop} setDrop={setPropertyTypeDrop} dropVal={propertyTypeDropVal} setDropVal={setPropertyTypeDropVal} />
          <DropBox dropList={dropList} drop={propertySizeDrop} setDrop={setPropertySizeDrop} dropVal={propertySizeDropVal} setDropVal={setPropertySizeDropVal} />
          <DropBox dropList={dropList} drop={budgetDrop} setDrop={setBudgetDrop} dropVal={budgetDropVal} setDropVal={setBudgetValDrop} />
          <DropBox dropList={dropList} drop={psfDrop} setDrop={setPsfDrop} dropVal={psfDropVal} setDropVal={setPsfDropDrop} />

          <div className="propFilterDrop">
            <img src={FilterIcon} />
            <p>More Filters</p>
            <div><span>5</span></div>
          </div>
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
                  <PropertieBigCard key={i} price={el.price} location={el.location} sqft={el.SQFT} bhk={el.BHK} psf={el.PSF} img={el.img} agentImg={el.agentImg} agentName={el.agentName} />
                ))
              }
            </div>
            <img src={propertyCoverImg} className='propertyCoverImg' />
            <div className="propertiesListBox">
              {
                PropertiesData?.splice(0, 2).map((el, i) => (
                  <PropertieBigCard key={i} price={el.price} location={el.location} sqft={el.SQFT} bhk={el.BHK} psf={el.PSF} img={el.img} agentImg={el.agentImg} agentName={el.agentName} />
                ))
              }
            </div>
          </div>
          <div className="propertieRightSection">
            <img src={sbiBannar} className='sbiBannar' />
            <div className="rightPropertieBox">
              <p className="propertiesSideHeader">Rent Flats Near You</p>
              {
                PropertiesData?.splice(0, 2).map((el, i) => (
                  <PropertiesSmallCard el={el} key={i} />
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
