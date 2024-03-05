import SelectBoxInput from "@/components/common/inputs/select-box"
import TextFieldInput from "@/components/common/inputs/text-input"
import DateField from "@/components/common/inputs/date-field"
import { Grid, useTheme, useMediaQuery, Box } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import dynamic from "next/dynamic"
import Loading from "@/components/common/loading/loading"
import KycActions from "../kyc-actions"
import ValidationHelperText from "@/components/common/validation-helper-text"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';

interface PersonalInformationProps {
  t : any,
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>
}

const PersonalInformation = ({ t, activeStep, setActiveStep }: PersonalInformationProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"))
  const [status, setStatus] = useState("")

  const Map = dynamic(() => import("@/components/map-js"), {
    loading: () => <Loading/>,
    ssr: false
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  // Handle handlePersonalInfo
  const handlePersonalInfo: SubmitHandler<FieldValues> = async data => {
    setActiveStep(++activeStep);
    console.log("dataaaa", data)
  }

  // Handle Back
  const handleBack = () => {
     setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <form onSubmit={handleSubmit(handlePersonalInfo)}>
      <Box sx={{ py: 2 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextFieldInput
              name="name"
              label={t.forms.name}
              isRequired={true}
              register={register}
              maxLength={50}
              minLength={5}
              fullWidth={isMobile}
              t={t}
              icon={AssignmentIndIcon}
            />
           <ValidationHelperText
             error={!!errors?.name}
             helperText={(errors?.name?.message as string) || ""}
           />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextFieldInput
              name="family"
              label={t.forms.family}
              isRequired={true}
              register={register}
              maxLength={50}
              minLength={5}
              fullWidth={isMobile}
              t={t}
              icon={AssignmentIndIcon}
            />
            <ValidationHelperText
              error={!!errors?.family}
              helperText={(errors?.family?.message as string) || ""}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextFieldInput
              name="fatherName"
              label={t.forms.fatherName}
              isRequired={true}
              register={register}
              maxLength={50}
              minLength={5}
              fullWidth={isMobile}
              t={t}
              icon={AssignmentIndIcon}
            />
             <ValidationHelperText
              error={!!errors?.fatherName}
              helperText={(errors?.fatherName?.message as string) || ""}
            />
          </Grid>
          
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ position: "relative", zIndex: "555"}}>
            <DateField
              control={control}
              required
              isMobile={isMobile}
              label={t.forms.birthdate}
              name="birthdate"
            />
            <ValidationHelperText
              error={!!errors?.birthdate}
              helperText={(errors?.birthdate?.message as string) || ""}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
             <SelectBoxInput  
                 label={t.forms.province}
                 options={[]} 
             />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
               <SelectBoxInput      
                 label={t.forms.city}
                 options={[]} />
           </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextFieldInput
              name="address"
              label={t.forms.address}
              isRequired={true}
              register={register}
              maxLength={150}
              minLength={5}
              fullWidth={isMobile}
              t={t}
              icon={HomeIcon}
            />
             <ValidationHelperText
              error={!!errors?.address}
              helperText={(errors?.address?.message as string) || ""}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Map />
          </Grid>
        </Grid>
        <KycActions
            t={t} 
            activeStep={activeStep}
            handleBack={handleBack}
        />
      </Box>
    </form>
  )
}

export default PersonalInformation
