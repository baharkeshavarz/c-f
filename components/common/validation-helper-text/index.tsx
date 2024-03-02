import React, { FC } from "react";
import PropTypes from "prop-types";
import { FormHelperText, FormHelperTextProps } from "@mui/material";

interface ValidationHelperTextProps extends FormHelperTextProps {
  touched?: boolean;
  error?: boolean;
  helperText: string;
}

const ValidationHelperText: FC<ValidationHelperTextProps> = ({
  touched = false,
  error = false,
  helperText = "",
  ...others
}: ValidationHelperTextProps) => {
  return (
    <FormHelperText
      style={{ marginTop: "0px", marginBottom: "0px" }}
      {...others}
      error={error}
      sx={{ my: 0, fontSize: "10px" }}
    >
      {error ? helperText : ""}
    </FormHelperText>
  );
};

ValidationHelperText.propTypes = {
  error: PropTypes.bool,
  touched: PropTypes.bool,
  helperText: PropTypes.string.isRequired,
};

export default ValidationHelperText;
