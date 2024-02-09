import React from 'react'
import Link from 'next/link'
const Features = () => {
  return (
    <>
      <div className="w-full p-6">
<div className="flex flex-wrap justify-center">

    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
    <span className='flex justify-center items-center'>
        <img src="/f1.jpg" alt="" className="h-20 m-6"/>
</span>
        
        <Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">24/7 Help Desk</Link>

    </div>



    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
    <span className='flex justify-center items-center'>
        <img src="/f2.png" alt="" className="h-20  m-6"/>
</span>
        
        <Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">Air Conditioning</Link>

    </div>
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
    <span className='flex justify-center items-center'>
<img src="/f3.png" alt="" className="h-20 m-6"/>
</span>

<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">Valet Security</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/f4.png" alt="" className="h-20 m-6"/>
</span>

<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">Service Bell</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/f5.png" alt="" className="h-20 m-6"/>
</span>

<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">Laundry Service</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/f6.png" alt="" className="h-20 m-6"/>
</span>

<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">Free Parking</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/f7.png" alt="" className="h-20 m-6"/>
</span>

<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">BreakFast</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/f8.png" alt="" className="h-20 w-20 m-6"/>
</span> 

<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">24/7 CCTV Security</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/f9.png" alt="" className="h-20 m-6"/>
</span>

<Link href="#" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">TV</Link>

</div>
<div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
<span className='flex justify-center items-center'>
<img src="/wifi.jpg" alt="" className="h-20 m-6"/>
</span>
<Link href="/Featurepage" className="bg-amber-500 text-white p-3 text-center hover:bg-amber-800 transition-all duration-500">Free Wifi</Link>

</div>



    </div>
    </div>
    </>
  )
}

export default Features
