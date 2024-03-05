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
                "& label.Mui-focused": {
                    color: theme.palette.grey[500]
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.grey[500]
                    }
                  },
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
