import React ,{useEffect, useState} from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../../trc/components/baseCard/BaseCard";
import Head from 'next/head';
const Gallerys = () => {
  const router =useRouter();
  const[title,setTitle]=useState("");
  const[image1,setImage1]=useState("");
  const [ url1, setUrl1 ] = useState("");
  const [ gallery, setgallery] = useState("");
 useEffect(()=>{
  const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
    const intervalId = setInterval(() => {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getgallery`).then((resp)=>{
        return resp.json();
        }).then((data)=>{
          setgallery(data)
        })
    }, 2000);

    return () => clearInterval(intervalId);
 },[])
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    else if (e.target.name === "image1") {
      setImage1(e.target.files[0]);
    }
    // Handle other state updates for different fields
  };
  const uploadImage1 = () => {
    const data = new FormData()
    data.append("file", image1)
    data.append("upload_preset", "dgdea2n8")
    data.append("cloud_name","dawzncoau")
    fetch("https://api.cloudinary.com/v1_1/dawzncoau/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      toast.success("Successfully Upload Your Image", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    setUrl1(data.url)
    })
    .catch(err => {
    toast.error("Sorry some error occured please try again after some time", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    })
    }
    const handlesubmit=async()=>{
      const data ={title,img:url1}
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/gallery`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
           },
          body: JSON.stringify(data),
        }
      );
      const r = await response.json();
      if(r.success){
        setTitle("");
        setImage1("")
        setUrl1("")
        toast.success("Successfully Gallery Image Added", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        toast.error("Sorry some error occured please try again after some time", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
    const handleDelete=async(_id)=>{
      let confirm1 = confirm(
        "Are You Sure To Delete This Gallery Image! Please Check it ?"
      )
      if (confirm1) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/deletegallery`,
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(_id),
          }
        );
        const ra = await response.json();
        if (ra.success) {
          toast.success("Successfully Gallery Image  Deleted", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("something went wrong please try again after some time", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    }
    

  return (
    <>
    <Head>
      <title>Add Gallery Image | Manage Reservations and Culinary Services</title>
      <meta name="description" content="Effortlessly manage reservations and streamline culinary services with our Hotel Booking and Food Delivery Admin Panel. Take control of bookings, track orders, and ensure seamless operations for your hotel and food delivery services. Simplify your administrative tasks and optimize your hospitality and dining experiences with our comprehensive admin panel."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
    <ThemeProvider theme={theme}>
       <FullLayout>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none
        }
      `}</style>
        <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<Grid item xs={12} lg={12}>
        <BaseCard title="Add a Gallery Image ">
          <Stack spacing={3}>
          <TextField
  onChange={handleChange}
  id="name-basic"
  label="Title(Required)"
  name="title" // Add the name attribute
  value={title}
  variant="outlined"
/>
<label htmlFor='pass-basic1' className='font-bold'>Image 1(Required)(If image preview appears then only hit the add product button )</label>
            <TextField
            onChange={handleChange}
              id="pass-basic1"
              name="image1"
              type="file"
            />
            {url1.length==""?"":<><h4 className='font-bold'>Preview Image 1</h4><img src={url1} alt="preview" className='w-20 h-20 object-cover border-amber-500 rounded' /></>}
            <button onClick={uploadImage1} className='bg-blue-700 text-white hover:text-white hover:bg-blue-500 p-2 rounded'>
            Upload Now
          </button>
          <button className='text-white bg-amber-500 hover:bg-amber-800 rounded p-2 w-40' onClick={handlesubmit}> Add Now</button>
</Stack>
</BaseCard>
</Grid>
<div className='text-black dark:text-white h-16 flex bg-white items-center'>
      <h1 className='sm:text-2xl text-xl font-bold mx-8'>View All Gallery Images</h1>
     
    </div>
    <div className='h-1 w-60 bg-amber-500 rounded '></div>
    <div className='flex justify-center items-center flex-wrap'>

    {gallery&&gallery.map((item)=>{return <div key= {item._id }className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
    <img className="object-cover" src={item.img} alt="product image" />
  </div>
  <div className="mt-4 px-5 pb-5">
      <h5 className="text-xl tracking-tight text-slate-900">Title:-{item.title}</h5>
  </div>
  <div className='m-2 flex justify-center'>
    <button className='bg-red-500 text-white p-2 rounded w-full hover:bg-red-700 font-bold' onClick={()=>{handleDelete(item._id)}}>Delete Now</button>
  </div>
</div>})}
</div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Gallerys

