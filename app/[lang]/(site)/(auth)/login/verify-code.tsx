import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react"
import VerifyForm from "@/components/common/otp/verify-form"
import MuiButton from "@/components/common/button";
import AuthHeader from "@/components/auth/header";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

interface VerifyCodeProps {
  t: any;
  mobile: string;
  setStep: Dispatch<SetStateAction<string>>,
}

const VerifyCode = ({t, setStep, mobile } : VerifyCodeProps) => {
  const [status, setStatus] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))
  return (
    <>
     <AuthHeader
          page="login"
          title={t.messages.confirmCode}
          subTitle= {`${t.messages.verificationCodePhone}: ${mobile}`}
          icon={ThumbUpOffAltIcon}
     />
      <VerifyForm
          t={t}
          setStep={setStep}
          receiveData={mobile}
          isMobile={isMobile}
          page="login"
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
