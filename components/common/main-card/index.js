import React from "react"
import { Card, useTheme } from "@mui/material"

const MainCard = props => {
  const { sx, shadow = 2, children, ...others } = props
  const theme = useTheme()

  return (
    <Card sx={{ p: 1, boxShadow: theme.shadows[shadow], borderRadius: "5px", ...sx }} {...others}>
       {children}
    </Card>
  )
}

export default MainCard
