import React from "react";
import { PropTypes } from "prop-types";
import { Typography } from "@mui/material";
import { style } from "./style/style";

export const Text = ({ text = "" }) => {
  return (
    <Typography sx={style.text} component="p">
      {text}
    </Typography>
  );
};

Text.propTypes = {
  text: PropTypes.string,
};
