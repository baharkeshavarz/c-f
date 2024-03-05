import React, { FC } from "react"
import { TextField, useTheme, InputAdornment, InputProps } from "@mui/material"
import { onlyCharactersWithMaxLen } from "./helper"

type ButtonSize = "small" | "medium" | "large"

interface TextFieldInputProps {
  t: any
  register: any
  isRequired?: boolean
  maxLength?: number
  minLength?: number
  label?: string
  name: string
  min?: number
  max?: number
  icon?: any
  type?: string
  pattern?: string
  fullWidth?: boolean
  sx?: React.CSSProperties,
  size?: ButtonSize,
  value?:any
}

const TextFieldInput: FC<TextFieldInputProps> = props => {
  const {
    t,
    register,
    isRequired = true,
    maxLength = 10,
    label,
    name,
    min = 0,
    max = Number.MAX_VALUE,
    icon,
    type = "text",
    pattern = "[a-zA-Z0-9]",
    fullWidth,
    sx = {},
    size = "small",
    ...etc
  } = props
  const inputRules = getInputRules(props)
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

  const elementProps: {
    inputProps?: { maxLength: number }
    InputProps?: InputProps
    name: string
    fullWidth: boolean
    label: string
    type: string
    sx?: React.CSSProperties
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  } = {
    inputProps: { maxLength },
    name,
    fullWidth: true,
    label: label || "",
    type,
    sx: {
      ...focusStyle,
      borderRadius: "2px",
      ...sx
    }
  }

  if (icon) {
    const Icon = icon
    elementProps.InputProps = {
      ...elementProps.InputProps,
      endAdornment: (
        <InputAdornment position="start">
          <Icon size={20} color={theme.palette.primary.dark} />
        </InputAdornment>
      )
    }
  }

  elementProps.onKeyDown = onlyCharactersWithMaxLen(maxLength)

  return (
    <>
    {/* {JSON.stringify(inputRules)} */}
     <TextField
      InputLabelProps={{
        style: { color: theme.palette.grey[500] }
      }}
      {...elementProps}
      {...register(name, inputRules)}
      {...etc}
    />
    </>
   )
}

interface ValidationRules {
  required?: string
  minLength?: { value: number; message: string }
  maxLength?: { value: number; message: string }
  min?: { value: number; message: string }
  max?: { value: number; message: string },
  validate?: { value: number; message: string }
}

function getInputRules(props: TextFieldInputProps): ValidationRules {
  const {
    t,
    pattern,
    register,
    isRequired = true,
    maxLength = 10,
    minLength = 0,
    label,
    name,
    min = 0,
    value,
    max = Number.MAX_VALUE,
  } = props

  const lbl = label || ""
  let minLengthMsg = `${lbl} must be at least ${minLength} digit.`
  let maxLengthMsg = `${lbl} حداکثر باید ${maxLength} رقم باشد.`
  let minMsg = `${lbl} نمیتواند کمتر از ${min} باشد.`
  let maxMsg = `${lbl} نمیتواند بیشتر از ${max} باشد.`
  if (minLength === maxLength) {
    minLengthMsg = maxLengthMsg = `${lbl} باید ${minLength} رقم باشد.`
  }
  const rules: ValidationRules = {
    maxLength: { value: maxLength, message: maxLengthMsg }
  }
  if (isRequired) rules.required = lbl + `  ${t.formErrors.isRequired}`
  if (minLength) rules.minLength = { value: minLength, message: minLengthMsg }
  if (min) rules.min = { value: min, message: minMsg }
  if (max !== Number.MAX_VALUE) rules.max = { value: max, message: maxMsg }
 // debugger
  // if (pattern) {rules.validate = cellphoneValidation("999")}
  
  // if(cellphoneValidation("9999")) rules.validate= { value: 1,message:'mobile number is wrong'}
  // console.log("rules", rules);
  return rules
}
export default TextFieldInput
