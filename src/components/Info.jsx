import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Alef, sans-serif",
    fontSize: "1.2rem",
    marginTop: 50,
    marginBottom: 20,
    userSelect: "none",

    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
    },
  },
  paper: {
    backgroundColor: theme.palette.grey.light,
    fontFamily: "Inter, sans-serif",
    padding: "15px 0",
    borderRadius: 5,
    boxShadow: " 0px 2px 0px rgba(19, 44, 112, 0.25)",
    letterSpacing: 2,
    fontWeight: 500,
  },
  timeContainer: {
    "@media (min-width: 900px) and (max-width: 1000px)": {
      fontSize: "0.85rem",
    },
  },
}));

function Info({ value }) {
  const classes = useStyles();

  return (
    <>
      <p className={classes.title}>Select date</p>
      <Grid
        style={!!value ? { color: "#132C70" } : { color: "#BDBDBD" }}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid style={{ textAlign: "center", userSelect: "none" }} item xs={3}>
          <div className={classes.paper}>
            {!!value ? <span>{value.getDate()}</span> : <span>00</span>}
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              marginTop: 10,
              color: "#C2C2C2",
              userSelect: "none",
            }}
          >
            DATE
          </p>
        </Grid>
        <Grid style={{ textAlign: "center", userSelect: "none" }} item xs={3}>
          <div className={classes.paper}>
            {!!value ? <span>01</span> : <span>00</span>}
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              marginTop: 10,
              color: "#C2C2C2",
              userSelect: "none",
            }}
          >
            MONTH
          </p>
        </Grid>
        <Grid style={{ textAlign: "center", userSelect: "none" }} item xs={5}>
          <div className={classes.paper}>
            {!!value ? <span>{value.getFullYear()}</span> : <span>0000</span>}
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              marginTop: 10,
              color: "#C2C2C2",
              userSelect: "none",
            }}
          >
            YEAR
          </p>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginTop: 30,
          fontFamily: "Inter, sans-serif",
          userSelect: "none",
        }}
      >
        <div className={classes.timeContainer}>
          <AccessTimeIcon
            style={{ color: "#CACACA", transform: "translateY(5px)" }}
          />
          <span style={{ color: "#CACACA", marginLeft: 10 }}>
            OPENING HOURS -
          </span>
          <span style={{ fontWeight: 500, color: "#444", marginLeft: 10 }}>
            11AM to 10PM
          </span>
        </div>
      </Grid>
    </>
  );
}

export default Info;
