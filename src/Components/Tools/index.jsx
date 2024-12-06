import "./style.css"


//images
import dropIcon from "../../assets/Images/DropIcon.svg"
import locationIcon from "../../assets/Images/locationIcon2.svg"
import PcardIcon1 from "../../assets/Images/pCardIcon1.svg"
import PcardIcon2 from "../../assets/Images/pCardIcon2.svg"
import goBtnIcon from "../../assets/Images/upArrowGoBtnIcon.svg"
import Avatar from "../../assets/Images/avatar.png"

import fullStar from "../../assets/Images/fullStar.svg"
import hulfStar from "../../assets/Images/hulfStar.svg"
import emptyStar from "../../assets/Images/emptyStar.svg"

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

export const GoTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

export const PropertiesSmallCard = ({ el }) => {
  return (
    <div className="propertieCard">
      <div className="propImgBox">
        <img src={el?.img} alt="" />
      </div>
      <div className="propInfoBox">
        <div className="propAriyaInfo">
          <p>{el?.BHK} BHK Flat</p>
          <p>{el?.SQFT} sqft</p>
        </div>
        <p className="propPrice">{el?.price} Cr <samp>Onwards</samp></p>
        <p className="propLocation">{el?.location}</p>
      </div>
    </div>
  )
}

export const PropertieBigCard = ({ img, bhk, sqft, location, price, psf, agentImg, agentName, onClick }) => {
  return (
    <div onClick={onClick} className="propertieBigCard">
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

export const BuildingCard = ({ img, title, location, ForSale, ForRent, onClick }) => {
  return (
    <div className="propertieBigCard BuildingCard" onClick={onClick}>
      <div className="propImgBox">
        <img src={img} alt="" />
      </div>
      <div className="proCInfoBox">
        <p className='proCBTitle'>{title}</p>
        <p className='propClocText'><img src={locationIcon} alt="" /> {location}</p>
        <div className="unitesBox">
          <div className="unitesInerBox">
            <p>Unites For Sale: <samp>{ForSale}</samp></p>
            <p>Unites For Rent: <samp>{ForRent}</samp></p>
          </div>
          <img src={goBtnIcon} className="goBtnIcon" alt="" />
        </div>
      </div>
    </div>
  )
}

export const AgentCard = () => {
  return (
    <div className="brandProfileBox">
      <div className="avatarBox">
        <img src={Avatar} />
      </div>
      <p className='brandTitle'>Brendon Kuay</p>
      <span>ERA REALTY NETWORK PTE LTD</span>
      <span>CEA: R017302B / L3002382K</span>
      <BlackBtn btnText="WhatsApp Web" height="40px" />
    </div>
  )
}



const displayRating = (rating, width) => {
  const stars = [];
  for (let i = 1; i <= 6; i++) {
    if (rating >= i) {
      stars.push(<img style={{ width: width }} key={i} src={fullStar} alt="Full Star" />);
    } else if (rating >= i - 0.5) {
      stars.push(<img style={{ width: width }} key={i} src={hulfStar} alt="Half Star" />);
    } else {
      stars.push(<img style={{ width: width }} key={i} src={emptyStar} alt="Empty Star" />);
    }
  }
  return stars;
};

export const RatingBox = ({ width, rating }) => {
  return <div className="star-rating">{displayRating(rating, width)}</div>;

}