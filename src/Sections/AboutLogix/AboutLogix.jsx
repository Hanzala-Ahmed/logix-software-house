import React from "react";
import MyHeading from "../../Components/Heading/MyHeading";
import aboutUsImg from "../../Assets/AboutUs/AboutUs.png";
import ClientBox from "../../Components/ClientBox/ClientBox";
import upworkImg from "../../Assets/AboutUs/upwork.png";
import clutchImg from "../../Assets/AboutUs/clutch.png";
import googleImg from "../../Assets/AboutUs/google.png";
import githubImg from "../../Assets/AboutUs/github.png";
import behanceImg from "../../Assets/AboutUs/behance.png";
import bgImg from "../../Assets/Backgrounds/sectionBackground.png"
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme)=>({
  mainContainer: {
    width: "100%",
    background: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "50px 0px",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
},

aboutLogixBox: {
    // backgroundColor: "aqua", 
    width: "91%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
},

aboutUs: {
    // backgroundColor: "yellow",
    width: "100%",
    padding: "0px 0px 120px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("lg")]:{
      padding: "0px 0px 80px 0px"
    },
    [theme.breakpoints.down("md")]:{
      padding: "0px 0px 60px 0px"
    },
    "& span": {
    width: "70%",
    color: "white",
    textAlign: "center",
    fontSize: "20px",
    [theme.breakpoints.down("md")]:{
      fontSize: "16px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "14px",
      width: "100%",
    },
    }
},

ourClient: {
    // backgroundColor: "lightblue", 
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
},

clientBox: {
    // backgroundColor: "black",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
},

aboutUsWatermark: {
    position: "absolute",
    width: "80%",
    pointerEvents: "none",
},
}))

const AboutLogix = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.aboutLogixBox}>
          <div className={classes.aboutUs}>
            <MyHeading text="ABOUT LOGIX SOFTWARE HOUSE" className="whiteText" />
            <span>
              We aim to be the most efficient provider of business process
              outsourcing services by setting the industry standards for cost
              and quality of services. Our long term success will be driven by
              our relentless focus on recruiting and developing the most
              talented pool of human capital in our industry.
            </span>
          </div>
          <div className={classes.ourClient}>
            <MyHeading text="WHAT OUR CLIENTS SAY" className="whiteText" />
            <div className={classes.clientBox}>
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
          className={classes.aboutUsWatermark}
        />
      </div>
    </>
  );
};

export default AboutLogix;
