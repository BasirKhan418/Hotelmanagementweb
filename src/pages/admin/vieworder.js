import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import mongoose from 'mongoose';
import Order from '../../../models/Order';
import Head from 'next/head';
import { useRouter } from 'next/router';
const  Vieworder = ({order}) => {
  const router = useRouter();
  const [date,setDate]=useState()
  const [checkin,setCheckin]=useState()
  const [checkout,setCheckout]=useState()
  useEffect(()=>{
    const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
    const d =new Date(order.createdAt);
    const e =new Date(order.checkin);
    const f =new Date(order.checkout);
    setDate(d);
    setCheckin(e)
    setCheckout(f)
  },[])
  const toggletrack=()=>{
    setTrackorder(!trackorder);
  }
  const products =order.products;
  return (
    <>
    <Head>
      <title>View Orders| Manage Reservations and Culinary Services</title>
      <meta name="description" content="Effortlessly manage reservations and streamline culinary services with our Hotel Booking and Food Delivery Admin Panel. Take control of bookings, track orders, and ensure seamless operations for your hotel and food delivery services. Simplify your administrative tasks and optimize your hospitality and dining experiences with our comprehensive admin panel."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
    <ThemeProvider theme={theme}>
       <FullLayout>
       <style jsx global>{`
            footer {
              display: none;
            }
            .Navbar {
              display: none;
            }
          `}</style>
       <div>
      <section className="text-gray-600 body-font overflow-hidden bg-white min-h-screen">
  <div className="container px-5 py-2 mx-auto ">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"><span className='font-bold text-amber-700'>Hotelcresent.com(Admin Panel)</span></h2>
        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-2">Booking Id:- <span className='font-semi-bold text-amber-700'>{order.orderID}</span></h1>
        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">Payment Id:- <span className='font-semi-bold text-amber-700'>{order.payment_id}</span></h1>
        <p className="leading-relaxed mb-4">Yayy! booking has been  {order.deliveryStatus=="cancelled"?"Cancelled":"successfully placed!"}</p>
        <p className="leading-relaxed mb-1">Order placed on :-{date && date.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className='leading-relaxed mb-1'> Order Payment Status is <span className='font-bold text-amber-700'>{order.status}</span> </p>
        <div className="flex mb-4">
          <a className="flex-grow text-amber-500 border-b-2 border-amber-500 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
        </div>
       
        {Object.keys(products).map((item)=>{
          return <div key={item} className="flex border-t border-gray-200 py-2">
            <img alt="ecommerce" className="w-20  h-20 object-cover object-center rounded" src={products[item].img1}/>
          <span className="text-gray-500 m-auto mx-2">{products[item].name}</span>
          <span className="m-auto text-gray-900 mx-2">{products[item].qty}</span>
          <span className="m-auto text-gray-900 mx-2 ">₹{products[item].price}X {products[item].qty}=₹{products[item].price*products[item].qty}</span>
        </div>})}
        <div className="flex my-8">
          <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹{order.amount}</span>
         
        </div>
        
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={'/orderconfirm.jpg'}/>
    </div>
    <div className='text-black dark:text-white h-16 flex bg-white items-center'>
      <h1 className='sm:text-2xl text-xl font-bold mx-8'>Customer Details:-</h1>
    
    </div>
    <div className='h-1 w-60 bg-amber-500 rounded '></div>
    <div className="flex   flex-wrap bg-blue-50">
   
   
        <div className="flex my-8 w-96 items-center px-5 py-2">
          <span className="title-font text-xl text-gray-900"><span className='font-bold'>Customer Address:-</span> {order.address}</span>
         
        </div>
        <div className="flex my-8  items-center px-5 py-2">
          <span className="title-font text-xl text-gray-900"><span className='font-bold'>Customer Phone:-</span> {order.phone}</span>
         
        </div>
        <div className="flex my-8  items-center px-5 py-2">
          <span className="title-font text-xl text-gray-900"><span className='font-bold'>Customer Pincode:-</span> {order.pincode}</span>
         
        </div>
        <div className="flex my-8 items-center px-5 py-2">
          <span className="title-font text-xl text-gray-900"><span className='font-bold'>Customer City:-</span> {order.city}</span>
         
        </div>
        <div className="flex my-8 items-center px-5 py-2">
          <span className="title-font text-xl text-gray-900"><span className='font-bold'>Customer Email:-</span> {order.email}</span>
         
        </div>
          </div>
  </div>
</section>
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}
export async function getServerSideProps(context){
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI);
  }
      let order= await Order.findById(context.query.id)
    return{
      props:{order:JSON.parse(JSON.stringify(order))}
    }
  }

export default Vieworder