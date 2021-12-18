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
    padding: "80px 60px",
    maxWidth: 450,
    borderRadius: 18,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute !important",
    top: 40,
    right: 40,
  },
  heading: {
    color: theme.palette.primary.main,
    fontFamily: "Lateef, serif !important",
  },
  subtext: {
    width: "60%",
    margin: "40px auto 70px auto",
    fontFamily: "Alef, sans-serif ",
    color: theme.palette.grey.main,
  },
  button: {
    fontFamily: "Alef, sans-serif !important",
    padding: "5px 30px !important",
    fontSize: "1.1rem !important",
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
            className={classes.button}
          >
            Go to mail
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
