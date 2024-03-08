"use client"

import LayoutWrapper from "@/components/layout/layout-wrapper"
import { Grid, Stack } from "@mui/material"
import MainCard from "@/components/common/main-card"
import { TranslateProps } from "@/types"
import AuthFooter from "@/components/auth/footer"
import AuthHeader from "@/components/auth/header"
import { IdentificationIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import RegisterForm from "./register-form"

const Register = ({ t }: TranslateProps) => {
  const [step, setStep] = useState("data")
  return (
    <LayoutWrapper>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ margin: 5, minHeight: "50vh" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <MainCard shadow={3} sx={{ borderRadius: "8px", p: 3 }}>
            <Stack mt={3}>
              <AuthHeader
                page="register"
                title={t.general.register}
                subTitle={t.register.headerMsg}
                icon={IdentificationIcon}
              />
              <RegisterForm t={t} setStep={setStep} />
              <AuthFooter
                page="register"
                pageLink="login"
                title={t.general.login}
                subTitle={t.login.dontHaveAccount}
              />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </LayoutWrapper>
  )
}

export default Register
