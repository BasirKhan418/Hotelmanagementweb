import React from "react";
import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Navbar2 = () => {
  return (
    <>
 
      <div className="w-full bg-black text-white sticky top-0 z-30 overflow-hidden flex justify-center items-center flex-wrap py-6 nav2">
      <div className="absolute left-2 top-4 overflow-hidden flex sico">
    <div className=" flex flex-row">
  	 				<a href="#"><BsFacebook className='text-xl hover:text-blue-600 mx-2 '/></a>
  	 				<a href="https://instagram.com/hoteld_crescent_mailardevpally?igshid=YmM0MjE2YWMzOA==" target='_blank'><BsInstagram className='text-xl hover:text-pink-600 mx-2'/></a>
  	 				<a href="#"><BsTwitter className='text-xl hover:text-blue-600 mx-2'/></a>
  	 				<a href="#"><BsYoutube className='text-xl hover:text-red-600 mx-2'/></a>
  	 			</div>
    </div>
        <div className=" flex absolute right-4 flex-wrap m-2 dark">
            <div className="flex flex-row items-center text-amber-500">
              <a className=" flex flex-row">
                <BsFillTelephoneFill className="text-amber-500" />
              </a>
              <p className="mx-2 text-white">+919666252227</p>{" "}
            
        </div>
            <div className="flex flex-row items-center text-amber-500 ">
            <a className=''><MdEmail className='text-amber-500'/></a><p className='mx-2 text-white'>hoteldcrescent@gmail.com</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
