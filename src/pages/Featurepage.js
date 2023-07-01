import React from 'react'
import Features from './components/Features'
import Head from 'next/head'
const Featurepage = () => {
  <Head>
      <title>Features at HotelDCrescent</title>
      <meta name="description" content='Features at hoteldcrescent'/>
      
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
  return (
    <div>
          <div className='text-amber-500 bg-blue-50 h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>Features at Hotel Cresent</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded'></div>
    <> <Features/></>
     
    </div>
  )
}

export default Featurepage
