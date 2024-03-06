"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Typography from "@mui/material/Typography"
import { Grid, Stack, useTheme } from "@mui/material"
import { TranslateProps } from "@/types"
import PersonalInformation from "./steps/personal-information"
import GmailVerification from "./steps/gmail/gmail.verification"
import UploadDocuments from "./steps/upload-documents"
import FinancialDeclaration from "./steps/financial-declaration"

const VarticalLinearStepper = ({ t }: TranslateProps) => {
  const steps = [t.kyc.step1, t.kyc.step2, t.kyc.step3, t.kyc.step4]
  const stepsInfo = [
    t.kyc.step1Info,
    t.kyc.step2Info,
    t.kyc.step3Info,
    t.kyc.step4Info
  ]
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(1)
  return (
    <Box sx={{
            width: "100%",
            display: "flex",     
            background: "white",
            borderRadius: "4px",
            marginBottom: 3,
        }}>
      <Grid container spacing={1} margin={1}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stepper
            activeStep={activeStep}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: 4,
              height: "21rem"
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
                        ? theme.palette.primary.main
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
                      color: "brown.500" // circle color (ACTIVE)
                    },
                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                      {
                        color: "common.black" // Just text label (ACTIVE)
                      },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: theme.palette.common.white // circle's number (ACTIVE)
                    }
                  }}
                >
                  <StepLabel {...labelProps}>
                    <Stack>
                      <Typography variant="subtitle1Bold">{label}</Typography>
                      <Typography variant="caption">
                        {stepsInfo[index]}
                      </Typography>
                    </Stack>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Stack
              sx={{
                display: "flex",
                py: 1,
                px: 2,
                borderLeft: 1,
                borderColor: theme.palette.grey[100],
              }}
            >
              <Typography
                variant="subtitle1Bold"
                color={theme.palette.grey[600]}
                paddingX={1.5}
              >
                {t.kyc.step} {activeStep + 1}/{steps.length}: {steps[activeStep]}
              </Typography>

              <Box sx={{ px: 1.5 }}>
                {activeStep === 0 && (
                  <GmailVerification t={t} activeStep={0} setActiveStep={setActiveStep} />
                )}
                {activeStep === 1 && (
                  <PersonalInformation t={t} activeStep={1} setActiveStep={setActiveStep} />
                )}
                {activeStep === 2 && (
                  <UploadDocuments t={t} activeStep={2} setActiveStep={setActiveStep} />
                )}
                {activeStep === 3 && (
                  <FinancialDeclaration t={t} activeStep={3} setActiveStep={setActiveStep} />
                )}
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default VarticalLinearStepper
