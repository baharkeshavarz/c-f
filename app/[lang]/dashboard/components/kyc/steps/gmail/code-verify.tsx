import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CodeVerify = () => {
  return (
    <>
    <Box sx={{ mt: 4 }}>
      <Stack direction='row' justifyContent='center' mb={1}>
        <Image width={70} src={} alt='mobile' priority />
      </Stack>
      <Typography textAlign='center' variant='h5' color='primary'>
        تایید کد
      </Typography>
      <Typography textAlign='center' variant='subtitle2' color='textSecondary'>
        کد ارسال شده به شماره موبایل <span style={{ fontWeight: "bold", fontSize: "13px" }}>{number}</span> را وارد
        نمایید
      </Typography>
    </Box>
    <VerifyForm page={page} mobileNumber={number} />
  </>
  )
}

export default CodeVerify
