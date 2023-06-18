import React from 'react'

const Checkavl = () => {
  return (
    <div>
      <section >

<form action="" className="flex items-center justify-center bg-gray-200 flex-wrap">

   <div className="font-semibold bg-gray-200 text-black p-4">
      <p className='text-amber-500'>Check in <span>*</span></p>
      <input type="date" className="input p-2 rounded h-16 w-56"/>
   </div>

   <div className="box font-semibold  text-black p-4">
      <p className='text-amber-500'>Check out <span>*</span></p>
      <input type="date" className=" p-2 rounded h-16 w-56"/>
   </div>

   <div className="box font-semibold text-black p-4">
      <p className='text-amber-500'>Adults <span>*</span></p>
      <select name="adults" id="" className="p-2 rounded h-16 w-56">
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
      <select name="child" id="" className="p-2 rounded h-16 w-56">
         <option value="1">1 child</option>
         <option value="2">2 child</option>
         <option value="3">3 child</option>
         <option value="4">4 child</option>
         <option value="5">5 child</option>
         <option value="6">6 child</option>
      </select>
   </div>

   <div className="font-semibold text-black p-4">
      <p className='text-amber-500'>Rooms <span>*</span></p>
      <select name="rooms" id="" className="p-2 rounded h-16 w-56">
         <option value="1">1 rooms</option>
         <option value="2">2 rooms</option>
         <option value="3">3 rooms</option>
         <option value="4">4 rooms</option>
         <option value="5">5 rooms</option>
         <option value="6">6 rooms</option>
      </select>
   </div>
   
</form>
<div className='flex justify-center h-16 bg-gray-200'>
   <button type="submit" className="bg-amber-500 rounded p-2 mx-2 lg:absolute left-32 text-white font-semibold ">Check Avaibility</button>
   </div>


</section>
    </div>
  )
}

export default Checkavl
