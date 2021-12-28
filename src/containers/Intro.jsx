import React, { useState, useRef } from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownIcon from "../components/DownIcon";
import playButton from "../images/playButton.svg";
import video from "../videos/video.mp4";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "20px !important",
    fontFamily: "Agaramond, serif !important",
    textTransform: "capitalize !important",
    width: "100%",
    borderRadius: "0 !important",

    [theme.breakpoints.up("sm")]: {
      fontSize: "30px !important",
    },
  },
  videoContainer: {
    position: "relative",
    height: "auto",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 1,
    left: 0,
    right: 0,
    bottom: 1,
    backgroundColor: "#00000044",
    cursor: "pointer",
    zIndex: 10,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function Intro({ isFormOpen, setIsFormOpen }) {
  const [overlay, setOverlay] = useState(false);

  const classes = useStyles();

  const v = useRef(null);

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
                Book Your Visit
              </Grid>
              <Grid item xs={2} style={{ position: "relative" }}>
                <DownIcon
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    top: -12,
                    left: 0,
                    transition: "all 0.5s ease",
                    transform: `rotate(${isFormOpen ? "-180deg" : "0"})`,
                  }}
                />
              </Grid>
            </Grid>
          </Button>
        </div>
      </Grid>
      <Grid
        id="right-content"
        item
        sm={12}
        md={5}
        className={classes.videoContainer}
      >
        {video && (
          <video
            onClick={() => {
              setOverlay(true);
              v.current.pause();
            }}
            onEnded={() => setOverlay(true)}
            autoPlay
            muted
            ref={v}
            className={classes.video}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
        {video && overlay && (
          <div
            onClick={() => {
              setOverlay(false);
              v.current.play();
            }}
            className={classes.overlay}
          >
            <img src={playButton} className={classes.playButton} alt="play" />
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default Intro;
