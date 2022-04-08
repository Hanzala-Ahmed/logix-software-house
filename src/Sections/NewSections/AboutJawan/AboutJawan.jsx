import React from "react";
import aboutJawanCss from "./AboutJawan.module.css";
import MyHeading from "../../Components/Heading/MyHeading";
import aboutUsImg from "../../Assets/AboutUs/AboutUs.png";
import ClientBox from "../../Components/ClientBox/ClientBox";
import upworkImg from "../../Assets/AboutUs/upwork.png";
import clutchImg from "../../Assets/AboutUs/clutch.png";
import googleImg from "../../Assets/AboutUs/google.png";
import githubImg from "../../Assets/AboutUs/github.png";
import behanceImg from "../../Assets/AboutUs/behance.png";

const AboutJawan = () => {
  return (
    <>
      <div className={aboutJawanCss.mainContainer}>
        <div className={aboutJawanCss.aboutJawanBox}>
          <div className={aboutJawanCss.aboutUs}>
            <MyHeading text="ABOUT JAWAN PAKISTAN" className="whiteText" />
            <span>
              We aim to be the most efficient provider of business process
              outsourcing services by setting the industry standards for cost
              and quality of services. Our long term success will be driven by
              our relentless focus on recruiting and developing the most
              talented pool of human capital in our industry.
            </span>
          </div>
          <div className={aboutJawanCss.ourClient}>
            <MyHeading text="WHAT OUR CLIENTS SAY" className="whiteText" />
            <div className={aboutJawanCss.clientBox}>
              <ClientBox img={upworkImg} />
              <ClientBox img={clutchImg}/>
              <ClientBox img={googleImg}/>
              <ClientBox img={githubImg}/>
              <ClientBox img={behanceImg}/>
            </div>
          </div>
        </div>
        <img
          src={aboutUsImg}
          alt=""
          className={aboutJawanCss.aboutUsWatermark}
        />
      </div>
    </>
  );
};

export default AboutJawan;
