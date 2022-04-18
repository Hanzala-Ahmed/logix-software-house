import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  ratingMainDiv: {
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  ratingImgDiv: {
    // backgroundColor: "yellow",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "12px",
    "& p": {
      fontSize: "12px",
      fontWeight: "bold",
      margin: "0px 0px 2px 0px",
    },
    "& span": {
      fontSize: "12px",
    },
  },

  ratingBox: {
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFB33E",
    "& span": {
      fontSize: "10px",
      fontWeight: "bold",
    },
  },

  starIcon: {
    marginRight: "2px",
  },

  imgBox: {
    backgroundColor: "#484242",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "12px 0px 6px 0px",
    overflow: "hidden",
    "& img": {
      transform: "scale(1.4)",
      marginTop: "4px",
    },
  },
  ratingMsgBox: {
    //   backgroundColor: "blue",
    width: "100%",
    height: "fit-content",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      width: "90%",
      // backgroundColor: "purple",
      fontSize: "12px",
      lineHeight: "16px",
      margin: "auto auto 7px auto",
    },
  },
}));

const Rating = (props) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.ratingMainDiv}>
        <div className={classes.ratingImgDiv}>
          <div className={classes.imgBox}>
            <img src={props.image} alt="" width="100%" height="100%" />
          </div>
          <p>Hanzala.</p>
          <div className={classes.ratingBox}>
            <StarIcon className={classes.starIcon} fontSize="string" />
            <span>{props.rating}</span>
          </div>
        </div>
        <div className={classes.ratingMsgBox}>
          <span>{props.message}</span>
        </div>
      </div>
    </>
  );
};

export default Rating;
