import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
const Galleryimage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
       <FullLayout>
    <div>
      hello gallery
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Galleryimage
