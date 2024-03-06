"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { Stack, useTheme } from "@mui/material"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import MuiButton from "@/components/common/button"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { ApiResponse, TranslateProps } from "@/types"
import AuthHeader from "@/components/auth/header"
import AuthFooter from "@/components/auth/footer"
import { toast } from "react-toastify"
import useAuthenticationStore from "@/store/authentication"
import PhoneNumberInput from "@/components/common/inputs/phone-number"
import {
  LockClosedIcon,
} from "@heroicons/react/24/solid"


interface LoginFormProps {
  t: any;
  setStep: Dispatch<SetStateAction<string>>,
  setMobile: Dispatch<SetStateAction<string>>, 
}

const LoginForm = ({ t, setStep, setMobile }: LoginFormProps) => {
  const [status, setStatus] = useState("")
  const router = useRouter()
  const { doLogin } = useAuthenticationStore()
  const theme = useTheme()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Login
  const handleLogin: SubmitHandler<FieldValues> = async data => {
    const phoneNum = data.phoneNumber
    setMobile(phoneNum)
    setStep("verify")
   // setStatus("loading")
    // try {
    //   const response: ApiResponse = await doLogin(phoneNum)
    //   const { status, data } = response

    //   if (status === 200) {
    //     setStatus("done")

    //     if (!data?.hasValue) {
    //       toast.error(data?.message)
    //     } else {
    //       router.push(`/verifyLogin/${phoneNum}`)
    //       toast.success(t.messages.sentSms)
    //     }
    //   }
    // } catch (error) {
    //   setStatus("error")
    // }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Stack mt={3}>
        <AuthHeader
          page="login"
          title={t.general.login}
          subTitle={t.login.headerMsg}
          icon={LockClosedIcon}
        />
        <PhoneNumberInput
          register={register}
          name="phoneNumber"
          label={t.forms.mobile}
          t={t}
          icon={true}
        />
        <ValidationHelperText
          error={!!errors?.phoneNumber}
          helperText={(errors?.phoneNumber?.message as string) || ""}
        />
      </Stack>
      <MuiButton
        sx={{ 
               background: `${theme.palette.common.black} !important`,
               color: theme.palette.primary.main
         }}
        loading={status === "loading"}
      >
        {t.login.getCode}
      </MuiButton>
      <AuthFooter
        page="login"
        title={t.general.register}
        subTitle={t.login.dontHaveAccount}
        pageLink="register"
      />
    </form>
  )
}

export default LoginForm
