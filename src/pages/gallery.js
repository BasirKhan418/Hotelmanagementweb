import React from 'react'

const Gallery = () => {
  return (
    <div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-bold">Our <span className="text-amber-500">Hotel Cresent </span>Gallery</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enchanting Retreats: Unveiling a Breathtaking Gallery of Handpicked Hotels, Unlocking Unforgettable Experiences for Your Perfect Getaways and Memorable Adventures.</p>
    </div>
    
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/home-slide1.jpg" alt=""/> 
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/home-slide4.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg  object-cover" src="/home-slide2.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/home-slide3.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/breakfast.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/lunch.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/dinner.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/fastfood.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg object-cover " src="/snacks.jpg" alt=""/>
    </div>
    <div> 
        <img className="h-auto max-w-full rounded-lg object-cover " src="/home-slide1.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg  object-cover" src="/home-slide1.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg  object-cover" src="/home-slide1.jpg" alt=""/>
    </div>
</div>

   </div>
    </div>
  )
}

export default Gallery
