import SelectBoxInput from "@/components/common/inputs/select-box"
import TextFieldInput from "@/components/common/inputs/text-input"
import DateField from "@/components/common/inputs/date-field"
import { Grid, useTheme, useMediaQuery, Box } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import MuiButton from "@/components/common/button"
import dynamic from "next/dynamic"
import { TranslateProps } from "@/types"
import Loading from "@/components/common/loading/loading"

interface PersonalInformationProps {
  t : any,
  setActiveStep?: Dispatch<SetStateAction<number>>
}

const PersonalInformation = ({ t, setActiveStep }: PersonalInformationProps) => {
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
    const val = data.gmailAddress
    console.log("data", data)
  }

  return (
    <form onSubmit={handleSubmit(handlePersonalInfo)}>
      <Box sx={{ p: 2 }}>
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

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ position: "relative", zIndex: "555"}}>
            <DateField
              control={control}
              required
              isMobile={isMobile}
              label={t.forms.birthdate}
              name="date"
            />
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
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Map />
          </Grid>
        </Grid>
        <MuiButton
          sx={{
            background: `${theme.palette.common.black} !important`,
            color: theme.palette.primary.main
          }}
          loading={status === "loading"}
        >
          Insert
        </MuiButton>
      </Box>
    </form>
  )
}

export default PersonalInformation
