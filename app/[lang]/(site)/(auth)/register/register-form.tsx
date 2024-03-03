"use client"

import { Stack } from "@mui/material"
import { TranslateProps } from "@/types"
import AuthHeader from "@/components/auth/header"
import AuthFooter from "@/components/auth/footer"
import RegisterFormData from "./register-form-data"

const RegisterForm = ({ t }: TranslateProps) => {
  return (
      <Stack mt={3}>
        <AuthHeader page="register" title={t.general.register} subTitle={t.register.headerMsg} />
        <RegisterFormData t={t}/>
        <AuthFooter page="register" pageLink="login" title={t.general.login} subTitle={t.login.dontHaveAccount} />
      </Stack>
  )
}

export default RegisterForm
