import React, { Dispatch, SetStateAction } from 'react'

interface UploadDocumentsProps {
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const UploadDocuments = ({setActiveStep}: UploadDocumentsProps) => {
  return (
    <div>
      UploadDocuments
    </div>
  )
}

export default UploadDocuments
