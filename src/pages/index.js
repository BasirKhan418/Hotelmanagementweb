import Image from 'next/image'
import Head from 'next/head'
import Hero from './components/Hero'
import Sliderhome from './components/Sliderhome'
import Checkavl from './components/Checkavl'
import Room from './components/room'
import Features from './components/Features'
import Ourgallery from './components/Ourgallery'
import Food from './components/Food'
import Faq from './components/Faq'
import Category from '../../models/Category'
import Slider from '../../models/Slider'
import mongoose from 'mongoose'
export default function Home({catroom,catfood,slider}) {
  return (
   <div className='bg-white'>
     <Head>
      <title>Hotel Cresent -Book your dream destination now!</title>
      <meta name="description" content='Specare is a online shopping website '/>
      <link rel='icon' href="/favicon.ico"/>
     </Head>
     {/* <img src="/home1.jpg" className="absolute block w-full h-full " alt="..."/> */}
    {/* Caraseoul starts from here */}
    
    <Hero/>
   <hr/>
    <div className=' bg-white rounded text-center'>
      <h1 className='text-amber-500 dark:text-white sm:text-3xl text-xl font-bold my-2 mx-2'>A Stunning Overview of Pure Luxury</h1>
    </div>
    <hr/>
    <Sliderhome slider={slider}/>
    <Checkavl/>
    <div className='text-amber-500 bg-blue-50 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Our Rooms</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    
    <Room catroom={catroom}/>
    <div className='text-amber-500 bg-blue-50 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Features at Hotel Cresent</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded'></div>
    <Features/>
    <div className='text-amber-500 bg-blue-50 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Our Foods</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <Food catfood={catfood}/>
    <div className='text-amber-500 bg-blue-50 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Our Gallery</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <Ourgallery/>
    <div className='text-amber-500 bg-blue-50 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Frequently Asked Questions ?</h1>
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
    <><Faq/></>
   </div>
  )
}
export async function getServerSideProps () {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
}
let catroom= await Category.find({category:"room"});
let catfood = await Category.find({category:"food"});
let slider=await Slider.find();
  return {
      props: {catroom:JSON.parse(JSON.stringify(catroom)),catfood:JSON.parse(JSON.stringify(catfood)),slider:JSON.parse(JSON.stringify(slider))},
  };
}
