// import React, { useRef } from 'react'
import MyHeading from "../../Components/Heading/MyHeading";
import servicesCss from "./Services.module.css";
import ServicesBtn from "../../Components/ServicesButton/ServicesBtn";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import MyButton from "../../Components/Button/MyButton";
import ReactBox from "../../Assets/3dBoxes/3dBoxReact.png";
import PSBox from "../../Assets/3dBoxes/3dBoxPS.png";
import WordpressBox from "../../Assets/3dBoxes/3dBoxWordpress.png";

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
    list: ["Dedicated team", "Hire Back-End Developer", "Hire Front-End Developer"],
  },
  {
    name: "Ecomerce Development",
    heading: "Value Proposition Canvas - Google Ads - Facebook Ad - Social Media",
    list: ["Conversion marketing", "Content marketing", "PPC services", "Social media marketing services"],
  },
  {
    name: "Cloud Solution",
    heading: "Webmaster tools - Google Analytics - Ahrefs - Serpstat",
    list: ["Tech SEO", "On-page SEO", "Off-page SEO", "SEO copywriting"],
  },
  {
    name: "Product Automation",
    heading: "WordPress - Woocommerce PHP - AngularJS - Sketch - Figma - Axure RP",
    list: ["Fixed price website", "UX, UI design", "Brand Identity"],
  }
];

const Services = () => {
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
      <div className={servicesCss.mainBox}>
        <div className={servicesCss.servicesBox}>
          <div className={servicesCss.services}>
            <MyHeading text="SERVICES" />
            <div className={servicesCss.servicesBtnMainBox}>
              <ServicesBtn
                onClick={onBtnClick}
                className={activeBtn === "Web Development" ? "activeBtn" : "unactiveBtn"}
                text="Web Development"
              />
              <ServicesBtn
                onClick={onBtnClick}
                className={activeBtn === "Mobile App Development" ? "activeBtn" : "unactiveBtn"}
                text="Mobile App Development"
              />
              <ServicesBtn
                onClick={onBtnClick}
                className={activeBtn === "UI/UX Design" ? "activeBtn" : "unactiveBtn"}
                text="UI/UX Design"
              />
              <ServicesBtn
                onClick={onBtnClick}
                className={activeBtn === "Ecomerce Development" ? "activeBtn" : "unactiveBtn"}
                text="Ecomerce Development"
              />
              <ServicesBtn
                onClick={onBtnClick}
                className={activeBtn === "Cloud Solution" ? "activeBtn" : "unactiveBtn"}
                text="Cloud Solution"
              />
              <ServicesBtn
                onClick={onBtnClick}
                className={activeBtn === "Product Automation" ? "activeBtn" : "unactiveBtn"}
                text="Product Automation"
              />
            </div>
          </div>
          <div className={servicesCss.servicesCnt}>
            <div className={servicesCss.servicesCntBox}>
              {servicesList.map((val, ind) => (
                <>
                  {val.name === activeBtn ? (
                    <>
                      <p>{val.heading}</p>
                      <div className={servicesCss.contetntDiv}>
                        {servicesList[ind].list.map((value, index) => (
                          <p className={servicesCss.contetntDivTxt}>
                            <FaArrowRight className={servicesCss.arrowIcon} />{" "}
                            {value}
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}
              <MyButton text="READ MORE" />
            </div>
            
            <img src={ReactBox} alt="" className={servicesCss.reactBox}/>
            <img src={PSBox} alt="" className={servicesCss.psBox}/>
            <img src={WordpressBox} alt="" className={servicesCss.wordpressBox}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
