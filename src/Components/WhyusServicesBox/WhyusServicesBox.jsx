import React from 'react'
import servicesBoxCss from "./WhyusServicesBox.module.css"

const WhyusServicesBox = (props) => {
  return (
    <>
      <div className={servicesBoxCss.mainBox}>
        <div className={servicesBoxCss.mainBoxImg}>
            <img src={props.img} alt="" />
        </div>
        <div className={servicesBoxCss.mainBoxCnt}>
            <p className={servicesBoxCss.heading}>{props.heading}</p>
            <p className={servicesBoxCss.text}>{props.text}</p>
        </div>
      </div>
    </>
  )
}

export default WhyusServicesBox
