"use client"

import { useState } from "react"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, useTheme } from '@mui/material';
import { TranslateProps } from '@/types';
import MuiButton from "@/components/common/button";
import PersonalInformation from "./steps/personal-information";
import GmailVerification from "./steps/gmail.verification";
import UploadDocuments from "./steps/upload-documents";
import FinancialDeclaration from "./steps/financial-declaration";

const VarticalLinearStepper = ({ t }: TranslateProps) => {
  const steps = [t.kyc.step1, t.kyc.step2, t.kyc.step3, t.kyc.step4];
  const stepsInfo = [t.kyc.step1Info, t.kyc.step2Info, t.kyc.step3Info, t.kyc.step4Info];
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", mb: 2, }}>
       <Grid container spacing={2} margin={1}>
            <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center"}}>
                <Stepper
                   activeStep={activeStep} 
                   sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                   {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                        <Step
                          key={label}
                          {...stepProps}
                           sx={{ 
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "flex-end",
                           width: "100%",
                           background: activeStep === index ? theme.palette.primary.main : theme.palette.grey[200],
                           p: 2,
                           mt: 2,
                           borderRadius: 2,
                           fontWeight: 700,
                           '& .MuiStepLabel-root .Mui-completed': {
                            color: theme.palette.primary.dark, // circle color (COMPLETED)
                          },
                          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                            {
                              color: 'grey.700', // Just text label (COMPLETED)
                            },
                          '& .MuiStepLabel-root .Mui-active': {
                            color: 'black', // circle color (ACTIVE)
                          },
                          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                            {
                              color: 'common.white', // Just text label (ACTIVE)
                            },
                          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                            fill: 'white', // circle's number (ACTIVE)
                          },
                           }}>
                          <StepLabel {...labelProps}>
                             <Typography variant="h6">{label}</Typography>
                             <Typography variant="caption">{stepsInfo[index]}</Typography>
                           </StepLabel>
                        </Step>
                        );
                   })}
                </Stepper>
            </Grid>
            <Grid item xs={12} md={8}>
               {activeStep === steps.length ? (
                    <>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </>
                    ) : (
                    <>
                      <Box sx={{ background: "white", borderRadius: "8px", height: "100%", mt: 2,}}>
                        <Box sx={{ display: "flex", p: 1, height: "70%" }}>
                           <Typography variant="caption" sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}/{steps.length}</Typography>
                           {activeStep === 0 && <GmailVerification/>}
                           {activeStep === 1 && <PersonalInformation/>}
                           {activeStep === 2 && <UploadDocuments/>}
                           {activeStep === 3 && <FinancialDeclaration/>}

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", pt: 2, }}>
                          <MuiButton
                            disabled={activeStep === 0}
                            fullWidth={false}
                            onClick={handleBack}
                            sx={{ mx: 1, bgcolor: `${theme.palette.secondary.main} !important` }}
                          >
                            Back
                          </MuiButton>
                          <MuiButton
                             onClick={handleNext}
                             fullWidth={false}
                             
                           >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </MuiButton>
                      </Box>
                      </Box>

                   </>
            )}
           </Grid>
      </Grid>
    </Box>
  );
}

export default VarticalLinearStepper;