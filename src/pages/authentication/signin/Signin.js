import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn";
import "../Styles.css";
import SigninForm from "./SigninForm";

const Signin = () => {
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
            Sign in
          </h1>
          <SigninForm />
          <p className="text-center">
            Don't have an account?
            <Link
              className="underline text-blue-900 font-semibold"
              to="/signup"
            >
              Sign up
            </Link>
          </p>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default Signin;
