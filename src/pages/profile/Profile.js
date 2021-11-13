import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Profile = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="md:w-9/12 w-11/12 mx-auto h-screen  flex items-center justify-center">
      <div className="bg-gray-200 py-5 md:px-20 px-3 rounded">
        <Link className="underline text-blue-600 " to="/">
          Back to homepage
        </Link>
        <div className="py-10 ">
          <h1 className="text-xl">{user?.displayName}</h1>
          <p className="py-4 text-gray-500">Profile Update Comming soon</p>
          <button
            className="bg-red-500 px-3 py-1 rounded text-white text-xl tracking-wide mt-5"
            onClick={logOut}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
