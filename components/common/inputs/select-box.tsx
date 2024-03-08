import React from "react"
import { useTheme, Autocomplete, TextField } from "@mui/material"

interface SelectBoxInputProps {
  options: any
  value: any
  label?: string
  onChange?: any
  sx?: React.CSSProperties
}

const SelectBoxInput = ({
  label,
  options,
  value,
  onChange,
  sx = {}
}: SelectBoxInputProps) => {
  const theme = useTheme()

  return (
    <Autocomplete
      {...sx}
      onChange={onChange}
      disablePortal
      value={value}
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
              borderRadius: "2px"
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
