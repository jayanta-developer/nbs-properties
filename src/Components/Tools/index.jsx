import "./style.css"

//images
import dropIcon from "../../assets/Images/DropIcon.svg"


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