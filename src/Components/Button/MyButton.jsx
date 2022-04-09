import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  sliderCntBtn: {
    backgroundColor: "white",
    padding: "8px 18px",
    marginTop: "30px",
    color: "#006838",
    border: "1px solid #006838",
    fontWeight: "bold",
    fontSize: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    outline: "none",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
}));

const MyButton = (props) => {
  const classes = useStyle();
  return (
    <>
      <button className={classes.sliderCntBtn}>{props.text}</button>
    </>
  );
};

export default MyButton;
