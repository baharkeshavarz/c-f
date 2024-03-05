const Palette = (mode: any) => {
  const lightColor = "58, 53, 65"
  const darkColor = "231, 227, 252"
  const mainColor = mode === "light" ? lightColor : darkColor
  return {
    common: {
      black: "#000",
      white: "#FFF"
    },
    mode: mode,
    primary: {
      light: "#FFFF99",
      main: "#ffff00",
      dark: "#fcf442",
      contrastText: "#000"
    },
    secondary: {
      light: "#f68b70",
      main: "#684df1",
      dark: "#f8700f",
      contrastText: "#FFF"
    },
    success: {
      light: "#148F00",
      main: "#148F00",
      dark: "#4CB200",
      contrastText: "#FFF"
    },
    error: {
      light: "#FF6166",
      main: "#FF4C51",
      dark: "#E04347",
      contrastText: "#FFF"
    },
    warning: {
      light: "#FFCA64",
      main: "#FFB400",
      dark: "#E09E00",
      contrastText: "#FFF"
    },
    info: {
      light: "#32BAFF",
      main: "#36454F",
      dark: "#139CE0",
      contrastText: "#FFF"
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030"
    },
    brown: {
      500: "#795548"
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      main: mode === "dark" ? "#fff" : "#000000",
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? "#fff" : "#1E1E1E",
      default: mode === "light" ? "#F4F5FA" : "#121212"
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default Palette
