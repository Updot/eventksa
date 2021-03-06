import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, FormControl, Button, Select, MenuItem } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DownIcon from "../components/DownIcon";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import website from "../images/website.png";
import pinOrange from "../images/PinOrange.svg";

function Footer() {
  const [language, setLanguage] = useState("English");

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
            <div className="image-container">
              <a href="https://www.facebook.com/chaumet.arabic" target="_blank">
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
            <div className="image-container">
              <a
                href="https://www.instagram.com/chaumet_arabia"
                target="_blank"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            <div className="image-container">
              <a href="https://www.chaumet.com/ar" target="_blank">
                <img src={website} alt="Website" />
              </a>
            </div>
          </div>
        </Grid>
        <Grid className="item" item xs={6}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="mailto:tiaradream@sa.chaumet.com"
          >
            <div className="link-container">
              <div className="rect" />
              <div className="link-text-container">
                <p>Contact</p>
                <h2>US</h2>
              </div>
            </div>
          </a>
        </Grid>
        <Grid className="item" item xs={6}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/map">
            <div className="link-container">
              <img src={pinOrange} alt="locate us" />
              <div className="link-text-container">
                <p>Locate</p>
                <h2>US</h2>
              </div>
            </div>
          </Link>
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
              IconComponent={() => {
                return <DownIcon top={19} right={0} width={15} height={10} />;
              }}
              style={{ color: "white", fontSize: 12 }}
            >
              <MenuItem value={"English"}>ENGLISH</MenuItem>
              <MenuItem value={"Arabic"}>????????</MenuItem>
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
