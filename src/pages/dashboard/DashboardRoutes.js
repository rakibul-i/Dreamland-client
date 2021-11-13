import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiListUnordered } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { useRouteMatch } from "react-router-dom";
import useAuth from "../../context/useAuth";

const DashboardRoutes = () => {
  const { logOut, isAdmin } = useAuth();
  let { url } = useRouteMatch();
  const activeStyle = {
    color: "tomato",
  };
  return (
    <div className="bg-gray-600 text-center px-5 py-10 ">
      {isAdmin ? (
        <>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/manageApartments`}
          >
            <FaRegSquare className="text-2xl text-gray-300 mx-2" /> Manage
            Apartments
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/manageOrders`}
          >
            <RiListUnordered className="text-2xl text-gray-300 mx-2" /> Manage
            Orders
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/addApartment`}
          >
            <MdOutlineAdd className="text-2xl text-gray-300 mx-2" /> Add
            Apartment
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/makeAdmin`}
          >
            <MdOutlineAdd className="text-2xl text-gray-300 mx-2" /> Make Admin
          </NavLink>{" "}
        </>
      ) : (
        <>
          {" "}
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/main`}
          >
            <AiOutlineHome className="text-2xl text-gray-300 mx-2" /> Dashboard
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/pay`}
          >
            <FaAmazonPay className="text-2xl text-gray-300 mx-2" /> Pay
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/myOrders`}
          >
            <RiListUnordered className="text-2xl text-gray-300 mx-2" /> My
            Orders
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="flex  items-center  text-xl text-white py-4"
            to={`${url}/review`}
          >
            <MdOutlineReviews className="text-2xl text-gray-300 mx-2" /> Rate Us
          </NavLink>
        </>
      )}

      <button
        onClick={logOut}
        className="flex mt-10 ml-2 bg-purple-600 items-center  text-xl text-white py-2 px-4 rounded"
      >
        <AiOutlineLogout className="text-2xl text-gray-300 mx-2" /> Log Out
      </button>
    </div>
  );
};

export default DashboardRoutes;
