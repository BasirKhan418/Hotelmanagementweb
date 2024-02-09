import React from "react";
import Link from "next/link";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMapLocationDot, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
const Hero1 = () => {
  return (
    <div className="overflow-hidden flex justify-center">
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");
          .herofont {
            font-family: "Lilita One", sans-serif;
          }
          .dt {
            font-family: "Roboto", sans-serif;
          }
          @media screen and (max-width: 416px) {
            .dt1 {
              font-family: "Roboto", sans-serif;
              font-size: 16px;
            }
          }
        `}
      </style>

      <section className=" bg-opacity-30 py-12 lg:py-20 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              
              <p className="text-base font-semibold tracking-wider text-yellow-400 uppercase navfont mx-4 text-center lg:text-left md:text-left sm:text-left">
                HotelDCrescent.com
              </p>
              <h1 className="mt-4 text-4xl font-bold text-white lg:mt-8 sm:text-4xl xl:text-6xl navfont text-center lg:text-left md:text-left sm:text-left">
                Welcome to HotelDCrescent book your stay.
              </h1>
              <p className="mt-4 text-base text-white lg:mt-8 sm:text-xl text-center lg:text-left md:text-left sm:text-left xl:text-left">
                Book your dream hotel and enjoy delicious food delivered right
              </p>
               <div className="flex flex-row items-center justify-center lg:justify-start md:justify-start sm:justify-start xl:justify-start flex-wrap">
              <Link href={"/Signup"}>
              <motion.button
                 whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-full lg:mt-16 hover:bg-purple-800 w-52 sm:w-auto md:w-auto lg:w-auto xl:w-auto mx-2"
                role="button"
              >
                Book A Stay
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.button>
                
              </Link>
              <Link href={"/Event"}>
              <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-yellow-600 rounded-full lg:mt-16 hover:bg-purple-800 w-52 sm:w-auto md:w-auto lg:w-auto xl:w-auto mx-4"
                role="button"
              >
                Order Food
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.button>
              </Link>
              </div>
            </motion.div>

            <div className="overflow-hidden">
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
          </div>
      </section>
    </div>
  );
};

export default Hero1;
