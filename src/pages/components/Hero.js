import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white dark:text-white dark:bg-black">
  <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Welcome to Hotel Cresent</h1>
      <p className="mb-8 leading-relaxed">Discover our inviting hotel, offering a perfect blend of comfort and elegance. Treat yourself to a memorable experience with top-notch amenities, stunning views, and friendly service. Do not miss out - reserve your stay today and create lasting memories!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Book Now</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg dark:text-white dark:bg-gray-100">Order Food</button>
      </div>
    </div>
    <div className="slider-container ">
        <div className="slider lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="/hotelbook.jpg" className='object-cover object-center rounded' alt="Image 1"/>
            <img src="/hotelbook1.jpg" alt="Image 2"/>
            <img src="/hotelbook2.jpg" className='object-cover object-center rounded' alt="Image 3"/>
            <img src="/hotelbook3.jpg" className='object-cover object-center rounded' alt="Image 4"/>
            <img src="/hotelbook4.jpeg" className='object-cover object-center rounded' alt="Image 5"/>
        </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
