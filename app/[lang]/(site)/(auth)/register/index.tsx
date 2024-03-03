"use client"

import LayoutWrapper from "@/components/layout/layout-wrapper"
import { Grid } from "@mui/material"
import MainCard from "@/components/common/main-card"
import { TranslateProps } from "@/types"
import RegisterForm from "./register-form"

const Register = ({ t }: TranslateProps) =>{
 return (
    <LayoutWrapper>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ margin: 5, minHeight: "50vh" }}
        >
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <MainCard shadow={1} sx={{ borderRadius: "8px", p: 3 }}>
             <RegisterForm t={t} />
          </MainCard>
        </Grid>   
      </Grid>
    </LayoutWrapper>
  )
}

export default Register
