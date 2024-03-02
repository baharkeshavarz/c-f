"use client"

import LayoutWrapper from "@/components/layout/layout-wrapper"
import LoginForm from "./loginForm"
import { Box, Grid } from "@mui/material"
import MainCard from "@/components/common/main-card"
import { TranslateProps } from "@/types"


const Login = ({ t }: TranslateProps) =>{
 return (
    <LayoutWrapper>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ margin: 5, minHeight: "50vh" }}   //minHeight: "100vh"
        >
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <MainCard shadow={1} sx={{ borderRadius: "8px", p: 3 }}>
             <LoginForm t={t} />
          </MainCard>
        </Grid>   
      </Grid>
    </LayoutWrapper>
  )
}

export default Login
