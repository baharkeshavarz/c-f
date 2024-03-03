import React from "react"
import TextField from "@mui/material/TextField"

interface SimpleTextFieldInputProps {
  register: any
  disabled?: boolean
  name: string
  label: string
  readOnly?: boolean
  sx?: React.CSSProperties
  otp?: boolean
}

const SimpleTextFieldInput = ({
  register,
  disabled,
  name,
  label,
  readOnly = false,
  sx,
  otp = false,
  ...others
}: SimpleTextFieldInputProps) => {
  return (
    <TextField
      type="text"
      {...register(name, {})}
      {...others}
      name={name}
      autoComplete="off"
      label={label}
      inputProps={{}}
      disabled={disabled}
      fullWidth
      sx={{
        "& legend": { display: "none" },
        "& .MuiInputLabel-shrink": {
          opacity: 0,
          transition: "all 0.2s ease-in"
        }
      }}
    />
  )
}

export default SimpleTextFieldInput
