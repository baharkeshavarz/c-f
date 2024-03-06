"use client"

import LayoutWrapper from "@/components/layout/layout-wrapper"
import LoginForm from "./login-form"
import { Grid } from "@mui/material"
import MainCard from "@/components/common/main-card"
import { TranslateProps } from "@/types"
import { useState } from "react"
import VerifyCode from "./verify-code"

const Login = ({ t }: TranslateProps) => {
 const [step, setStep] = useState("data")
 const [mobile, setMobile] = useState("")

 return (
    <LayoutWrapper>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ margin: 5, minHeight: "50vh" }}
        >
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <MainCard shadow={1} sx={{ borderRadius: "8px", p: 3 }}>
             { step === "data" && <LoginForm t= {t} setStep= {setStep} setMobile={setMobile} />}
             { step === "verify" && <VerifyCode t= {t} setStep= {setStep} mobile={mobile} />}
          </MainCard>
        </Grid>   
      </Grid>
    </LayoutWrapper>
  )
}

export default Login
