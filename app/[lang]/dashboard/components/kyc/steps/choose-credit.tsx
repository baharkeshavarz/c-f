"use client"

import Box from "@mui/material/Box"
import { Button, Card, CardContent, CardHeader, Grid, Stack, Typography, useTheme } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import KycActions from "../kyc-actions"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MuiButton from "@/components/common/button"

interface ChooseCreditProps {
  t : any,
  activeStep: number,
  setActiveStep: Dispatch<SetStateAction<number>>
}

const ChooseCredit = ({ t, activeStep, setActiveStep }: ChooseCreditProps) => {
  const theme = useTheme()
  // Handle Next
   const handleNext = () => {
     setActiveStep(prevActiveStep => prevActiveStep + 1)
   }

  // Handle Back
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const price= Math.floor(Math.random() * 100) + 1;
  const duration = "mo"

  return (
    <Box sx={{
      width: "100%",
      display: "flex",     
      background: "white",
      borderRadius: "4px",
      marginY: 3,
  }}>

  <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={6}>
        <Card 
          sx={[
            { px: 3 },
            (theme) => ({
              '&:hover': {
                  background: theme.palette.grey[100],
              },
            }),
          ]}
         >
          <CardContent>
              <Stack sx={{
                 display: "flex", 
                 alignItems: "flex-start", 
                 mb: 2, 
                 }}>
                  <Typography variant="h5" sx={{ py: 3 }}>
                      Pro Functionality
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                      <Typography variant="h2" >
                            ${price}
                      </Typography>
                      <Typography
                            variant="h5" 
                            sx={{ mt: 2, ml: 1}}
                            color="textSecondary"
                            >
                            / {duration}
                      </Typography>
                  </Box>

                  <Typography variant="caption" color="textSecondary" sx={{ my: 1 }}>
                      Per month
                  </Typography>
              </Stack>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                  <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                    Loan Amount: $5100
                  </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                    <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                      No. of payments: 6
                    </Typography>
                </Box>

                <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        Monthly repayment: $150
                    </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        First repayment: $2000
                    </Typography>
              </Box>
              <MuiButton
                  sx={{ 
                  background: `${theme.palette.common.black} !important`,
                  color: theme.palette.primary.main,
                  borderRadius: "6px"
                  }}
              >    
               {t.kyc.choosePlan}
              </MuiButton>
          </CardContent>
       </Card>
    </Grid>

    <Grid item xs={12} sm={12} md={6}>
        <Card 
          sx={[
            { px: 3 },
            (theme) => ({
              '&:hover': {
                  background: theme.palette.grey[100],
              },
            }),
          ]}
         >
          <CardContent>
              <Stack sx={{
                 display: "flex", 
                 alignItems: "flex-start", 
                 mb: 2, 
                 }}>
                  <Typography variant="h5" sx={{ py: 3 }}>
                      Basic Functionality
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                      <Typography variant="h2" >
                            ${price}
                      </Typography>
                      <Typography
                            variant="h5" 
                            sx={{ mt: 2, ml: 1}}
                            color="textSecondary"
                            >
                            / {duration}
                      </Typography>
                  </Box>

                  <Typography variant="caption" color="textSecondary" sx={{ my: 1 }}>
                      Per month
                  </Typography>
              </Stack>

              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                  <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                    Loan Amount: $5100
                  </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                    <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                      No. of payments: 6
                    </Typography>
                </Box>

                <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        Monthly repayment: $150
                    </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        First repayment: $2000
                    </Typography>
              </Box>
              <MuiButton
                  sx={{ 
                  background: `${theme.palette.common.black} !important`,
                  color: theme.palette.primary.main,
                  borderRadius: "6px"
                  }}
                 >    
               {t.kyc.choosePlan}
              </MuiButton>
          </CardContent>
       </Card>
    </Grid>

    <Grid item xs={12} sm={12} md={6}>
        <Card 
          sx={[
            { px: 3 },
            (theme) => ({
              '&:hover': {
                  background: theme.palette.grey[100],
              },
            }),
          ]}
         >
          <CardContent>
              <Stack sx={{
                 display: "flex", 
                 alignItems: "flex-start", 
                 mb: 2, 
                 }}>
                  <Typography variant="h5" sx={{ py: 3 }}>
                      Basic Functionality
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                      <Typography variant="h2" >
                            ${price}
                      </Typography>
                      <Typography
                            variant="h5" 
                            sx={{ mt: 2, ml: 1}}
                            color="textSecondary"
                            >
                            / {duration}
                      </Typography>
                  </Box>

                  <Typography variant="caption" color="textSecondary" sx={{ my: 1 }}>
                      Per month
                  </Typography>
              </Stack>

              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                  <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                    Loan Amount: $5100
                  </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                    <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                      No. of payments: 6
                    </Typography>
                </Box>

                <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        Monthly repayment: $150
                    </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        First repayment: $2000
                    </Typography>
              </Box>
              <MuiButton
                  sx={{ 
                  background: `${theme.palette.common.black} !important`,
                  color: theme.palette.primary.main,
                  borderRadius: "6px"
                  }}
                 >    
               {t.kyc.choosePlan}
              </MuiButton>
          </CardContent>
       </Card>
    </Grid>

    <Grid item xs={12} sm={12} md={6}>
        <Card 
          sx={[
            { px: 3 },
            (theme) => ({
              '&:hover': {
                  background: theme.palette.grey[100],
              },
            }),
          ]}
         >
          <CardContent>
              <Stack sx={{
                 display: "flex", 
                 alignItems: "flex-start", 
                 mb: 2, 
                 }}>
                  <Typography variant="h5" sx={{ py: 3 }}>
                      Basic Functionality
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                      <Typography variant="h2" >
                            ${price}
                      </Typography>
                      <Typography
                            variant="h5" 
                            sx={{ mt: 2, ml: 1}}
                            color="textSecondary"
                            >
                            / {duration}
                      </Typography>
                  </Box>

                  <Typography variant="caption" color="textSecondary" sx={{ my: 1 }}>
                      Per month
                  </Typography>
              </Stack>

              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                  <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                    Loan Amount: $5100
                  </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                    <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                      No. of payments: 6
                    </Typography>
                </Box>

                <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        Monthly repayment: $150
                    </Typography>
              </Box>
              <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center", 
                    gap: 1, 
                    color: theme.palette.brown[500] 
                    }}>
                  <TaskAltIcon/>
                    <Typography variant="body1" color="textSecondary" sx={{ my: 1 }}>
                        First repayment: $2000
                    </Typography>
              </Box>
              <MuiButton
                  sx={{ 
                  background: `${theme.palette.common.black} !important`,
                  color: theme.palette.primary.main,
                  borderRadius: "6px"
                  }}
                 >    
               {t.kyc.choosePlan}
              </MuiButton>
          </CardContent>
       </Card>
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
      <KycActions
          t={t} 
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
      />
    </Grid>
  </Grid>
</Box>
  )
}

export default ChooseCredit
