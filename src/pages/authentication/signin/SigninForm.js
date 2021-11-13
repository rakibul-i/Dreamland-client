import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const SigninForm = () => {
  const { logInWithEmailAndPassword, loginError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    logInWithEmailAndPassword(data.email, data.password, location, history);
  };

  return (
    <div className="md:w-96 w-full py-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          {loginError && (
            <span className="bg-red-100 text-center w-full py-2 px-3">
              {loginError}
            </span>
          )}
        </div>
        <div className="flex items-center bg-white md:px-3 px-0 rounded my-3 border">
          <HiOutlineMail className="text-xl text-green-500 md:mx-3 mx-1" />
          <input
            type="email"
            placeholder="Email"
            className=" md:px-4 px-1 py-2 focus:outline-none"
            {...register("email", { required: true })}
          />
        </div>
        <span className="text-sm text-red-500">
          {errors.email?.type === "required" && "email name is required"}
        </span>
        <div className="flex items-center bg-white md:px-3 px-0 rounded mt-3 border">
          <RiLockPasswordFill className="text-xl text-green-500 md:mx-3 mx-1" />
          <input
            type="password"
            placeholder="Password"
            className=" md:px-4 px-1 py-2 focus:outline-none"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
          />
        </div>
        <span className="text-sm text-red-500 block">
          {errors.password?.type === "required" && "password  is required"}
        </span>
        <span className="text-sm text-red-500 block">
          {errors.password?.type === "pattern" &&
            "password must be 6 characters"}
        </span>

        <div className="text-center">
          <input
            className="bg-purple-400 cursor-pointer mt-4 text-white px-5 py-2 rounded"
            value="Sign in"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
