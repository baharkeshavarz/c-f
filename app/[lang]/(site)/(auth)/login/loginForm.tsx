"use client"

import { useState } from "react"
import { Stack, TextField,  useTheme } from "@mui/material"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import MuiButton from "@/components/common/button"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { ApiResponse, TranslateProps } from "@/types"
import { onlyDigitsWithMaxLen } from "@/components/common/inputs/helper"
import AuthHeader from "@/components/auth/header"
import AuthFooter from "@/components/auth/footer"
import { toast } from "react-toastify"
import useAuthenticationStore from "@/store/authentication"

const LoginForm = ({ t }: TranslateProps) => {
  const [status, setStatus] = useState("")
  const router = useRouter();
  const theme = useTheme();
  const { doLogin } = useAuthenticationStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  // Handle Login
  const handleLogin = (val: string) => {
    setStatus("loading")
    doLogin(val)
      .then((response: ApiResponse) => {
        const { status, data } = response
        if (status === 200) {
          setStatus("done")
          if (!data?.hasValue) {
            toast.error(data?.message)
          } else {
            router.push(`/verifyLogin/${val?.phoneNumber}`)
            toast.success("پیامک ارسال شد.")
          }
        }
      })
      .catch(() => {
        setStatus("error")
      })
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Stack mt={3}>
        <AuthHeader page="login" title={t.general.login} subTitle={t.login.headerMobile} />
        <TextField
          autoFocus={true}
          onKeyDown={onlyDigitsWithMaxLen(11)}
          sx={{
             mt: 2,
            '& legend': { display: 'none' },
            '& .MuiInputLabel-shrink': { opacity: 0, transition: "all 0.2s ease-in" }
          }}
          type='tel'
          fullWidth
          label={t.login.mobile}
          {...register("phoneNumber", {
            required: "شماره موبایل اجباری است",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد"
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد"
            }
          })}
          inputProps={{ maxLength: 11 }}
        />
        <ValidationHelperText 
           error={!!errors?.phoneNumber} 
           helperText={errors?.phoneNumber?.message as string || ""
           } />
      </Stack>
      <MuiButton 
         loading={status === "loading"}
      >
         {t.login.getCode}
      </MuiButton>
      <AuthFooter page="login" title={t.general.register} subTitle={t.login.dontHaveAccount} />
    </form>
  )
}

export default LoginForm
