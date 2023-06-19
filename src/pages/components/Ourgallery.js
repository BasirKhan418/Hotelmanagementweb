import React from 'react'
import {  Pagination,A11y, Autoplay ,} from "swiper";

import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Ourgallery = () => {
  return (
   <>
   <Swiper
        // install Swiper modules
        modules={[ Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // enable autoplay even when user interacts with the carousel
        }}
        breakpoints={{
            893: {
              width: 975,
              slidesPerView: 2,
            },
            500: {
                width: 893,
                slidesPerView: 2,
              },
              0: {
                width: 550,
                slidesPerView: 1,
              },
          }}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
                <SwiperSlide className='my-4'>
                    <img src="/dinner.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2 object-cover'/>
            </SwiperSlide>
                <SwiperSlide className='my-4'>
                    <img src="/lunch.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2 object-cover'/>
            </SwiperSlide>
                <SwiperSlide className='my-4'>
                    <img src="/breakfast.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2 object-cover'/>
            </SwiperSlide>
                <SwiperSlide className='my-4'>
                    <img src="/snacks.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2 object-cover'/>
            </SwiperSlide>
                <SwiperSlide className='my-4'>
                    <img src="/fastfood.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2'/>
            </SwiperSlide>
                <SwiperSlide className='my-4'>
                    <img src="/hotelbook.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2 object-cover'/>
            </SwiperSlide>
                <SwiperSlide className='my-4'>
                    <img src="/hotelbook1.jpg" alt="gimage" className='h-80 w-96 mb-4 mx-2'/>
            </SwiperSlide>
      </Swiper>
      

   </>
  )
}

export default Ourgallery
