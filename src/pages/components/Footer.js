import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube,BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
const Footer = () => {
  return (
    <div className=''>
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Hotel Cresent</h4>
  	 			<ul>
  	 				<p className='text-white'>Address:-H.No Plot Bearing No 37 Prestige Country block No 22 of Rallaguda Village Shamshabad Hyderabad 501218</p>
  	 				<li className='flex flex-row items-center text-amber-500 my-2'><a className=''><BsFillTelephoneFill className='text-amber-500'/></a><p className='mx-2'>+919666252227
             </p> </li>
  	 				<li className='flex flex-row items-center text-amber-500 my-2'><a className=''><MdEmail className='text-amber-500'/></a><p className='mx-2'>hoteldcrescent@gmail.com
             </p> </li>
  	 				<li className='flex flex-row items-center text-amber-500 my-2'><a className=''><Image src={'/web.svg'} className='bg-amber-500' height={20} width={20} alt='webimg'/></a><p className='mx-2'>www.hoteldcrescent.com
             </p> </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get help</h4>
  	 			<ul>
  	 				<li><Link href={"#Faq"}>FAQ</Link></li>
  	 				<li><Link href={"/orders"}>Booking status</Link></li>
  	 				<li><Link href={"/rooms"}>Services</Link></li>
  	 				<li><Link href={"/orders"}>order status</Link></li>
  	 				<li><Link href="/admin/adminlogin">Admin Login</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Online shop</h4>
  	 			<ul>
  	 				<li><Link href={"/foods"}>Foods</Link></li>
  	 				<li><Link href={"/contactus"}>Book a room</Link></li>
  	 				<li><Link href={"/contactus"}>Book a table</Link></li>
  	 				<li><Link href={"/contactus"}>Book a hall</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Follow us</h4>
  	 			<div className="social-links">
  	 				<Link href="#"><BsFacebook className='text-4xl hover:text-blue-600  '/></Link>
  	 				<a href="https://instagram.com/hoteld_crescent_mailardevpally?igshid=YmM0MjE2YWMzOA==" target='_blank'><BsInstagram className='text-4xl hover:text-pink-600'/></a>
  	 				<a href="#"><BsTwitter className='text-4xl hover:text-blue-600'/></a>
  	 				<a href="#"><BsYoutube className='text-4xl hover:text-red-600'/></a>
  	 			</div>
          <a href='https://wa.me/9666252227?text=I%20need%20some%20help' target='_blank'><Image src={'/wp.png'} alt='img' height={300} width={300}/></a>
  	 		</div>
  	 	</div>
  	 </div>
	   <div className="bg-amber-500 text-white">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center">© 2024 www.hoteldcrescent.com — All Rights Reserved
      </p>
    </div>
  </div> 
  </footer>
 
    </div>
  )
}

export default Footer





