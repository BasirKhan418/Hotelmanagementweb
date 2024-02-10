import Image from 'next/image'
import Head from 'next/head'
import Hero from './components/Hero1'
import Sliderhome from './components/Sliderhome'
import Checkavl from './components/Checkavl'
import Room from './components/room'
import Features from './components/Features'
import Ourgallery from './components/Ourgallery'
import Food from './components/Food'
import Faq from './components/Faq'
import Category from '../../models/Category'
import Slider from '../../models/Slider'
import Gallery from '../../models/Gallery'
import Contact from './contactus'
import mongoose from 'mongoose'
export default function Home({catroom,catfood,slider,gallery}) {

  return (
   <div className=' bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900'>
     <Head>
      <title>Hotel DCrescent -Your Ultimate Hotel Booking and Food Delivery Destination</title>
      <meta property="og:title" content="Hotel DCrescent -Your Ultimate Hotel Booking and Food Delivery Destination" />
      <meta name="description" content='Find your dream hotel and enjoy delicious food delivered right to your doorstep. Book now for a delightful getaway with top-notch accommodation and mouthwatering dishes, all in one place!'/>
      <link rel='icon' href="/favicon.ico"/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
      
      <meta property="og:description" content="Find your dream hotel and enjoy delicious food delivered right to your doorstep. Book now for a delightful getaway with top-notch accommodation and mouthwatering dishes, all in one place!"/>
      <meta name="google-site-verification" content="WqI5vc5uFwP_y5wt_nT7dYr6ZuHm0EoMOVSBeP1P_4E" />
     </Head>
     {/* <img src="/home1.jpg" className="absolute block w-full h-full " alt="..."/> */}
    {/* Caraseoul starts from here */}
    
    <Hero/>

    <div className='rounded text-center'>
      <h1 className='text-amber-500 dark:text-white sm:text-3xl text-xl font-bold my-2 mx-2'>A Stunning Overview of Pure Luxury</h1>
      <div className='h-2 w-40 bg-amber-500 rounded'></div>
    </div>
    <Sliderhome slider={slider}/>
    <Checkavl/>
    <div className='text-amber-500  h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Our Rooms</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    
    <Room catroom={catroom}/>
    <div className='text-amber-500 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Features at HotelDCrescent</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded'></div>
    <Features/>
    <div className='text-amber-500 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Our Foods</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <Food catfood={catfood}/>
    <div className='text-amber-500  h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Our Gallery</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <Ourgallery gallery={gallery}/>
    <div className='text-amber-500 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Frequently Asked Questions ?</h1>
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <><Faq/></>
    <div className='text-amber-500 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Contact Us</h1>
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <><Contact/></>
   </div>
  )
}
export async function getServerSideProps () {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
}
let catroom= await Category.find({category:"room"});
let catfood = await Category.find({category:"food"});
let gallery = await Gallery.find();
let slider=await Slider.find();
  return {
      props: {catroom:JSON.parse(JSON.stringify(catroom)),catfood:JSON.parse(JSON.stringify(catfood)),slider:JSON.parse(JSON.stringify(slider)),gallery: JSON.parse(JSON.stringify(gallery))},
  };
}
