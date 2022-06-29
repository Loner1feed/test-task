import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { style } from "./style/style";

export const Heading = ({ text = "" }) => {
  return (
    <Typography sx={style.heading} component="h1">
      {text}
    </Typography>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};
