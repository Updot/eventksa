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
      <FormControl style={{ display: "contents" }} error={!!error}>
        <FormLabel style={{ marginRight: 20 }}>Title</FormLabel>
        <span>Mr.</span>
        <Checkbox
          name="mr"
          value={true}
          onChange={() => {
            setTitle(true);
          }}
          type="checkbox"
          checked={value === true ? true : false}
        />
        <span>Mrs.</span>
        <Checkbox
          name="mr"
          value={false}
          onChange={() => {
            setTitle(false);
          }}
          type="checkbox"
          checked={value === false ? true : false}
        />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default Title;
