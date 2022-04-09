import { makeStyles } from "@mui/styles";
import React from "react";
import MyButton from "../../Components/Button/MyButton";
import MyHeading from "../../Components/Heading/MyHeading";
import MessageInput from "../../Components/MyInput/MessageInput";
import MyInput from "../../Components/MyInput/MyInput";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    // backgroundColor: "red",
    width: "100%",
    padding: "50px 0px",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  workFormBox: {
    // backgroundColor: "blue",
    width: "91%",
    display: "flex",
    justifyContent: "space-between",
    // padding: "60px 0px",
    flexDirection: "column",
    alignItems: "center",
  },

  formBox: {
    // backgroundColor: "aqua",
    width: "86%",
    // padding: "50px 0px",
    marginTop: "40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      width: "100%",
    },
  },
}));

const WorkForm = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.workFormBox}>
          <MyHeading text="WANT TO WORK WITH US?" className="blackText" />
          <div className={classes.formBox}>
            <MyInput value="Name" />
            <MyInput value="Email*" />
            <MyInput value="Interested" />
            <MyInput value="Budget" />
            <MyInput value="Subject" />
            <MyInput value="Phone" />
            <MessageInput value="Message" />
          </div>
          <MyButton text="Send" />
        </div>
      </div>
    </>
  );
};

export default WorkForm;
