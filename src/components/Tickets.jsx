import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = makeStyles(() => ({
  field: {
    width: "30%",
  },
}));

function Tickets({ value, handleInputChange }) {
  const classes = useStyles();

  //   const decreaseTickets = () => {
  //       if (value > 1)
  //   }

  return (
    <Grid item xs={12} sm={6}>
      <IconButton style={{ margin: 10 }}>
        <RemoveIcon />
      </IconButton>
      <TextField
        className={classes.field}
        required
        label="Tickets"
        type="number"
        name="tickets"
        value={value}
        onChange={handleInputChange}
      />
      <IconButton style={{ margin: 10 }}>
        <AddIcon />
      </IconButton>
    </Grid>
  );
}

export default Tickets;
