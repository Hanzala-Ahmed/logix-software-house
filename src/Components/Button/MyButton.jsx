import React from 'react'
import btnCss from './MyButton.module.css';

const MyButton = (props) => {
  return (
    <>
      <button className={btnCss.sliderCntBtn}>{props.text}</button>
    </>
  )
}

export default MyButton
