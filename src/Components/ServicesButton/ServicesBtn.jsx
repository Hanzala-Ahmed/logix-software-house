import React from 'react'
import servicesBtnCss from "./servicesBtn.module.css"

const ServicesBtn = (props) => {
  return (
    <>
      <div onClick={props.onClick} className={`${servicesBtnCss[props.className]}`}>{props.text}</div>
    </>
  )
}

export default ServicesBtn
