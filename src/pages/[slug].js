import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Topselling from '../../models/Topselling';
import Product from '../../models/Product';
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from 'next/error'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Head from 'next/head';

const Slug = ({addToCart,product,variants,buyNow,error,topselling}) => {
    const router =useRouter()
    const {slug}=router.query
    const [pin,Setpin]=useState()
    const [service,setService]=useState();
    const[color,setColor]=useState()
    const[size,setSize]=useState()
    useEffect(()=>{
      if(!error){
    setColor(product.color)
    setSize(product.size)
      }
    },[router.query])
    const checkService= async()=>{
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Pincodes`);
    let pinjson= await pins.json()
    if(Object.keys(pinjson).includes(pin)){
      setService(true)
      toast.success('Yah! Your Pin Code is Serviceable', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      setService(false)
      toast.error('Oops! Your pin code is not serviceable', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    }
    const onChange=(e)=>{
      Setpin(e.target.value);
    }

    if (error==404) {
      return <Error statusCode={404} />
    }
    return(
    <div>
         <Head>
      <title>{router.query.slug} - Book Hotel and Order Food Online | HotelDCrescent</title>
      <meta name="description" content="Experience true luxury and culinary excellence with our Product. Book now to enjoy an unforgettable stay at our top-rated hotel, complemented by exquisite gourmet dishes delivered straight to your doorstep. Indulge in a perfect blend of comfort, convenience, and flavors for an exceptional hotel booking and food delivery experience."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
     <section className="text-gray-600 body-font overflow-hidden bg-white">
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
  <div className="container px-5 py-4 mx-auto min-h-screen">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Swiper
      // install Swiper modules
      modules={[ Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={() =>{}}
      className='flex justify-center items-center'
    >
      <SwiperSlide>
      <img alt="ecommerce" className="h-[50vh] w-[100vw]  object-cover object-top rounded" src={product.img1}/>
      </SwiperSlide>
      <SwiperSlide>
      <img alt="ecommerce" className=" h-[50vh] w-[100vw] object-cover object-top rounded" src={product.img2.length!=""?product.img2:product.img1}/>
      </SwiperSlide>
      <SwiperSlide>
      <img alt="ecommerce" className="h-[50vh] w-[100vw]   object-cover object-top rounded" src={product.img3.length!=""?product.img3:product.img1}/>
      </SwiperSlide>
      <SwiperSlide>
      <img alt="ecommerce" className="h-[50vh] w-[100vw] object-cover object-top rounded" src={product.img4.length!=""?product.img4:product.img1}/>
      </SwiperSlide>
      <SwiperSlide>
      <img alt="ecommerce" className="h-[50vh] w-[100vw] object-cover object-top rounded" src={product.img5.length!=""?product.img5:product.img1}/>
      </SwiperSlide>
      </Swiper>
      <div className="lg:w-1/2 w-full  mt-9 lg:mt-2 ml-6 lg:ml-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Hotel Cresent</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
         <div className="flex mb-4"> 
           <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3"> Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500" href='https://facebook.com' target='_blank'>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500" href='https://twitter.com' target='_blank'>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500" href='https://whatsapp.com' target='_blank'>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div> 
        <p className="leading-relaxed mx-2">{product.desc}</p>
        <p className="leading-relaxed mx-2">Size:-{product.size}</p>
        <div className="flex mx-2 my-8">
        {product.availableQty>0 &&<span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>}
        {product.availableQty<=0 &&<span className="title-font font-medium text-2xl text-gray-900">Out Of Stock!</span>}
          <button disabled={product.availableQty<=0} onClick={()=>{addToCart(slug,1,product.price,product.title,product.size,product.color,product.img1,product.category)}} className=" disabled:bg-amber-300 ml-8 text-white bg-amber-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-amber-600 rounded">Add to cart</button>
          <button disabled={product.availableQty<=0} className=" disabled:bg-amber-300 ml-4 text-white bg-amber-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-amber-600 rounded" onClick={()=>{buyNow(slug,1,product.price,product.title,product.size,product.color,product.img1,product.category)}}>Buy Now</button>
          {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
        </div>
        <div className="flex pin mt-6 space-x-2 text-sm">
         <input type="number" className="px-2 border-2 border-gray-400 rounded-md" placeholder='Enter Your Pincode ' onChange={onChange}/>
         <button className="ml-14 text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded" onClick={checkService}>Check</button>
        </div>
       {(!service && service!=null)&&<div className="text-red-700 text-sm mt-3">
          Sorry! We do not deliver to this pincode yet
        </div>}
        {(service&&service!=null)&&<div className="text-green-700 text-sm mt-3">
          Yay! This pincode is serviceable
        </div>}
      </div>
    </div>
  </div>
</section>
<div className='text-black dark:text-white h-16 flex bg-white items-center'>
      <h1 className='sm:text-2xl text-xl font-bold mx-8'>Our Top Selling Products</h1>
     
    </div>
    <div className='h-1 w-60 bg-amber-500 rounded '></div>
    <div className='flex justify-center items-center flex-wrap'>
    { topselling&&topselling.map((item)=>{
      return <Link key = {item._id} href={`/${item.slug}`}> <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
        <img className="object-cover" src={item.img} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.discountp}% OFF</span>
      </div>
      <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900">{item.title}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹{item.price}</span>
            <span className="text-sm text-slate-900 line-through">₹69</span>
          </p>
          <div className="flex items-center">
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
      </div>
    </div>
    </Link>})}
    </div>
    </div>
  )
}
export async function getServerSideProps(context){
  let error=null;
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
}
    let product= await Product.findOne({slug:context.query.slug})
    let topselling= await Topselling.find();
    if(product==null){
      return{
        props:{error:404}
      }
    }
  return{
    props:{product:JSON.parse(JSON.stringify(product)),topselling:JSON.parse(JSON.stringify(topselling))}
  }
}

export default Slug

