"use client"

import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SelectBoxInput from "@/components/common/inputs/select-box"
import KycActions from "../kyc-actions"
import ValidationHelperText from "@/components/common/validation-helper-text"
import CurrencyTextField from "@/components/common/inputs/currency-input"


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
    control,
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
      <Stack sx={{
                py: 2,
           }}>
        <Grid container spacing={2}>
           <Grid item xs={12} sm={12} md={6}>
             <SelectBoxInput label={t.forms.jobStatus} options={[]} />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <CurrencyTextField
              control={control}
              type="tel"
              name="averageSalary"
              label={t.forms.averageSalary}
              register={register}
              maxLength={11}
              minLength={5}
              icon={AttachMoneyIcon}
              t={t}
            />
           <ValidationHelperText
              error={!!errors?.averageSalary}
              helperText={(errors?.averageSalary?.message as string) || ""}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <CurrencyTextField
              control={control}
              name="monthlyInstallments"
              label={t.forms.monthlyInsultment}
              type="tel"
              register={register}
              maxLength={11}
              minLength={5}
              icon={AttachMoneyIcon}
              t={t}
            />
           
            <ValidationHelperText
              error={!!errors?.monthlyInstallments}
              helperText={(errors?.monthlyInstallments?.message as string) || ""}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <CurrencyTextField
              control={control}
              name="mortgageRepayment"
              label={t.forms.mortgageRepayment}
              type="tel"
              register={register}
              maxLength={11}
              minLength={5}
              icon={AttachMoneyIcon}
              t={t}
            />
           
            <ValidationHelperText
              error={!!errors?.mortgageRepayment}
              helperText={(errors?.mortgageRepayment?.message as string) || ""}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <KycActions
                t={t} 
                activeStep={activeStep}
                handleBack={handleBack}
            />
          </Grid>
        </Grid>
      </Stack>
    </form>
  )
}

export default FinancialDeclaration