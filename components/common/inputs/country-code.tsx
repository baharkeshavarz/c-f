"use client"

import { InputAdornment, TextField, useTheme } from "@mui/material"
import { onlyDigitsWithMaxLen } from "./helper"
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly"
import PhoneNumberInput from "./phone-number"

interface CountryCodeProps {
  register: any
  t: any
  disabled?: boolean
  label: string
  name: string
  icon?: boolean
}

const CountryCodeInput = ({
  register,
  name,
  label,
  disabled = false,
  icon = false,
  t,
  ...etc
}: CountryCodeProps) => {
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
      onKeyDown={onlyDigitsWithMaxLen(10)}
      sx={{
        ...focusStyle,
        "& legend": { display: "none" },
        "& .MuiInputLabel-shrink": {
          opacity: 0,
          transition: "all 0.2s ease-in"
        }
      }}
      type="tel"
      fullWidth
      label={label}
      {...register(name, {
        required: t.formErrors.mobileRequired,
        maxLength: {
          value: 10,
          message: t.formErrors.mobileNumber11Digits
        },
        minLength: {
          value: 2,
          message: t.formErrors.mobileNumber11Digits
        }
      })}
      InputProps={{
        maxLength: 10,
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
