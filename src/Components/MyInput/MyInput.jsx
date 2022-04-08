import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import myInputCss from "./MyInput.module.css";

const MyInput = (props) => {
  const useStyles = makeStyles(() => ({
    textField: {
      width: "100%",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <div className={myInputCss.mainBox}>
        <TextField
          id="standard-basic"
          label={props.value}
          variant="standard"
          className={classes.textField}
          margin="dense"
          rows={4}
        />
      </div>
    </>
  );
};

export default MyInput;
