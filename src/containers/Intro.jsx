import React, { useState, useRef } from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownIcon from "../components/DownIcon";
import playButton from "../images/playButton.svg";

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
  const [video, setVideo] = useState(null);
  const [overlay, setOverlay] = useState(true);

  const classes = useStyles();

  const v = useRef(null);

  const windowWidth = window.screen.width;

  (function (width) {
    if (width > 1150 && video === null)
      import("../videos/video_1920x1080.mp4").then((obj) =>
        setVideo(obj.default)
      );
    else if (width > 900 && video === null)
      import("../videos/video_1080x1080.mp4").then((obj) =>
        setVideo(obj.default)
      );
    else if (width > 600 && video === null)
      import("../videos/video_1080x1350.mp4").then((obj) =>
        setVideo(obj.default)
      );
    else
      import("../videos/video_1080x1920.mp4").then((obj) =>
        setVideo(obj.default)
      );
  })(windowWidth);

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
      <Grid
        id="right-content"
        item
        sm={12}
        md={5}
        style={{ position: "relative" }}
      >
        {video && (
          <video
            onClick={() => {
              setOverlay(true);
              v.current.pause();
            }}
            onEnded={() => setOverlay(true)}
            width="100%"
            height="100%"
            ref={v}
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
