import React from "react";
import Gallery from "../../models/Gallery";
import mongoose from "mongoose";
import Head from "next/head";
const Gallerys = ({ gallery }) => {
  return (
    <div>
      <Head>
      <title>Explore Our Exquisite Gallery - Hotel Booking and Food Delivery Experience</title>
      <meta name="description" content='Immerse yourself in a visual journey through our captivating gallery, showcasing the extraordinary blend of luxurious accommodations and tantalizing cuisine. Discover the perfect ambiance for your next getaway at our hotel booking and food delivery website. Browse through stunning images and get inspired to book your dream stay and savor delectable dishes. Explore our gallery and envision the ultimate experience that awaits you.'/>
      
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
      <div className="container px-5 py-12 mx-auto">
        
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-bold">
            Our <span className="text-amber-500">Hotel Cresent </span>Gallery
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Enchanting Retreats: Unveiling a Breathtaking Gallery of Handpicked
            Hotels, Unlocking Unforgettable Experiences for Your Perfect
            Getaways and Memorable Adventures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery &&
            gallery.map((item) => {
             return <div key={item._id}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover "
                  src={item.img}
                  alt=""
                />
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let gallery = await Gallery.find();
  return {
    props: { gallery: JSON.parse(JSON.stringify(gallery)), },
  };
}
export default Gallerys;
