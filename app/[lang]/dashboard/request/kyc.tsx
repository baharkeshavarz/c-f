import React from 'react'
import HorizontalLinearStepper from "../components/kyc/HorizontalLinearStepper"
import LayoutWrapper from '@/components/layout/layout-wrapper'
import { TranslateProps } from '@/types'

const Request = ({ t }: TranslateProps) => {
  return (
    <LayoutWrapper>
       <HorizontalLinearStepper t={t}/>
    </LayoutWrapper>
  )
}

export default Request
