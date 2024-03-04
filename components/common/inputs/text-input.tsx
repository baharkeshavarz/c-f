import React, { FC } from "react"
import { TextField, useTheme, InputAdornment, InputProps } from "@mui/material"
import { onlyCharactersWithMaxLen } from "./helper"

interface TextFieldInputProps {
  register: any // Update this type based on the actual type
  isRequired?: boolean
  maxLength?: number
  minLength?: number
  label?: string
  name: string
  min?: number
  max?: number
  icon?: any,
  type?: string
  pattern?: string
  fullWidth?: boolean
  sx?: React.CSSProperties
}

const TextFieldInput: FC<TextFieldInputProps> = props => {
  const {
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
    ...etc
  } = props
  const inputRules = getInputRules(props)
  const theme = useTheme()

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
      borderRadius: "8px",
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
    <TextField {...elementProps} {...register(name, inputRules)} {...etc} />
  )
}

interface ValidationRules {
  required?: string
  minLength?: { value: number; message: string }
  maxLength?: { value: number; message: string }
  min?: { value: number; message: string }
  max?: { value: number; message: string }
}

function getInputRules(props: TextFieldInputProps): ValidationRules {
  const {
    register,
    isRequired = true,
    maxLength = 10,
    minLength = 0,
    label,
    name,
    min = 0,
    max = Number.MAX_VALUE
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
  if (isRequired) rules.required = lbl + " is required "
  if (minLength) rules.minLength = { value: minLength, message: minLengthMsg }
  if (min) rules.min = { value: min, message: minMsg }
  if (max !== Number.MAX_VALUE) rules.max = { value: max, message: maxMsg }
  return rules
}

export default TextFieldInput
