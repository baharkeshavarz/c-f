import { useMediaQuery, useTheme } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import VerifyForm from "@/components/common/otp/verify-form"
import MuiButton from "@/components/common/button"
import AuthHeader from "@/components/auth/header"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"

interface VerifyCodeProps {
  t: any
  code: string
  mobile: string
  token: string
  setStep: Dispatch<SetStateAction<string>>
}

const VerifyCode = ({ t, setStep, mobile, code, token }: VerifyCodeProps) => {
  const [status, setStatus] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))
  return (
    <>
      <AuthHeader
        title={t.messages.confirmCode}
        subTitle={`${t.messages.verificationCodePhone}: ${code} ${mobile}`}
        icon={ThumbUpOffAltIcon}
      />
      <VerifyForm
        t={t}
        setStep={setStep}
        receiveData={`${code} ${mobile}`}
        isMobile={isMobile}
        page="register"
        token={token}
      />
      <MuiButton
        sx={{
          background: `${theme.palette.common.black} !important`,
          color: theme.palette.primary.main
        }}
        loading={status === "loading"}
      >
        {t.messages.confirmCode}
      </MuiButton>
    </>
  )
}

export default VerifyCode
