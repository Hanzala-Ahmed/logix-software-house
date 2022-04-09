import React from 'react'
import { GoDash } from "react-icons/go";
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme)=>({
   activepaginationButtonBox: {
    // backgroundColor: "blueviolet",
    padding: "2px 2px",
    margin: "0px 8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#141414",
    [theme.breakpoints.down("xl")]:{
      marginTop: "10px"
    },
    
  },
  
  paginationButtonBox: {
    // backgroundColor: "blueviolet";,
    padding: "2px 2px",
    margin: "0px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    color: "#787272",
    cursor: "pointer",
    transition: "transform 150ms ease-in-out",
    "&:hover":{
      transform: "scale(1.5)",
    },
    [theme.breakpoints.down("xl")]:{
      marginTop: "10px"
    },
},

 dashIcon: {
    marginTop: "2px",
    pointerEvents: "none",
}
}))

const PaginationButton = (props) => {
  const classes = useStyle();
  return (
    <>
      <div className={`${classes[props.className]}`} onClick={props.onBtnClick}>
          <GoDash className={classes.dashIcon}/>
          <p>{props.number}</p>
      </div>
    </>
  )
}

export default PaginationButton
