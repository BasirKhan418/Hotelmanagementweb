import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
const Orders = () => {
    const [orders,setOrders]= useState([])
    const router =useRouter();
    const fetchorders=async()=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:JSON.parse(localStorage.getItem('myUser')).token}),
      });
  
      const response=await res.json();
      setOrders(response.orders);
    }
    useEffect(()=>{
      if(!localStorage.getItem('myUser')){
       router.push('/');
      }
      else{
        fetchorders();
      }
       },[])
       let product;
       let qty;
       let name;
       let price;
       let img;
       let size;
       orders.forEach((order) => {
        const products = order.products;
        // Perform operations on products, e.g., accessing specific properties
        for (const key in products) {
           product = products[key];
          qty = product.qty;
           price = product.price;
           name = product.name;
           size = product.size;
           img = product.img;
          // Perform desired operations on each product
         
        }
        
      });
      console.log(qty, price, name, size, img);
  return (
    <div>
      <section className="pt-12 pb-24 overflow-hidden bg-blueGray-100">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24 justify-center">
      <div className="w-full md:w-8/12 xl:w-9/12 px-4 mb-14 md:mb-0">
        <div className="py-12 px-8 md:px-12 bg-white rounded-3xl">
          <span className="inline-block mb-16 text-darkBlueGray-300 font-medium">Total Orders/Bookings:-3</span>
          <div className="xl:px-10">
            {orders.map((item)=>{
                
return <div key={item._id} className="relative flex flex-wrap items-center xl:justify-between -mx-4 mb-8 pb-8 border-b border-gray-200 border-opacity-40">
              <div className="relative w-full md:w-auto px-4 mb-6 xl:mb-0">
                <a className="block mx-auto max-w-max" href="#">
                  <img className="h-28 object-cover" src={img} alt=""/>
                </a>
              </div>
              <div className="w-full md:w-auto px-4 mb-6 xl:mb-0">
                <a className="block mb-5 text-xl font-heading font-medium hover:underline" href="#">{name}</a>
                <div className="flex flex-wrap">
                  <p className="mr-4 text-sm font-medium">
                    <span className="font-heading">Order id:- { item.orderID}</span>
                    <span className="ml-2 text-gray-400">Payment Status:- {item.payment_id}</span>
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-auto px-4 mb-6 xl:mb-0 mt-6 xl:mt-0">
                <div className="flex items-center">
                  <h4 className="mr-4 font-heading font-medium">Qty:{item.products.qty}</h4>
                </div>
              </div>
              <div className="w-full xl:w-auto px-4">
                <span className="text-xl font-heading font-medium text-blue-500">
                  <span className="text-sm">₹</span>
                  <span>{item.amount}</span>
                </span>
              </div>
              <button className="absolute top-0 right-0 lg:mt-6 lg:-mr-4 text-gray-200 hover:text-gray-300">
                <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="currentColor"></rect><line x1="20.495" y1="8.49497" x2="8.49498" y2="20.495" stroke="currentColor" stroke-width="1.4"></line><line x1="19.505" y1="20.495" x2="7.50503" y2="8.49498" stroke="currentColor" stroke-width="1.4"></line></svg>
              </button>
            </div>

}) }
          </div>
        </div>
      </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default Orders