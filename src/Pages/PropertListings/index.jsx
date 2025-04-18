import React, { useState, useEffect } from 'react';
import "./style.css";
import Select from 'react-select';

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

//components
import { useNavigate } from "react-router-dom"
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, PropertiesSmallCard, PropertieBigCard, BlackBtn, GoTop } from "../../Components/Tools";

//data
import { FetchProperty } from "../../Store/PropertySlice"
import { useDispatch, useSelector } from "react-redux";

export default function PropertListings({ navItem, setNavItem }) {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.properys);


  const navigate = useNavigate()
  const [sortDrop, setSortDrop] = useState(false)
  const [sortDropVal, setSortDropVal] = useState("Sort by: Relevance")
  const sortDropList = ["Sort by: Relevance", "Sort by: Item1", "Sort by: item2"]
  const [propertyTypeDropVal, setPropertyTypeDropVal] = useState("Property type")
  const [propertySizeDropVal, setPropertySizeDropVal] = useState("Property Size")
  const [budgetDropVal, setBudgetValDrop] = useState("Budget");
  const [psfDropVal, setPsfDropDrop] = useState("PSF");
  const [buyDrop, setBuyDrop] = useState(false);
  const [buyDropVal, setBuyDropVal] = useState("Buy");
  const buyDropList = ["Buy", "Rent"];
  const dropList = ["Item1", "Item2", "Item3"];
  const [chips, setChips] = useState([]);
  const [chipsInputVal, setChipsInputVal] = useState("");


  const PropertyType = ["Apartments", "villas", "Commercia", "Plot A", "Plot B"];
  const PropertySize = ["22,215 sq.ft", "30,928 sq.ft", "24,394 sq.ft", "19,166 sq.ft", "34,200 sq.ft"];
  const PropertyBudget = ["15,000", "24,000", "30,000"];

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

  const propertiesData = [
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

  useEffect(() => {
    dispatch(FetchProperty());
    if (data?.length < 0) {
      dispatch(FetchProperty());
    }
  }, []);
  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="PropertListPage">
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

          <DropBox dropList={PropertyType} label="Property type" setDropVal={setPropertyTypeDropVal} />
          <DropBox dropList={PropertySize} label="Property Size" setDropVal={setPropertySizeDropVal} />
          <DropBox dropList={PropertyBudget} label="Budget" setDropVal={setBudgetValDrop} />
          <DropBox dropList={dropList} label="PSF" setDropVal={setPsfDropDrop} />

          <div className="propFilterDrop">
            <img src={FilterIcon} />
            <p>More Filters</p>
            <div><span>5</span></div>
          </div>
        </div>

        <div className="propertMainSection">
          <div className="propertieLeftSection">
            <p className='pageNavText' >{"Home > Buy"}</p>

            <div className="propertieListHeaderBox">
              <p className="propLHText">379 Results | Properties for Sale in Kolkata</p>
              <DropBox dropList={sortDropList} label="Sort by" setDropVal={setSortDropVal} />
            </div>
            <div className="propertiesListBox">
              {data.length &&
                data?.map((el, i) => (
                  <PropertieBigCard
                    key={i}
                    img={el?.images[0]}
                    price={el.price}
                    title={el.title}
                    location={el.address}
                    sqft={el.area}
                    psf={el.foolrSize}
                    agentImg={userImg}
                    agentName="Amit"
                    onClick={() => {
                      localStorage.setItem("propertyId", el._id)
                      navigate("/property-details")
                      GoTop()
                    }}
                  />
                ))
              }
            </div>
            <img src={propertyCoverImg} className='propertyCoverImg' />
            <div className="propertiesListBox">
              {data.length &&
                data?.map((el, i) => (
                  <PropertieBigCard
                    key={i}
                    img={el?.images[0]}
                    price={el.price}
                    title={el.title}
                    location={el.address}
                    sqft={el.area}
                    psf={el.foolrSize}
                    agentImg={userImg}
                    agentName="Amit"
                    onClick={() => {
                      localStorage.setItem("propertyId", el._id)
                      navigate("/property-details")
                      GoTop()
                    }}
                  />
                ))
              }
            </div>
          </div>
          <div className="propertieRightSection">
            <img src={sbiBannar} className='sbiBannar' />
            <div className="rightPropertieBox">
              <p className="propertiesSideHeader">Rent Flats Near You</p>
              {
                propertiesData?.splice(0, 2).map((el, i) => (
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
            <div className="propertieCardBox">
              <PropertiesSmallCard el={proData1} />
              <PropertiesSmallCard el={proData2} />
              <PropertiesSmallCard el={proData3} />
              <PropertiesSmallCard el={proData4} />
            </div>
          </div>
          <div className="centerBtnBox">
            <BlackBtn height="50px" width="200px" btnText="Explore All" />
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}
