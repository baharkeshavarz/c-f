import React, { Dispatch, SetStateAction } from 'react'

interface FinancialDeclarationProps {
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const FinancialDeclaration = ({setActiveStep}: FinancialDeclarationProps) => {
  return (
    <div>
      FinancialDeclaration
    </div>
  )
}

export default FinancialDeclaration
