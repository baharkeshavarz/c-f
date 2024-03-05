import MuiButton from '@/components/common/button'
import { Box, useTheme } from '@mui/material'
import React from 'react'

interface KycActionsProps {
  t: any;
  activeStep: number;
  handleNext?: any,
  handleBack?: any,
}

const KycActions = ({ t, activeStep, handleNext={}, handleBack={}}: KycActionsProps) => {
  const theme = useTheme()
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      pt: 2
    }}
  >
    { activeStep > 0 ? (
        <MuiButton
            fullWidth={false}
            onClick={handleBack}
            variant="text"
            sx={{
              marginLeft: 1,
              marginRight: 1,
            }}
        >
         {t.kyc.backStep}
        </MuiButton>
      ) : "" }
    <MuiButton
      sx={{
        background: `${theme.palette.common.black} !important`,
        color: theme.palette.primary.main
      }}
      onClick={handleNext}
      fullWidth={false}
    >
      {t.kyc.nextStep}
    </MuiButton>
  </Box>
  )
}

export default KycActions
