import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  activeBtn: {
    width: "320px",
    padding: "18px 0px",
    background: "#008749",
    backgroundSize: "100% 200%",
    backgroundPosition: "left bottom",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    margin: "0px 0px 24px 0px",
    cursor: "pointer",
    marginLeft: "30px",
    transition: "all 0.400s linear",
    [theme.breakpoints.down("xl")]: {
      width: "94%",
      fontSize: "16px",
    },
    [theme.breakpoints.down("lg")]:{
      width: "94%",
      margin: "0px 0px 24px 0px",
      margin: "auto",
      transition: "none",
    },
  },

  unactiveBtn: {
    width: "320px",
    padding: "18px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1B2935",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    margin: "0px 0px 24px 0px",
    cursor: "pointer",
    transition: "all 1s ease",
    background: "linear-gradient(to left, white 50%, #008749 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
    transition: "all 0.500s ease",
    "&:hover" : {
    backgroundPosition: "left bottom",
    color: "white",
    },
    [theme.breakpoints.down("xl")]: {
      width: "94%",
      fontSize: "16px",
    },
    [theme.breakpoints.down("lg")]:{
      width: "94%",
      margin: "0px auto 24px auto",
    },
  },
}));

const ServicesBtn = (props) => {
  const classes = useStyle();

  return (
    <>
      <div onClick={props.onClick} className={`${classes[props.className]}`}>
        {props.text}
      </div>
    </>
  );
};

export default ServicesBtn;
