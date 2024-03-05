"use client"

import TextFieldInput from "@/components/common/inputs/text-input"
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SelectBoxInput from "@/components/common/inputs/select-box"
import KycActions from "../kyc-actions"

interface FinancialDeclarationProps {
  t : any,
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>
}

const FinancialDeclaration = ({ t, activeStep, setActiveStep }: FinancialDeclarationProps) => {
  const [status, setStatus] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Handle Financial Infor
  const handleFinancial: SubmitHandler<FieldValues> = async data => {
    const val = data
    console.log("data", data)
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  
  // Handle Back
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <form onSubmit={handleSubmit(handleFinancial)}>
      <Box sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                width: isMobile ? "100%" : "80%",
                marginX: "auto",
                marginY: 1
           }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldInput
              name="averageSalary"
              label={t.forms.averageSalary}
              isRequired={true}
              type="number"
              register={register}
              maxLength={50}
              minLength={5}
              fullWidth={isMobile}
              icon={AttachMoneyIcon}
              t={t}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextFieldInput
              name="Monthly Installments"
              label={t.forms.monthlyInsultment}
              type="number"
              isRequired={true}
              register={register}
              maxLength={50}
              minLength={5}
              fullWidth={isMobile}
              icon={AttachMoneyIcon}
              t={t}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
             <SelectBoxInput label={t.forms.jobStatus} options={[]} />
          </Grid>
      
          <Grid item xs={12} sm={12} md={12}>
            <KycActions
                t={t} 
                activeStep={activeStep}
                handleBack={handleBack}
            />
          </Grid>
        </Grid>

      </Box>
    </form>
  )
}

export default FinancialDeclaration