import React, { useEffect, useState } from 'react';
import "./style.css";

//images
import propertyCoverImg from "../../assets/Images/propertyCoverImg.png";
import sbiBannar from "../../assets/Images/sbiBannar.png"
import FilterIcon from "../../assets/Images/filterIcon.svg"
import dropIcon from "../../assets/Images/DropIcon.svg"
import CrossIcon from "../../assets/Images/crossIcon.png"
import userImg from "../../assets/Images/userImg.png";

import propertieImg1 from "../../assets/Images/propertieImg1.png";
import propertieImg2 from "../../assets/Images/propertieImg2.png";
import propertieImg3 from "../../assets/Images/propertieImg3.png";
import propertieImg4 from "../../assets/Images/propertieImg4.png";
import propertieImg5 from "../../assets/Images/propertieImg5.png";
import propertieImg6 from "../../assets/Images/propertieImg6.png";

import buildingImg1 from "../../assets/Images/buildingImg1.png";
import buildingImg2 from "../../assets/Images/buildingImg2.png";
import buildingImg3 from "../../assets/Images/buildingImg3.png";
import buildingImg4 from "../../assets/Images/buildingImg4.png";
import buildingImg5 from "../../assets/Images/buildingImg5.png";
import buildingImg6 from "../../assets/Images/buildingImg6.png";


//components
import { useNavigate } from "react-router-dom"
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, PropertiesSmallCard, PropertieBigCard, BlackBtn, BuildingCard, AgentCard } from "../../Components/Tools"

//data
// import { buildingData } from "../../assets/Data";


export default function Office({ navItem, setNavItem }) {
  const navigate = useNavigate()
  const [sortDrop, setSortDrop] = useState(false)
  const [sortDropVal, setSortDropVal] = useState("Sort by: Relevance")
  const sortDropList = ["Sort by: Relevance", "Sort by: Item1", "Sort by: item2"]
  const [propertyTypeDrop, setPropertyTypeDrop] = useState(false)
  const [propertyTypeDropVal, setPropertyTypeDropVal] = useState("Property type")
  const [propertySizeDrop, setPropertySizeDrop] = useState(false)
  const [propertySizeDropVal, setPropertySizeDropVal] = useState("Property Size")
  const [budgetDrop, setBudgetDrop] = useState(false);
  const [budgetDropVal, setBudgetValDrop] = useState("Budget");
  const [buyDrop, setBuyDrop] = useState(false);
  const [buyDropVal, setBuyDropVal] = useState("office");
  const buyDropList = ["office", "office"];
  const dropList = ["Item1", "Item2", "Item3"];
  const [chips, setChips] = useState([]);
  const [chipsInputVal, setChipsInputVal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

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

  const PropertiesData = [
    {
      img: propertieImg1,
      location: "Matunga East, Mumbai, Maharastra, 720156 ",
      BHK: "3",
      SQFT: "1250",
      PSF: "2,992",
      price: "7.25",
      agentImg: userImg,
      agentName: "David Warner",
    },
    {
      img: propertieImg2,
      location: "Matunga East, Mumbai, Maharastra, 720156 ",
      BHK: "3",
      PSF: "2,992",
      SQFT: "1250",
      price: "7.25",
      agentName: "David Warner",
      agentImg: userImg,
    },
    {
      img: propertieImg3,
      location: "Matunga East, Mumbai, Maharastra, 720156 ",
      BHK: "3",
      SQFT: "1250",
      PSF: "2,992",
      price: "7.25",
      agentName: "David Warner",
      agentImg: userImg,
    },
    {
      img: propertieImg4,
      location: "Matunga East, Mumbai, Maharastra, 720156 ",
      BHK: "3",
      SQFT: "1250",
      PSF: "2,992",
      price: "7.25",
      agentName: "David Warner",
      agentImg: userImg,
    },
    {
      img: propertieImg5,
      location: "Matunga East, Mumbai, Maharastra, 720156 ",
      BHK: "3",
      SQFT: "1250",
      PSF: "2,992",
      price: "7.25",
      agentName: "David Warner",
      agentImg: userImg,
    },
    {
      img: propertieImg6,
      location: "Matunga East, Mumbai, Maharastra, 720156 ",
      BHK: "3",
      SQFT: "1250",
      PSF: "2,992",
      price: "7.25",
      agentName: "David Warner",
      agentImg: userImg,
    },
  ];

  const buildingData = [
    {
      title: "2 BHK 791 Sq-ft Flat For Sale ",
      img: buildingImg1,
      location: "Location would be hereRuby Park",
      ForSale: "170",
      ForRent: "350",
    },
    {
      title: "2 BHK 791 Sq-ft Flat For Sale ",
      img: buildingImg2,
      location: "Location would be hereRuby Park",
      ForSale: "170",
      ForRent: "350",
    },
    {
      title: "2 BHK 791 Sq-ft Flat For Sale ",
      img: buildingImg3,
      location: "Location would be hereRuby Park",
      ForSale: "170",
      ForRent: "350",
    },
    {
      title: "2 BHK 791 Sq-ft Flat For Sale ",
      img: buildingImg4,
      location: "Location would be hereRuby Park",
      ForSale: "170",
      ForRent: "350",
    },
    {
      title: "2 BHK 791 Sq-ft Flat For Sale ",
      img: buildingImg5,
      location: "Location would be hereRuby Park",
      ForSale: "170",
      ForRent: "350",
    },
    {
      title: "2 BHK 791 Sq-ft Flat For Sale ",
      img: buildingImg6,
      location: "Location would be hereRuby Park",
      ForSale: "170",
      ForRent: "350",
    },
  ];



  const handelChipsAdd = () => {
    if (chipsInputVal) {
      setChips([...chips, chipsInputVal])
      setChipsInputVal("")
    }
  }
  const removeByIndex = (arr, index) => arr.filter((_, i) => i !== index);
  const deleteChip = (i) => {
    const newChipArray = removeByIndex(chips, i);
    setChips(newChipArray)
  }

  document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") handelChipsAdd()
  })


  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };



  // useEffect(() => {
  //   setBuildingVal(buildingData)
  // }, [buildingData, buildingVal])

  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage officePage">
        <div className="propertieFilterBox">

          <div className="locationInputBox">
            <div className="buyTogalBox" onClick={() => setBuyDrop(!buyDrop)}>
              <p>{buyDropVal}</p>
              <img src={dropIcon} style={{ rotate: buyDrop ? "180deg" : "0deg" }} />
              <div className={buyDrop ? "dropItemBox dropItemBoxActive" : "dropItemBox"}>
                {
                  buyDropList?.map((el, i) => (
                    <div className="dropItem" onClick={() => setBuyDropVal(el)} key={i}><p>{el}</p></div>
                  ))
                }
              </div>
            </div>

            <div className="vrLine"></div>
            {
              chips?.map((el, i) => <div className="paper" key={i}><p>{el}</p><div className="delChip" onClick={() => deleteChip(i)}><img src={CrossIcon} /></div></div>)
            }
            <div className="paperBox"></div>
            <input type="text" placeholder='Add More...' onChange={(e) => setChipsInputVal(e.target.value)} value={chipsInputVal} />
            <div className="delChip addChip" onClick={handelChipsAdd}><img src={CrossIcon} /></div>
          </div>

          <DropBox dropList={dropList} drop={propertyTypeDrop} setDrop={setPropertyTypeDrop} dropVal={propertyTypeDropVal} setDropVal={setPropertyTypeDropVal} />
          <DropBox dropList={dropList} drop={propertySizeDrop} setDrop={setPropertySizeDrop} dropVal={propertySizeDropVal} setDropVal={setPropertySizeDropVal} />
          <DropBox dropList={dropList} drop={budgetDrop} setDrop={setBudgetDrop} dropVal={budgetDropVal} setDropVal={setBudgetValDrop} />

          <div className="radioMainBox">
            <div className="radioBox">
              <label>
                <input
                  type="radio"
                  value="For Sale"
                  onChange={handleRadioChange}
                  checked={selectedOption === "For Sale"}
                />
                For Sale
              </label>
            </div>
            <div className="radioBox">
              <label>
                <input
                  type="radio"
                  value="For Rent"
                  onChange={handleRadioChange}
                  checked={selectedOption === "For Rent"}
                />
                For Rent
              </label>
            </div>
          </div>
          <div className="propFilterDrop">
            <img src={FilterIcon} />
            <p>More Filters</p>
            <div><span>5</span></div>
          </div>
        </div>

        <div className="propertMainSection">
          <div className="propertieLeftSection">
            <p className='pageNavText' >{"Home > office"}</p>

            <div className="propertieListHeaderBox">
              <p className="propLHText">Top Office Buildings</p>
              <DropBox dropList={sortDropList} drop={sortDrop} setDrop={setSortDrop} dropVal={sortDropVal} setDropVal={setSortDropVal} />
            </div>
            <div className="propertiesListBox">
              {buildingData?.length ? (
                buildingData.map((el, i) => (
                  <BuildingCard
                    key={el.id || i}
                    title={el.title}
                    img={el.img}
                    location={el.location}
                    ForRent={el.ForRent}
                    ForSale={el.ForSale}
                    onClick={() => navigate("/office-details")}
                  />
                ))
              ) : (
                <p>No buildings available.</p>
              )}
            </div>
            <img src={propertyCoverImg} className='propertyCoverImg' />
            <div className="propertiesListBox">
              {
                buildingData?.splice(0, 2).map((el, i) => (
                  <BuildingCard key={i} title={el.title} img={el.img} location={el.location} ForRent={el.ForRent} ForSale={el.ForSale} />
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

        {/* agents row section */}

        <div className="AbelPropt">
          <p className='SectionHeader'>Office Featured Agents</p>
          <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>

          <div className="propertieCardBox AgentsRowSection">
            {
              PropertiesData?.splice(0, 4).map((el, i) => (
                <AgentCard key={i} />
              ))
            }
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" btnText="Explore All" />
          </div>
        </div>



        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Latest Office Space for Sale</p>
          <div className="propertieCardBox">
            <PropertiesSmallCard el={proData1} />
            <PropertiesSmallCard el={proData2} />
            <PropertiesSmallCard el={proData3} />
            <PropertiesSmallCard el={proData4} />
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" btnText="Explore All" />
          </div>
        </div>


        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Latest Office Space for Rent</p>
          <div className="propertieCardBox">
            <PropertiesSmallCard el={proData1} />
            <PropertiesSmallCard el={proData2} />
            <PropertiesSmallCard el={proData3} />
            <PropertiesSmallCard el={proData4} />
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
