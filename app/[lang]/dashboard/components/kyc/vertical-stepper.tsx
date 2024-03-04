"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Grid, Stack, useTheme } from "@mui/material"
import { TranslateProps } from "@/types"
import MuiButton from "@/components/common/button"
import PersonalInformation from "./steps/personal-information"
import GmailVerification from "./steps/gmail/gmail.verification"
import UploadDocuments from "./steps/upload-documents"
import FinancialDeclaration from "./steps/financial-declaration"
import MainCard from "@/components/common/main-card"

const VarticalLinearStepper = ({ t }: TranslateProps) => {
  const steps = [t.kyc.step1, t.kyc.step2, t.kyc.step3, t.kyc.step4]
  const stepsInfo = [
    t.kyc.step1Info,
    t.kyc.step2Info,
    t.kyc.step3Info,
    t.kyc.step4Info
  ]
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid container spacing={2} margin={1}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Stepper
            activeStep={activeStep}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: 4,
              height: "20rem"
            }}
          >
            {steps.map((label, index) => {
              const stepProps = {}
              const labelProps = {}
              return (
                <Step
                  key={label}
                  {...stepProps}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "100%",
                    background:
                      activeStep === index
                        ? theme.palette.common.black
                        : theme.palette.grey[200],
                    p: 2,
                    m: 0,
                    borderRadius: 2,
                    fontWeight: 700,
                    "& .MuiStepLabel-root .Mui-completed": {
                      color: theme.palette.grey[500] // circle color (COMPLETED)
                    },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                      {
                        color: "grey.700" // Just text label (COMPLETED)
                      },
                    "& .MuiStepLabel-root .Mui-active": {
                      color: theme.palette.common.white // circle color (ACTIVE)
                    },
                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                      {
                        color: "common.black" // Just text label (ACTIVE)
                      },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "black" // circle's number (ACTIVE)
                    }
                  }}
                >
                  <StepLabel {...labelProps}>
                    <Typography variant="h6">{label}</Typography>
                    <Typography variant="caption">
                      {stepsInfo[index]}
                    </Typography>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </Grid>
        <Grid item xs={12} md={8}>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  background: "white",
                  borderRadius: "8px",
                  mt: 2
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    p: 1
                  }}
                >
                  <Typography
                    variant="h5"
                    color={theme.palette.grey[600]}
                    sx={{ m: 2, mb: 0 }}
                  >
                    Step {activeStep + 1}/{steps.length}
                  </Typography>
                  <MainCard sx={{ margin: 2 }}>
                    {activeStep === 0 && (
                      <GmailVerification setActiveStep={setActiveStep} />
                    )}
                    {activeStep === 1 && (
                      <PersonalInformation setActiveStep={setActiveStep} />
                    )}
                    {activeStep === 2 && (
                      <UploadDocuments setActiveStep={setActiveStep} />
                    )}
                    {activeStep === 3 && (
                      <FinancialDeclaration setActiveStep={setActiveStep} />
                    )}
                  </MainCard>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    pt: 2
                  }}
                >
                  <MuiButton
                    disabled={activeStep === 0}
                    fullWidth={false}
                    onClick={handleBack}
                    variant="outlined"
                    sx={{
                      mx: 1
                    }}
                  >
                    Back
                  </MuiButton>
                  <MuiButton
                    sx={{
                      background: `${theme.palette.common.black} !important`,
                      color: theme.palette.primary.main
                    }}
                    onClick={handleNext}
                    fullWidth={false}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </MuiButton>
                </Box>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default VarticalLinearStepper
