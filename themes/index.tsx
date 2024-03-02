"use client"

import { useMemo } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import Palette from "./palette"
import Typography from "./typography"
import Shadows from "./shadows"
import useConfigStore from "../store/config"
import MuiAlert from "./alert"
import { ChildrenProps } from "@/types"

const ThemeComponent = ({ children }: ChildrenProps) => {
  const { themeMode, fontFamily, themeDirection } = useConfigStore()
  const palette = useMemo(() => Palette(themeMode), [themeMode])
  const typography = useMemo(() => Typography(fontFamily), [fontFamily])
  const shadows = useMemo(() => Shadows(themeMode), [themeMode])
  const muiAlert = useMemo(() => MuiAlert(), []);

  const themeOption = useMemo(
    () => ({
      direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: palette,
      typography: typography,
      shadows: shadows,
      muiAlert: muiAlert
    }),
    [palette, shadows, muiAlert, themeDirection]
  )

  const theme = createTheme(themeOption)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}


export default ThemeComponent
