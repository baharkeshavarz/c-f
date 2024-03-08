import React from "react"
import { Button, Typography, ButtonProps, useTheme } from "@mui/material"
import DotLoading from "../loading/dot-loading"

type ButtonSize = "small" | "medium" | "large"
type ButtonVariant = "text" | "contained" | "outlined"

interface MuiButtonProps extends ButtonProps {
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  sx?: React.CSSProperties
  size?: ButtonSize
  variant?: ButtonVariant
}

const MuiButton: React.FC<MuiButtonProps> = ({
  type = "submit",
  size = "medium",
  variant = "contained",
  fullWidth = true,
  loading = false,
  disabled = false,
  children,
  sx,
  ...others
}: MuiButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      type={type}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        borderRadius: "2px",
        mt: 2,
        ...sx
      }}
      {...others}
    >
      {loading && (
        <DotLoading sx={{ paddingTop: 2, paddingBottom: 2 }} color="primary" />
      )}

      {/* {disabled && <Typography sx={{ color: "whit" }}>disabled</Typography>} */}
      <Typography py={0.2} sx={{ color: disabled ? "white" : "primary" }}>
        {children}
      </Typography>
    </Button>
  )
}

export default MuiButton
