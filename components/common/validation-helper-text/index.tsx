import { FormHelperText, FormHelperTextProps } from "@mui/material"

interface ValidationHelperTextProps extends FormHelperTextProps {
  touched?: boolean
  error?: boolean
  helperText: string
}

const ValidationHelperText = ({
  touched = false,
  error = false,
  helperText = "",
  ...others
}: ValidationHelperTextProps) => {
  return (
    <FormHelperText {...others} error={error} sx={{ fontSize: "0.7rem" }}>
      {error ? helperText : ""}
    </FormHelperText>
  )
}

export default ValidationHelperText
