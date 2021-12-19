import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  field: {
    margin: "5px 0 !important",
    width: "100%",
  },
}));

function CustomField({
  value,
  label,
  type,
  name,
  handleInputChange,
  error = null,
  sm,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={sm} style={{ padding: "0 5px" }}>
      <TextField
        className={classes.field}
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
