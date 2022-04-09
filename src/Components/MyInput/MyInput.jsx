import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const MyInput = (props) => {
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: "100%",
    },
    mainBox: {
      marginBottom: "26px",
      width: "40%",
      color: "white",
      [theme.breakpoints.down("md")]:{
        width: "90%",
      }
  },
  }));

  const classes = useStyles();
  return (
    <>
      <div className={classes.mainBox}>
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
