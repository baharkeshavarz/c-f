"use client"

import LayoutWrapper from "@/components/layout/layout-wrapper"
import { Grid, Stack } from "@mui/material"
import MainCard from "@/components/common/main-card"
import { TranslateProps } from "@/types"
import { useState } from "react"
import RegisterForm from "./register-form"
import VerifyCode from "./verify-code"

const Register = ({ t }: TranslateProps) => {
  const [step, setStep] = useState("data")
  const [mobile, setMobile] = useState("")
  const [code, setCode] = useState("")
  const [token, setToken] = useState("")

  return (
    <LayoutWrapper>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ margin: 5 }}
      >
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <MainCard shadow={3} sx={{ borderRadius: "8px" }}>
            <Stack mt={3}>
              {step == "data" && (
                <RegisterForm
                  t={t}
                  setStep={setStep}
                  setMobile={setMobile}
                  code={code}
                  setCode={setCode}
                  setToken={setToken}
                />
              )}
              {step === "verify" && (
                <VerifyCode
                  t={t}
                  setStep={setStep}
                  mobile={mobile}
                  code={code}
                  token={token}
                />
              )}
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </LayoutWrapper>
  )
}

export default Register
