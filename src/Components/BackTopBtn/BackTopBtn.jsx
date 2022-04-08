import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: "#186F5A",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    position: "fixed",
    bottom: "60px",
    right: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
},
mainBoxHide: {
    display: "none",
  },
  icon: {
    // backgroundColor: "blue",
    color: "white",
  },
}));

const BackTopBtn = () => {
  const classes = useStyle();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goTop = ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className={isVisible ? classes.mainBox : classes.mainBoxHide} onClick={goTop}>
        <div classes={classes.IconBox} className={classes.icon}>
          <ArrowUpwardRoundedIcon />
        </div>
      </div>
    </>
  );
};

export default BackTopBtn;
