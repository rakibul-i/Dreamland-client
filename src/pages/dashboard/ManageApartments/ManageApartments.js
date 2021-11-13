import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ManageApartments = () => {
  const [apartments, setApartments] = useState([]);
  // selected page
  const [page, setPage] = useState(0);
  // total page count
  const [pageCount, setPageCount] = useState(0);
  // amount of items want to show
  const size = 12;

  useEffect(() => {
    fetch(
      `https://dry-gorge-66689.herokuapp.com/apartments?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApartments(data.apartments);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <div className="bg-white md:px-10 px-1 pb-10">
      {apartments.length ? (
        <div>
          <div className="py-10">
            <table className="md:table-fixed table-auto w-full">
              <thead>
                <tr>
                  <th className="border border-purple-600 text-gray-600 tracking-wider ">
                    Title
                  </th>
                  <th className="border border-purple-600 text-gray-600 tracking-wider lg:table-cell  hidden">
                    location
                  </th>
                  <th className="border border-purple-600 text-gray-600 tracking-wider md:table-cell hidden">
                    price
                  </th>
                  <th className="border border-purple-600 text-gray-600 tracking-wider  lg:table-cell hidden">
                    stock
                  </th>
                  <th className="border border-purple-600 text-gray-600 tracking-wider">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {apartments.map((apartment) => (
                  <TableRow
                    key={apartment._id}
                    apartment={apartment}
                    apartments={apartments}
                    setApartments={setApartments}
                  ></TableRow>
                ))}
              </tbody>
            </table>
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
        <div className="h-full flex justify-center items-center">
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
  );
};

export default ManageApartments;
