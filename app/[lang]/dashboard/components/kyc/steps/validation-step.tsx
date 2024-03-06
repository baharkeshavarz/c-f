"use client"

import Box from "@mui/material/Box"
import { Grid, Typography, useTheme } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import KycActions from "../kyc-actions"

interface ValiadationStepProps {
  t : any,
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>
}

const ValiadationStep = ({ t, activeStep, setActiveStep }: ValiadationStepProps) => {
  const theme = useTheme()
  // Handle Next
   const handleNext = () => {
     setActiveStep(prevActiveStep => prevActiveStep + 1)
   }

  // Handle Back
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  return (
    <Box sx={{
            width: "100%",
            display: "flex",     
            background: "white",
            borderRadius: "4px",
            marginBottom: 3,
        }}>

     <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <Typography sx={{ py: 2 }}>
                The valiation has not happened yet.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <KycActions
              t={t} 
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ValiadationStep
