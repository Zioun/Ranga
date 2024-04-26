import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const AddArtAndCraft = () => {
  const { user  } = useContext(AuthContext);
  console.log(user.displayName)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const subCategory = form.subCategory.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const processingTime = form.processingTime.value;
    const photoURL = form.photoURL.value;
    const details = form.details.value;
    const name = user.displayName;
    const email = user.email;

    const artAndCraft = {
      name,
      email,
      itemName,
      subCategory,
      rating,
      price,
      customization,
      stockStatus,
      processingTime,
      photoURL,
      details,
    };
    if (
      itemName === "" ||
      subCategory === "" ||
      rating === "" ||
      price === "" ||
      customization === "" ||
      stockStatus === "" ||
      processingTime === "" ||
      photoURL === "" ||
      details === ""
    ) {
      toast.error("Input must not be empty!");
    } else {
      // send data to the server
      fetch("http://localhost:5000/addArtAndCraft", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(artAndCraft),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Successfully Added!");
          }
        });
    }
  };
  return (
    <div className="bg-[#E5E2DB]">
      <Toaster />
      <form
        onSubmit={handleRegister}
        className="flex justify-center text-center"
      >
        <div className="bg-[#ffffff] p-10 my-[100px] max-w-[9000px] shadow">
          <h1 className="text-[30px] font-mono">Add New Art And Craft</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-7 items-center">
            <div className="flex mt-3 gap-3">
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Item Name</p>
                <input
                  name="itemName"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Sub Category</p>
                <select
                  name="subCategory"
                  id="cars"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                >
                  <option value="" disabled selected>
                    -Select Option-
                  </option>
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>
            </div>
            <div className="flex mt-3 gap-3">
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Rating</p>
                <input
                  name="rating"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                  type="number"
                  placeholder="Enter your name"
                />
              </div>
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Price</p>
                <input
                  name="price"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                  type="number"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex mt-3 gap-3">
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Customization</p>
                <select
                  name="customization"
                  id="cars"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                >
                  <option value="" disabled selected>
                    -Select Option-
                  </option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Stock Status</p>
                <select
                  name="stockStatus"
                  id="cars"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                >
                  <option value="" disabled selected>
                    -Select Option-
                  </option>
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
            </div>
            <div className="flex mt-3 gap-3">
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Processing Time</p>
                <input
                  name="processingTime"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="text-left w-full">
                <p className="mb-1 font-mono">Photo URL</p>
                <input
                  name="photoURL"
                  className="h-[50px] w-full bg-transparent border-black border pl-5"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="w-full">
                <p className="mb-1 font-mono text-left">Details</p>
                <textarea
                  className="border w-full border-black resize-none pt-2 pl-3"
                  name="details"
                  placeholder="Enter your details"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="text-left text-[14px]">
              <p className="max-w-[900px] py-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta, neque sit? Ipsa, cum vitae ullam optio, quas facilis
                magni quasi laborum vel assumenda cumque quod atque porro
                recusandae suscipit, nesciunt temporibus voluptatibus iure
                corrupti?
              </p>
            </div>
            <div className="flex justify-center">
              <button className="bg-transparent py-2 border-black border text-black w-[250px] rounded-full mt-1 hover:bg-black hover:text-white mb-2">
                Add New Art And Craft
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddArtAndCraft;
