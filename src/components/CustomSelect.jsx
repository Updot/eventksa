import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownIcon from "./DownIcon";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    margin: "10px 0 !important",
  },
  field: {
    backgroundColor: theme.palette.grey.light,
    border: "none !important",
    borderRadius: 5,
    boxShadow: " 0px 2px 0px rgba(19, 44, 112, 0.25)",
    textAlign: "left",
  },
  arrow: {
    position: "absolute",
    top: 14,
    right: 18,
    transition: "all 0.5s ease !important",
  },
}));

function CustomButton({ isOpen, setIsOpen }) {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      elevation={0}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      style={{
        backgroundColor: "#132C70",
        height: 57,
        minWidth: 60,
        zIndex: 10,
      }}
    >
      <DownIcon
        style={
          isOpen
            ? {
                transform: "rotate(180deg)",
                transition: "all 0.5s ease !important",
              }
            : { transform: "rotate(0)", transition: "all 0.5s ease !important" }
        }
        className={classes.arrow}
      />
    </Button>
  );
}

function CustomSelect({ value, setProvince, sm, error = null }) {
  const [isOpen, setIsOpen] = useState(false);

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
            className={`select-field ${classes.field}`}
            style={{ width: "100%", margin: 0 }}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            IconComponent={() => (
              <CustomButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            open={isOpen}
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
          {error && (
            <FormHelperText
              style={{
                // fontFamily: "Roboto, sans-serif",
                fontSize: 13,
              }}
            >
              {error}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
    </Grid>
  );
}

export default CustomSelect;
