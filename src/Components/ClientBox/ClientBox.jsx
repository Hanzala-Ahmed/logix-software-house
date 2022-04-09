import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme)=>({
  mainBox: {
    width: "160px",
    height: "160px",
    borderRadius: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 25px 0px 25px",
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    "& img": {
    width: "60%",
    },
    [theme.breakpoints.down("xl")]:{
      width: "132px",
    height: "132px",
    },
    [theme.breakpoints.down("md")]:{
      width: "118px",
    height: "118px",
    },
    [theme.breakpoints.down("sm")]:{
      width: "101px",
    height: "101px",
    }
}
}))

const ClientBox = (props) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.mainBox}>
          <img src={props.img} alt="" />
      </div>
    </>
  )
}

export default ClientBox
