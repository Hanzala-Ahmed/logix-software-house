import React, { useState } from "react";
import MyHeading from "../../Components/Heading/MyHeading";
import PaginationButton from "../../Components/PaginatioButton/PaginationButton";
import featuredWorksCss from "./FeaturedWorks.module.css";
import contentImg from "../../Assets/FeaturedWorks/contentImage1.png";

const featuredWorks = [
  {
    number: "1",
    img: contentImg,
    heading: "FOOD APP",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "2",
    img: contentImg,
    heading: "MOBILE APP",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "3",
    img: contentImg,
    heading: "WEB APP",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "4",
    img: contentImg,
    heading: "CLOUD SOLUTION",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "5",
    img: contentImg,
    heading: "PRODUCT AUTOMATION",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
];

const FeaturedWorks = () => {
  const [activePagination, setActivePagination] = useState("1");

  const onPaginationClick = (e) => {
    // debugger
    try {
      let text = e.target.innerText;
      setActivePagination(text);
      // console.log(e.target);
      const contentBoxTransition = e.target.parentNode.parentNode.children[1];
      console.log(contentBoxTransition);
      contentBoxTransition.style.transition = "left, right linear 0.25s" 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={featuredWorksCss.mainContainer}>
        <MyHeading text="FEATURED WORKS" />

        <div
          className={featuredWorksCss.contentBox}
          id={featuredWorksCss.contentBoxTransition}
        >
          {featuredWorks.map((val, ind) => (
            <>
              {val.number === activePagination ? (
                <>
                  <div className={featuredWorksCss.contentBoxImg}>
                    <img src={val.img} alt="" width="100%" />
                  </div>
                  <div className={featuredWorksCss.contentBoxCnt}>
                    <p className={featuredWorksCss.heading}>{val.heading}</p>
                    <p className={featuredWorksCss.text}>{val.text}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <div className={featuredWorksCss.paginationBox}>
          <PaginationButton
            number="1"
            className={
              activePagination === "1"
                ? "activepaginationButtonBox"
                : "paginationButtonBox"
            }
            onBtnClick={onPaginationClick}
          />
          <PaginationButton
            number="2"
            className={
              activePagination === "2"
                ? "activepaginationButtonBox"
                : "paginationButtonBox"
            }
            onBtnClick={onPaginationClick}
          />
          <PaginationButton
            number="3"
            className={
              activePagination === "3"
                ? "activepaginationButtonBox"
                : "paginationButtonBox"
            }
            onBtnClick={onPaginationClick}
          />
          <PaginationButton
            number="4"
            className={
              activePagination === "4"
                ? "activepaginationButtonBox"
                : "paginationButtonBox"
            }
            onBtnClick={onPaginationClick}
          />
          <PaginationButton
            number="5"
            className={
              activePagination === "5"
                ? "activepaginationButtonBox"
                : "paginationButtonBox"
            }
            onBtnClick={onPaginationClick}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedWorks;
