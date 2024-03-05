import React from 'react'
import { Box, CircularProgress } from '@mui/material';

interface LoadingProps {
    size?: number;
}

const Loading = ({ size= 25 }: LoadingProps) => {
  return (
     <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
       }}>
       <CircularProgress size={size} color="info" />
    </Box>
  )
}

export default Loading
