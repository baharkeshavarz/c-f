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
import MuiButton from "@/components/common/button"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { findLocalFromUrl } from "@/lib/url"

interface VerifyFormProps{
  page: string;
  isMobile: boolean;
  setStep?: Dispatch<SetStateAction<string>>;
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const VerifyForm = ({ page, isMobile, setStep, setActiveStep}: VerifyFormProps) => {
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);
  const { mobileNumber } = {}
  const router = useRouter()
  const { doVerifyLogin, doVerifyRegister, doLogin, resendRegisterOtp } = useAuthenticationStore()
  const [state, setState] = useState("")
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  // Handle Verify
  const handleVerify: SubmitHandler<FieldValues> = async data => {
    if (page === "register") {
      setState("loading")
      const registerData = {
        mobileNumber: mobileNumber,
        code: p2e(val?.otp),
        token: ""
      }
      doVerifyRegister(registerData)
        .then(response => {
          if (response?.status === 200) {
            if (!response?.data?.succeed) {
              setState("done")
              toast.error(response?.data?.message || "خطایی پیش آمده است")
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
      setState("loading")
      const loginData = {
        password: p2e(val?.otp),
        userName: mobileNumber
      }
      doVerifyLogin(loginData)
        .then(response => {
          if (response?.status === 200) {
            setState("done")
            if (!response?.data?.succeed) {
              toast.error(response?.data?.message || "خطایی پیش آمده است")
            } else {
              auth.login(response?.data?.value)
              auth.loadUser()
              auth.backToBeforeLogin(router)
              toast.success("خوش آمدید")
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

  const generateHref = () => {
    switch (page) {
     case "register":
        return `/${lang}/register?phone=${mobileNumber}`;
     case "login":
      return `/${lang}/login?phone=${mobileNumber}`;
     case "gmail":
        setStep("data")
        return `/${lang}/dashboard/request`;
     default:
        return "";
    }
  };

  return (
    <form onSubmit={handleSubmit(handleVerify)}>
      <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "70%",
            marginX: "auto",
            mt: 2,
            mb: 5,
          }}
        >
      <Stack>
        <TextField
          type="tel"
          autoFocus
          onKeyDown={onlyDigitsWithMaxLen(6)}
          onKeyUp={event => {
            if (event.target.value.length === 6) {
              handleSubmit(handleVerify)()
            }
          }}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              backgroundColor: alpha(theme.palette.grey[200], 0.5)
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
            required: "Verification code is mandatory",
            maxLength: {
              value: 6,
              message: "Verification code must be 6 digits"
            },
            minLength: {
              value: 6,
              message: "Verification code must be 6 digits"
            }
          })}
        />
        <ValidationHelperText error={!!errors.otp} helperText={errors?.otp?.message as string} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
        <CountDown actionFunc={sendOtpAgain} amount={3} />
        <Stack direction="row" alignItems="center" sx={{ fontWeight: 600}}>
         <ModeEditOutlineIcon size={19} color={theme.palette.secondary.main} />
          <Link
            href=""
            onClick={() => generateHref()}
          >
            Edit
          </Link>
        </Stack>
      </Stack>
      <MuiButton 
         sx={{ background: `${theme.palette.primary.main} !important` }}
         loading={state === "loading"}>
           Confirm Code
        </MuiButton>
      </Box>
    </form>
  )
}

export default VerifyForm
