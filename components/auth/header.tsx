import { Box, Stack, Typography } from "@mui/material"

interface AuthHeaderProps {
    page: string;
    icon: any;
    title: string;
    subTitle: string;
}

const AuthHeader = ({ page, icon, title, subTitle }: AuthHeaderProps) => {
  const Icon = icon;
  return (
    <Box sx={{ my: 2 }}>
      <Stack direction='row' justifyContent='center' mb={1}>
        <Icon className="h-10 w-10" />
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
