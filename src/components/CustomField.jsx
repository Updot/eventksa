import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  field: {
    margin: "20px 0 !important",
    width: "90%",
  },
}));

function CustomField({
  value,
  label,
  type,
  name,
  handleInputChange,
  error = null,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        className={classes.field}
        required
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        {...(error && { error: true, helperText: error })}
      />
    </Grid>
  );
}

export default CustomField;
