"use client"

import React, { Dispatch, SetStateAction, useState } from "react"
import FileUploader from "@/components/common/file-uploader"
import { Box, Grid } from "@mui/material"
import KycActions from "../kyc-actions"

interface UploadDocumentsProps {
  t : any,
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>
}

const UploadDocuments = ({ t ,activeStep, setActiveStep }: UploadDocumentsProps) => {
  const [passport, setPassport] = useState("")
  const [nationalCode, setNationalCode] = useState("")

  console.log("passport", passport);
  console.log("nationalCode", nationalCode);

  // Handle Next
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  // Handle Back
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <FileUploader
            t={t}
            setFile={setPassport}
            title={t.forms.passport}
            subTitle={t.messages.insertPassport}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FileUploader
            t={t}
            setFile={setNationalCode}
            title={t.forms.nationalID}
            subTitle={t.messages.insertNationalID}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
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

export default UploadDocuments
