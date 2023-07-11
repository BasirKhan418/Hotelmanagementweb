import React from 'react'
import Head from 'next/head'
const About = () => {
  return (
    <div >
      <Head>
      <title>About Us - Discover Our Hotel Booking and Food Delivery Services</title>
      <meta name="description" content='Learn more about our exceptional hotel booking and food delivery services. Experience luxurious accommodations, delightful culinary offerings, and seamless convenience, all in one place. Discover the perfect destination for your vacation getaway and savor a memorable experience with our top-rated hospitality and delectable dishes delivered to your doorstep.'/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
            <div className='text-amber-500 bg-white h-16 flex justify-center items-center my-2'>
      <h1 className='sm:text-4xl text-xl font-bold'>About Us</h1>
     
    </div>
    <div className='h-2 w-40 bg-amber-500 rounded '></div>
      <div className="py-16 bg-white min-h-screen">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src="/hotelbook.jpg" alt="image" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">
        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">HOTEL DCRESCENT: Simplifying Your Hotel Booking Experience</h2>
          <p className="mt-6 text-gray-600">Welcome to HotelDCrescent, where finding and booking the perfect hotel is effortless. With our extensive selection of accommodations, transparent information, and reliable customer support, we are here to simplify your travel planning. Discover exceptional stays and embark on unforgettable journeys with StayBook. Start your hassle-free booking experience now!

</p>
          <p className="mt-4 text-gray-600"> </p>
        </div>
      </div>
      <p className='bg-amber-100 font-semibold py-8 px-8 my-8 mx-8 rounded'>
Welcome to our hotel booking website! We are dedicated to providing you with a seamless and memorable experience as you explore and book accommodations for your next travel adventure. Whether you are planning a relaxing beach getaway, a bustling city excursion, or a tranquil countryside retreat, we are here to help you find the perfect place to stay.

At our hotel booking website, we understand that finding the right hotel is crucial to a successful trip. That is why we have curated a vast selection of hotels from around the world, ranging from luxurious resorts to cozy bed and breakfasts, budget-friendly options, and everything in between. With thousands of properties available at your fingertips, you can easily compare prices, amenities, and reviews to make an informed decision.

Our user-friendly interface makes it effortless to search for accommodations that match your preferences. Simply enter your destination, travel dates, and the number of guests, and our advanced search algorithms will quickly present you with a list of available options. You can further refine your search by filtering based on price range, star ratings, facilities, and more, ensuring that you find a hotel that suits your specific needs and budget.

We believe that transparency is key when it comes to booking accommodations. That is why we provide comprehensive hotel profiles that offer detailed information about each property. From room descriptions and photos to amenities, policies, and guest reviews, we strive to provide you with all the necessary details to make an informed decision. We want you to feel confident and excited about your choice of hotel.

Booking your accommodation through our website is not only convenient but also secure. We partner with reputable hotels and trusted booking providers to ensure that your personal information is protected and your booking experience is smooth. Our customer support team is available around the clock to assist you with any inquiries or concerns you may have, ensuring that your journey from browsing to booking is stress-free.

Whether you are embarking on a solo adventure, planning a family vacation, or organizing a business trip, our hotel booking website is designed to simplify the process and enhance your travel experience. We are here to be your trusted companion, guiding you through the world of hotels and helping you find the perfect place to rest and rejuvenate during your travels.

Start your journey with us today and unlock a world of possibilities as you discover and book your dream accommodations. We canot wait to be a part of your travel story!
</p>
  </div>
</div>

    </div>
  )
}

export default About