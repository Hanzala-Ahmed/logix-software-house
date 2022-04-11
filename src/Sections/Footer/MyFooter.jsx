import logo from "../../Assets/JawanTechLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import BackTopBtn from "../../Components/BackTopBtn/BackTopBtn";
import bgImg from "../../Assets/Backgrounds/sectionBackground.png";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    padding: "30px 0px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },

  myFooterBox: {
    // backgroundColor: "aqua",
    width: "91%",
    padding: "0px 0px 60px 0px",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    // alignItems: "center",
    [theme.breakpoints.down("xl")]: {
      flexWrap: "wrap",
    },
  },

  logoBox: {
    // backgroundColor: "black",
    width: "350px",
    padding: "30px 0px 20px 0px",
    // borderRight: "1px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "120px",
      [theme.breakpoints.down("xl")]:{
        width: "85px"
      }
    },
    [theme.breakpoints.down("xl")]: {
      width: "100%",
    },
  },

  navBox: {
    // backgroundColor: "blue",
    width: "400px",
    padding: "30px 0px 20px 0px",
    // borderTop: "1px solid white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      cursor: "pointer",
      marginBottom: "8px",
      fontSize: "14px",
      transition: "transform 0.350s linear",
      "&:hover": {
        transform: "translateX(14px)",
      },
    },
    [theme.breakpoints.down("xl")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "fit-content",
    },
  },

  servicesLink: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  footerHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    "& li": {
      listStyle: "none",
      cursor: "pointer",
      marginBottom: "8px",
      fontSize: "14px",
      transition: "transform 0.350s linear",
      "&:hover": {
        transform: "translateX(14px)",
      },
    },
  },

  socialBox: {
    // backgroundColor: "yellow",
    width: "300px",
    padding: "30px 0px 20px 0px",
    // borderTop: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    // justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      alignItems: "center",
      width: "fit-content",
      margin: "auto",
      justifyContent: "center",
    },
  },

  socialIconBox: {
    marginTop: "25px",
  },

  socialIcons: {
    marginLeft: "30px",
    cursor: "pointer",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },

  copyrightedBox: {
    // backgroundColor: "green",
    width: "91%",
    padding: "14px 0px 16px 0px",
    position: "absolute",
    bottom: "0px",
    display: "flex",
    justifyContent: "center",
    color: "#C8E6C9",
    fontSize: "13px",
    // borderTop: "1px solid #ffffff",
    pointerEvents: "none",
    textAlign: "center"
  },
}));
const MyFooter = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.myFooterBox}>
          <div className={classes.logoBox}>
            <img src={logo} alt="" />
          </div>
          <div className={classes.navBox}>
            <span className={classes.navLink}>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our works</li>
                <li>Contact us</li>
              </ul>
            </span>
            <span className={classes.servicesLink}>
              <p className={classes.footerHeading}>Services</p>
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
          <div className={classes.socialBox}>
            <p className={classes.footerHeading}>Follow us</p>
            <p className={classes.socialIconBox}>
              <FaFacebookF className={classes.socialIcons} />
              <FaTwitter className={classes.socialIcons} />
              <FaInstagram className={classes.socialIcons} />
              <FaLinkedinIn className={classes.socialIcons} />
            </p>
          </div>
        </div>
        <BackTopBtn />
      <div className={classes.copyrightedBox}>
        <p>Creativity with us and Inspiration Copyright &copy;2022 Jawan Teck PK. </p>
      </div>
      </div>
    </>
  );
};

export default MyFooter;
