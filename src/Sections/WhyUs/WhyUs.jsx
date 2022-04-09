import React from "react";
import WhyusServicesBox from "../../Components/WhyusServicesBox/WhyusServicesBox";
import whyusImg1 from "../../Assets/WhyUs/whyusImg1.png";
import whyusImg from "../../Assets/WhyUs/whyUs.png";
import bgImg from "../../Assets/Backgrounds/sectionBackground.png"
import MyButton from "../../Components/Button/MyButton";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    mainContainer: {
    width: "100%",
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "50px 0px",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
},

  whyUsBox: {
    // backgroundColor: "black",
    width: "91%",
  // padding: "60px 0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
},

  whyusWatermark: {
    position: "absolute",
    width: "80%",
    pointerEvents: "none",
},
}))

const WhyUs = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.whyUsBox}>
          <WhyusServicesBox
            img={whyusImg1}
            heading="OPTIMIZED YOUR SERVICE"
            text="You will get a free personal manager who will help to 
            build a strategy, optimize the budget and deadline, 
            organize the development process and launch the 
            project."
          />
          <WhyusServicesBox
            img={whyusImg1}
            heading="OPTIMIZED YOUR SERVICE"
            text="You will get a free personal manager who will help to 
            build a strategy, optimize the budget and deadline, 
            organize the development process and launch the 
            project."
          />
          <WhyusServicesBox
            img={whyusImg1}
            heading="OPTIMIZED YOUR SERVICE"
            text="You will get a free personal manager who will help to 
            build a strategy, optimize the budget and deadline, 
            organize the development process and launch the 
            project."
          />
          <WhyusServicesBox
            img={whyusImg1}
            heading="OPTIMIZED YOUR SERVICE"
            text="You will get a free personal manager who will help to 
            build a strategy, optimize the budget and deadline, 
            organize the development process and launch the 
            project."
          />
          <WhyusServicesBox
            img={whyusImg1}
            heading="OPTIMIZED YOUR SERVICE"
            text="You will get a free personal manager who will help to 
            build a strategy, optimize the budget and deadline, 
            organize the development process and launch the 
            project."
          />
          <WhyusServicesBox
            img={whyusImg1}
            heading="OPTIMIZED YOUR SERVICE"
            text="You will get a free personal manager who will help to 
            build a strategy, optimize the budget and deadline, 
            organize the development process and launch the 
            project."
          />
        </div>
        <div className={classes.getInTouchBtn}>
        <MyButton text="GET IN TOUCH"/>
        </div>
        <img src={whyusImg} alt="" className={classes.whyusWatermark}/>
      </div>
    </>
  );
};

export default WhyUs;
