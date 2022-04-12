// import React, { useRef } from 'react'
import MyHeading from "../../Components/Heading/MyHeading";
import ServicesBtn from "../../Components/ServicesButton/ServicesBtn";
import { FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import MyButton from "../../Components/Button/MyButton";
import ReactBox from "../../Assets/3dBoxes/3dBoxReact.png";
import PSBox from "../../Assets/3dBoxes/3dBoxPS.png";
import WordpressBox from "../../Assets/3dBoxes/3dBoxWordpress.png";
import { makeStyles } from "@mui/styles";
import ServicesCntBox from "../../Components/ServicesCntBox/ServicesCntBox";
import { motion, transform } from "framer-motion";

const servicesList = [
  {
    name: "Web Development",
    heading: "JavaScript - HTML 5 - CSS 3 - JQuery - Vue - React - PHP - MySQL",
    list: [
      "Website development",
      "Corporate website",
      "Startup websites",
      "Landings and promo sites",
      "E-commerce",
      "Web applications development",
      "Wordpress development",
    ],
  },
  {
    name: "Mobile App Development",
    heading:
      "Photoshop - Illustrator - Sketch - Creative Suite - Axure - Adobe XD - Figma",
    list: [
      "Web design",
      "Mobile app design",
      "UX, UI design",
      "Logo design",
      "Brand Identity",
      "Banner ad design",
    ],
  },
  {
    name: "UI/UX Design",
    heading:
      "PHP - Node.js - Bootstrap - AngularJS - WordPress - Figma - Axure RP - Slack - Skype",
    list: [
      "Dedicated team",
      "Hire Back-End Developer",
      "Hire Front-End Developer",
    ],
  },
  {
    name: "Ecommerce Development",
    heading:
      "Value Proposition Canvas - Google Ads - Facebook Ad - Social Media",
    list: [
      "Conversion marketing",
      "Content marketing",
      "PPC services",
      "Social media marketing services",
    ],
  },
  {
    name: "Cloud Solution",
    heading: "Webmaster tools - Google Analytics - Ahrefs - Serpstat",
    list: ["Tech SEO", "On-page SEO", "Off-page SEO", "SEO copywriting"],
  },
  {
    name: "Product Automation",
    heading:
      "WordPress - Woocommerce PHP - AngularJS - Sketch - Figma - Axure RP",
    list: ["Fixed price website", "UX, UI design", "Brand Identity"],
  },
];

const useStyle = makeStyles((theme) => ({
  mainBox: {
    // backgroundColor: "aqua",
    width: "100%",
    padding: "50px 0px",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  servicesBox: {
    // backgroundColor: "black",
    width: "91%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
    },
  },

  services: {
    // backgroundColor: "blue",
    width: "42%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  servicesBtnMainBox: {
    // backgroundColor: "red",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },

  servicesCnt: {
    // backgroundColor: "blueviolet",
    width: "66%",
    position: "relative",
    marginLeft: "100px",
    [theme.breakpoints.down("xl")]: {
      width: "45%",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  servicesCntBox: {
    // backgroundColor: "burlywood",
    marginTop: "68px",
  },

  contetntDiv: {
    // backgroundColor: "yellow",
    padding: "20px 0px",
    marginTop: "30px",
    color: "#1B2935",
  },

  contetntDivTxt: {
    width: "fit-content",
    marginTop: "12px",
    fontWeight: "bold",
    // backgroundColor: "red",
    display: "flex",
    color: "#1B2935",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.350s linear",
    "&:hover": {
      transform: "translateX(14px)",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },

  arrowIcon: {
    marginRight: "10px",
    fontSize: "12px",
  },

  btmBtn: {
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },

  list: {
    display: "flex",
    flexDirection: "column",
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

  reactBox: {
    // position: "absolute",
    width: "140px",
    animation: `$shake`,
    animationDuration: "10s",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
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

  psBox: {
    width: "97px",
    animation: `$shake`,
    animationDuration: "10s",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
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

  wordpressBox: {
    width: "90px",
    animation: `$shake`,
    animationDuration: "10s",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
  },
}));
const Services = () => {
  const classes = useStyle();
  const [activeBtn, setActiveBtn] = useState("Web Development");

  const onBtnClick = (e) => {
    try {
      let text = e.target.innerText;
      setActiveBtn(text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.mainBox}>
        <div className={classes.servicesBox}>
          <div className={classes.services}>
            <MyHeading text="SERVICES" className="blackShadowText" />
            <div className={classes.servicesBtnMainBox}>
              <ServicesBtn
                onClick={onBtnClick}
                className={
                  activeBtn === "Web Development" ? "activeBtn" : "unactiveBtn"
                }
                text="Web Development"
              />
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === "Web Development" ? (
                    <ServicesCntBox
                      className={
                        activeBtn === "Web Development"
                          ? "servicesCnt"
                          : "servicesCntBlock"
                      }
                      heading={val.heading}
                      list={servicesList[ind].list.map((value, index) => (
                        <p className={classes.contetntDivTxt} key={index}>
                          <FaArrowRight className={classes.arrowIcon} />
                          {value}
                        </p>
                      ))}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}

              <ServicesBtn
                onClick={onBtnClick}
                className={
                  activeBtn === "Mobile App Development"
                    ? "activeBtn"
                    : "unactiveBtn"
                }
                text="Mobile App Development"
              />
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === "Mobile App Development" ? (
                    <ServicesCntBox
                      className={
                        activeBtn === "Mobile App Development"
                          ? "servicesCnt"
                          : "servicesCntBlock"
                      }
                      heading={val.heading}
                      list={servicesList[ind].list.map((value, index) => (
                        <p className={classes.contetntDivTxt} key={index}>
                          <FaArrowRight className={classes.arrowIcon} />
                          {value}
                        </p>
                      ))}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}

              <ServicesBtn
                onClick={onBtnClick}
                className={
                  activeBtn === "UI/UX Design" ? "activeBtn" : "unactiveBtn"
                }
                text="UI/UX Design"
              />
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === "UI/UX Design" ? (
                    <ServicesCntBox
                      className={
                        activeBtn === "UI/UX Design"
                          ? "servicesCnt"
                          : "servicesCntBlock"
                      }
                      heading={val.heading}
                      list={servicesList[ind].list.map((value, index) => (
                        <p className={classes.contetntDivTxt} key={index}>
                          <FaArrowRight className={classes.arrowIcon} />
                          {value}
                        </p>
                      ))}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}

              <ServicesBtn
                onClick={onBtnClick}
                className={
                  activeBtn === "Ecommerce Development"
                    ? "activeBtn"
                    : "unactiveBtn"
                }
                text="Ecommerce Development"
              />
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === "Ecommerce Development" ? (
                    <ServicesCntBox
                      className={
                        activeBtn === "Ecommerce Development"
                          ? "servicesCnt"
                          : "servicesCntBlock"
                      }
                      heading={val.heading}
                      list={servicesList[ind].list.map((value, index) => (
                        <p className={classes.contetntDivTxt} key={index}>
                          <FaArrowRight className={classes.arrowIcon} />
                          {value}
                        </p>
                      ))}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
              <ServicesBtn
                onClick={onBtnClick}
                className={
                  activeBtn === "Cloud Solution" ? "activeBtn" : "unactiveBtn"
                }
                text="Cloud Solution"
              />
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === "Cloud Solution" ? (
                    <ServicesCntBox
                      className={
                        activeBtn === "Cloud Solution"
                          ? "servicesCnt"
                          : "servicesCntBlock"
                      }
                      heading={val.heading}
                      list={servicesList[ind].list.map((value, index) => (
                        <p className={classes.contetntDivTxt} key={index}>
                          <FaArrowRight className={classes.arrowIcon} />
                          {value}
                        </p>
                      ))}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}

              <ServicesBtn
                onClick={onBtnClick}
                className={
                  activeBtn === "Product Automation"
                    ? "activeBtn"
                    : "unactiveBtn"
                }
                text="Product Automation"
              />
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === "Product Automation" ? (
                    <ServicesCntBox
                      className={
                        activeBtn === "Product Automation"
                          ? "servicesCnt"
                          : "servicesCntBlock"
                      }
                      heading={val.heading}
                      list={servicesList[ind].list.map((value, index) => (
                        <p className={classes.contetntDivTxt} key={index}>
                          <FaArrowRight className={classes.arrowIcon} />
                          {value}
                        </p>
                      ))}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={classes.servicesCnt}>
            <div className={classes.servicesCntBox}>
              {servicesList.map((val, ind) => (
                <div key={ind}>
                  {val.name === activeBtn ? (
                    <>
                      <motion.div
                        key={ind}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        initial={{ opacity: 0, x: -40 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.65 }}
                        className={classes.contentBox}
                        id={classes.contentBoxTransition}
                      >
                        <p>{val.heading}</p>
                        <div className={classes.contetntDiv}>
                          {servicesList[ind].list.map((value, index) => (
                            <p className={classes.contetntDivTxt} key={index}>
                              <FaArrowRight className={classes.arrowIcon} />{" "}
                              {value}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
              <div className={classes.btmBtn}>
                <MyButton text="READ MORE" />
              </div>
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
    </>
  );
};

export default Services;
