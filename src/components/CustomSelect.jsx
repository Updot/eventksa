import React from "react";
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
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

function CustomSelect({ value, setProvince, sm, error = null }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <Grid item xs={12} sm={sm} style={{ padding: "0 5px" }}>
      <Box className={classes.box}>
        <FormControl fullWidth error={!!error}>
          <InputLabel>Province</InputLabel>
          <Select
            value={value}
            onChange={handleChange}
            style={{ textAlign: "left" }}
          >
            <MenuItem value={"Al-Bahah Province"}>Al-Bahah Province</MenuItem>
            <MenuItem value={"Al-Jawf Province"}>Al-Jawf Province</MenuItem>
            <MenuItem value={"Aseer Province"}>Aseer Province</MenuItem>
            <MenuItem value={"Eastern Province"}>Eastern Province</MenuItem>
            <MenuItem value={"Ha'il Province"}>Ha'il Province</MenuItem>
            <MenuItem value={"Jizan Province"}>Jizan Province</MenuItem>
            <MenuItem value={"Madinah Province"}>Madinah Province</MenuItem>
            <MenuItem value={"Makkah Province"}>Makkah Province</MenuItem>
            <MenuItem value={"Najran Province"}>Najran Province</MenuItem>
            <MenuItem value={"Qassim Province"}>Qassim Province</MenuItem>
            <MenuItem value={"Riyadh Province"}>Riyadh Province</MenuItem>
            <MenuItem value={"Tabuk Province"}>Tabuk Province</MenuItem>
          </Select>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </Box>
    </Grid>
  );
}

export default CustomSelect;
