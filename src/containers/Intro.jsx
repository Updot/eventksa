import React from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownIcon from "../components/DownIcon";
import image from "../images/Landing.png";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "20px !important",
    fontFamily: "Agaramond, serif !important",
    textTransform: "capitalize !important",
    width: "100%",
    borderRadius: "0 !important",

    [theme.breakpoints.up("sm")]: {
      fontSize: "36px !important",
    },
  },
}));

function Intro({ isFormOpen, setIsFormOpen }) {
  const classes = useStyles();

  return (
    <Grid
      className="intro-container"
      container
      style={{
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
    >
      <Grid id="left-content" item sm={12} md={7}>
        <div style={{ height: "100%" }} className="flex-col">
          <p>
            Chaumet presents Tiara Dream, a sensory and emotive experience that
            offers visitors the opportunity to discover the tiara, a
            dream-inducing jewel and emblem of the Maison.
          </p>
          <Button
            disableElevation
            variant="contained"
            className={classes.button}
            onClick={() => {
              setIsFormOpen((prev) => !prev);
            }}
          >
            <Grid container alignItems="center" justifyContent="space-around">
              <Grid item xs={10} style={{ textAlign: "left", paddingLeft: 20 }}>
                Book Your Visit!
              </Grid>
              <Grid item xs={2}>
                <DownIcon
                  style={{
                    width: 15,
                    height: 15,
                    transition: "all 0.5s ease",
                    transform: `rotate(${isFormOpen ? "-180deg" : "0"})`,
                  }}
                />
              </Grid>
            </Grid>
          </Button>
        </div>
      </Grid>
      <Grid id="right-content" item sm={12} md={5}>
        <img style={{ width: "100%", height: "100%" }} src={image} alt="lol" />
      </Grid>
    </Grid>
  );
}

export default Intro;
