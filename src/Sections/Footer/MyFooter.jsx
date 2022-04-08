import React, { useState } from "react";
import footerCss from "./MyFooter.module.css";
import logo from "../../Assets/JawanTechLogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BackTopBtn from "../../Components/BackTopBtn/BackTopBtn";

const MyFooter = () => {

  return (
    <>
      <div className={footerCss.mainContainer}>
        <div className={footerCss.myFooterBox}>
          <div className={footerCss.logoBox}>
            <img src={logo} alt="" />
          </div>
          <div className={footerCss.navBox}>
            <span className={footerCss.navLink}>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our works</li>
                <li>Contact us</li>
              </ul>
            </span>
            <span className={footerCss.servicesLink}>
              <p className={footerCss.footerHeading}>Services</p>
              <ul>
                <li>Website Development</li>
                <li>Corporate website</li>
                <li>Startup websites</li>
                <li>Landings and promo sites</li>
                <li>E-commerce</li>
                <li>Web applications development</li>
              </ul>
            </span>
          </div>
          <div className={footerCss.socialBox}>
            <p className={footerCss.footerHeading}>Follow us</p>
            <p className={footerCss.socialIconBox}>
              <FaFacebookF className={footerCss.socialIcons}/>
              <FaTwitter className={footerCss.socialIcons}/>
              <FaInstagram className={footerCss.socialIcons}/>
              <FaLinkedinIn className={footerCss.socialIcons}/>
            </p>
          </div>
        </div>
        <BackTopBtn />
      </div>
    </>
  );
};

export default MyFooter;
