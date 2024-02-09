import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="overflow-hidden">
      {/* <section className="text-gray-600 body-font bg-white dark:text-white dark:bg-black">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 dark:text-white font-bold">Welcome to <span className='text-amber-500'>Hotel DCrescent</span></h1>
      <p className="mb-8 leading-relaxed font-semibold">Discover our inviting hotel, offering a perfect blend of comfort and elegance. Treat yourself to a memorable experience with top-notch amenities, stunning views, and friendly service. Do not miss out - reserve your stay today and create lasting memories!</p>
      <div className="flex justify-center">
        <Link href={"/rooms"}><button className=" font-semibold inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Book Now</button></Link>
        <Link href={"/foods"}><button className="font-semibold ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg dark:text-black dark:bg-gray-100">Order Food</button></Link>
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
</section> */}
      {/* <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl navfont ">
                        Welcome To 
                        <div className="relative inline-flex sm:text-center">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#ebc54a]"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">HotelDcrescent</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl navfont">Discover our inviting hotel, offering a perfect blend of comfort and elegance. Treat yourself to a memorable experience with top-notch amenities, stunning views, and friendly service. Do not miss out - reserve your stay today and create lasting memories!</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8 ">
                        <Link href="/rooms" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded" role="button"> Book Now  </Link>

                        <Link href="/rooms" title="" className="mx-10 inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Explore More
                        </Link>
                    </div>
                </div>

                <div>
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
            </div>
        </div>
        
    </section> */}
      {/* <section>
        <div className="relative py-12  bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute hidden lg:block right-0">
            <div className="slider-container ">
              <div className="slider lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  src="/hotelbook.jpg"
                  className="object-cover object-center rounded"
                  alt="Image 1"
                />
                <img src="/hotelbook1.jpg" alt="Image 2" />
                <img
                  src="/hotelbook2.jpg"
                  className="object-cover object-center rounded"
                  alt="Image 3"
                />
                <img
                  src="/hotelbook3.jpg"
                  className="object-cover object-center rounded"
                  alt="Image 4"
                />
                <img
                  src="/hotelbook4.jpeg"
                  className="object-cover object-center rounded"
                  alt="Image 5"
                />
              </div>
            </div>
          </div>
          <motion.div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" >
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0"
            
            >
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text ">
                  Hotel DCrescent
                </span>
              </h1>
              <p className="mt-4 text-base font-normal leading-7 text-gray-300 lg:max-w-md xl:pr-0 lg:pr-16 navfont">
                Discover our inviting hotel, offering a perfect blend of comfort
                and elegance. Treat yourself to a memorable experience with
                top-notch amenities, stunning views, and friendly service. Do
                not miss out - reserve your stay today and create lasting
                memories!
              </p>
              <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                <Link href={"/rooms"}>
                  <button
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-3
                      py-3
                      text-base
                      font-bold
                      leading-7
                      text-gray-900
                      transition-all
                      duration-200
                      border border-transparent
                      rounded-md
                      sm:px-6
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                      hover:bg-gray-200
                      navfont
                     bg-white
                  "
                    role="button"
                  >
                    Book A Stay
                  </button>
                </Link>
                <Link href={"/foods"}>
                  <button
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-2
                      py-3
                      text-base
                      font-bold
                      leading-7
                      text-white
                      transition-all
                      duration-200
                      bg-transparent
                      rounded-md
                      sm:px-4
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                      hover:bg-gray-700
                      bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text
                      border-2 border-white
                      navfont
                  "
                    role="button"
                  >
                    Order Food Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <div className="mt-8 lg:hidden">
            <div className="slider-container ">
              <div className="slider lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  src="/hotelbook.jpg"
                  className="object-cover object-center rounded"
                  alt="Image 1"
                />
                <img src="/hotelbook1.jpg" alt="Image 2" />
                <img
                  src="/hotelbook2.jpg"
                  className="object-cover object-center rounded"
                  alt="Image 3"
                />
                <img
                  src="/hotelbook3.jpg"
                  className="object-cover object-center rounded"
                  alt="Image 4"
                />
                <img
                  src="/hotelbook4.jpeg"
                  className="object-cover object-center rounded"
                  alt="Image 5"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
