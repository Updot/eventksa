import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  box: {
    width: "100%",
    margin: "5px 0 !important",
  },
}));

function CustomSelect({ sm }) {
  const [age, setAge] = useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid item xs={12} sm={sm} style={{ padding: "0 5px" }}>
      <Box sx={{ minWidth: 120 }} className={classes.box}>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select value={age} label="Age" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default CustomSelect;
