import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import messageInputCss from "./MessageInput.module.css"

const MessageInput = (props) => {
    const style = makeStyles(() => ({
        textField: {
          width: "100%",
        },
      }));
    
      const classes = style();
  return (
    <>
      <div className={messageInputCss.mainBox}>
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
