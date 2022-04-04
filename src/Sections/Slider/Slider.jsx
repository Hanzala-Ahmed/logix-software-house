import React, { useEffect, useState } from "react";
import SliderCss from "./Slider.module.css";
import { motion } from "framer-motion";
import ReactBox from "../../Assets/3dBoxes/3dBoxReact.png";
import PSBox from "../../Assets/3dBoxes/3dBoxPS.png";
import WordpressBox from "../../Assets/3dBoxes/3dBoxWordpress.png";
import MyButton from "../../Components/Button/MyButton";

const servicesText = [
  "UI/UX DESIGN",
  "WEBSITE DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "ECOMMERCE DEVELOPMENT",
  "PRODUCT AUTOMATION",
  "CLOUD SOLUTION",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [render, setRender] = useState(() => {
    <motion.div
      className={SliderCss.motionBox}
      animate={{
        y: "70%",
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.75,
        },
      }}
    >
      {servicesText[index]}
    </motion.div>;
  });
  useEffect(() => {
    setInterval(() => {
      return setIndex((index) => index + 1), setRender(true);
    }, 3000);
  }, []);
  if (index === 5) {
    setIndex(0);
  } else if (render === true) {
    setRender(false);
  }

  return (
    <>
      <div className={SliderCss.mainContainer}>
        <div className={SliderCss.sliderCntBox}>
          <div className={SliderCss.textSlider}>
            <div className={SliderCss.texSliderBox}>
              {!render ? (
                <motion.div
                  className={SliderCss.motionBox}
                  animate={{
                    y: "70%",
                    transition: {
                      ease: [0.455, 0.03, 0.515, 0.955],
                      duration: 0.75,
                    },
                  }}
                >
                  {servicesText[index]}
                </motion.div>
              ) : null}
            </div>
          </div>
          <div className={SliderCss.sliderCnt}>
            <div className={SliderCss.sliderCntDiv}>
              <h1>YOUR IDEAS, OUR PROCESS</h1>
              <p className={SliderCss.sliderCntDivPara}>
                Our fast-paced software development methodologies and techniques
                are used to put your idea through an epic process, as we shape
                your thoughts into reality through the power of technology.
              </p>
              <MyButton text="Hire Us"/>
            </div>
            <img
              src={ReactBox}
              alt=""
              className={SliderCss.reactBox}
            />
            <img
              src={PSBox}
              alt=""
              className={SliderCss.psBox}
            />
            <img
              src={WordpressBox}
              alt=""
              className={SliderCss.wordpressBox}
            />
          </div>
        </div>
      </div>
      <div className={SliderCss.btmBox}></div>
    </>
  );
};

export default Slider;
