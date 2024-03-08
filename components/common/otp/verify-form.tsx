"use client"

import { Dispatch, SetStateAction, useState } from "react"
import useAuthenticationStore from "@/store/authentication"
import { usePathname, useRouter } from "next/navigation"
import CountDown from "@/components/common/countdown"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { alpha, Box, Stack, TextField, useTheme } from "@mui/material"
import Link from "next/link"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import auth from "@/lib/auth"
import { onlyDigitsWithMaxLen, p2e } from "@/components/common/inputs/helper"
import EditCalendarIcon from "@mui/icons-material/EditCalendar"

interface VerifyFormProps {
  t: any
  page: string
  isMobile: boolean
  receiveData: string
  setStep: Dispatch<SetStateAction<string>>
  activeStep?: number
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const VerifyForm = ({
  t,
  page,
  isMobile,
  receiveData,
  setStep,
  activeStep,
  setActiveStep
}: VerifyFormProps) => {
  const router = useRouter()
  const { doVerifyLogin, doVerifyRegister, doLogin, resendRegisterOtp } =
    useAuthenticationStore()
  const [state, setState] = useState("")
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  // Handle Verify
  const handleVerify: SubmitHandler<FieldValues> = async val => {
    if (page === "register") {
      setState("loading")
      const registerData = {
        mobileNumber: receiveData,
        code: p2e(val?.otp),
        token: ""
      }
      doVerifyRegister(registerData)
        .then(response => {
          if (response?.status === 200) {
            if (!response?.data?.succeed) {
              setState("done")
              toast.error(response?.data?.message || t.errors.errorHappened)
            } else {
              setState("done")
              auth.login(response?.data?.value)
              auth.loadUser()
              auth.backToBeforeLogin(router)
              toast.success("ثبت نام با موفقیت انجام شد.")
            }
          }
        })
        .catch(() => {
          setState("error")
        })
    } else if (page === "gmail") {
      setState("loading")
      if (setActiveStep) {
        setActiveStep(1)
      }
    } else {
      // Login
      setState("loading")
      const loginData = {
        password: p2e(val?.otp),
        userName: receiveData
      }
      doVerifyLogin(loginData)
        .then(response => {
          if (response?.status === 200) {
            setState("done")
            if (!response?.data?.succeed) {
              toast.error(response?.data?.message || t.errors.errorHappened)
            } else {
              auth.login(response?.data?.value)
              auth.loadUser()
              auth.backToBeforeLogin(router)
              toast.success(t.messages.welcome)
            }
          }
        })
        .catch(() => {
          setState("error")
        })
    }
  }

  const sendOtpAgain = () => {
    if (page === "register") {
      resendRegisterOtp(mobileNumber).then(response => {
        if (response?.status === 200) {
          if (!response?.data?.succeed) {
            toast.error(response?.data?.message)
          } else {
            reset({ otp: "" })
            toast.success(response?.data?.message || "کد یک بار مصرف ارسال شد")
          }
        }
      })
    } else {
      doLogin({ phoneNumber: mobileNumber }).then(response => {
        if (response?.status === 200) {
          if (!response?.data?.succeed) {
            toast.error(response?.data?.message)
          } else {
            reset({ otp: "" })
            toast.success(response?.data?.message || "کد یک بار مصرف ارسال شد")
          }
        }
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(handleVerify)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mb: 1
        }}
      >
        <Stack>
          <TextField
            type="tel"
            autoFocus
            onKeyDown={onlyDigitsWithMaxLen(6)}
            InputLabelProps={{
              style: { color: theme.palette.grey[500] }
            }}
            onKeyUp={event => {
              if (event.target.value.length === 6) {
                handleSubmit(handleVerify)()
              }
            }}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                backgroundColor: alpha(theme.palette.grey[200], 0.5)
              },
              "& label.Mui-focused": {
                color: theme.palette.grey[500]
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.grey[500]
                }
              }
            }}
            inputProps={{
              maxLength: 6,
              style: {
                textAlign: "center",
                letterSpacing: "2rem",
                fontWeight: 800
              }
            }}
            fullWidth
            disabled={state === "loading"}
            {...register("otp", {
              required: t.formErrors.verificationCodeIsRequired,
              maxLength: {
                value: 6,
                message: t.formErrors.verificationCode6Digits
              },
              minLength: {
                value: 6,
                message: t.formErrors.verificationCode6Digits
              }
            })}
          />
          <ValidationHelperText
            error={!!errors.otp}
            helperText={errors?.otp?.message as string}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <CountDown t={t} actionFunc={sendOtpAgain} amount={120} />
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.2}
            sx={{ fontWeight: 600 }}
          >
            <EditCalendarIcon />
            <Link href="" onClick={() => setStep("data")}>
              {t.general.edit}
            </Link>
          </Stack>
        </Stack>
      </Box>
    </form>
  )
}

export default VerifyForm
