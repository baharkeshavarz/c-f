"use client"

import MainCard from "@/components/common/main-card"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import MuiButton from "@/components/common/button"
import ValidationHelperText from "@/components/common/validation-helper-text"
import TextFieldInput from "@/components/common/inputs/text-input"
import { Box, useMediaQuery, useTheme } from "@mui/material"

const GmailVerification = () => {
  const [status, setStatus] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))
  console.log("isMobile", isMobile)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Verification
  const handleVerification: SubmitHandler<FieldValues> = async data => {
    const val = data.gmailAddress
    console.log("data", data)
  }

  return (
    <MainCard sx={{ margin: 2 }}>
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
          />
          <ValidationHelperText
            error={!!errors?.gmailAddress}
            helperText={(errors?.gmailAddress?.message as string) || ""}
          />
          <MuiButton
            sx={{ bgcolor: `${theme.palette.primary.main} !important` }}
            loading={status === "loading"}
          >
            Validate
          </MuiButton>
        </Box>
      </form>
    </MainCard>
  )
}

export default GmailVerification
