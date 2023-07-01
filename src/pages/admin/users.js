import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from '../../../models/User';
import mongoose from 'mongoose';
import Head from 'next/head';
import { useRouter } from 'next/router';
const Users = ({user}) => {
  const router =useRouter()
useEffect(()=>{
  const myAdmin = localStorage.getItem('myAdmin')
  if(!myAdmin){
    router.push('/admin/adminlogin');
   }
},[])
  return (
    <>
    <Head>
      <title>All Users | Manage Reservations and Culinary Services</title>
      <meta name="description" content="Effortlessly manage reservations and streamline culinary services with our Hotel Booking and Food Delivery Admin Panel. Take control of bookings, track orders, and ensure seamless operations for your hotel and food delivery services. Simplify your administrative tasks and optimize your hospitality and dining experiences with our comprehensive admin panel."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
    <ThemeProvider theme={theme}>
       <FullLayout>
    <div>
    <style jsx global>{`
            footer {
              display: none;
            }
            .Navbar {
              display: none;
            }
          `}</style>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <ToastContainer
              position="bottom-center"
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
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th scope="col" className="px-6 py-3 flex items-center">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name (Qty)
                  </th> */}
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Pincode
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    {/* Customer Address
                  </th> */} 
                </tr>
               
              </thead>
              <tbody>
                {user.slice(0).reverse().map((item) => {
                  return (
                    <tr
                      key={item._id}
                      className="bg-white border-b-2 border-blue-200 rounded m-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      {/* <td  className="w-4 p-4">
                        <div className="flex items-center">
                          <img
                            src={item.img}
                            className="mt-2 mx-4 w-10 h-10 border-2 border-amber-300 rounded object-cover"
                          />
                        </div>
                      </td> */}
                      {/* <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        
                      </th> */}
                      <td className="px-6 py-4 font-semibold rounded text-center">{item.name}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{item.email}</td>
                      <td className={`px-6 py-4 font-semibold rounded text-center text-black `}>{item.phone!=""?item.phone:"Not Present"}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{item.address!=""?item.address:"Not Present"}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{item.pincode!=""?item.pincode:"Not Present"}</td>
                      {/* <td className="px-6 py-4 font-semibold">{item.address}/ (District:-{item.city} Pin:-{item.pincode})<br/>Phone:-{item.phone}</td> */}
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
    </div>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let user = await User.find();
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
export default Users
