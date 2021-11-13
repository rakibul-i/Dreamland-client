import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const AddApartment = () => {
  const [image, setImage] = useState(null);
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const apartmentDetails = {
      title: data.title,
      description: data.desc,
      location: data.location,
      imageUrl: image,
      price: data.price,
      caterory: data.caterory,
      stock: data.stock,
    };
    axios
      .post("http://localhost:7070/apartments", apartmentDetails)
      .then(function (response) {
        if (response.data.insertedId) {
          Swal.fire("Added!", "apartment has been added.", "success");
          history.push("/apartments");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // host image on imgbb and get url
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="bg-white px-10 pb-10">
      <h1 className="text-3xl font-bold font-serif text-gray-600 py-10">
        Add Apartment
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="image"
            className="flex items-center text-2xl w-56 text-gray-500 py-3 px-5 cursor-pointer"
          >
            <FaCloudUploadAlt className="mr-3 text-6xl text-purple-600" />
            upload
          </label>
          <input
            placeholder="apartment title"
            type="file"
            id="image"
            className="focus:outline-none border  md:w-96 py-2 px-4 my-3 hidden"
            {...register("image", { required: true })}
            onChange={imageUploadHandler}
          />
        </div>
        <div className="lg:flex lg:space-x-5">
          <input
            placeholder="apartment title"
            className="focus:outline-none border block md:w-96 py-2 px-4 my-3"
            {...register("title", { required: true })}
          />
          <input
            placeholder="apartment location"
            className="focus:outline-none border block md:w-96 py-2 px-4 my-3"
            {...register("location", { required: true })}
          />
        </div>
        <div className="lg:flex lg:space-x-5">
          <input
            placeholder="apartment price"
            type="number"
            className="focus:outline-none border block md:w-56 py-2 px-4 my-3"
            {...register("price", { required: true })}
          />
          <select
            className="focus:outline-none border block md:w-56 py-2 px-4 my-3"
            {...register("caterory", { required: true })}
          >
            <option value="single Room">Single Room</option>
            <option value="2 Room">2 Room</option>{" "}
            <option value="3 Room">3 Room</option>
            <option value="Guest House">Guest House</option>
          </select>
          <input
            placeholder="apartment stock amount"
            type="number"
            className="focus:outline-none border block md:w-56 py-2 px-4 my-3"
            {...register("stock", { required: true })}
          />
        </div>
        <div>
          <textarea
            {...register("desc", { required: true })}
            className="focus:outline-none border block md:w-96 w-full py-2 px-4 my-3"
            placeholder="apartment details"
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <input
          className="bg-purple-600 text-white px-4 py-2 text-xl font-semibold rounded mt-4"
          value="Add Apartment"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddApartment;
