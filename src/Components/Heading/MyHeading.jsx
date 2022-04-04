import React from 'react'
import headingCss from "./MyHeading.module.css"

const MyHeading = (props) => {
  return (
    <>
      <p className={headingCss.text}>{props.text}</p>
    </>
  )
}

export default MyHeading
