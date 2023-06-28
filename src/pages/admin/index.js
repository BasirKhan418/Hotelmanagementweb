import { Grid } from "@mui/material";
import BlogCard from "../../../trc/components/dashboard/BlogCard";
import SalesOverview from "../../../trc/components/dashboard/SalesOverview";
import DailyActivity from "../../../trc/components/dashboard/DailyActivity";
import ProductPerfomance from "../../../trc/components/dashboard/ProductPerfomance";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Index() {
  const router= useRouter();
  useEffect(()=>{
    const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
  },[])
  return (
    <ThemeProvider theme={theme}>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
    
  );
}

