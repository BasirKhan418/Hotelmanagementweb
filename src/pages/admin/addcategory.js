import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "../../../models/Category";
import mongoose from "mongoose";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../../trc/components/baseCard/BaseCard";
const Addcategory = ({ catroom, catfood }) => {
  const [modal, Setmodal] = useState(false);

  const [title, setTitle] = useState("");
  const [image1, setImage1] = useState("");
  const [url1, setUrl1] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [etitle, setetitle] = useState("");
  const [eprice, seteprice] = useState("");
  const [edesc, setedesc] = useState("");
  const [ecategory, setecategory] = useState("");
  const[id,setId]=useState("");

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "image1") {
      setImage1(e.target.files[0]);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "etitle") {
      setetitle(e.target.value);
    } else if (e.target.name === "edesc") {
      setedesc(e.target.value);
    } else if (e.target.name === "eprice") {
      seteprice(e.target.value);
    } else if (e.target.name === "ecategory") {
      setecategory(e.target.value);
    }
    // Handle other state updates for different fields
  };
  const uploadImage1 = () => {
    const data = new FormData();
    data.append("file", image1);
    data.append("upload_preset", "dgdea2n8");
    data.append("cloud_name", "dawzncoau");
    fetch("https://api.cloudinary.com/v1_1/dawzncoau/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        toast.success("Successfully Upload Your Image", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUrl1(data.url);
      })
      .catch((err) => {
        toast.error(
          "Sorry some error occured please try again after some time",
          {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  const handlesubmit = async () => {
    const data = { title, img: url1, desc, category, price };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/addcategory`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const r = await response.json();
    if (r.success) {
      setTitle("");
      setImage1("");
      setUrl1("");
      setCategory("");
      setDesc("");
      setPrice("");
      toast.success("Successfully Category Added ", {
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
      toast.error("Sorry some error occured please try again after some time", {
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
  const handleDelete = async (_id) => {
    let confirm1 = confirm(
      "Are You Sure To Delete This Slider Image! Please Check it ?"
    );
    if (confirm1) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/deletecategory`,
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
        toast.success("Successfully category deleted", {
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
  const update = (id,title,category,price,desc) => {
    setId(id)
    setetitle(title)
    setecategory(category)
    seteprice(price)
    setedesc(desc)
    Setmodal(true);
  };
  const handleUpdate=async()=>{
    const data={id,etitle,edesc,eprice,ecategory}
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/updatecategory`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      const r =await response.json()
      if(r.success){
        Setmodal(false)
        toast.success("Successfully category updated", {
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
          <Grid item xs={12} lg={12}>
            <BaseCard title="Add a Category  ">
              <Stack spacing={3}>
                <TextField
                  onChange={handleChange}
                  id="name-basic"
                  label="Title(Required)"
                  name="title" // Add the name attribute
                  value={title}
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  id="desc"
                  label="Description(Required)"
                  name="desc" // Add the name attribute
                  value={desc}
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  id="price"
                  label="Price₹(Required)"
                  name="price" // Add the name attribute
                  value={price}
                  variant="outlined"
                />
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your category(Required)
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={handleChange}
                  value={category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>select</option>
                  <option>room</option>
                  <option>food</option>
                </select>
                <label htmlFor="pass-basic1" className="font-bold">
                  Image 1(Required)(If image preview appears then only hit the
                  add product button )
                </label>
                <TextField
                  onChange={handleChange}
                  id="pass-basic1"
                  name="image1"
                  type="file"
                />
                {url1.length == "" ? (
                  ""
                ) : (
                  <>
                    <h4 className="font-bold">Preview Image 1</h4>
                    <img
                      src={url1}
                      alt="preview"
                      className="w-20 h-20 object-cover border-amber-500 rounded"
                    />
                  </>
                )}
                <Button
                  mt={2}
                  onClick={uploadImage1}
                  className="bg-blue-700 text-white hover:text-white hover:bg-blue-500"
                >
                  Upload Now
                </Button>
                <button
                  className="text-white bg-amber-500 hover:bg-amber-800 rounded p-2 w-40"
                  onClick={handlesubmit}
                >
                  {" "}
                  Add Now
                </button>
              </Stack>
            </BaseCard>
          </Grid>
          <div className="text-black dark:text-white h-16 flex bg-white items-center">
            <h1 className="sm:text-2xl text-xl font-bold mx-8">
              View your category in rooms (Reload page for any changes)
            </h1>
          </div>
          <div className="h-1 w-60 bg-amber-500 rounded "></div>
          <div className="flex justify-center items-center flex-wrap">
            {catroom &&
              catroom.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                  >
                    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                      <img
                        className="object-cover"
                        src={item.img}
                        alt="product image"
                      />
                    </div>
                    <div className="m-2">
                      <h5 className=" tracking-tight text-slate-900">
                        <span className="font-bold">Title:-</span>
                        {item.title}
                      </h5>
                    </div>
                    <div className="m-2">
                      <h5 className=" tracking-tight text-slate-900">
                        <span className="font-bold">Description:-</span>
                        {item.desc}
                      </h5>
                    </div>
                    <div className="m-2">
                      <h5 className=" tracking-tight text-slate-900">
                        <span className="font-bold">Price:-</span>₹{item.price}
                      </h5>
                    </div>
                    <div className="m-2 flex justify-center">
                      <button
                        className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-700 font-bold mx-1"
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      >
                        Delete Now
                      </button>
                      <button
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700 font-bold mx-1"
                        onClick={() => {
                          update(
                            item._id,
                            item.title,
                            item.category,
                            item.price,
                            item.desc
                          );
                        }}
                      >
                        Update Now
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text-black dark:text-white h-16 flex bg-white items-center">
            <h1 className="sm:text-2xl text-xl font-bold mx-8">
              View your category in foods
            </h1>
          </div>
          <div className="h-1 w-60 bg-amber-500 rounded "></div>
          <div className="flex justify-center items-center flex-wrap">
            {catfood &&
              catfood.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                  >
                    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                      <img
                        className="object-cover"
                        src={item.img}
                        alt="product image"
                      />
                    </div>
                    <div className="m-2">
                      <h5 className=" tracking-tight text-slate-900">
                        <span className="font-bold">Title:-</span>
                        {item.title}
                      </h5>
                    </div>
                    <div className="m-2">
                      <h5 className=" tracking-tight text-slate-900">
                        <span className="font-bold">Description:-</span>
                        {item.desc}
                      </h5>
                    </div>
                    <div className="m-2">
                      <h5 className=" tracking-tight text-slate-900">
                        <span className="font-bold">Price:-</span>₹{item.price}
                      </h5>
                    </div>
                    <div className="m-2 flex justify-center">
                      <button
                        className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-700 font-bold mx-1"
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      >
                        Delete Now
                      </button>
                      <button
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700 font-bold mx-1"
                        onClick={() => {
                          update(
                            item._id,
                            item.title,
                            item.category,
                            item.price,
                            item.desc
                          );
                        }}
                      >
                        Update Now
                      </button>
                    </div>
                  </div>
                );
              })}
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
                    Update Category
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
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="etitle"
                      id="etitle"
                      value={etitle}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. Deluxe room"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="desc"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="edesc"
                      id="edesc"
                      value={edesc}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. 10/09/2023"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="eprice"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="eprice"
                      id="eprice"
                      value={eprice}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex.10/09/2023"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ecategory"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="ecategory"
                      name="ecategory"
                      value={ecategory}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>select</option>
                      <option>room</option>
                      <option>food</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleUpdate}
                    className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Category
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
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let catroom = await Category.find({ category: "room" });
  let catfood = await Category.find({ category: "food" });
  return {
    props: {
      catroom: JSON.parse(JSON.stringify(catroom)),
      catfood: JSON.parse(JSON.stringify(catfood)),
    },
  };
}

export default Addcategory;
