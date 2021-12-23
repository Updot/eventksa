import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../images/Logo.png";
import Pin from "../images/PinWhite.svg";

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
    margin: "20px auto",
  },
  pin: {
    position: "absolute",
    cursor: "pointer",

    [theme.breakpoints.up("xs")]: {
      width: 20,
      height: 20,
      top: 30,
      right: 30,
    },
    [theme.breakpoints.up("sm")]: {
      width: 25,
      height: 25,
      top: 30,
      right: 50,
    },
  },
}));

function Header() {
  const classes = useStyles();

  const navigate = useNavigate();
  console.log(navigate);

  return (
    <Grid container className={classes.header}>
      <img className={classes.logo} src={Logo} alt="Chaumet" />
      <Link to="/map">
        <img className={classes.pin} src={Pin} alt="location" />
      </Link>
    </Grid>
  );
}

export default Header;
