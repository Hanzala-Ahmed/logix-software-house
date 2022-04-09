import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyle = makeStyles((theme)=>({
   blackShadowText: {
    fontSize: "30px",
    textShadow: "0px 0px 5px #585757",
    fontWeight: "bolder",
    marginBottom: "30px",
},

 whiteText: {
    fontSize: "30px",
    fontWeight: "bolder",
    marginBottom: "30px",
    color: "white",
    [theme.breakpoints.down("md")]:{
      fontSize: "27px"
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "22px"
    },
},

 blackText: {
    fontSize: "30px",
    fontWeight: "bolder",
    marginBottom: "30px",
    color: "#141414",
    [theme.breakpoints.down("md")]:{
      fontSize: "26px"
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "22px"
    },
},
}))

const MyHeading = (props) => {
  const classes = useStyle();
  return (
    <>
      <p className={`${classes[props.className]}`}>{props.text}</p>
    </>
  )
}

export default MyHeading
