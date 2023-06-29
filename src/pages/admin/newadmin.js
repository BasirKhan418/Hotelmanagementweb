import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import adminsignup from './adminsignup';
const Newadmin = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
       <FullLayout>
    <div>
      
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Newadmin