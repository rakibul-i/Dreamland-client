import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apartment from "../shared/Apartment/Apartment";
import Header from "../shared/Header/Header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const AllApartments = () => {
  const [apartments, setApartments] = useState([]);
  // selected page
  const [page, setPage] = useState(0);
  // total page count
  const [pageCount, setPageCount] = useState(0);
  // amount of items want to show
  const size = 12;

  useEffect(() => {
    fetch(`http://localhost:7070/apartments?page=${page}&size=${size}`)
      .then((response) => response.json())
      .then((data) => {
        setApartments(data.apartments);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  return (
    <div>
      <Header />
      <div className="bg-gray-200 py-10">
        <div className="md:w-9/12 w-11/12 mx-auto lg:p-10 p-4 bg-white">
          <Link className="px-4 font-serif underline text-blue-500" to="/">
            Back to Homepage{" "}
          </Link>
          {apartments.length ? (
            <div>
              <h1 className="md:text-4xl font-semibold text-center py-5 font-serif text-gray-400">
                Buy Your Dream Apartment
              </h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {apartments.map((apartment) => (
                  <Apartment
                    key={apartment._id}
                    apartment={apartment}
                  ></Apartment>
                ))}
              </div>
              <div className="py-4 flex justify-center">
                {[...Array(pageCount).keys()].map((number) => (
                  <button
                    className={
                      number === page
                        ? " px-2 py-1 mx-2 bg-blue-400 text-white"
                        : "border px-2 py-1 mx-2"
                    }
                    key={number}
                    onClick={() => setPage(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full py-72 flex justify-center items-center">
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllApartments;