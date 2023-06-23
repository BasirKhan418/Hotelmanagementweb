import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { render } from 'react-dom';
const Myorders = () => {
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
    console.log(orders)
  return (
    <>
     <h1 className='font-semibold text-2xl text-center bg-white p-4'>My Orders({orders.length})</h1>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <div className=' flex justify-center items-center'>
   
    
<div className="w-full max-w-md p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
   <div className="flow-root ">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 ">
            {orders.map((item)=>{ return <li key={item._id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 ">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Order Id:- {item.orderID}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.email}
                        </p>
                        <div className="text-sm text-gray-500 truncate dark:text-gray-400 my-2">
                           <Link href={`/order?id=${item._id}`}><button className='font-bold bg-amber-500 text-white rounded p-2'>View Details</button></Link>
                        </div>
                    </div>
                    <div className="inline-flex items-start text-base font-semibold text-gray-900 dark:text-white">
                    ₹{item.amount}
                    </div>
                </div>
            </li>})}
            <h1>Track your order</h1>
          
        </ul>
   </div>
</div>

    </div>
    </>
  )
}
export default Myorders
