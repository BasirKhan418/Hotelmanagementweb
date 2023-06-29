import React from 'react'
import {  Pagination,A11y, Autoplay ,} from "swiper";

import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Ourgallery = ({gallery}) => {
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
                {gallery&& gallery.map((item)=>{return <SwiperSlide key={item._id} className='my-4'>
                    <img src={item.img} alt="gimage" className='h-80 w-96 mb-4 mx-2 object-cover'/>
            </SwiperSlide>})}
      </Swiper>
      

   </>
  )
}

export default Ourgallery
