import React, { useState } from "react";
import { Grid, FormControl, Button, Select, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import website from "../images/website.png";
import pinOrange from "../images/PinOrange.png";

const useStyles = makeStyles((theme) => ({}));

function Footer() {
  const [language, setLanguage] = useState("English");

  const classes = useStyles();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <Grid container className="lower-footer">
        <Grid item xs={9} sm={10} className="lang-container">
          <FormControl className="lang-select">
            <Select
              value={language}
              label="Language"
              defaultValue="English"
              onChange={handleChange}
              className="select-field"
              style={{ color: "white" }}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Arabic"}>عربى</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} sm={2} className="button-container">
          <Button
            onClick={handleClick}
            disableElevation
            className="icon-button"
          >
            <KeyboardArrowUpIcon />
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
