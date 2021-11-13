import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { VscLocation } from "react-icons/vsc";
import UserInformation from "./UserInformation";

const ApartmentDetails = () => {
  const [apartment, setApartment] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dry-gorge-66689.herokuapp.com/apartments/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setApartment(data);
      });
  }, []);

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-20">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex justify-center items-center">
            <img src={apartment?.imageUrl} alt="" />
          </div>
          <div className="md:py-0 py-5 md:px-0 px-2">
            <h1 className="lg:text-3xl text-2xl font-serif">
              {apartment?.title}
            </h1>
            <p className="text-gray-500 tracking-widest py-5 leading-loose">
              {apartment?.description}
            </p>
            <div className="md:flex justify-between text-capitalized">
              <span className="capitalize text-xl">
                <span className="text-sm">Caterory: </span>
                {apartment?.caterory}
              </span>
              <span className="flex items-center md:text-xl md:py-0 py-3">
                <VscLocation className="text-xl" />
                {apartment?.location}
              </span>
            </div>
            <div className="md:flex justify-between text-capitalized py-5">
              <span className="capitalize text-xl">৳{apartment?.price}</span>
              <span className="flex items-center md:py-0 py-3">
                inStock:
                <span className="text-xl">{apartment?.stock}</span>
              </span>
            </div>
            <UserInformation apartment={apartment}></UserInformation>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentDetails;
