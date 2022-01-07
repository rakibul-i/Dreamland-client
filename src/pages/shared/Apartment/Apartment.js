import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./Apartment.css";

const Apartment = (props) => {
  const { _id, imageUrl, title } = props.apartment;

  const history = useHistory();

  const apartmentHandler = () => {
    history.push(`/apartments/${_id}`);
  };
  return (
    <div className="apartment py-10 md:px-5  px-2  md:m-3 my-3 mx-1 flex justify-center overflow-hidden">
      <div className="overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="text-center rounded apartment-image overflow-hidden transition-all duration-500"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className=" py-4 bg-gray-100 text-center">
          <h1 className="text-xl font-semibold font-serif">{title}</h1>
          <button
            onClick={apartmentHandler}
            className="py-5 text-center text-puple-800  font-medium flex w-full items-center justify-center"
          >
            Explore Now <FaArrowRight className="mt-1 mx-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
