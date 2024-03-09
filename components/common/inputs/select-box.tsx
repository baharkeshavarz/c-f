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
      size="small"
      options={options}
      renderInput={params => (
        <TextField
          sx={{
            pt:'0 !important',
            pb:'0 !important',
            height:'3rem !important',
            "& label.Mui-focused": {
              color: theme.palette.grey[500]
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.grey[500]
              }
            },
            '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall':{
                paddingTop: "17px",
                paddingBottom: "0px",
                paddingLeft: "6px"
            },
            "& .MuiInputBase-root": {
              borderRadius: "3px"
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
