import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import { useRouter } from "next/router";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
const ProfileDD = () => {
  const router =useRouter();
  const[name,setName]=useState("");
  useEffect(()=>{
    const myAdmin = JSON.parse(localStorage.getItem('myAdmin'));
    if(myAdmin && myAdmin.token){
     fetchdata(myAdmin.token);
    }
   
     },[])
  const fetchdata=async(token)=>{
    const data ={token:token};
    const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myadmin`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res=await pr.json();
    // setLoading(false)
    // console.log(res)
    // console.log(res.name,res.address,res.phone,res.pincode);
    setName(res.name);
    // setAddress(res.address);
    // setPhone(res.phone);
    // setPincode(res.pincode);
   }
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const logout=()=>{
    localStorage.removeItem("myAdmin");
    router.push("/admin/adminlogin")
  }
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={"/cresentlogo.jpg"}
            alt={userimg}
            width="30"
            height="30"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              {name}
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <ListItemButton className="bg-blue-100 font-bold no-underline">
               <Link href={"/admin/myaccount"} className="no-underline"> <ListItemText primary="My Account" /></Link>
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Link to="/">
              <Button fullWidth variant="outlined" color="primary" onClick={logout} className="bg-blue-500 text-white hover:text-black font-semibold">
                Logout
              </Button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
