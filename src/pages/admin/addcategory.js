import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
const Addcategory = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
        <FullLayout>
    <div>
      hello category
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Addcategory
