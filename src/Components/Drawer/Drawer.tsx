import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor: "red",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const handleDropdownOpen = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "red",
        justifyContent: "flex-end",
      }}
    >
      <MenuIcon onClick={handleDrawerOpen} sx={{
        cursor: "pointer"
      }}/>
      <Drawer
        sx={{
          width: "0px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "40%",
            backgroundColor: "rgba(24, 117, 98, 1)",
            color: "white",
            borderLeft: "0.3px solid rgba(555, 555, 555, 0.4)",
          },
          "& .MuiListItem-button": {
            display: "flex",
            flexWrap: "wrap",
          },
          "& .dropDowListBox": {
            backgroundColor: "rgba(555, 555, 555, 0.9)",
            display: "flex",
            flexWrap: "wrap",
            color: "rgba(24, 117, 98, 1)",
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
        // className
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} sx={{
            color: "white"
          }}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{
          backgroundColor: "rgba(555, 555, 555, 0.4)"
        }}/>
        <List>
          <ListItem
            button
            // key={text}
            onClick={handleDrawerClose}
          >
            <ListItemText primary={"Home"} />
          </ListItem>

          <ListItem
            button
            // key={text}
            onClick={handleDropdownOpen}
          >
            <ListItemText primary={"Services"} />
            <ListItemIcon
              sx={{
                width: "100%",
                position: "absolute",
                top: "10px",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "flex-end",
                // alignItems: "center",
                right: "40px",
                color: "white"
              }}
            >
              {dropdownOpen ? (
                <ArrowDropUpRoundedIcon />
              ) : (
                <ArrowDropDownRoundedIcon />
              )}
            </ListItemIcon>
            {dropdownOpen ? (
              <>
                <ListItem
                  button
                  // key={text}
                  className = "dropDowListBox"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={"Web Development"} />
                </ListItem>
                <ListItem
                  button
                  // key={text}
                  className = "dropDowListBox"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={"Mobile App Development"} />
                </ListItem>
                <ListItem
                  button
                  // key={text}
                  className = "dropDowListBox"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={"Eccomerce Development"} />
                </ListItem>
                <ListItem
                  button
                  // key={text}
                  className = "dropDowListBox"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={"UI/UX Design"} />
                </ListItem>
                <ListItem
                  button
                  // key={text}
                  className = "dropDowListBox"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={"Cloud Solution"} />
                </ListItem>
                <ListItem
                  button
                  // key={text}
                  className = "dropDowListBox"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={"Product Automation"} />
                </ListItem>
              </>
            ) : (
              <></>
            )}
          </ListItem>

          <ListItem
            button
            // key={text}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleDrawerClose}
          >
            <ListItemText primary={"Details"} />
          </ListItem>

          <ListItem
            button
            // key={text}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleDrawerClose}
          >
            <ListItemText primary={"Our project"} />
          </ListItem>

          <ListItem
            button
            // key={text}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleDrawerClose}
          >
            <ListItemText primary={"Contact us"} />
          </ListItem>
          <ListItem
            button
            // key={text}
            sx={{
              position: "relative",
              top: "20px",
            }}
            onClick={handleDrawerClose}
          >
            <EmailRoundedIcon />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
