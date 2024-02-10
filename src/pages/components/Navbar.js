import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import {
  MdAccountCircle,
  MdManageAccounts,
  MdShoppingCart,
} from "react-icons/md";
import { BiLogInCircle, BiLogOut } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { MdFoodBank } from "react-icons/md";
import {RiHotelFill} from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [mdropdown, msetDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [sidebarham, setSidebarham] = useState(false);
  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    let exempted = ["/checkout", "/order", "/orders", "/myaccount"];
    if (exempted.includes(router.pathname)) {
      setSidebar(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ref = useRef();
  const toggleCart = () => {
    setSidebar(!sidebar);
    // if(ref.current.classList.contains("translate-x-full")){
    //   ref.current.classList.remove('translate-x-full')
    //   ref.current.classList.add("translate-x-0")
    // }
    // else if(!ref.current.classList.contains("translate-x-full")){
    //   ref.current.classList.remove('translate-x-0')
    //   ref.current.classList.add("translate-x-full")
    // }
  };
  const toggleCartham = () => {
    setSidebarham(!sidebarham);
  };
  return (
    <>
      {!sidebar && (
            <span
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              {dropdown && user && (
                <div className="sticky top-0 z-30">
                <div className="absolute right-16 bg-white shadow-lg top-16 rounded-md px-5 w-44 py-4 z-30">
                  <span
                    onClick={() => {
                      setDropdown(false);
                    }}
                    className="absolute top-0 right-2 cursor-pointer text-2xl text-black"
                  >
                    <>
                      <AiFillCloseCircle />
                    </>
                  </span>
                  <Link href={"/myaccount"}>
                    <li className="py-1 text-base hover:text-pink-700 list-none font-bold flex">
                      <MdManageAccounts className="mt-1 mx-2" />
                      My Account
                    </li>
                  </Link>
                  <Link href={"/orders"}>
                    <li className="py-1 text-base hover:text-pink-700 list-none font-bold flex">
                      <MdShoppingCart className="mt-1 mx-2" />
                      My Bookings
                    </li>
                  </Link>
                  <li
                    onClick={logout}
                    className="py-1 text-base hover:text-pink-700 list-none font-bold flex"
                  >
                    <BiLogOut className="mt-1 mx-2" />
                    Logout
                  </li>
                </div>
                </div>
              )}
            </span>
          )}
          {!sidebar && (
            <span
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              {dropdown && !user && (
                <div className="sticky top-0 z-30">
                <div className="absolute right-16 bg-white shadow-lg top-16 rounded-md px-5 w-36 py-4 z-30 ">
                  <span
                    onClick={() => {
                      setDropdown(false);
                    }}
                    className="absolute top-0 right-2 cursor-pointer text-2xl text-black"
                  >
                    <>
                      <AiFillCloseCircle />
                    </>
                  </span>
                  <Link href={"/login"}>
                    <li className="py-1 hover:text-pink-700 list-none font-bold flex text-base">
                      <BiLogInCircle className="mx-2 mt-1" />
                      Login
                    </li>
                  </Link>
                </div>
                </div>
              )}
            </span>
          )}
      <div
        className={` Navbar flex flex-col lg:flex-row  justify-start md:justify-start items-center py-2 shadow-md bg-gray-900  dark:bg-black dark:text-white text-black sticky top-12 z-10 dark:sticky dark:top:0 ${!sidebarham?"h-20":""} w-full ${
          !sidebar && "overflow-hidden"
        }`}
      >
        <div className="lg:hidden mx-4 absolute right-0 top-8">
          <div className="space-y-2" onClick={toggleCartham}>
            <span
              className={`block w-8 h-0.5 bg-amber-500 ${
                sidebarham
                  ? "rotate-45 translate-y-3 absolute top-1"
                  : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-white ${sidebarham? "-rotate-45 translate-y-3 absolute bottom-1" : ""}`}
            ></span>
            <span className={`block w-8 h-0.5 bg-amber-500 ${
                sidebarham
                  ? "opacity-0"
                  : ""
              } `}></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center xl:flex-row">
          <Link href={"/"}>
            <div className="logo ml-auto flex flex-col md:justify-center justify-center items-center">
              <Image
                alt="logo"
                src="/cresentlogo.png"
                width={150}
                height={60}
              />
            </div>
          </Link>
        </div>
        <div className="nav right hidden lg:flex bg-gray-900">
          <motion.ul className="flex justify-center mx-4 items-center overflow-hidden whitespace-nowrap space-x-4 "
          initial={{ opacity: 0, y: -50 }}  transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          >
            <hr className="h-2 w-full" />
            <Link href={"/"}>
              {" "}
              <li className="text-lg my-2 font-semibold hover:bg-gray-800 hover:rounded transition duration-150 ease-out hover:ease-in text-white ">
                Home
              </li>
            </Link>
            <Link href={"/rooms"}>
              {" "}
              <li className="text-lg my-2 font-semibold hover:bg-gray-800 hover:rounded transition duration-150 ease-out hover:ease-in text-white ">
                Rooms
              </li>
            </Link>
            <Link href={"/foods"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-gray-800 hover:rounded transition duration-150 ease-out hover:ease-in text-white ">
                Foods
              </li>
            </Link>
            <Link href={"/gallery"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-gray-800 hover:rounded transition duration-150 ease-out hover:ease-in text-white">
                Gallery
              </li>
            </Link>
            <Link href={"/about"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-gray-800 hover:rounded transition duration-150 ease-out hover:ease-in text-white">
                About
              </li>
            </Link>
            <Link href={"/contactus"}>
              {" "}
              <li className="text-lg my-2 font-semibold  hover:bg-gray-800 hover:rounded transition duration-150 ease-out hover:ease-in text-white">
               Contact Us
              </li>
            </Link>
            {/* <Link href={"/"}> <a><li>Tshirts</li></a></Link> */}
          </motion.ul>
        </div>

        {/* <AiOutlineShoppingCart className="text-3xl md:text-xl"/> */}
        <motion.div className="cart absolute right-4 top-6 mx-5 flex justify-center"
        initial={{ opacity: 0, y: -50 }}  transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        >
          <Link href={"/rooms"}><motion.button className=" px-2 py-1 font-semibold bg-white rounded hover:bg-amber-600 hidden lg:block  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text border-2 border-gray-200"
           whileHover={{scale:1.1}} whileTap={{scale:0.9}}
          >BOOK A STAY</motion.button></Link>
            <MdAccountCircle
              onMouseOver={() => {
                setDropdown(true);
              }}
              className="text-xl md:text-3xl cursor-pointer mx-4 text-white hidden lg:block"
            />
          <motion.div className="hidden lg:block"
          whileHover={{scale:1.1}} whileTap={{scale:0.9}}
          >
            <AiOutlineShoppingCart
              className="text-xl md:text-3xl cursor-pointer text-white"
              
              onClick={toggleCart}
            />

            <span className="absolute -top-2 -right-2 h-5 w-5 text-sm rounded-full bg-amber-500 text-white flex justify-center items-center items cursor-pointer">
              <span>{Object.keys(cart).length}</span>
            </span>
          </motion.div>
        </motion.div>
        <div className="bottom fixed bottom-0 text-white bg-gray-900 w-full h-10 z-20 lg:hidden flex dark:bg-black dark:text-amber-500">
          <div className="box flex justify-center items-center w-1/4 cursor-pointer">
            <Link href="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-3xl dark:text-amber-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
              </svg>
            </Link>
          </div>
          <div className="box flex justify-center items-center w-1/4 cursor-pointer">
            <Link href={"/foods"}>
            <MdFoodBank className="text-3xl dark:text-amber-500"/>
            </Link>
          </div>
          <div className="box flex justify-center items-center w-1/4 cursor-pointer">
            <span className="relative" onClick={toggleCart}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-3xl dark:text-amber-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
              </svg>{" "}
              <span className="absolute -top-2 -right-2 h-5 w-5 text-sm rounded-full bg-amber-600 text-white flex justify-center items-center items cursor-pointer">
                <span>{Object.keys(cart).length}</span>
              </span>
            </span>
          </div>
          <div className="box flex justify-center items-center w-1/4 cursor-pointer">
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="text-3xl dark:text-amber-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </svg> */}
           <Link href={"/rooms"}> <RiHotelFill className="text-3xl dark:text-amber-500"/></Link>
          </div>
          <div className="box flex justify-center items-center w-1/4 cursor-pointer">
            <svg
              onClick={() => {
                msetDropdown(true);
              }}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-3xl dark:text-amber-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
              <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
            </svg>
          </div>
          {!sidebar && (
            <span
              onMouseOver={() => {
                msetDropdown(true);
              }}
              onMouseLeave={() => {
                msetDropdown(false);
              }}
            >
              {mdropdown && user && (
                <div className="absolute right-0 bg-white shadow-lg bottom-9 rounded-md px-5 w-44 py-4 z-30">
                  <span
                    onClick={() => {
                      msetDropdown(false);
                    }}
                    className="absolute top-0 right-2 cursor-pointer text-2xl  text-black"
                  >
                    <>
                      <AiFillCloseCircle />
                    </>
                  </span>
                  <Link href={"/myaccount"}>
                    <li className="py-1 text-base hover:text-amber-700 list-none font-bold flex text-black">
                      <MdManageAccounts className="mt-1 mx-2" />
                      My Account
                    </li>
                  </Link>
                  <Link href={"/orders"}>
                    <li className="py-1 text-base hover:text-amber-700 list-none font-bold flex text-black">
                      <MdShoppingCart className="mt-1 mx-2" />
                      My Bookings
                    </li>
                  </Link>
                  <li
                    onClick={logout}
                    className="py-1 text-base hover:text-amber-700 list-none font-bold flex text-black"
                  >
                    <BiLogOut className="mt-1 mx-2" />
                    Logout
                  </li>
                </div>
              )}
            </span>
          )}
          {!sidebar && (
            <span
              onMouseOver={() => {
                msetDropdown(true);
              }}
              onMouseLeave={() => {
                msetDropdown(false);
              }}
            >
              {mdropdown && !user && (
                <div className="absolute right-0 bg-white shadow-lg bottom-9 rounded-md px-5 w-36 py-4 z-30">
                  <span
                    onClick={() => {
                      msetDropdown(false);
                    }}
                    className="absolute top-0 right-2 cursor-pointer text-2xl text-amber-500"
                  >
                    <>
                      <AiFillCloseCircle />
                    </>
                  </span>
                  <Link href={"/login"}>
                    <li className="py-1 hover:text-pink-700 list-none font-bold flex text-base">
                      <BiLogInCircle className="mx-2 mt-1" />
                      Login
                    </li>
                  </Link>
                </div>
              )}
            </span>
          )}
        </div>
        {!sidebar&&<div
          className={`bg-gray-900 h-[55vh] px-8 py-10 transition-all dark:bg-black
          }`}
        >
          <motion.ul className="flex justify-center mx-4 items-center overflow-hidden whitespace-nowrap space-x-4 flex-col"
          initial={{ opacity: 0, y: -50 }}  transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          >
            <hr className="h-2 w-full" />
            <Link href={"/"}>
              {" "}
              <li className="text-lg my-2 font-semibold hover:bg-amber-100 hover:rounded transition duration-150 ease-out hover:ease-in text-white">
                Home
              </li>
            </Link>
            <Link href={"/rooms"}>
              {" "}
              <li className=" text-white text-lg my-2 font-semibold hover:bg-amber-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
                Rooms
              </li>
            </Link>
            <Link href={"/foods"}>
              {" "}
              <li className=" text-white text-lg my-2 font-semibold  hover:bg-amber-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
                Foods
              </li>
            </Link>
            <Link href={"/gallery"}>
              {" "}
              <li className=" text-white text-lg my-2 font-semibold  hover:bg-amber-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
                Gallery
              </li>
            </Link>
            <Link href={"/about"}>
              {" "}
              <li className="text-white text-lg my-2 font-semibold  hover:bg-amber-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
                About
              </li>
            </Link>
            <Link href={"/contactus"}>
              {" "}
              <li className="text-white text-lg my-2 font-semibold  hover:bg-amber-100 hover:rounded transition duration-150 ease-out hover:ease-in lg:hidden">
               Contact Us
              </li>
            </Link>
            {/* <Link href={"/"}> <a><li>Tshirts</li></a></Link> */}
          </motion.ul>
        </div>}
        <div
          ref={ref}
          className={`w-80 h-[100vh] sideCart overflow-y-scroll absolute top-0 text-white  px-8 py-10 transition-all bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 ${
            sidebar ? "right-0" : "-right-96"
          }`}
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-amber-500"
          >
            <>
              <AiFillCloseCircle />
            </>
          </span>
          <ol className="list-decimal">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your Cart is Empty!</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex flex-wrap my-5">
                    <img
                      src={cart[k].img1}
                      className="mx-4 mt-2 w-10 h-10 border-2 border-pink-300 rounded object-cover"
                    />
                    <div className="w-2/3 font-semibold">{`${cart[k].name} (${cart[k].category}) `}</div>
                    <div className="flex items-center justify-center w-1/3 font-semibold text-xl">
                      <>
                        <AiFillMinusCircle
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="cursor-pointer text-amber-500"
                        />
                      </>
                      <span className="mx-3 text-sm">{cart[k].qty}</span>
                      <>
                        <AiFillPlusCircle
                          onClick={() => {
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="cursor-pointer text-amber-500"
                        />
                      </>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="font-bold my-2">SubTotal : ₹{subTotal}</div>
          <div className="flex">
            <Link href={"/checkout"}>
              <button
                disabled={Object.keys(cart).length == 0}
                className="disabled:bg-purple-400 flex mx-auto mr-2 text-white bg-purple-600 border-0 py-2 px-2 focus:outline-none hover:bg-amber-600 rounded text-sm"
              >
                <>
                  {" "}
                  <BsFillBagCheckFill className="m-1" />{" "}
                </>
                Checkout
              </button>
            </Link>
            <button
              disabled={Object.keys(cart).length == 0}
              onClick={clearCart}
              className="disabled:bg-yellow-300 flex mx-auto mr-2 text-white bg-yellow-600 border-0 py-2 px-2 focus:outline-none hover:bg-amber-600 rounded text-sm"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
