import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Radio,
  Grid,
} from "@mui/material";

function Title({ value, handleInputChange, error = null }) {
  return (
    <Grid item xs={12} style={{ margin: "0 0 10px 20px", textAlign: "left" }}>
      <FormControl component="fieldset" error={!!error}>
        <FormLabel component="legend">Title</FormLabel>
        <RadioGroup value={value} row name="mr" onChange={handleInputChange}>
          <FormControlLabel value={true} control={<Radio />} label="Mr." />
          <FormControlLabel value={false} control={<Radio />} label="Mrs." />
        </RadioGroup>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default Title;
