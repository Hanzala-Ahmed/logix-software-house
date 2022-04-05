import React from 'react'
import paginationButtonCss from './PaginationButton.module.css'
import { GoDash } from "react-icons/go";

const PaginationButton = (props) => {
  return (
    <>
      <div className={`${paginationButtonCss[props.className]}`} onClick={props.onBtnClick}>
          <GoDash className={paginationButtonCss.dashIcon}/>
          <p>{props.number}</p>
      </div>
    </>
  )
}

export default PaginationButton
