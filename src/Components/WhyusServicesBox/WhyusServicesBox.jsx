import { makeStyles } from "@mui/styles";
import React from "react";
import servicesBoxCss from "./WhyusServicesBox.module.css";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    width: "48%",
    padding: "12px 0px",
    // backgroundColor: "red",
    margin: "0px 0px 60px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mainBoxImg: {
    // backgroundColor: aqua,
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
  },

  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
  },

  text: {
    fontSize: "16px",
    color: "white",
    textAlign: "justify",
    marginTop: "16px",
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
