import React from "react";
import { Grid, Checkbox } from "@mui/material";

function Title({ value, setTitle, error = null }) {
  const handleCheck = (e) => {
    console.log(e.target.value);
  };

  console.log(value);

  return (
    <Grid item xs={12} style={{ margin: "0 0 10px 20px", textAlign: "left" }}>
      <label style={{ marginRight: 20 }}>Title</label>
      <span>Mr.</span>
      <Checkbox
        name="mr"
        value={true}
        onChange={() => {
          setTitle(true);
        }}
        type="checkbox"
        checked={!!value}
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
    </Grid>
  );
}

export default Title;
