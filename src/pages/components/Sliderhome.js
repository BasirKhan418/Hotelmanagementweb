import React from "react";
import {  Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Sliderhome = () => {
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
        <SwiperSlide>
          <div className="flex object-cover">
            <img src="/home-slide1.jpg" alt="ff" className="homesw opacity-90" />{" "}
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-4 my-4">
            Uncover the Best Deals: Your Ultimate Hotel Booking Platform
            </h1>
            <button  className="button bg-amber-500 font-semibold">Explore Now</button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home-slide2.jpg" alt="ff" className="homesw" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-4 my-4">
          Ultimate Comfort Awaits: Reserve Your Ideal Hotel Stay, </h1>
            <button  className="button bg-amber-500 font-semibold">Explore Now</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home-slide3.jpg" alt="ff" className="homesw" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-4 my-4">
          Stay in Style: Find the Perfect Hotel for a Memorable Travel Experience
            </h1>
            <button  className="button bg-amber-500 font-semibold">Explore Now</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home-slide4.jpg" alt="ff" className="homesw" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-4 my-4">
          Luxury Redefined: Experience Unmatched Elegance at Our Exclusive Hotels
            </h1>
            <button  className="button bg-amber-500 font-semibold">Explore Now</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliderhome;
