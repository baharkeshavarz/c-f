"use client"

import MainCard from "@/components/common/main-card"
import { Dispatch, SetStateAction, useState } from "react"
import { useMediaQuery } from "@mui/material"
import GetData from "./get-data"
import VerifyForm from "@/components/common/otp/verify-form"

interface GmailVerificationProps {
  setActiveStep: Dispatch<SetStateAction<number>>
}

const GmailVerification = ({ setActiveStep }: GmailVerificationProps ) => {
  const [step, setStep] = useState("data")
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))

  return (
    <MainCard sx={{ margin: 2 }}>
        {step === "data" && <GetData isMobile={isMobile} setStep={setStep}/>}
        {step === "verify" && <VerifyForm isMobile={isMobile} setStep={setStep} page="gmail" setActiveStep={setActiveStep}/>}
    </MainCard>
  )
}

export default GmailVerification
