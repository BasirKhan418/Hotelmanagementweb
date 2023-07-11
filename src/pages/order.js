import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose';
import Link from 'next/link';
import Head from 'next/head';
import Order from '../../models/Order';
const MyOrder = ({order,clearCart}) => {
  const [date,setDate]=useState()
  const [modal,setModal]=useState(false)
  const [checkin,setCheckin]=useState()
  const [checkout,setCheckout]=useState()
  useEffect(()=>{
    const d =new Date(order.createdAt);
    const e =new Date(order.checkin);
    const f =new Date(order.checkout);
    setDate(d);
    setCheckin(e)
    setCheckout(f)
   if(router.query.clearCart==1){
    clearCart();
   }
  },[])
  const toggletrack=()=>{
    setModal(true)
  }
  const router =useRouter();
  const products =order.products;
  return (
    <div>
      <Head>
      <title>Order Confirmation: Your Order is Successful!</title>
      <meta name="description" content='Congratulations! Your order has been successfully confirmed. Sit back and relax as you await a delightful stay and mouthwatering dishes delivered straight to your doorstep. Experience the perfect blend of comfort and culinary delights with our exceptional hotel booking and food delivery service.'/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
      <section className="text-gray-600 body-font overflow-hidden bg-white min-h-screen">
  <div className="container px-5 py-6 mx-auto ">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"><span className='font-bold text-amber-700'>Hoteldcrescent.com</span></h2>
        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-2">Booking Id:- <span className='font-semi-bold text-amber-700'>{order.orderID}</span></h1>
        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">Payment Id:- <span className='font-semi-bold text-amber-700'>{order.payment_id}</span></h1>
        <p className="leading-relaxed mb-4">Yayy! Your booking has been successfully placed!</p>
        <p className="leading-relaxed mb-1">Order placed on :-{date && date.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className='leading-relaxed mb-1'> Your Payment Status is <span className='font-bold text-amber-700'>{order.status}</span> </p>
        <div className="flex mb-4">
          <a className="flex-grow text-amber-500 border-b-2 border-amber-500 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
        </div>
       
        {Object.keys(products).map((item)=>{
          return <div key={item} className="flex border-t border-gray-200 py-2">
             <img alt="ecommerce" className="w-20  h-20 object-cover object-center rounded" src={products[item].img1}/>
          <span className="text-gray-500 m-auto">{products[item].name}</span>
          <span className="m-auto text-gray-900">{products[item].qty}</span>
          <span className="m-auto text-gray-900">₹{products[item].price}X {products[item].qty}=₹{products[item].price*products[item].qty}</span>
        </div>})}
        <div className="flex my-8">
          <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹{order.amount}</span>
         
        </div>
        <div className="flex ">
       <button onClick={toggletrack} className="flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded my-4">Track Your Booking</button>
          </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={'/orderconfirm.jpg'}/>
    </div>
  </div>
  {/* // */}
  <div
            id="updateProductModal"
            tabIndex="-1"
            aria-hidden="true"
            className={` ${
              modal ? "" : "hidden"
            } flex h-full overflow-y-auto overflow-x-auto fixed  top-0 right-0 left-0 z-150 justify-center items-center w-full md:inset-0 h-modal md:h-full mt-10 mb-8  border-blue-400`}
          >
            {<div className=' mx-8 lg:mx-60 text-xl flex justify-center flex-col mb-10 bg-blue-100 rounded p-2'>
  <h1 className='font-bold text-2xl text-center bg-white text-amber-500 p-4'>Track Your Order</h1>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <h5 className={`font-semibold `}>Booking Status :- 
<span className={` ${order.deliveryStatus=="cancelled"?"bg-red-500 rounded-lg text-white px-1":""}${order.deliveryStatus=="confirmed"||"delivered"?"bg-green-500 rounded-lg text-white px-1":""} `}>{order.deliveryStatus}</span></h5>
<h5 className='font-semibold  my-2'>Payment Status:- 
{order.status}</h5>
<h5 className='font-semibold my-2'>Room Status/No.:- 
{order.room_no}</h5>
<h5 className='font-semibold my-2'>Check in date :- 

{checkin && checkin.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h5>
<h5 className='font-semibold my-2'>Check out date :- 

{checkout && checkout.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h5>

                
                  <button
                    onClick={()=>{setModal(false)}}
                    className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                  </div>}
          </div>

  {/* // */}
  {/* {trackorder&&<div className=' mx-8 lg:mx-60 text-xl flex justify-center flex-col mb-10 bg-blue-100 rounded p-2'>
  <h1 className='font-bold text-2xl text-center bg-white text-amber-500 p-4'>Track Your Order</h1>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <h5 className='font-bold '>Delivery Status :- 
{order.deliveryStatus}</h5>
<h5 className='font-bold  my-2'>Payment Status:- 
{order.status}</h5>
<h5 className='font-bold my-2'>Room Status/No.:- 
{order.room_no}</h5>
<h5 className='font-bold my-2'>Check in date :- 

{checkin && checkin.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h5>
<h5 className='font-bold my-2'>Check out date :- 

{checkout && checkout.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h5>
</div>} */}
</section>
    </div>
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

export default MyOrder
