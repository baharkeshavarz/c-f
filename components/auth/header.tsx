import { Box, Stack, Typography } from "@mui/material"
import {
    LockClosedIcon,
  } from "@heroicons/react/24/solid"

interface AuthHeaderProps {
    page: string;
    title: string;
    subTitle: string;
}

const AuthHeader = ({ page, title, subTitle }: AuthHeaderProps) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Stack direction='row' justifyContent='center' mb={1}>
         <LockClosedIcon className="h-10 w-10" />
      </Stack>
      <Typography textAlign='center' fontWeight='bold' variant='h5' color='primary'>
        {title}
      </Typography>
      <Typography textAlign='center' variant='subtitle2' color='textSecondary' mt={0.5}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default AuthHeader
