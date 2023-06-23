import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
const Sliderimage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
       <FullLayout>
    <div>
      hello slifer
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Sliderimage
