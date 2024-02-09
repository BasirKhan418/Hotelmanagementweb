import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
const Checkavl = () => {
   const [checkin,setCheckin]=useState("");
   const [checkout,setCheckout]=useState("");
   const [adults,setAdults]=useState("");
   const [child,setChild]=useState("");
   const [room,setroom]=useState("");
   const [product,setProduct]=useState("");
   const router = useRouter();
   useEffect(()=>{
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproduct`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProduct(data);
      });
   },[])
const handlechange=(e)=>{
   if(e.target.name=="checkin"){
      setCheckin(e.target.value)
   }
   else if(e.target.name=="checkout"){
      setCheckout(e.target.value)
   }
   else if(e.target.name=="adults"){
      setAdults(e.target.value)
   }
   else if(e.target.name=="child"){
      setChild(e.target.value)
   }
   else if(e.target.name=="room"){
      setroom(e.target.value)
   }
 
}
let qty=0;
const handlebutton=()=>{
   if(room!=""&&child!=""&&checkin!=""){

  
   product.map((item)=>{
      qty=qty+item.availableQty;
   })
   if(qty>0){
      toast.success("Congratulations. Yayy! Rooms are avaialable.You are redirected to booking page for further details", {
         position: "top-left",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         });
         router.push("/rooms")
   }
   else{
      toast.error("It Seens some rooms are out of stock please checkit on booking page for further details!", {
         position: "top-left",
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
else{
   toast.error("Please fill up the required details for booking", {
      position: "top-left",
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
      
  return (
    <div>
      <section >
      <ToastContainer
position="top-left"
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

<form action="" className="flex items-center justify-center bg-black flex-wrap  ">

   <div className="font-semibold text-black p-4">
      <p className='text-amber-500'>Check in <span>*</span></p>
      <input type="date" name="checkin" className="input p-2 rounded h-16 w-56 " onChange={handlechange} value={checkin}/>
   </div>

   <div className="box font-semibold  text-black p-4">
      <p className='text-amber-500'>Check out <span>*</span></p>
      <input onChange={handlechange} type="date" name="checkout" value={checkout} className=" p-2 rounded h-16 w-56"/>
   </div>

   <div className="box font-semibold text-black p-4">
      <p className='text-amber-500'>Adults <span>*</span></p>
      <select onChange={handlechange} name="adults" id="" value={adults} className="p-2 rounded h-16 w-56">
      <option value="1">No adults</option>
         <option value="1">1 adults</option>
         <option value="2">2 adults</option>
         <option value="3">3 adults</option>
         <option value="4">4 adults</option>
         <option value="5">5 adults</option>
         <option value="6">6 adults</option>
      </select>
   </div>

   <div className="box font-semibold  text-black p-4">
      <p className='text-amber-500'>Children <span>*</span></p>
      <select value={child} onChange={handlechange} name="child" id="" className="p-2 rounded h-16 w-56" >
      <option value="1">No child</option>
         <option value="2">1 child</option>
         <option value="3">2 child</option>
         <option value="4">3 child</option>
         <option value="5">4 child</option>
         <option value="6">5 child</option>
         <option value="7">6 child</option>
      </select>
   </div>

   <div className="font-semibold text-black p-4">
      <p className='text-amber-500'>Rooms <span>*</span></p>
      <select onChange={handlechange} name="room" value={room} id="" className="p-2 rounded h-16 w-56">
         <option value="1">1 rooms</option>
         <option value="2">2 rooms</option>
         <option value="3">3 rooms</option>
         <option value="4">4 rooms</option>
         <option value="5">5 rooms</option>
         <option value="6">6 rooms</option>
      </select>
   </div>
   
</form>
<div className='flex justify-center h-16 bg-black'>
   <button onClick={handlebutton} className="bg-amber-500 rounded p-2 mx-2 lg:absolute left-32 text-white font-semibold h-10 w-52 ">Check Avaibility</button>
   </div>


</section>
    </div>
  )
}

export default Checkavl
