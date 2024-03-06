"use client"

import TextFieldInput from "@/components/common/inputs/text-input"
import ValidationHelperText from "@/components/common/validation-helper-text"
import { Box } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import MarkunreadIcon from "@mui/icons-material/Markunread"
import KycActions from "../../kyc-actions"

interface GetDataProps {
  t: any,
  isMobile: boolean
  setStep: Dispatch<SetStateAction<string>>,
  setEmail: Dispatch<SetStateAction<string>>,
}

const GetData = ({ t, isMobile, setStep, setEmail }: GetDataProps) => {
  const [status, setStatus] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Verification
  const handleVerification: SubmitHandler<FieldValues> = async data => {
    const emailAddress = data.gmailAddress
    console.log("data", emailAddress)
    setEmail(emailAddress)
    setStep("verify")
  }

  return (
    <form onSubmit={handleSubmit(handleVerification)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingTop: 2,
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
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
