import React, { useState } from "react";
import HeaderCss from "./Header.module.css";
import { FaCaretDown, FaEnvelope, FaCaretUp } from "react-icons/fa";
import { List, ListItem, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

const options = [
  "Web Development",
  "Mobile App Development",
  "Eccomerce Development",
  "UI/UX Design",
  "Cloud Solution",
  "Product Automation",
];

const useStyles = makeStyles({
  menuItems: {
    height: 36,
    padding: "0 40px",
    cursor: "pointer",
  },
  menu:{
    marginTop: "10px",
  },
  services: {
    cursor: "pointer",
    // marginTop: "40px"
  }
});

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpand, setIsExpand] = useState(false);
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

  const handleClose = () => {
    setAnchorEl(null);
    setIsExpand((prev) => !prev);
  };

  return (
    <>
      <div className={HeaderCss.box}>
        <div className={HeaderCss.Contentbox}>
          <div className={HeaderCss.logoBox}></div>
          <div className={HeaderCss.NavlinkBox}>
            <li>Home</li>

            <List
              component="nav"
              aria-label="Device settings"
              onClick={handleClickListItem}
              >
              <ListItem
                // button
                className={classes.services}
                onMouseOver={handleClickListItem}
              >
                <li>
                  Services
                  {!isExpand ? (
                    <FaCaretDown className={HeaderCss.dropdownIcon} />
                  ) : (
                    <FaCaretUp className={HeaderCss.dropdownIcon} />
                  )}
                </li>
              </ListItem>
            </List>

            <Menu
              // id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
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
          <div className={HeaderCss.mailBox}>
            <FaEnvelope />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
