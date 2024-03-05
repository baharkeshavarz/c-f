"use client"

import TextFieldInput from "@/components/common/inputs/text-input"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { Box, useTheme } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import MarkunreadIcon from "@mui/icons-material/Markunread"
import KycActions from "../../kyc-actions"

interface GetDataProps {
  t: any,
  isMobile: boolean
  setStep: Dispatch<SetStateAction<string>>
}

const GetData = ({ t, isMobile, setStep }: GetDataProps) => {
  const [status, setStatus] = useState("")
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Verification
  const handleVerification: SubmitHandler<FieldValues> = async data => {
    const val = data.gmailAddress
    console.log("data", data)
    setStep("verify")
  }

  return (
    <form onSubmit={handleSubmit(handleVerification)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100%" : "70%",
          marginX: "auto",
          marginY: 1
        }}
      >
        <TextFieldInput
          name="gmailAddress"
          label={t.forms.gmail}
          isRequired={true}
          register={register}
          maxLength={50}
          minLength={5}
          fullWidth={isMobile}
          icon={MarkunreadIcon}
          t={t}
        />
        <ValidationHelperText
          error={!!errors?.gmailAddress}
          helperText={(errors?.gmailAddress?.message as string) || ""}
        />
        <KycActions
            t={t} 
            activeStep={0}
        />
      </Box>
    </form>
  )
}

export default GetData
