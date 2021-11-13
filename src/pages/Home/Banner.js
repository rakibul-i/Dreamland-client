import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();

  const exploreHandler = () => {
    history.push("./apartments");
  };
  return (
    <div className="banner">
      <div className="md:w-9/12 w-11/12 mx-auto flex items-center h-full">
        <div>
          <p className="bg-gray-800 text-gray-200 px-5 py-3 text-xl w-72 text-center rounded-tr-3xl">
            Best location . cheap price
          </p>
          <h1 className="lg:text-8xl md:text-8xl text-6xl text-white uppercase py-5">
            discover <br /> modern villa
          </h1>
          <button
            onClick={exploreHandler}
            className="bg-white hover:bg-gray-700 hover:text-white transition-all duration-300 px-5 py-3 text-xl font-medium flex items-center justify-center"
          >
            Explore More <FaLongArrowAltRight className="ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
