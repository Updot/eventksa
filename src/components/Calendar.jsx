import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";

const useStyles = makeStyles(() => ({
  error: {
    fontSize: "0.8rem",
    fontFamily: "Roboto, sans-serif",
    color: "#D32F2F",
    marginTop: 5,
    marginRight: 120,
  },
}));

function Calendar({ value, setDate, dateError }) {
  const classes = useStyles();

  return (
    <Grid style={{ margin: "20px 0" }} item xs={12} sm={6}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          required
          label="Choose date"
          value={value}
          inputFormat="dd/MM/yyyy"
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          minDate={new Date("2022-01-13")}
          maxDate={new Date("2022-01-24")}
          defaultCalendarMonth={new Date("2022-01")}
        />
        {dateError && (
          <div className={classes.error}>This field is required</div>
        )}
      </LocalizationProvider>
    </Grid>
  );
}

export default Calendar;
