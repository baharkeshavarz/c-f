"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import FileUploader from '@/components/common/file-uploader'
import { Stack } from '@mui/material'

interface UploadDocumentsProps {
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const UploadDocuments = ({setActiveStep}: UploadDocumentsProps) => {
  const [passport, setPassport] = useState()
  const [nationalCode, setNationalCode] = useState()

  return (
    <Stack spacing={5} margin={3}>
     <FileUploader setFile={setPassport} title="Passport" subTitle="Please upload your passport photo" />
     <FileUploader setFile={setNationalCode} title="National ID" subTitle="Please upload your National ID photo" />
    </Stack>
  )
}

export default UploadDocuments
