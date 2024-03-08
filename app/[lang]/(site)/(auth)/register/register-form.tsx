"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Grid, Stack, useTheme } from "@mui/material"
import MuiButton from "@/components/common/button"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { toast } from "react-toastify"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useAuthenticationStore from "@/store/authentication"
import { ApiResponse } from "@/types"
import PhoneNumberInput from "@/components/common/inputs/phone-number"
import SelectBoxInput from "@/components/common/inputs/select-box"
import TextFieldInput from "@/components/common/inputs/text-input"
import Loading from "@/components/common/loading/loading"
import { useCountriesStore } from "@/store/countries"
import CommonServices from "@/services/common"
import AuthFooter from "@/components/auth/footer"
import AuthHeader from "@/components/auth/header"
import { IdentificationIcon } from "@heroicons/react/24/solid"

interface RegisterFormProps {
  t: any
  setStep: Dispatch<SetStateAction<string>>
  setMobile: Dispatch<SetStateAction<string>>
  code: string
  setCode: Dispatch<SetStateAction<string>>
  setToken: Dispatch<SetStateAction<string>>
}

const RegisterForm = ({
  t,
  setStep,
  setMobile,
  code,
  setCode,
  setToken
}: RegisterFormProps) => {
  const {
    countriesInfo,
    onSetCountriesList,
    onSetCountriesCodeList,
    onSetNationalitiesList
  } = useCountriesStore()
  const [status, setStatus] = useState("")
  const [countriesCode, setCountriesCode] = useState([])
  const [countriesList, setCountriesList] = useState([])
  const [nationalities, setNationalities] = useState([])
  const [countryCode, setCountryCode] = useState("")
  const [nationality, setNationality] = useState(null)
  const [location, setLocation] = useState(null)
  const [state, setState] = useState("")
  const { doRegister } = useAuthenticationStore()
  const theme = useTheme()

  // Use Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Register
  const handleRegister: SubmitHandler<FieldValues> = async values => {
    setState("loading")
    const formData = {
      prefixMobileNumber: countryCode,
      mobileNumber: values.phoneNumber,
      nationalCode: values.nationalCode,
      nationality: nationality!.id as string,
      location: location!.id as string
    }
    console.log("formData", formData)

    try {
      const response: ApiResponse = await doRegister(formData)
      const { status, data } = response
      if (status === 200) {
        setStatus("done")
        if (!data?.succeed) {
          toast.error(data?.message)
        } else {
          setMobile(values.phoneNumber)
          setCode(countryCode)
          setToken(data.value)
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
    if (!countriesInfo.countriesCodeList) {
      setCountriesCode(countriesInfo.countriesCodeList)
    } else {
      setStatus("loading")
      const getCountriesCodeFunc = async () => {
        const response = await CommonServices.getCountriesCode()
        if (response.status === 200) {
          let codes: never[] = []
          if (response.data.value) {
            response.data.value.map((item: any) =>
              codes.push(item.code as never)
            )
          }
          setCountriesCode(codes)
          setStatus("false")
          onSetCountriesCodeList({ ...countriesInfo, countriesCodeList: codes })
        }
      }
      getCountriesCodeFunc()
    }
  }, [])

  // Get Nationalities
  useEffect(() => {
    setStatus("loading")
    const getNationalitiesFunc = async () => {
      const response = await CommonServices.getNationalityList()
      if (response.status === 200) {
        let codes: any = []
        if (response.data.value) {
          response.data.value.map((item: any) =>
            codes.push({ id: item.id, label: item.name })
          )
        }
        setNationalities(codes)
        setStatus("false")
        onSetNationalitiesList({
          ...countriesInfo,
          nationalitiesList: codes
        })
      }
    }
    getNationalitiesFunc()
  }, [])

  // Get Countries
  useEffect(() => {
    setStatus("loading")
    const getCountriesFunc = async () => {
      const response = await CommonServices.getCountriesList()
      if (response.status === 200) {
        let codes: any = []
        if (response.data.value) {
          response.data.value.map((item: any) =>
            codes.push({ id: item.id, label: item.name })
          )
        }
        setCountriesList(codes)
        setStatus("false")
        onSetCountriesList({
          ...countriesInfo,
          countriesList: codes
        })
      }
    }
    getCountriesFunc()
  }, [])

  if (status === "loading") {
    return <Loading />
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Stack mt={2}>
        <AuthHeader
          page="register"
          title={t.general.register}
          subTitle={t.register.headerMsg}
          icon={IdentificationIcon}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <SelectBoxInput
              label={t.forms.code}
              value={code}
              options={countriesCode}
              onChange={(_, item: any) => {
                setCountryCode(item)
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
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={12} md={12}>
            <SelectBoxInput
              label={t.forms.nationality}
              value={nationality}
              options={nationalities}
              onChange={(_, item: any) => {
                setNationality(item)
              }}
            />
          </Grid>
          <ValidationHelperText
            error={!!errors?.nationality}
            helperText={(errors?.nationality?.message as string) || ""}
          />

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextFieldInput
              name="nationalCode"
              label={t.forms.nationalCode}
              isRequired={true}
              register={register}
              maxLength={50}
              minLength={5}
              t={t}
            />
            <ValidationHelperText
              error={!!errors?.nationalCode}
              helperText={(errors?.nationalCode?.message as string) || ""}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SelectBoxInput
              label={t.forms.country}
              value={location}
              options={countriesList}
              onChange={(_, item: any) => {
                setLocation(item)
              }}
            />
            <ValidationHelperText
              error={!!errors?.location}
              helperText={(errors?.location?.message as string) || ""}
            />
          </Grid>
        </Grid>
      </Stack>
      <MuiButton
        sx={{
          background: `${theme.palette.common.black} !important`,
          color: theme.palette.primary.main
        }}
        loading={state === "loading"}
      >
        {t.general.register}
      </MuiButton>
      <AuthFooter
        page="register"
        pageLink="login"
        title={t.general.login}
        subTitle={t.login.dontHaveAccount}
      />
    </form>
  )
}

export default RegisterForm
