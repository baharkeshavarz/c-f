"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Box, Stack, TextField } from "@mui/material"
import MuiButton from "@/components/common/button"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import useAuthenticationStore from "@/store/authentication"
import { onlyDigitsWithMaxLen } from "@/components/common/inputs/helper"
import { ApiResponse, TranslateProps } from "@/types"

const RegisterFormData = ({ t }: TranslateProps) => {
  const [state, setState] = useState("")
  const { doRegister } = useAuthenticationStore()
  const router = useRouter()

  // Use Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Call Register API
  const handleRegister = (val: any) => {
    setState("loading")
    doRegister(val)
      .then((response: ApiResponse) => {
        const { status, data } = response
        if (status === 200) {
          setState("done") 
          if (!data?.hasValue) {
            toast.error(data?.message) 
          } else {
            toast.success(t.messages.sentSms)
            router.push(`/verifyRegister/${val?.phoneNumber}`)
          }
        }
      })
      .catch(() => {
        setState("error")
      })
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Stack spacing={1.2} mt={3}>
        <Box>
          <TextField
            autoFocus={true}
            onKeyDown={onlyDigitsWithMaxLen(11)}
            sx={{
              '& legend': { display: 'none' },
              '& .MuiInputLabel-shrink': { opacity: 0, transition: "all 0.2s ease-in" }
            }}
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
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
            name="phoneNumber"
            fullWidth
            inputProps={{ maxLength: 11 }}
          />
          <ValidationHelperText error={!!errors.phoneNumber} helperText={errors?.phoneNumber?.message as string} />
        </Box>
        <Box>
          <TextField
            onKeyDown={onlyDigitsWithMaxLen(10)}
            type='tell'
            sx={{
              '& legend': { display: 'none' },
              '& .MuiInputLabel-shrink': { opacity: 0, transition: "all 0.2s ease-in" }
            }}
            {...register("id", {
              required: t.formErrors.nationalIDRequired,
              maxLength: {
                value: 10,
                message: t.formErrors.nationalID10Digits
              },
              minLength: {
                value: 10,
                message: t.formErrors.nationalID10Digits
              }
            })}
            inputProps={{ maxLength: 10 }}
            name='id'
            fullWidth
            label={t.forms.nationalCode}
          />
          <ValidationHelperText error={!!errors.id} helperText={errors?.id?.message as string} />
        </Box>
      </Stack>
      <MuiButton loading={state === "loading"}>{t.general.register}</MuiButton>
    </form>
  )
}

export default RegisterFormData
