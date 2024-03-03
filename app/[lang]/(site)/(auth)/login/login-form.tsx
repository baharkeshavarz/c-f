"use client"

import { useState } from "react"
import { Stack, TextField } from "@mui/material"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
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
  const { doLogin } = useAuthenticationStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Login
  const handleLogin: SubmitHandler<FieldValues> = async(data) => {
    const val = data.phoneNumber;
    setStatus("loading")
    try {
      const response: ApiResponse = await doLogin(val);
      const { status, data } = response;
  
      if (status === 200) {
        setStatus("done");
  
        if (!data?.hasValue) {
          toast.error(data?.message);
        } else {
          router.push(`/verifyLogin/${val}`);
          toast.success(t.messages.sentSms);
        }
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Stack mt={3}>
        <AuthHeader page="login" title={t.general.login} subTitle={t.login.headerMsg} />
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
          label={t.forms.mobile}
          {...register("phoneNumber", {
            required: t.formErrors.mobileRequired,
            maxLength: {
              value: 11,
              message: t.formErrors.mobileNumber11Digits
            },
            minLength: {
              value: 11,
              message: t.formErrors.mobileNumber11Digits
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
      <AuthFooter page="login" title={t.general.register} subTitle={t.login.dontHaveAccount} pageLink="register" />
    </form>
  )
}

export default LoginForm
