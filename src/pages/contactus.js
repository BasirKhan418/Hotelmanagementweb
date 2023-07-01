import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head';
const Contactus = () => {
  const [email,setEmail]=useState("");
  const [Message,setMessage]=useState("");
  const handleChange=(e)=>{
    if(e.target.name=="email"){
      setEmail(e.target.value);
    }
    else if(e.target.name=="message"){
      setMessage(e.target.value);
    }
  }
  const handleOnclick =()=>{
    setEmail("")
    setMessage("")
    toast.success("Successfully send your message ! We will get back to you shortly ", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <Head>
      <title>Contact Us - Reach Out for Hotel Booking and Food Delivery Inquiries</title>
      <meta name="description" content='Get in touch with us for any questions or inquiries regarding hotel bookings and food delivery services. Our dedicated team is here to assist you with seamless reservations and delicious cuisine. Contact us today and experience exceptional hospitality and convenience.'/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
          <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <section className="text-gray-600 body-font relative  ">
  <div className="absolute inset-0 bg-gray-300 overflow-hidden">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60956.04956548566!2d78.45358616032655!3d17.27917599873145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3232169af17%3A0xcc0220401ad2cd07!2sHyderabad%2C%20Telangana%20500005!5e0!3m2!1sen!2sin!4v1687198297499!5m2!1sen!2sin" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">If you have any issues or queries please feel free to contact us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} value={email} className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea value={Message} onChange={handleChange} name="message" id="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={handleOnclick} className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Send Now</button>
      <p className="text-xs text-gray-500 mt-3">Plesae express you problems or queries in details.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contactus
