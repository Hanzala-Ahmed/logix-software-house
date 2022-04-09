import logo from "../../Assets/JawanTechLogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BackTopBtn from "../../Components/BackTopBtn/BackTopBtn";
import bgImg from "../../Assets/Backgrounds/sectionBackground.png"
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme)=>({
  mainContainer: {
    width: "100%",
    padding: "50px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
},

myFooterBox: {
    // backgroundColor: "aqua",
    width: "91%",
    // padding: 50px 0px, 
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "white",
},

logoBox: {
  // backgroundColor: "black";,
  width: "350px",
  padding: "50px 0px",
  borderTop: "1px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    width: "30%",
  },
},

navBox: {
  // backgroundColor: "black"; 
  width: "400px",
  padding: "50px 0px",
  borderTop: "1px solid white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& li": {
    listStyle: "none",
    cursor: "pointer",
    marginBottom: "8px",
    fontSize: "14px",
    transition: "transform 0.350s linear",
    "&:hover":{
    transform: "translateX(14px)",
    }
  }
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
    "&:hover":{
    transform: "translateX(14px)",
    }
  }
},

socialBox: {
  // backgroundColor: "black", 
  width: "350px",
  padding: "50px 0px",
  borderTop: "1px solid white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
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
  }
}

}))
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
              <FaFacebookF className={classes.socialIcons}/>
              <FaTwitter className={classes.socialIcons}/>
              <FaInstagram className={classes.socialIcons}/>
              <FaLinkedinIn className={classes.socialIcons}/>
            </p>
          </div>
        </div>
        <BackTopBtn />
      </div>
    </>
  );
};

export default MyFooter;
