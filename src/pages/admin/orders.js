import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
const Orders = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
       <FullLayout>
    <div>
      hellop orders
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Orders
