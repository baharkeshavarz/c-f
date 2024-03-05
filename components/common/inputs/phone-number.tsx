"use client"

import { InputAdornment, TextField, useTheme } from "@mui/material"
import { onlyDigitsWithMaxLen } from "./helper"
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly"

interface PhoneNumberInputProps {
  register: any
  t: any
  disabled?: boolean
  label: string
  name: string
  icon?: boolean
}

const PhoneNumberInput = ({
  register,
  name,
  label,
  disabled = false,
  icon = false,
  t,
  ...etc
}: PhoneNumberInputProps) => {
  const theme = useTheme()
  const focusStyle = {
  "& label.Mui-focused": {
    color: theme.palette.grey[500]
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.grey[500]
    }
  }
 }
 
  return (
    <TextField
      autoFocus={true}
      disabled={disabled}
      onKeyDown={onlyDigitsWithMaxLen(11)}
      sx={{
        ...focusStyle,
        "& legend": { display: "none" },
        "& .MuiInputLabel-shrink": {
          opacity: 0,
          transition: "all 0.2s ease-in"
        }
      }}
      type="tel"
      // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
      fullWidth
      label={label}
      {...register(name, {
        required: t.formErrors.mobileRequired,
        maxLength: {
          value: 11,
          message: t.formErrors.mobileNumber11Digits
        },
        minLength: {
          value: 11,
          message: t.formErrors.mobileNumber11Digits
        }
      })}
      InputProps={{
        maxLength: 11,
        endAdornment: icon ? (
          <InputAdornment position="end">
            <MobileFriendlyIcon />
          </InputAdornment>
        ) : (
          ""
        )
      }}
      {...etc}
    />
  )
}

export default PhoneNumberInput
