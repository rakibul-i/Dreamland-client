import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import { CgProfile } from "react-icons/cg";

const ResponsiveMenu = () => {
  const { user } = useAuth();
  const activeStyle = {
    color: "tomato",
  };
  return (
    <div className="flex items-center relative">
      <NavLink
        activeStyle={activeStyle}
        className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 px-5"
        to="/home"
      >
        Home.
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 px-5"
        to="/apartments"
      >
        Apartments.
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 px-5"
        to="/blogs"
      >
        our blogs.
      </NavLink>
      {user?.email && (
        <NavLink
          activeStyle={activeStyle}
          className="tracking-widest uppercase hover:text-red-500 transition-all duration-300 px-5"
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
          className="tracking-widest  uppercase hover:text-white transition-all duration-300 px-5 py-2 bg-pink-500 rounded text-gray-700"
          to="/signin"
        >
          Sign In
        </NavLink>
      )}
    </div>
  );
};

export default ResponsiveMenu;
