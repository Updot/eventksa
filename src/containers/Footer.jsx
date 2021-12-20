import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import website from "../images/website.png";
import pinOrange from "../images/PinOrange.png";

const useStyles = makeStyles((theme) => ({}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className="footer">
      <Grid container className="upper-footer">
        <Grid className="item" item xs={12}>
          <p className="follow-text">Follow Us</p>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={website} alt="Website" />
          </div>
        </Grid>
        <Grid className="item" item xs={6}>
          <div className="link-container">
            <div className={`rect ${classes.rect}`} />
            <div className="link-text-container">
              <p>Contact</p>
              <h2>US</h2>
            </div>
          </div>
        </Grid>
        <Grid className="item" item xs={6}>
          <div className="link-container">
            <img src={pinOrange} alt="locate us" />
            <div className="link-text-container">
              <p>Locate</p>
              <h2>US</h2>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="lower-footer"></Grid>
    </footer>
  );
}

export default Footer;
