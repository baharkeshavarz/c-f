"use client"

import React, { Dispatch, SetStateAction, useState } from "react"
import FileUploader from "@/components/common/file-uploader"
import { Box, Grid, Stack } from "@mui/material"

interface UploadDocumentsProps {
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const UploadDocuments = ({ setActiveStep }: UploadDocumentsProps) => {
  const [passport, setPassport] = useState()
  const [nationalCode, setNationalCode] = useState()

  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FileUploader
            setFile={setPassport}
            title="Passport"
            subTitle="Please upload your passport photo"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FileUploader
            setFile={setNationalCode}
            title="National ID"
            subTitle="Please upload your National ID photo"
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default UploadDocuments
