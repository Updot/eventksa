import React, { useState } from "react";
import { Box, IconButton, Button, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "80%",
    maxWidth: 450,
    borderRadius: 18,
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      padding: "50px 30px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "80px 60px",
    },
  },
  closeButton: {
    position: "absolute !important",
    [theme.breakpoints.up("xs")]: {
      top: 20,
      right: 20,
    },
    [theme.breakpoints.up("md")]: {
      top: 40,
      right: 40,
    },
  },
  heading: {
    color: theme.palette.primary.main,
    // fontFamily: "Lateef, serif !important",
    [theme.breakpoints.up("xs")]: {
      marginTop: "20px !important",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px !important",
    },
  },
  subtext: {
    // fontFamily: "Alef, sans-serif ",
    color: theme.palette.grey.dark,
    [theme.breakpoints.up("xs")]: {
      width: "70%",
      margin: "30px auto 60px auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
      margin: "40px auto 70px auto",
    },
  },
  mailButton: {
    // fontFamily: "Alef, sans-serif !important",
    display: "block !important",
    padding: "5px 30px !important",
    fontSize: "1.1rem !important",
    width: 150,
    margin: "auto !important",
  },
  storyButton: {
    display: "block !important",
    padding: "5px 30px !important",
    fontSize: "1.5rem !important",
    width: "85%",
    marginTop: "50px !important",
    margin: "auto !important",
  },
}));

function CustomModal({ setSuccess }) {
  const [open, setOpen] = useState(true);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.box}>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h3" className={classes.heading}>
            Thank You!
          </Typography>
          <p className={classes.subtext}>
            A confirmation letter has been sent to your email. Check your inbox.
          </p>
          <Button
            href="https://mail.google.com"
            target="_blank"
            variant="contained"
            disableElevation
            style={{ textTransform: "none" }}
            className={classes.mailButton}
          >
            Go to mail
          </Button>
          <Button
            href="#"
            target="_blank"
            variant="contained"
            disableElevation
            style={{ textTransform: "none" }}
            className={classes.storyButton}
          >
            Crown Your Stories
          </Button>
          <p style={{ color: "#838383", marginTop: 10 }}>
            Try or Tiara on Instagram
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
