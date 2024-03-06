import React from "react"
import { onlyDigitsWithMaxLen, commaSep } from "./helper"
import { useTheme, TextField, InputAdornment } from "@mui/material"
import { Controller } from "react-hook-form"
import { getInputRules } from "./text-input"

// export function toRial(amount) {
//   return (amount ? Number(amount).toLocaleString() : 0) + "ریال"
// }

const CurrencyTextField = (props) => {
  const theme = useTheme();
  const rules = getInputRules(props)
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
  const { name, control, maxLength, icon, ...etc } = props
  const elementProps = {}
  if (maxLength) {
    elementProps.onKeyDown = onlyDigitsWithMaxLen(maxLength)
  }
  const Icon = icon ? icon : null;
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: { onChange, name, value },
          fieldState: { invalid, isDirty }, //optional
          formState: { errors } //optional, but necessary if you want to show an error message
        }) => {
          return (
          <TextField
            style={{
                direction: "ltr"
              }}
              fullWidth
              {...elementProps}
              {...etc}
              sx= {{
                ...focusStyle,
              }}
              value={value ? commaSep(value+"") : " "}
              onChange={e => {
                onChange(e.target.value)
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  {icon && <Icon size={20} color={theme.palette.primary.dark} />}
                </InputAdornment>
              }}
            />
          )
        }}
    />
  </>
  )
}

export default CurrencyTextField;