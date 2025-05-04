import React, { useEffect, useState } from 'react';
import "./style.css";

//images
import propertyCoverImg from "../../assets/Images/propertyCoverImg.png";
import sbiBannar from "../../assets/Images/sbiBannar.png"
import FilterIcon from "../../assets/Images/filterIcon.svg"
import dropIcon from "../../assets/Images/DropIcon.svg"
import CrossIcon from "../../assets/Images/crossIcon.png"


//components
import { useNavigate } from "react-router-dom"
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { DropBox, PropertiesSmallCard, BlackBtn, BuildingCard, AgentCard, GoTop } from "../../Components/Tools"

//data
import { FetchOffice } from "../../Store/OfficeSlice"
import { useDispatch, useSelector } from "react-redux";


export default function Office({ navItem, setNavItem }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.office);


  const [sortDropVal, setSortDropVal] = useState("Sort by: Relevance")
  const sortDropList = ["Sort by: Relevance", "Sort by: Item1", "Sort by: item2"]
  const [propertyTypeDropVal, setPropertyTypeDropVal] = useState("Property type")
  const [propertySizeDropVal, setPropertySizeDropVal] = useState("Property Size")
  const [budgetDropVal, setBudgetValDrop] = useState("Budget");
  const [buyDrop, setBuyDrop] = useState(false);
  const [buyDropVal, setBuyDropVal] = useState("office");
  const buyDropList = ["office", "office"];
  const dropList = ["Item1", "Item2", "Item3"];
  const [chips, setChips] = useState([]);
  const [chipsInputVal, setChipsInputVal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const PropertyType = ["Apartments", "villas", "Commercia", "Plot A", "Plot B"];
  const PropertySize = ["22,215 sq.ft", "30,928 sq.ft", "24,394 sq.ft", "19,166 sq.ft", "34,200 sq.ft"];
  const PropertyBudget = ["15,000", "24,000", "30,000"];





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



  useEffect(() => {
    dispatch(FetchOffice());
    if (data?.length < 0) {
      dispatch(FetchOffice());
    }
  }, []);

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

          <DropBox dropList={PropertyType} label="Property type" setDropVal={setPropertyTypeDropVal} />
          <DropBox dropList={PropertySize} label="Property Size" setDropVal={setPropertySizeDropVal} />
          <DropBox dropList={PropertyBudget} label="Budget" setDropVal={setBudgetValDrop} />

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
              <DropBox dropList={sortDropList} label="Sort by" setDropVal={setSortDropVal} />
            </div>
            <div className="propertiesListBox">

              {data?.length ? (
                data?.map((el, i) => (
                  <BuildingCard
                    key={el._id || i}
                    title={el?.title}
                    price={el?.price}
                    img={el?.images[0]}
                    location={el?.address}
                    onClick={() => {
                      localStorage.setItem("officeIndex", el?._id)
                      navigate("/office-details")
                      GoTop()
                    }}
                  />
                ))
              ) : (
                <p>No buildings available.</p>
              )}
            </div>
            <img src={propertyCoverImg} className='propertyCoverImg' />
            <div className="propertiesListBox">
              {/* {data?.length ? (
                data?.splice(0, 2).map((el, i) => (
                  <BuildingCard
                    key={el._id || i}
                    title={el?.title}
                    price={el?.price}
                    img={el?.images[0]}
                    location={el?.address}
                    onClick={() => {
                      localStorage.setItem("officeIndex", el?._id)
                      navigate("/office-details")
                      GoTop()
                    }}
                  />
                ))
              ) : (
                <p>No buildings available.</p>
              )} */}
            </div>
          </div>
          <div className="propertieRightSection">
            <img src={sbiBannar} className='sbiBannar' />
            <div className="rightPropertieBox">
              <p className="propertiesSideHeader">Rent Flats Near You</p>
              {data?.map((el, i) => (
                <PropertiesSmallCard {...el} key={i} onClick={() => {
                  localStorage.setItem("officeIndex", el?._id)
                  navigate("/office-details")
                  GoTop()
                }} />
              ))}
            </div>
          </div>
        </div>




        {/* Available Properties */}
        <div className="AbelPropt">
          <p className='SectionHeader'>Latest Office Space for Rent</p>
          <div className="propertieCardBox">
            {data?.map((el, i) => (
              <PropertiesSmallCard {...el} key={i * 2} onClick={() => {
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
