import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import MyButton from "../Button/MyButton";

const useStyle = makeStyles((theme) => ({
  servicesCnt: {
    // backgroundColor: "blueviolet",
    width: "66%",
    position: "relative",
    marginLeft: "100px",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      marginLeft: "0px",
      marginBottom: "34px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("md")]:{
      fontSize: "14px"
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "13px"
    },
  },

  servicesCntBlock: {
    display: "none"
  },

  servicesCntBox: {
    // backgroundColor: "burlywood",
    marginTop: "68px",
  },

  contetntDiv: {
    // backgroundColor: "yellow",
    padding: "20px 0px",
    marginTop: "30px",
    color: "#1B2935",
  },

  contetntDivTxt: {
    width: "fit-content",
    marginTop: "12px",
    fontWeight: "bold",
    // backgroundColor: "red",
    display: "flex",
    color: "#1B2935",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.350s linear",
    "&:hover": {
      transform: "translateX(14px)",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "15px",
    },
  },

  arrowIcon: {
    marginRight: "10px",
    fontSize: "12px",
  },

  btmBtn: {
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const ServicesCntBox = (props) => {
  const classes = useStyle();

  return (
    <div className={`${classes[props.className]}`}>
      <div className={classes.servicesCntBox}>
        <p>{props.heading}</p>
        <div className={classes.contetntDiv}>
          {/* <p className={classes.contetntDivTxt}>
            <FaArrowRight className={classes.arrowIcon} /> */}
            {props.list}
          {/* </p> */}
        </div>
        <div className={classes.btmBtn}>
          <MyButton text="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCntBox;
