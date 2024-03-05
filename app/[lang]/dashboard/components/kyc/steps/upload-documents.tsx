"use client"

import React, { Dispatch, SetStateAction, useState } from "react"
import FileUploader from "@/components/common/file-uploader"
import { Box, Grid } from "@mui/material"
import { TranslateProps } from "@/types"

interface UploadDocumentsProps {
  t : any,
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const UploadDocuments = ({ t, setActiveStep }: UploadDocumentsProps) => {
  const [passport, setPassport] = useState("")
  const [nationalCode, setNationalCode] = useState("")

  console.log("passport", passport);
  console.log("nationalCode", nationalCode);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FileUploader
            t={t}
            setFile={setPassport}
            title={t.forms.passport}
            subTitle={t.messages.insertPassport}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FileUploader
            t={t}
            setFile={setNationalCode}
            title={t.forms.nationalID}
            subTitle={t.messages.insertNationalID}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default UploadDocuments
