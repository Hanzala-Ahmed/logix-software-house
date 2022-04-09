import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const MessageInput = (props) => {
    const style = makeStyles(() => ({
        textField: {
          width: "100%",
        },
        mainBox: {
          marginBottom: "26px",
          width: "90%",
          color: "white",
      },
      }));
    
      const classes = style();
  return (
    <>
      <div className={classes.mainBox}>
        <TextField
          id="standard-multiline-static"
          label={props.value}
          multiline
          rows={4}
          variant="standard"
          className={classes.textField}
          margin="dense"
        />
      </div>
    </>
  )
}

export default MessageInput
