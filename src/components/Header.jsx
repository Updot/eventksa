import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../images/Logo.png";
import Pin from "../images/PinWhite.png";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff0a",
    zIndex: 100,
  },
  logo: {
    margin: "10px auto",
  },
  pin: {
    position: "absolute",
    cursor: "pointer",

    [theme.breakpoints.up("xs")]: {
      width: 20,
      height: 20,
      top: 25,
      right: 30,
    },
    [theme.breakpoints.up("sm")]: {
      width: 30,
      height: 30,
      top: 20,
      right: 40,
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <img className={classes.logo} src={Logo} alt="Chaumet" />
      <img className={classes.pin} src={Pin} alt="location" />
    </Grid>
  );
}

export default Header;
