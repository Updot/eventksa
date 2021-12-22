import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";

const useStyles = makeStyles((theme) => ({
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
    <Grid item xs={12} md={5}>
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
  );
}

export default Calendar;
