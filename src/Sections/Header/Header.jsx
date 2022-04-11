import React, { useEffect, useState } from "react";
import { FaCaretDown, FaEnvelope, FaCaretUp } from "react-icons/fa";
import { List, ListItem, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PersistentDrawerRight from "../../Components/Drawer/Drawer.tsx";
import logoImg from "../../Assets/JawanTechLogo.png";
import headerBg from "../../Assets/Backgrounds/sectionBackground.png"

const options = [
  "Web Development",
  "Mobile App Development",
  "Eccomerce Development",
  "UI/UX Design",
  "Cloud Solution",
  "Product Automation",
];

const useStyles = makeStyles((theme) => ({
  box: {
    height: "80px",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "0%",
    // backgroundColor: "blue",
    zIndex: "100",
  },
  scrollBox: {
    height: "80px",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    position: "sticky",
    top: "0%",
    // backgroundColor: "#186F5A",
    backgroundImage: `url(${headerBg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "0.950",
    zIndex: "100"
  },
  menuItems: {
    height: 36,
    padding: "0 40px",
    cursor: "pointer",
  },
  logoBox: {
    // width: "30px",
    height: "70px",
    backgroundImage: `url(${logoImg})`,
    backgroundPposition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "0px 40px",
    // backgroundColor: "red",
    margin: "20px 0px"
  },
  Contentbox: {
    width: "91%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    marginTop: "10px",
  },
  services: {
    cursor: "pointer",
    // marginTop: "40px"
    padding: "0px"
  },
  dropdownIcon: {
    position: "relative",
    top: "4px",
    left: "4px",
  },
  NavlinkBox: {
    // backgroundColor: "blueviolet",
    width: "60%",
    height: "100%",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      [theme.breakpoints.down("lg")]: {
        // backgroundColor: "yellow",
        display: "none",
      },
    },
  },
  mailBox: {
    width: "80px",
    height: "90%",
    // backgroundColor: "#141414",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
  },
  envelopeIcon: {
    [theme.breakpoints.down("lg")]: {
      // backgroundColor: "yellow",
      display: "none",
    },
  },
  drawerBox: {
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "yellow",
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpand, setIsExpand] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
    setIsExpand((prev) => !prev);
  };

  const handleMenuItemClick = (event) => {
    // setSelectedIndex(index);
    setAnchorEl(null);
    setIsExpand((prev) => !prev);
  };

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 150;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {  
         setIsVisible(true);
    } else {
         setIsVisible(false);
    }  
  };
  

  return (
    <>
      <div container className={isVisible ? classes.scrollBox : classes.box}>
        <div className={classes.Contentbox}>
          <div className={classes.logoBox}></div>
          <div className={classes.NavlinkBox}>
            <li>Home</li>

            <List
              component="nav"
              aria-label="Device settings"
              onClick={handleClickListItem}
              >
              <ListItem
                // button
                className={classes.services}
                onClick={handleClickListItem}
                sx={{
                  paddding: "0px",
                  paddingLeft: "0px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  paddingRight: "0px",
                }}
              >
                <li onClick={handleClickListItem}>
                  Services
                  {!isExpand ? (
                    <FaCaretDown className={classes.dropdownIcon} />
                  ) : (
                    <FaCaretUp className={classes.dropdownIcon} />
                  )}
                </li>
              </ListItem>
            </List>

            <Menu
              // id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuItemClick}
              className={classes.menu}
            >
              {options.map((option, index) => (
                <MenuItem
                  className={classes.menuItems}
                  key={option}
                  onClick={(event) => handleMenuItemClick(event)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
            
            <li>Details</li>
            <li>Our Project</li>
            <li>Contact Us</li>
          </div>
          <div className={classes.mailBox}>
            <FaEnvelope className={classes.envelopeIcon} />
            <div className={classes.drawerBox}>
              <PersistentDrawerRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
