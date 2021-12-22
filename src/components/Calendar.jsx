import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Alef, sans-serif",
    fontSize: "1.2rem",
    marginBottom: 20,
  },
  paper: {
    backgroundColor: theme.palette.grey.light,
    fontFamily: "Inter, sans-serif",
    padding: "20px 0",
    borderRadius: 5,
    boxShadow: " 0px 2px 0px rgba(19, 44, 112, 0.25)",
    letterSpacing: 2,
    fontWeight: 500,
  },
  error: {
    fontSize: "0.8rem",
    fontFamily: "Roboto, sans-serif",
    color: "#D32F2F",
    marginTop: 5,
    marginRight: 120,
  },
}));

function Calendar({ value, setDate, error }) {
  const classes = useStyles();

  return (
    <Grid style={{ margin: "20px 0" }} item xs={12}>
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item xs={12} sm={5}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              required
              date={value}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              minDate={new Date("2022-01-13")}
              maxDate={new Date("2022-01-24")}
              defaultCalendarMonth={new Date("2022-01")}
              error={!!error}
            />
            {error && <div className={classes.error}>{error}</div>}
          </LocalizationProvider>
        </Grid>
        <Grid style={{ textAlign: "left" }} item xs={12} sm={5}>
          <p className={classes.title}>Select date</p>
          <Grid
            style={!!value ? { color: "#132C70" } : { color: "#BDBDBD" }}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid style={{ textAlign: "center" }} item xs={3}>
              <div className={classes.paper}>
                {!!value ? <span>{value.getDate()}</span> : <span>00</span>}
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  marginTop: 10,
                  color: "#C2C2C2",
                }}
              >
                DATE
              </p>
            </Grid>
            <Grid style={{ textAlign: "center" }} item xs={3}>
              <div className={classes.paper}>
                {!!value ? <span>01</span> : <span>00</span>}
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  marginTop: 10,
                  color: "#C2C2C2",
                }}
              >
                MONTH
              </p>
            </Grid>
            <Grid style={{ textAlign: "center" }} item xs={5}>
              <div className={classes.paper}>
                {!!value ? (
                  <span>{value.getFullYear()}</span>
                ) : (
                  <span>0000</span>
                )}
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  marginTop: 10,
                  color: "#C2C2C2",
                }}
              >
                YEAR
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Calendar;
