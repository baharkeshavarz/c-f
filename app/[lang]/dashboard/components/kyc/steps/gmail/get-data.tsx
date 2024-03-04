"use client"

import MuiButton from '@/components/common/button'
import TextFieldInput from '@/components/common/inputs/text-input'
import ValidationHelperText from '@/components/common/validation-helper-text'
import { Box, useTheme } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import MarkunreadIcon from '@mui/icons-material/Markunread';

interface GetDataProps{
    isMobile: boolean;
    setStep: Dispatch<SetStateAction<string>>;
}

const GetData = ({ isMobile, setStep }: GetDataProps) => {
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
  setStep("verify");
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
        label="Gmail Address"
        isRequired={true}
        register={register}
        maxLength={50}
        minLength={5}
        fullWidth={isMobile}
        icon={MarkunreadIcon}
      />
      <ValidationHelperText
        error={!!errors?.gmailAddress}
        helperText={(errors?.gmailAddress?.message as string) || ""}
      />
      <MuiButton
        sx={{ background: `${theme.palette.primary.main} !important` }}
        loading={status === "loading"}
      >
        Validate
      </MuiButton>
    </Box>
  </form>
  )
}

export default GetData
