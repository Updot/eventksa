import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = makeStyles(() => ({
  field: {
    width: "40%",
  },
}));

function Tickets({ value, setTickets }) {
  const classes = useStyles();

  const decreaseTickets = () => {
    if (value > 1) setTickets((prev) => prev - 1);
  };
  const increaseTickets = () => {
    if (value < 5) setTickets((prev) => prev + 1);
  };

  return (
    <Grid item xs={12} sm={6} style={{ marginTop: 20 }}>
      <IconButton style={{ margin: 10 }} onClick={decreaseTickets}>
        <RemoveIcon />
      </IconButton>
      <TextField
        className={classes.field}
        label="Tickets"
        type="number"
        name="tickets"
        value={value}
        InputProps={{ readOnly: true }}
      />
      <IconButton style={{ margin: 10 }} onClick={increaseTickets}>
        <AddIcon />
      </IconButton>
    </Grid>
  );
}

export default Tickets;
