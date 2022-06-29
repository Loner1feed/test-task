import React from "react";
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";

export const BG = ({ children, type = "" }) => {
  const style = {
    bg: {
      background:
        type === "yellow"
          ? "#F4E041"
          : type === "blue"
          ? "#00BDD3"
          : type === "light-gray"
          ? "#f8f8f8"
          : "transparent",
    },
  };

  return <Box sx={style.bg}>{children}</Box>;
};

BG.propTypes = {
  type: PropTypes.oneOf(["yellow", "blue", "light-gray"]),
};
