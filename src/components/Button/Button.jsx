import { ButtonBase } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";
import { Text } from "../Typography/Text";
import { style } from "./style/style";

export const Button = ({ text = "", link = "", disabled = false }) => {
  return (
    <ButtonBase
      disableRipple={true}
      sx={style.buttonYellow}
      disabled={disabled}
    >
      <Text text={text} />
    </ButtonBase>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool,
};
