import React from "react";
import WhyusServicesBox from "../../Components/WhyusServicesBox/WhyusServicesBox";
import whyUsCss from "./WhyUs.module.css";
import whyusImg1 from "../../Assets/WhyUs/whyusImg1.png";
import whyusImg from "../../Assets/WhyUs/whyUs.png"
import MyButton from "../../Components/Button/MyButton";

const WhyUs = () => {
  return (
    <>
      <div className={whyUsCss.mainContainer}>
        <div className={whyUsCss.whyUsBox}>
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
        <div className={whyUsCss.getInTouchBtn}>
        <MyButton text="GET IN TOUCH"/>
        </div>
        <img src={whyusImg} alt="" className={whyUsCss.whyusWatermark}/>
      </div>
    </>
  );
};

export default WhyUs;
