import "./style.css"


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