// ==============================|| THEME - MuiAlert  ||============================== //

const MuiAlert = () => {
  return {
    styleOverrides: {
      standardSuccess: {
        backgroundColor: 'green',
        color: 'white'
      },
      standardError: {
        backgroundColor: 'red',
        color: 'white'
      },
      standardWarning: {
        backgroundColor: 'orange',
        color: 'white'
      },
      standardInfo: {
        backgroundColor: 'grey',
        color: 'black'
      }
    }
   }
  }

export default MuiAlert
