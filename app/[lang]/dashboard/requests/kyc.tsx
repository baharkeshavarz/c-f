import React from 'react'
import VarticalLinearStepper from "../components/kyc/steps/vertical-stepper"
import LayoutWrapper from '@/components/layout/layout-wrapper'
import { TranslateProps } from '@/types'
import KycHeader from '../components/kyc/kyc-header'

const Request = ({ t }: TranslateProps) => {
  return (
    <LayoutWrapper>
      <KycHeader 
          title={t.kyc.kycHeader}
          subTitle={t.kyc.kycHeaderSub}
          icon={true}
      />
      <VarticalLinearStepper t={t}/>
    </LayoutWrapper>
  )
}

export default Request
