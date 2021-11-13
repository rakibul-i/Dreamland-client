import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import "../Styles.css";
import GoogleSignIn from "../GoogleSignIn";

const Signup = () => {
  return (
    <div className=" authentication-bg">
      <div className=" md:w-9/12 w-11/12  h-screen mx-auto flex items-center justify-center">
        <div className=" py-10 bg-white px-4">
          <Link
            className="underline text-blue-900 font-semibold flex items-center"
            to="/"
          >
            <BsArrowLeft className="mr-1 mt-1" /> Back to Homepage
          </Link>
          <h1 className="text-4xl font-serif md:mt-10 mt-5 text-center">
            Register
          </h1>
          <SignupForm />
          <p className="text-center">
            Already have an account?{" "}
            <Link
              className="underline text-blue-900 font-semibold"
              to="/signin"
            >
              Sign in
            </Link>
          </p>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default Signup;
