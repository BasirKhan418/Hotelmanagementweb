import React, { use, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useRouter } from 'next/router'
import "react-toastify/dist/ReactToastify.css";
const Viewproducts = () => {
  const router =useRouter();
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [availableQty, setAvailableqty] = useState("");
  const [mrp, setMrp] = useState("");
  const [product, setProduct] = useState("");
  const [modal, Setmodal] = useState(false);

useEffect(()=>{
  const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
    const intervalId = setInterval(() => {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproduct`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setProduct(data);
    });
       // Fetch data every 2 minutes
    }, 2000);

    return () => clearInterval(intervalId);
},[])
  const handledelete = async (_id) => {
    let confirm1 = confirm(
      "Are You Sure To Delete This Product! Please Check it ?"
    );
    console.log(confirm1);
    if (confirm1) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/deleteproduct`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(_id),
        }
      );
      const ra = await response.json();
      if (ra.success) {
        toast.success("Successfully Product Deleted", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("something went wrong please try again after some time", {
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
  };
  const handlechange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    } else if (e.target.name === "subcategory") {
      setSubcategory(e.target.value);
    } else if (e.target.name === "size") {
      setSize(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "mrp") {
      setMrp(e.target.value);
    } else if (e.target.name === "discount") {
      setDiscount(e.target.value);
    } else if (e.target.name === "availableQty") {
      setAvailableqty(e.target.value);
    }
  };
  const updateproduct = (
    title,
    category,
    subcategory,
    size,
    mrp,
    price,
    discount,
    desc,
    availableqty,
    id
  ) => {
    setTitle(title);
    setCategory(category);
    setSubcategory(subcategory);
    setSize(size);
    setMrp(mrp);
    setPrice(price);
    setDiscount(discount);
    setAvailableqty(availableqty);
    setDesc(desc);
    setId(id);
    console.log(discount)
  };
  const handleUpdate = async () => {
    Setmodal(false);
    const data = {
      id,
      title,
      category,
      subcategory,
      size,
      price,
      mrp,
      availableQty,
       discount,
      desc,
    };
    console.log(data)
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/updateproduct`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const ra = await resp.json();
    if (ra.success) {
      toast.success("Successfully Product Updated", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Some error occured! Please try again after some time", {
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
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <FullLayout>
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
                  <th scope="col" className="px-6 py-3 flex items-center">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sub Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Available Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mrp
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount%
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(product).map((item) => {
                  return (
                    <tr
                      key={product[item]._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <img
                            src={product[item].img1}
                            className="mt-2 mx-4 w-10 h-10 border-2 border-amber-300 rounded object-cover"
                          />
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product[item].title}
                      </th>
                      <td className="px-6 py-4">{product[item].category}</td>
                      <td className="px-6 py-4">{product[item].subcategory}</td>
                      <td className="px-6 py-4">{product[item].availableQty}</td>
                      <td className="px-6 py-4">₹{product[item].mrp}</td>
                      <td className="px-6 py-4">₹{product[item].price}</td>
                      <td className="px-6 py-4">%{product[item].discountp}</td>
                      <td className="flex items-center px-6 py-4 space-x-3">
                        <button
                          className="font-medium bg-blue-600 dark:bg-blue-500 hover:bg-amber-800 text-white rounded p-1"
                          data-modal-target="popup-modal"
                          onClick={() => {
                            Setmodal(!modal);
                            updateproduct(
                              product[item].title,
                              product[item].category,
                              product[item].subcategory,
                              product[item].size,
                              product[item].mrp,
                              product[item].price,
                              product[item].discountp,
                              product[item].desc,
                              product[item].availableQty,
                              product[item]._id
                            );
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium bg-red-600 dark:bg-red-500 hover:bg-blue-800 text-white rounded p-1"
                          onClick={() => {
                            handledelete(product[item]._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div
            id="updateProductModal"
            tabIndex="-1"
            aria-hidden="true"
            className={` ${
              modal ? "" : "hidden"
            } flex overflow-y-auto overflow-x-auto absolute  top-0 right-0 left-0 z-150 justify-center items-center w-full md:inset-0 h-modal md:h-full mt-10 mb-8  border-blue-400`}
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Product
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
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="name"
                      value={title}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. Apple iMac 27&ldquo;"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mrp"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mrp
                    </label>
                    <input
                      type="number"
                      name="mrp"
                      id="mrp"
                      value={mrp}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. Apple"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      value={price}
                      name="price"
                      id="price"
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$299"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={category}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>select</option>
                      <option>room</option>
                      <option>food</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="Subcategory"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      SubCategory
                    </label>
                    <select
                      id="Subcategory"
                      name="subcategory"
                      value={subcategory}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>deluxe</option>
                      <option>exeucative</option>
                      <option>family</option>
                      <option>breakfast</option>
                      <option>lunch</option>
                      <option>dinner</option>
                      <option>snacks</option>
                      <option>fastfood</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="Available Quantity"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Available Quantity
                    </label>
                    <input
                      type="number"
                      value={availableQty}
                      name="availableQty"
                      id="Available Quantity"
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="ex:-5"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="discountp"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Discount Percentage%
                    </label>
                    <input
                      type="number"
                      value={discount}
                      name="discount"
                      id="discountp"
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$299"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Set Size
                    </label>
                    <input
                      type="text"
                      value={size}
                      name="size"
                      id="size"
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex-2Bhk or 1 plate"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={handlechange}
                      value={desc}
                      name="desc"
                      id="description"
                      rows="5"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Write a description..."
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleUpdate}
                    className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FullLayout>
      </ThemeProvider>
    </>
  );
};

export default Viewproducts;
