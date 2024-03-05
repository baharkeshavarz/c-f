import { Box, Stack, Typography, Divider } from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg';

interface KycHeaderProps {
    title: string;
    subTitle: string;
    icon? : boolean;
}

const KycHeader = ({ title, subTitle, icon= false }: KycHeaderProps) => {
  return (
    <Stack spacing={1} margin={1} p={1}>
       <Box sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "center",
           }}>
          {icon && <HowToRegIcon/>}
          <Typography fontWeight="bold" variant="h5" color="grey">
              {title}
          </Typography>
       </Box>
      <Typography variant="subtitle2" color="textSecondary" mt={0.5}>
         {subTitle}
      </Typography>
      <Divider/>
    </Stack>
  )
}

export default KycHeader
