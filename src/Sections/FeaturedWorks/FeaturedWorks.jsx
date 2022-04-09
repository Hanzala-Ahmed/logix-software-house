import React, { useState } from "react";
import MyHeading from "../../Components/Heading/MyHeading";
import PaginationButton from "../../Components/PaginatioButton/PaginationButton";
import contentImg1 from "../../Assets/FeaturedWorks/contentImage1.png";
import contentImg2 from "../../Assets/FeaturedWorks/contentImage2.png";
import contentImg3 from "../../Assets/FeaturedWorks/contentImage3.png";
import contentImg4 from "../../Assets/FeaturedWorks/contentImage4.png";
import contentImg5 from "../../Assets/FeaturedWorks/contentImage5.png";
import { makeStyles } from "@mui/styles";

const featuredWorks = [
  {
    number: "1",
    img: contentImg1,
    heading: "FOOD APP",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "2",
    img: contentImg2,
    heading: "MOBILE APP",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "3",
    img: contentImg3,
    heading: "WEB APP",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "4",
    img: contentImg4,
    heading: "CLOUD SOLUTION",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
  {
    number: "5",
    img: contentImg5,
    heading: "PRODUCT AUTOMATION",
    text: "ARCO Group is a customer focussed commercial construction firm set a task to update their website. F5 Studio redesigned the website is by approaching it with customers in mind. Our specialists started with an analysis to create a website redesign strategy. We changed an information architecture of a website. Our designers created a modern design with improved UX. F5 Studio web developers correctly built a WordPress site with customizations.",
  },
];

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    // backgroundColor: "aqua",
    width: "100%",
    padding: "40px 0px",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  mainContentBox: {
    // backgroundColor: "red",
    width: "91%",
    padding: "10px 0px",
    margin: "10px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    transitionDuration: "1s",
    [theme.breakpoints.down("xl")]: {
      flexDirection: "row",
      padding: "0px 0px",
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      padding: "10px 0px",
    },
  },

  contentBox: {
    // backgroundColor: "blue",
    width: "95%",
    padding: "10px 0px",
    margin: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transitionDuration: "1s",
    [theme.breakpoints.down("xl")]: {
      margin: "0px 0px",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "10px 0px",
      flexDirection: "column",
    },
  },

  contentBoxImg: {
    // backgroundColor: "white",
    width: "65%",
    padding: "20px",
    height: "450px",
    // backgroundColor: "black",
    [theme.breakpoints.down("xl")]: {
      height: "360px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "85%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "260px",
    },
  },

  contentBoxCnt: {
    width: "44%",
    padding: "20px 0px",
    // backgroundColor: "green",
    marginLeft: "14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      margin: "30px 0px",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "0px 0px",
      width: "100%",
      alignItems: "center",
    },
  },

  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#141414",
  },

  text: {
    fontSize: "16px",
    color: "#141414",
    textAlign: "left",
    marginTop: "16px",
    lineHeight: "30px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  paginationBox: {
    // backgroundColor: "yellow",
    padding: "5px 10px",
    display: "flex",
    [theme.breakpoints.down("xl")]: {
      alignSelf: "flex-start",
      flexDirection: "column",
    },
    [theme.breakpoints.down("lg")]: {
      alignSelf: "center",
      flexDirection: "row",
    },
  },
}));

const FeaturedWorks = () => {
  const classes = useStyle();
  const [activePagination, setActivePagination] = useState("1");

  const onPaginationClick = (e) => {
    // debugger
    try {
      let text = e.target.innerText;
      setActivePagination(text);
      // console.log(e.target);
      const contentBoxTransition = e.target.parentNode.parentNode.children[1];
      console.log(contentBoxTransition);
      contentBoxTransition.style.transition = "left, right linear 0.25s";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <MyHeading text="FEATURED WORKS" className="blackShadowText" />
        <div className={classes.mainContentBox}>
          <div className={classes.paginationBox}>
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
          <div className={classes.contentBox} id={classes.contentBoxTransition}>
            {featuredWorks.map((val, ind) => (
              <>
                {val.number === activePagination ? (
                  <>
                    <div className={classes.contentBoxImg}>
                      <img src={val.img} alt="" width="100%" height="100%" />
                    </div>
                    <div className={classes.contentBoxCnt}>
                      <p className={classes.heading}>{val.heading}</p>
                      <p className={classes.text}>{val.text}</p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorks;
