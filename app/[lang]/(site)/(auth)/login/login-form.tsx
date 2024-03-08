"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Grid, Stack, useTheme } from "@mui/material"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import MuiButton from "@/components/common/button"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { ApiResponse } from "@/types"
import AuthHeader from "@/components/auth/header"
import AuthFooter from "@/components/auth/footer"
import { toast } from "react-toastify"
import useAuthenticationStore from "@/store/authentication"
import PhoneNumberInput from "@/components/common/inputs/phone-number"
import { LockClosedIcon } from "@heroicons/react/24/solid"
import SelectBoxInput from "@/components/common/inputs/select-box"
import { useCountriesStore } from "@/store/countries"
import Loading from "@/components/common/loading/loading"
import CommonServices from "@/services/common"

interface LoginFormProps {
  t: any
  setStep: Dispatch<SetStateAction<string>>
  mobile: string
  setMobile: Dispatch<SetStateAction<string>>
  code: string
  setCode: Dispatch<SetStateAction<string>>
}

const LoginForm = ({
  t,
  setStep,
  mobile,
  setMobile,
  code,
  setCode
}: LoginFormProps) => {
  const [status, setStatus] = useState("")
  const [countriesCode, setCountriesCode] = useState([])
  const { doLogin } = useAuthenticationStore()
  const theme = useTheme()
  const { countriesInfo, onSetCountriesCodeList } = useCountriesStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Login
  const handleLogin: SubmitHandler<FieldValues> = async data => {
    const telephone = data.phoneNumber
    const phoneNumber = `${code}${telephone}`
    setMobile(telephone)
    setStatus("loading")
    try {
      const response: ApiResponse = await doLogin(phoneNumber)
      const { status, data } = response
      if (status === 200) {
        setStatus("done")
        if (!data?.succeed) {
          toast.error(data?.message)
        } else {
          setStep("verify")
          toast.success(t.messages.sentSms)
        }
      }
    } catch (error) {
      setStatus("error")
    }
  }

  // Get Countries Code
  useEffect(() => {
    setStatus("loading")
    const getCountriesCodeFunc = async () => {
      const response = await CommonServices.getCountriesCode()
      if (response.status === 200) {
        let codes: never[] = []
        if (response.data.value) {
          response.data.value.map((item: any) => codes.push(item.code as never))
        }
        setCountriesCode(codes)
        setStatus("false")
        onSetCountriesCodeList({ ...countriesInfo, countriesCodeList: codes })
      }
    }
    getCountriesCodeFunc()
  }, [])

  if (status === "loading") {
    return <Loading />
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

        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={4} md={4}>
            <SelectBoxInput
              label={t.forms.code}
              value={code}
              options={countriesCode}
              onChange={(_, item: any) => {
                setCode(item)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <PhoneNumberInput
              register={register}
              name="phoneNumber"
              label={t.forms.mobile}
              t={t}
              icon={true}
            />
          </Grid>
        </Grid>
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
        // disabled={mobile === "" || code === ""}
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
