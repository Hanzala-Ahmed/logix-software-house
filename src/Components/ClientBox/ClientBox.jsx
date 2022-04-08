import React from 'react'
import clientBoxCss from "./ClientBox.module.css"

const ClientBox = (props) => {
  return (
    <>
      <div className={clientBoxCss.mainBox}>
          <img src={props.img} alt="" />
      </div>
    </>
  )
}

export default ClientBox
