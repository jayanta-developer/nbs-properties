import "./style.css"

//images
import dropIcon from "../../assets/Images/DropIcon.svg"
import locationIcon from "../../assets/Images/locationIcon2.svg"
import PcardIcon1 from "../../assets/Images/pCardIcon1.svg"
import PcardIcon2 from "../../assets/Images/pCardIcon2.svg"

//Buttons
export const BlackBtn = ({ height, icon, btnText }) => {
  return (
    <div style={{ height: height }} className="BlackBtn">
      {icon ? <img src={icon} /> : null}
      <p>{btnText}</p>
    </div>
  )
}

export const WhiteBtn = ({ height, icon, btnText }) => {
  return (
    <div style={{ height: height }} className="BlackBtn WhiteBtn">
      {icon ? <img src={icon} /> : null}
      <p>{btnText}</p>
    </div>
  )
}

export const WhiteFillBtn = ({ height, icon, btnText }) => {
  return (
    <div style={{ height: height }} className="BlackBtn WhiteFillBtn">
      {icon ? <img src={icon} /> : null}
      <p>{btnText}</p>
    </div>
  )
}

export const OutLineBtn = ({ height, icon, btnText }) => {
  return (
    <div style={{ height: height }} className="BlackBtn OutLineBtn">
      {icon ? <img src={icon} /> : null}
      <p>{btnText}</p>
    </div>
  )
}

//DropBox
export const DropBox = ({ text, icon, drop, setDrop, dropVal, setDropVal, dropList }) => {
  return (
    <div className="dropBox" onClick={() => setDrop(!drop)}>
      <img src={icon} />
      <p>{dropVal}</p>
      <img src={dropIcon} className='dropIcon' />
      <div className={drop ? "dropItemBox dropItemBoxActive" : "dropItemBox"}>
        {
          dropList?.map((el, i) => (
            <div className="dropItem" onClick={() => setDropVal(el)} key={i}><p>{el}</p></div>
          ))
        }
      </div>
    </div>
  )
}

export const GoTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth", })
}

export const PropertiesSmallCard = ({ el }) => {
  return (
    <div className="propertieCard">
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
  )
}

export const PropertieBigCard = ({ img, bhk, sqft, location, price, psf, agentImg, agentName }) => {
  return (
    <div className="propertieBigCard">
      <div className="propImgBox">
        <img src={img} alt="" />
      </div>
      <div className="proCInfoBox">
        <p className='proCBTitle'>{bhk}BHK {sqft}  Sq-ft Flat For Sale </p>
        <p className='propClocText'><img src={locationIcon} alt="" /> {location}</p>
        <div className="probCYlBox">
          <p className="propPrice">₹ {price}</p>
          <p className='propSqText'> <img src={PcardIcon1} /> {sqft} sqft</p>
          <p className='propSqText'> <img src={PcardIcon2} /> {psf} psf</p>
        </div>
        <div className="pcAgentBox">
          <div className="userPrf">
            <img src={agentImg} alt="" />
            <p>{agentName}</p>
          </div>
          <OutLineBtn btnText="Contact Agent" height="37px" />

        </div>
      </div>
    </div>
  )
}