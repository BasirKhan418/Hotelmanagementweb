import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import Head from 'next/head';
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
const Addproduct = () => {
  const router=useRouter();
  useEffect(()=>{
    const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
  },[])
  const[loading,setLoading]=useState(false)
  const[title,setTitle]=useState("");
  const[slug,setSlug]=useState("");
  const[desc,setDesc]=useState("");
  const[category,setCategory]=useState("");
  const[subcategory,setSubcategory]=useState("");
  const[size,setSize]=useState("");
  const[price,setPrice]=useState("");
  const[discount,setDiscount]=useState("");
  const[availableQty,setAvailableqty]=useState("");
  const[mrp,setMrp]=useState("");
  const[image1,setImage1]=useState("");
  const[image2,setImage2]=useState("");
  const[image3,setImage3]=useState("");
  const[image4,setImage4]=useState("");
  const[image5,setImage5]=useState("");
  const [ url1, setUrl1 ] = useState("");
  const [ url2, setUrl2 ] = useState("");
  const [ url3, setUrl3 ] = useState("");
  const [ url4, setUrl4 ] = useState("");
  const [ url5, setUrl5 ] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    else if (e.target.name === "slug") {
      setSlug(e.target.value);
    }
    else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
    else if (e.target.name === "category") {
      setCategory(e.target.value);
    }
    else if (e.target.name === "subcategory") {
      setSubcategory(e.target.value);
    }
    else if (e.target.name === "size") {
      setSize(e.target.value);
    }
    else if (e.target.name === "price") {
      setPrice(e.target.value);
    }
    else if (e.target.name === "mrp") {
      setMrp(e.target.value);
    }
    else if (e.target.name === "discount") {
      setDiscount(e.target.value);
    }
    else if (e.target.name === "availableQty") {
      setAvailableqty(e.target.value);
    }
    else if (e.target.name === "image1") {
      setImage1(e.target.files[0]);
    }
    else if (e.target.name === "image2") {
      setImage2(e.target.files[0]);
    }
    else if (e.target.name === "image3") {
      setImage3(e.target.files[0]);
    }
    else if (e.target.name === "image4") {
      setImage4(e.target.files[0]);
    }
    else if (e.target.name === "image5") {
      setImage5(e.target.files[0]);
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
const uploadImage2 = () => {

  const data = new FormData()
  data.append("file", image2)
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
  setUrl2(data.url)
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
  const uploadImage3 = () => {
    const data = new FormData()
    data.append("file", image3)
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
    setUrl3(data.url)
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
    const uploadImage4 = () => {
      const data = new FormData()
      data.append("file", image4)
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

      setUrl4(data.url)
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
      const uploadImage5 = () => {
        const data = new FormData()
        data.append("file", image5)
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
        setUrl5(data.url)
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
//add product request
  const data = {title,slug,desc,category,subcategory,size,mrp,price,discountp:discount,availableQty,img1:url1,img2:url2,img3:url3,img4:url4,img5:url5};
  const Handlesubmit = async (e) => {
if(title.length!=""&&slug.length!=""&&desc.length!=null&&category.length!=""&&price.length!=""&&discount.length!=""&&mrp.length!=""&&url1.length!=null&&image1.length!=""){
    setLoading(true)
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/addproduct`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
         },
        body: JSON.stringify(data),
      }
    );
    const r = await response.json();
    setLoading(false)

    if(r.success){
      setTitle("")
      setSlug("")
      setDesc("")
      setCategory("")
      setSize("")
      setPrice("")
      setSubcategory("")
      setDiscount("")
      setAvailableqty("")
      setMrp("")
      setImage1("")
      setImage2("")
      setImage3("")
      setImage4("")
      setImage4("")
      setImage5("")
      setUrl1("")
      setUrl2("")
      setUrl3("")
      setUrl4("")
      setUrl5("")

      toast.success("Successfully Product Added", {
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
  else{
    toast.error("Please fill up all required field", {
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
    setLoading(false)
  }
  return (
    <>
     <Head>
      <title>Add Product | Manage Reservations and Culinary Services</title>
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
{loading?<Spinner/>: <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add a Product ">
          <Stack spacing={3}>
          <TextField
  onChange={handleChange}
  id="name-basic"
  label="Title(Required)"
  name="title" // Add the name attribute
  value={title}
  variant="outlined"
/>
            <TextField onChange={handleChange} id="email-basic" label="slug(Required)" name="slug" variant="outlined" value={slug}  />
            <label htmlFor="category"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your category(Required)</label>
<select id="category" name="category" onChange={handleChange} value={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option>select</option>
  <option>room</option>
  <option>food</option>
  <option>other</option>
</select>
<label htmlFor="subcategory"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your subcategory(Required)</label>
<select id="subcategory" name="subcategory" onChange={handleChange} value={subcategory} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option>select</option>
  <option>deluxe</option>
  <option>exeucative</option>
  <option>family</option>
  <option>breakfast</option>
  <option>lunch</option>
  <option>dinner</option>
  <option>snacks</option>
  <option>fastfood</option>
  <option>other</option>
</select>
            <TextField
            value={desc}
            onChange={handleChange}
              id="outlined-multiline-static"
              label="Product Description(Required)"
              name='desc'
              variant="outlined"
              multiline
              rows={4}
            />
            <TextField
            onChange={handleChange}
            value={size}
              id="pass-basic"
              label="Size (if applicable)"
              name="size"
              type="text"
              variant="outlined"
            />
            <TextField
            onChange={handleChange}
            value={price}
              id="pass-basic"
              label="Price(Required)"
              name="price"
              type="number"
              variant="outlined"
            />
              <TextField
            onChange={handleChange}
            value={discount}
              id="pass-basic"
              label="Discount in percentage(Required)"
              name="discount"
              type="number"
              variant="outlined"
            />
             <TextField
            onChange={handleChange}
            value={availableQty}
              id="pass-basic"
              label="Available Quantity(Required)"
              name="availableQty"
              type="number"
              variant="outlined"
            />
             <TextField
            onChange={handleChange}
            value={mrp}
              id="pass-basic"
              label="MRP(Should be greater than price)(Required)"
              name="mrp"
              type="number"
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
            <button  onClick={uploadImage1} className='bg-blue-700 text-white hover:text-black hover:bg-amber-500 p-2 rounded'>
            Upload Now
          </button>
          <label htmlFor='pass-basic2' className='font-bold'>Image 2</label>
             <TextField
            onChange={handleChange}
              id="pass-basic2"
              name="image2"
              type="file"
            />
            {url2.length==""?"":<><h4 className='font-bold'>Preview Image 2</h4><img src={url2} alt="preview"  className='w-20 h-20 object-cover border-amber-500 rounded'/></>}
              <button onClick={uploadImage2} className='bg-blue-700 text-white hover:text-black hover:bg-amber-500
              p-2 rounded'>
            Upload Now
          </button>
          <label htmlFor='pass-basic3' className='font-bold'>Image 3</label>
             <TextField
            onChange={handleChange}
              id="pass-basic3"
              name="image3"
              type="file"
            />
            {url3.length==""?"":<><h4 className='font-bold'>Preview Image 3</h4><img src={url3} alt="preview"  className='w-20 h-20 object-cover border-amber-500 rounded'/></>}
             <button  onClick={uploadImage3} className='bg-blue-700 text-white hover:text-black hover:bg-amber-500 p-2 rounded'>
            Upload Now
          </button>
          <label htmlFor='pass-basic4' className='font-bold'>Image 4</label>
             <TextField
            onChange={handleChange}
              id="pass-basic4"
              name="image4"
              type="file"
            />
            {url4.length==""?"":<><h4 className='font-bold'>Preview Image 4</h4><img src={url4} alt="preview"  className='w-20 h-20 object-cover border-amber-500 rounded'/></>}
               <button onClick={uploadImage4} className='bg-blue-700 text-white hover:text-black hover:bg-amber-500 p-2 rounded'>
            Upload Now
          </button>
          <label htmlFor='pass-basic5' className='font-bold'>Image 5</label>
             <TextField
            onChange={handleChange}
              id="pass-basic5"
              name="image5"
              type="file"
            />
            {url5.length==""?"":<><h4 className='font-bold'>Preview Image 5</h4><img src={url5} alt="preview"  className='w-20 h-20 object-cover border-amber-500 rounded'/></>}
            <button onClick={uploadImage5} className='bg-blue-700 text-white hover:text-black hover:bg-amber-500 p-2 rounded'>
            Upload Now
          </button>
          </Stack>
          <br />
          <button className='bg-amber-500 text-white hover:text-black w-32 p-2 rounded font-bold' onClick={Handlesubmit}>
            Add Now
          </button>
        </BaseCard>
      </Grid>
    </Grid>}
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Addproduct
