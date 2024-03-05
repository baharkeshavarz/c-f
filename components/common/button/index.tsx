import React from "react"
import { Button, Typography, ButtonProps, useTheme } from "@mui/material"
import DotLoading from "../loading/dot-loading"

type ButtonSize = "small" | "medium" | "large"
type ButtonVariant = "text" | "contained" | "outlined"

interface MuiButtonProps extends ButtonProps {
  loading?: boolean
  children: React.ReactNode
  sx?: React.CSSProperties
  size?: ButtonSize
  variant?: ButtonVariant
}

const MuiButton: React.FC<MuiButtonProps> = ({
  type = "submit",
  size = "large",
  variant = "contained",
  fullWidth = true,
  loading = false,
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
      disabled={loading}
      sx={{
        borderRadius: "8px",
        mt: 2,
        ...sx
      }}
      {...others}
    >
      {loading ? (
        <DotLoading sx={{ paddingTop: 2, paddingBottom: 2 }} color="primary" />
      ) : (
        <Typography fontWeight="bold" py={0.7}>
          {children}
        </Typography>
      )}
    </Button>
  )
}

export default MuiButton
