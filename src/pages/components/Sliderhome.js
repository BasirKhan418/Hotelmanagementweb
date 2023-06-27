import React from "react";
import {  Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Sliderhome = ({slider}) => {
  console.log(slider)
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // enable autoplay even when user interacts with the carousel
        }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slider.map((item)=>{return <SwiperSlide key={item._id}>
          <div className="flex object-cover">
            <img src={item.img} alt="slider-home-img" className="homesw opacity-90" />{" "}
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-4 my-4">
            {item.title}
            </h1>
            <Link href={"/rooms"}><button  className="button bg-amber-500 font-semibold">Explore More</button></Link>
          </div>{" "}
        </SwiperSlide>})}
        
      </Swiper>
    </div>
  );
};

export default Sliderhome;
