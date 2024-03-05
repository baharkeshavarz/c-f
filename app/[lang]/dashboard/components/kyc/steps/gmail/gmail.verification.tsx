"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useMediaQuery } from "@mui/material"
import GetData from "./get-data"
import VerifyForm from "@/components/common/otp/verify-form"
import { TranslateProps } from "@/types"

interface GmailVerificationProps {
  t : TranslateProps,
  setActiveStep: Dispatch<SetStateAction<number>>,
}

const GmailVerification = ({ t, setActiveStep }: GmailVerificationProps) => {
  const [step, setStep] = useState("data")
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))

  return (
    <>
      {step === "data" && <GetData t={t} isMobile={isMobile} setStep={setStep} />}
      {step === "verify" && (
        <VerifyForm
          t={t}
          isMobile={isMobile}
          setStep={setStep}
          page="gmail"
          setActiveStep={setActiveStep}
        />
      )}
    </>
  )
}

export default GmailVerification
