"use client";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useTheme, useMediaQuery } from "@mui/material"


const ToastProvider = () => {
  const theme = useTheme()
  const xs = useMediaQuery(theme => theme.breakpoints.down("xs"))

  return (
    <ToastContainer
      toastClassName='toast-message'
      position={xs ? "bottom-left" : "top-right"}
      theme={theme.palette.mode}
      draggable
      rtl={true}
    />
  )
}

export default ToastProvider
