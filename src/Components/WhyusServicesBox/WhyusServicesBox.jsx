import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    width: "520px",
    padding: "12px 0px",
    // backgroundColor: "red",
    margin: "0px 0px 60px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xxl")]: {
      width: "46%",
    },
    [theme.breakpoints.down("xl")]: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      flexWrap: "nowrap",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },

  mainBoxImg: {
    // backgroundColor: "aqua",
    width: "170px",
    height: "100px",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },

  mainBoxCnt: {
    // backgroundColor: "yellow",
    width: "67%",
    marginLeft: "26px",
    [theme.breakpoints.down("xl")]: {
      width: "100%",
      marginLeft: "0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "67%",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      marginLeft: "26px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    },
  },

  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
    },
  },

  text: {
    fontSize: "16px",
    color: "white",
    textAlign: "justify",
    marginTop: "16px",
    [theme.breakpoints.down("xl")]: {
      textAlign: "center",
      fontSize: "14px",
    },
    [theme.breakpoints.down("lg")]: {
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

const WhyusServicesBox = (props) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.mainBox}>
        <div className={classes.mainBoxImg}>
          <img src={props.img} alt="" />
        </div>
        <div className={classes.mainBoxCnt}>
          <p className={classes.heading}>{props.heading}</p>
          <p className={classes.text}>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default WhyusServicesBox;
