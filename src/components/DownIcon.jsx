import React from "react";
import { SvgIcon } from "@mui/material";

function DownIcon(props) {
  return (
    <SvgIcon
      style={{
        position: "absolute",
        top: props.top,
        right: props.right,
        width: props.width,
        height: props.height,
      }}
      {...props}
    >
      <svg fill="none" viewBox="0.37 0.37 9.27 5.25">
        <path
          d="M1 1L5 5L9 1"
          stroke="white"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </SvgIcon>
  );
}

export default DownIcon;
