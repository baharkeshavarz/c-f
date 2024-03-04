import React from 'react'
import {  useTheme, Autocomplete, TextField, alpha } from '@mui/material'

interface SelectBoxInputProps {
    options: [],
    label?: string,
    onChange?: () => {},
    sx?: React.CSSProperties
}

const SelectBoxInput = ({ label, options, onChange, sx= {} }: SelectBoxInputProps) => {
  const theme = useTheme()
  return (
    <Autocomplete
        {...sx}
        onChange={onChange}
        disablePortal
        options={options}
        renderInput={params => (
        <TextField
            sx={{
            "& .MuiInputBase-root": {
                borderRadius: "8px",
                backgroundColor: alpha(theme.palette.grey[200], 0.5)
            }
            }}
            {...params}
            label={label}
        />
        )}
   />
  )
}

export default SelectBoxInput
