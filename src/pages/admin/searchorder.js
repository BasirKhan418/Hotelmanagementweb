import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Order from "../../../models/Order";
const Searchorder = () => {
  useEffect(()=>{
    const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
  },[])
  const [sid,setsId]=useState("")
  const shandlechange=(e)=>{
    if(e.target.name=="id"){
      setsId(e.target.value)
      SetOrder("")
      
    }
  }
  const handleSearch=async()=>{
    const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/searchorder`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sid),
    });
    const res=await pr.json();
    SetOrder(res);
  }
  const [order, SetOrder] = useState();
  const [modal, Setmodal] = useState(false);
  const [room,setRoom]=useState("")
  const [checkin,setCheckin]=useState("")
  const [checkout,setCheckout]=useState("")
  const [status,setStatus]=useState("")
  const [dlstatus,setDlstatus]=useState("")
  const [id,setID]=useState("")
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const handlechange=(e)=>{
    if(e.target.name=="roomno"){
      setRoom(e.target.value)
      
    }
    else if(e.target.name=="checkin"){
      setCheckin(e.target.value)
    }
    else if(e.target.name=="checkout"){
      setCheckout(e.target.value)
    }
    else if(e.target.name=="status"){
      setStatus(e.target.value)
    }
    else if(e.target.name=="dlstatus"){
      setDlstatus(e.target.value)
    } 
  }
  const updateorder=(id,room,checkin,checkout,status,dlstatus,email,name)=>{
    setID(id)
    setEmail(email)
    setName(name)
  setRoom(room);
  const e =new Date(checkin);
let a =e&&e.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
setCheckin(a)
const f =new Date(checkout);
let b =f&&f.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
setCheckout(b)
  setStatus(status)
  setDlstatus(dlstatus)
  }
  const handleUpdate=async()=>{
  const data={id,room,checkin,checkout,status,deliveryStatus:dlstatus,email,name}
  const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateorder`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res=await pr.json();
  if(res.success){
    handleSearch();
    Setmodal(false)
    toast.success("Successfully Update Your Order", {
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
  else{
    toast.error("Something went wrong please try again after some time", {
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
  }
  return (
    <>
    <Head>
      <title>Search a order or bookings | Manage Reservations and Culinary Services</title>
      <meta name="description" content="Effortlessly manage reservations and streamline culinary services with our Hotel Booking and Food Delivery Admin Panel. Take control of bookings, track orders, and ensure seamless operations for your hotel and food delivery services. Simplify your administrative tasks and optimize your hospitality and dining experiences with our comprehensive admin panel."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
     </Head>
    <ThemeProvider theme={theme}>
       <FullLayout>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none
        }
      `}</style>
       <div className='text-black dark:text-white h-16 flex bg-white items-center'>
      <h1 className='sm:text-2xl text-xl font-bold mx-8'>Search a order or bookings</h1>
     
    </div>
    <div className='h-1 w-96 bg-amber-500 rounded '></div>
<div className='my-6'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={sid} onChange={shandlechange} name="id" type="search" id="default-search" className=" font-semibold bock w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Booking ID...." required />
        <button onClick={handleSearch} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div>

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
           {order!=null?<table className="w-full text-sm text-left text-gray-500  dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th scope="col" className="px-6 py-3 flex items-center">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name (Qty)
                  </th> */}
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Payment Id
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Delivery Status
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Customer Email
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    {/* Customer Address
                  </th> */} 
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Action
                  </th>
                </tr>
               
              </thead>
              <tbody>
                    <tr
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
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.orderID}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.payment_id}</td>
                      <td className={`px-6 py-4 font-semibold rounded text-center text-black ${order.status=="pending"?"text-red-500":""}${order.status=="paid"?"text-green-500":""} `}>{order.status}</td>
                      <td className={`px-6 py-4 font-semibold rounded text-center bg-blue-50 ${order.deliveryStatus=="unshipped"?"text-green-500":"text-white"} ${order.deliveryStatus=="delivered"?"bg-green-500":""}${order.deliveryStatus=="cancelled"?"bg-red-500":""}${order.deliveryStatus=="confirmed"?"bg-blue-500":""} ${order.deliveryStatus=="room alorted"?"bg-blue-500":""}`}>{order.deliveryStatus}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.name}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.email}</td>
                      {/* <td className="px-6 py-4 font-semibold">{item.address}/ (District:-{item.city} Pin:-{item.pincode})<br/>Phone:-{item.phone}</td> */}
                      {order&&<td className="px-6 py-4">
                        <button
                          className="font-medium bg-blue-600 dark:bg-blue-500 hover:bg-amber-800 text-white rounded p-2 m-2"
                          data-modal-target="popup-modal"
                          onClick={() => {
                            Setmodal(!modal);
                            updateorder(
                              order._id,
                              order.room_no,
                              order.checkin,
                              order.checkout,
                              order.status,
                              order.deliveryStatus,
                              order.email,
                              order.name
                            );
                          }}
                        >
                          Edit
                        </button>
                       <Link href={`/admin/vieworder?id=${order._id}`}> <button
                          className="font-medium bg-blue-600 dark:bg-blue-500 hover:bg-blue-800 text-white rounded p-2 my-2"
                        >
                          View
                        </button></Link>
                      </td>}
                    </tr>
                 
               
              </tbody>
            </table>:<h1 className="font-semibold rounded bg-blue-50 p-2 m-2 text-center">No Orders found for this order id!</h1>}
          </div>
          <div
            id="updateProductModal"
            tabIndex="-1"
            aria-hidden="true"
            className={` ${
              modal ? "" : "hidden"
            } flex h-full overflow-y-auto overflow-x-auto fixed  top-0 right-0 left-0 z-150 justify-center items-center w-full md:inset-0 h-modal md:h-full mt-10 mb-8  border-blue-400`}
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Order
                  </h3>
                  <button
                    onClick={() => {
                      Setmodal(false);
                    }}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="updateProductModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="roomno"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Room No:-
                    </label>
                    <input
                      type="text"
                      name="roomno"
                      id="roomno"
                      value={room}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. Room no:-101"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Check In
                    </label>
                    <input
                      type="text"
                      name="checkin"
                      id="checkin"
                      value={checkin}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. 10/09/2023"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Check Out
                    </label>
                    <input
                      type="text"
                      name="checkout"
                      id="checkout"
                      value={checkout}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex.10/09/2023"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={status}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>select</option>
                      <option>offlinepayment</option>
                      <option>paid</option>
                      <option>pending</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="dlstatus"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Delivery Status(Room/Order)
                    </label>
                    <select
                      id="dlstatus"
                      name="dlstatus"
                      value={dlstatus}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>select</option>
                      <option>unshipped</option>
                      <option>room alorted</option>
                      <option>confirmed</option>
                      <option>delivered</option>
                      <option>cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleUpdate}
                    className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Order
                  </button>
                </div>
              </div>
            </div>
            </div>
          
            
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Searchorder