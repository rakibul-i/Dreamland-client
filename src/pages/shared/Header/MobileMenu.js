import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const MobileMenu = () => {
  const { user } = useAuth();
  const activeStyle = {
    color: "tomato",
  };
  return (
    <div className="pb-6 transition-height duration-500 ease-in-out">
      <NavLink
        activeStyle={activeStyle}
        className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 py-3 block"
        to="/home"
      >
        Home.
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 py-3 block"
        to="/apartments"
      >
        Apartments.
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 py-3 block"
        to="/blogs"
      >
        our blogs.
      </NavLink>
      {user?.email && (
        <NavLink
          activeStyle={activeStyle}
          className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 py-3 block mb-3"
          to="/dashboard"
        >
          Dashboard.
        </NavLink>
      )}
      {user?.email ? (
        <NavLink
          activeStyle={activeStyle}
          className="flex items-center text-3xl"
          to="/profile"
        >
          {user?.photoURL ? (
            <img className="w-12 rounded-full" src={user.photoURL} alt="" />
          ) : (
            <img
              className="w-12 rounded-full"
              src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
              alt=""
            />
          )}
        </NavLink>
      ) : (
        <NavLink
          activeStyle={activeStyle}
          className="tracking-widest uppercase hover:text-white text-gray-700 transition-all duration-300 px-5 py-2 bg-pink-500 rounded "
          to="/signin"
        >
          Sign In
        </NavLink>
      )}
    </div>
  );
};

export default MobileMenu;
