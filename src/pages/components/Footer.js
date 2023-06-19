import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube,BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Hotel Cresent</h4>
  	 			<ul>
  	 				<p className='text-white'>Address:-Plot no 351/P, Pragati Nagar, Mailardevpally, Rajendra Nagar, Hyderabad, Telangana., Hyderabad, India, 500005</p>
  	 				<li className='flex flex-row items-center text-amber-500 my-2'><a className=''><BsFillTelephoneFill className='text-amber-500'/></a><p className='mx-2'>+919666252227
             </p> </li>
  	 				<li className='flex flex-row items-center text-amber-500 my-2'><a className=''><MdEmail className='text-amber-500'/></a><p className='mx-2'>hoteldcrescent@gmail.com
             </p> </li>
  	 				<li className='flex flex-row items-center text-amber-500 my-2'><a className=''><Image src={'/web.svg'} className='bg-amber-500' height={20} width={20} alt='webimg'/></a><p className='mx-2'>www.hotelcresent.com
             </p> </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Booking status</a></li>
  	 				<li><a href="#">Services</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Foods</a></li>
  	 				<li><a href="#">Book a room</a></li>
  	 				<li><a href="#">Book a table</a></li>
  	 				<li><a href="#">Book a hall</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Follow us</h4>
  	 			<div className="social-links">
  	 				<Link href="#"><BsFacebook className='text-4xl hover:text-blue-600  '/></Link>
  	 				<a href="#"><BsInstagram className='text-4xl hover:text-pink-600'/></a>
  	 				<a href="#"><BsTwitter className='text-4xl hover:text-blue-600'/></a>
  	 				<a href="#"><BsYoutube className='text-4xl hover:text-red-600'/></a>
  	 			</div>
          <Image src={'/wp.png'} alt='img' height={300} width={300}/>
  	 		</div>
  	 	</div>
  	 </div>
	   <div className="bg-amber-500 text-white">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center">© 2023 www.hotelcresent.in — All Rights Reserved
      </p>
    </div>
  </div> 
  </footer>
 
    </div>
  )
}

export default Footer





