import React from "react"
import PropTypes from "prop-types"
import { Box, useTheme, Theme } from "@mui/material"

interface DotLoadingProps {
  color: string
  sx?: React.CSSProperties
}

const DotLoading = ({ color, sx }: DotLoadingProps) => {
  const theme: Theme = useTheme()

  return (
    <Box
      sx={{
        ...sx,
        position: "relative",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: (theme.palette[color].main as any) || "primary",
        color: theme.palette[color].main,
        animation: "dot-loading 1s infinite linear alternate",
        animationDelay: "0.5s",
        "&::before, &::after": {
          content: "''",
          display: "inline-block",
          position: "absolute",
          top: 0
        },
        "&::before": {
          left: "-15px",
          width: "10px",
          height: "10px",
          borderRadius: "5px",
          backgroundColor: theme.palette[color].main || "primary",
          color: theme.palette[color].main,
          animation: "dot-loading 1s infinite alternate",
          animationDelay: "0s"
        },
        "&::after": {
          left: "15px",
          width: "10px",
          height: "10px",
          borderRadius: "5px",
          backgroundColor: theme.palette[color].main || "primary",
          color: theme.palette[color].main,
          animation: "dot-loading 1s infinite alternate",
          animationDelay: "1s"
        },
        "@keyframes dot-loading": {
          "0%": {
            backgroundColor: theme.palette[color].main || "primary"
          },
          "50%, 100%": {
            backgroundColor: "rgba(152, 128, 255, 0.2)"
          }
        }
      }}
    ></Box>
  )
}

DotLoading.propTypes = {
  color: PropTypes.string.isRequired
}

export default DotLoading
