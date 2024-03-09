"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useMediaQuery, Typography } from "@mui/material"
import GetData from "./get-data"
import VerifyForm from "@/components/common/otp/verify-form"
import KycActions from "../../kyc-actions"

interface GmailVerificationProps {
  t : any,
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>,
}

const GmailVerification = ({ t, activeStep, setActiveStep }: GmailVerificationProps) => {
  const [email, setEmail] = useState("")
  const [step, setStep] = useState("data")
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))

  return (
    <>
      {step === "data" && <GetData t={t} isMobile={isMobile} setStep={setStep} setEmail={setEmail}/>}
      {step === "verify" && (
        <>
        <Typography variant="subtitle1" color="textSecondary" sx={{ pt: 5 }}>
          {t.messages.verificationCodeEmail}: 
          <span style={{ fontWeight: "bold", fontSize: "14px" }}> {email} </span> 
        </Typography>

         <VerifyForm
            t={t}
            isMobile={isMobile}
            setStep={setStep}
            page="gmail"
            receiveData=""
            activeStep={activeStep}
            setActiveStep={setActiveStep}
        />
         <KycActions 
             t={t} 
             activeStep={activeStep}
        />
        </>
      )}
    </>
  )
}

export default GmailVerification
