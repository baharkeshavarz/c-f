import React from 'react'
import VarticalLinearStepper from "../components/kyc/vertical-stepper"
import LayoutWrapper from '@/components/layout/layout-wrapper'
import { TranslateProps } from '@/types'

const Request = ({ t }: TranslateProps) => {
  return (
    <LayoutWrapper>
       <VarticalLinearStepper t={t}/>
    </LayoutWrapper>
  )
}

export default Request
