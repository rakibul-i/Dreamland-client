import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center px-3">
        <h1 className="md:text-9xl text-6xl font-bold text-purple-800">
          oops!
        </h1>
        <h2 className="md:text-3xl text-2xl font-semibold py-8">
          404 - PAGE NOT FOUND
        </h2>
        <p className="text-center text-xl ">
          The page you are looking for might have been removed, <br /> had its
          name changed or is temporarily unavailable.
        </p>
        <button
          onClick={backToHome}
          className="my-8 bg-blue-300 px-4 py-2 rounded uppercase font-medium text-gray-100"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
