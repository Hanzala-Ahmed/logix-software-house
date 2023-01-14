import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactBox from "../../Assets/3dBoxes/3dBoxReact.png";
import PSBox from "../../Assets/3dBoxes/3dBoxPS.png";
import WordpressBox from "../../Assets/3dBoxes/3dBoxWordpress.png";
import MyButton from "../../Components/Button/MyButton";
import { makeStyles } from "@mui/styles";
import bgImage from "../../Assets/Backgrounds/sectionBackground.png";
import waveImg from "../../Assets/Backgrounds/SliderBtmWaveBox.png";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    background: `url(${bgImage})`,
    width: "100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  sliderCntBox: {
    // backgroundColor: "black",
    width: "91%",
    height: "84%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },

  textSlider: {
    // backgroundColor: "aquamarine",
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "50%",
    },
  },

  texSliderBox: {
    backgroundColor: "rgba(98, 182, 183, 0.4)",
    width: "80%",
    height: "90%",
    borderTopRighRadius: "33px",
    borderBottomLeftRadius: "33px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bolder",
    "& div": {
      width: "100%",
      height: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "42px",
      color: "white",
      [theme.breakpoints.down("xxl")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("xl")]: {
        fontSize: "34px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "26px",
      },
    },
    [theme.breakpoints.down("xxl")]: {
      width: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      borderRadius: "33px",
      marginTop: "20px",
    },
  },

  sliderCnt: {
    // backgroundColor: "blue",
    width: "70%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("xxl")]: {
      height: "80%",
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
    },
  },

  sliderCntDiv: {
    // backgroundColor: "black",
    width: "100%",
    height: "60%",
    color: "white",
    "& h1": {
      fontSize: "50px",
      textShadow: "1px 1px 6px #000000",
      marginTop: "10px",
      [theme.breakpoints.down("xxl")]: {
        fontSize: "31px",
      },
      [theme.breakpoints.down("xl")]: {
        fontSize: "26px",
      },
      [theme.breakpoints.down("lg")]: {
        textAlign: "center",
        fontSize: "34px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "28px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  sliderCntDivPara: {
    fontSize: "22px",
    marginTop: "20px",
    width: "80%",
    textAlign: "justify",
    [theme.breakpoints.down("xxl")]: {
      width: "100%",
      fontSize: "20px",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
      fontSize: "16px",
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },

  sliderCntDivBtn: {
    [theme.breakpoints.down("lg")]: {
      position: "absolute",
      left: "40px",
    },
  },

  reactBox: {
    position: "absolute",
    width: "130px",
    top: "60%",
    left: "40%",
    animation: `$shake`,
    animationDuration: "10s",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
    [theme.breakpoints.down("xxl")]: {
      width: "110px",
      top: "78%",
      left: "45%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "90px",
      top: "78%",
      left: "48%",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  psBox: {
    position: "absolute",
    width: "97px",
    top: "87%",
    left: "26%",
    animation: `$shake`,
    animationDuration: "10s",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
    [theme.breakpoints.down("xxl")]: {
      width: "76px",
      top: "103%",
      left: "28%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "64px",
      top: "100%",
      left: "30%",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  wordpressBox: {
    position: "absolute",
    width: "90px",
    top: "84%",
    left: "65%",
    animation: `$shake`,
    animationDuration: "10s",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
    [theme.breakpoints.down("xxl")]: {
      width: "76px",
      top: "106%",
      left: "65%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "64px",
      top: "102%",
      left: "68%",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  ReactBoxMain: {
    position: "absolute",
    width: "140px",
    top: "60%",
    left: "40%",
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  },

  "@keyframes shake": {
    "0%, 100%": {
      transform: "translateX(5px) translateY(0px)",
      transformOrigin: "60% 60%",
    },
    "15%": {
      transform: "translateX(10px) translateY(10px) rotate(-2deg)",
    },
    "30%": {
      transform: "translateX(8px) translateY(9px) rotate(2deg)",
    },
    "45%": {
      transform: "translateX(-15px) translateY(-15px) rotate(-3.6deg)",
    },
    "60%": {
      transform: "translateX(12px) translateX(9px) rotate(2.4deg)",
    },
    "75%": {
      transform: "translateX(14px) translateY(10px) rotate(-1.2deg)",
    },
  },

  psBoxMain: {
    position: "absolute",
    width: "97px",
    top: "87%",
    left: "26%",
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  },

  wordpressBoxMain: {
    position: "absolute",
    width: "90px",
    top: "84%",
    left: "65%",
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  },

  btmBox: {
    background: `url(${waveImg})`,
    width: "100%",
    height: "100px",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const servicesText = [
  "UI/UX DESIGN",
  "WEBSITE DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "ECOMMERCE DEVELOPMENT",
  "PRODUCT AUTOMATION",
  "CLOUD SOLUTION",
];

const Slider = () => {
  const classes = useStyle();
  const [index, setIndex] = useState(0);
  const [render, setRender] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
      setRender(true);
    }, 2500);
    return () => clearInterval(interval)
  }, []);
  if (index >= 6) {
    setIndex(0);
  } else if (render === true) {
    setRender(false);
  }

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.sliderCntBox}>
          <div className={classes.textSlider}>
            <div className={classes.texSliderBox}>
              {!render ? (
                <motion.div
                  key={index}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.60 }}
                  className={classes.motionBox}
                >
                  {servicesText[index]}
                </motion.div>
              ) : null}
            </div>
          </div>
          <div className={classes.sliderCnt}>
            <div className={classes.sliderCntDiv}>
              <h1>YOUR IDEAS, OUR PROCESS</h1>
              <p className={classes.sliderCntDivPara}>
                Our fast-paced software development methodologies and techniques
                are used to put your idea through an epic process, as we shape
                your thoughts into reality through the power of technology.
              </p>
              <MyButton text="Hire Us" className={classes.sliderCntDivBtn} />
            </div>
            <div className={classes.ReactBoxMain}>
              <img src={ReactBox} alt="" className={classes.reactBox} />
            </div>

            <div className={classes.psBoxMain}>
              <img src={PSBox} alt="" className={classes.psBox} />
            </div>

            <div className={classes.wordpressBoxMain}>
              <img src={WordpressBox} alt="" className={classes.wordpressBox} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.btmBox}></div>
    </>
  );
};

export default Slider;
