import React, { Dispatch, SetStateAction } from 'react'

interface PersonalInformationProps {
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const PersonalInformation = ({setActiveStep}: PersonalInformationProps) => {
  return (
    <div>
      PersonalInformation
    </div>
  )
}

export default PersonalInformation
