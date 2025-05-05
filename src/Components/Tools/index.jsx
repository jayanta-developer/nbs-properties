import "./style.css"


//images
import dropIcon from "../../assets/Images/DropIcon.svg"
import locationIcon from "../../assets/Images/locationIcon2.svg"
import PcardIcon1 from "../../assets/Images/pCardIcon1.svg"
import PcardIcon2 from "../../assets/Images/pCardIcon2.svg"
import goBtnIcon from "../../assets/Images/upArrowGoBtnIcon.svg"
import Avatar from "../../assets/Images/avatar.png"
import AgentIcon from "../../assets/Images/agentIcon.gif"

import fullStar from "../../assets/Images/FullStar.svg"
import hulfStar from "../../assets/Images/HulfStar.svg"
import emptyStar from "../../assets/Images/EmptyStar.svg"

import BlogImg from "../../assets/Images/blogImg1.png"
import clockIcon from "../../assets/Images/clockIcon.svg"
import humanIcon from "../../assets/Images/AvatarBlackIcon.svg"


const handleCall = () => {
  window.location.href = `tel:${process.env.REACT_APP_PHONE_NUMBER}`;
}
export const openWhatsapp = ({ number }) => {
  const url = `https://wa.me/${number || process.env.REACT_APP_PHONE_NUMBER}`;
  window.open(url, '_blank');
}


//Buttons
export const BlackBtn = ({ height, icon, btnText, width, onClick }) => {
  return (
    <div style={{ height: height, width: width || "100%" }} className="BlackBtn" onClick={onClick}>
      {icon ? <img src={icon} /> : null}
      <p>{btnText}</p>
    </div>
  )
}

export const WhiteBtn = ({ height, icon, btnText, width, onClick }) => {
  return (
    <div style={{ height: height, width: width || "100%" }} onClick={onClick} className="BlackBtn WhiteBtn">
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
export const DropBox = ({ icon, setDropVal, dropList, label }) => {
  return (
    <div className="dropOuterBox">
      <img src={icon} className="dropIcon" />
      <select defaultValue={label} style={{ paddingLeft: icon ? "30px" : "8px" }} className="dropBox" onClick={() => setDrop(!drop)}>
        <option disabled>{label}</option>
        {
          dropList?.map((el, i) => (
            <option className="dropItem" onClick={() => setDropVal(el)} key={i} value={el}>
              <p>{el}</p>
            </option>
          ))
        }
      </select>
    </div>
  )
}

export const GoTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

export const PropertiesSmallCard = ({ images, RERACarpetArea, price, ReadyToPosses, address, onClick
}) => {

  return (
    <div className="propertieCard" onClick={onClick}>
      <div className="propImgBox">
        <img src={images[0]} alt="" />
      </div>
      <div className="propInfoBox">
        <div className="propAriyaInfo">
          <p>Ready at {ReadyToPosses}</p>
          <p>{RERACarpetArea} sqft</p>
        </div>
        <p className="propPrice">{price} Cr <samp>Onwards</samp></p>
        <p className="propLocation">{address.slice(0, 50)
        }...</p>
      </div>
    </div>
  )
}

export const PropertieBigCard = ({ img, title, bhk, sqft, location, price, psf, agentName, onClick }) => {
  return (
    <div onClick={onClick} className="propertieBigCard">
      <div className="propImgBox">
        <img src={img} alt="" />
      </div>
      <div className="proCInfoBox">
        <p className='proCBTitle'>{title}</p>
        <p className='propClocText'><img src={locationIcon} alt="" /> {location}</p>
        <div className="probCYlBox">
          <p className="propPrice">₹ {price}</p>
          <p className='propSqText'> <img src={PcardIcon1} /> {sqft} sqft</p>
          <p className='propSqText'> <img src={PcardIcon2} /> {psf} psf</p>
        </div>
        <div className="pcAgentBox">
          <div className="userPrf">
            <img src={AgentIcon} alt="" />
            <p>{agentName}</p>
          </div>
          <OutLineBtn btnText="Contact Agent" height="37px" />

        </div>
      </div>
    </div>
  )
}

export const BuildingCard = ({ img, title, location, price, sector, onClick }) => {
  return (
    <div className="propertieBigCard BuildingCard" onClick={onClick}>
      <div className="propImgBox">
        <img src={img} alt="" />
      </div>
      <div className="proCInfoBox">
        <p className='proCBTitle'>{title}</p>
        <h5>Price: {price}</h5>
        <p className='propClocText'><img src={locationIcon} alt="" /> {location}</p>
        <div className="unitesBox">
          <div className="unitesInerBox">
            {/* <p>Building Area: <samp>{buildingArea}</samp></p> */}
            {/* <p>Area: <samp>{sector}</samp></p> */}
          </div>
          <img src={goBtnIcon} className="goBtnIcon" alt="" />
        </div>
      </div>
    </div>
  )
}

export const AgentCard = ({ name, role, number }) => {
  return (
    <div className="brandProfileBox">
      <div className="agentPic">
        <img src={AgentIcon} />
      </div>
      <p className='brandTitle'>{name}</p>
      <span>{role}</span>
      <span>CEA: R017302B / L3002382K</span>
      <BlackBtn btnText="WhatsApp Web" height="40px" width="85%" onClick={() => openWhatsapp({ number })} />
    </div>
  )
}



const displayRating = (rating, width) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
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


export const BlogCard = ({ onClick, blogText, title, date, images }) => {
  return (
    <div className="blogCard" onClick={onClick}>
      <div className="blogImgBox">
        <img src={images[images.length - 1]} />
      </div>
      <div className="blogTextBox">
        <div className="bcMBox">
          <p>
            <img src={humanIcon} />
            Saimon Jhonson
          </p>
          <p>
            <img src={clockIcon} />
            {date}
          </p>
        </div>
        <p className='blogCTitle'>{title}</p>
        <p className='blogCSubTitle'>{blogText[0].summarys[0].summary.slice(0, 150)}...</p>
      </div>
    </div>
  )
}


export const Reloader = (del) => {
  setTimeout(() => {
    window.location.reload();
  }, del);
};
