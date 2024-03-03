import React from "react"
import { useTheme, alpha } from "@mui/material"
import TextField from "@mui/material/TextField"

// -------------------------------------------|| TEXT FIELD - COMPONENTS ||---------------------------------------------
const MuiTextField = ({ register, disabled, name, readOnly = false, sx, otp = false, params, children, ...others }) => {
  // eslint-disable-next-line react/display-name
  const Input = React.forwardRef((props, ref) => <TextField {...props} ref={ref} />)
  const theme = useTheme()

  const otpStyle = {
    textAlign: "center",
    letterSpacing: "2rem",
    fontWeight: 800
  }

  return (
    <Input
      {...register}
      {...others}
      {...params}
      name={name}
      autoComplete='off'
      inputProps={{
        style: otp ? otpStyle : {},
        readOnly: readOnly
      }}
      disabled={disabled}
      sx={{
        ...sx,
        caretColor: theme.palette.secondary.main,
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          backgroundColor: alpha(theme.palette.grey[200], 0.5)
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: 0,
            borderBottom: 2,
            borderBottomColor: !disabled && alpha(theme.palette.secondary.main, 0.5)
          },
          "&:hover fieldset": {
            border: 0,
            borderBottom: 2,
            borderBottomColor: !disabled && theme.palette.secondary.main
          },
          "&.Mui-focused fieldset": {
            border: 0,
            borderBottom: 2,
            borderBottomColor: !disabled && theme.palette.secondary.main
          }
        }
      }}
    >
      {children}
    </Input>
  )
}

export default MuiTextField
