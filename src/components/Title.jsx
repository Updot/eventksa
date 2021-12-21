import React from "react";
import {
  Grid,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";

function Title({ value, setTitle, error = null }) {
  return (
    <Grid item xs={12} style={{ margin: "0 0 10px 20px", textAlign: "left" }}>
      <FormControl
        className="title-container"
        style={{ display: "contents" }}
        error={!!error}
      >
        <FormLabel style={{ marginRight: 20 }}>Title</FormLabel>
        <span>Mr.</span>
        <Checkbox
          name="mr"
          value={true}
          onChange={() => {
            setTitle(true);
          }}
          checked={value === true ? true : false}
          className={value === true ? "checked" : "unchecked"}
        />
        <span>Mrs.</span>
        <Checkbox
          name="mr"
          value={false}
          onChange={() => {
            setTitle(false);
          }}
          checked={value === false ? true : false}
          className={value === false ? "checked" : "unchecked"}
        />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default Title;
