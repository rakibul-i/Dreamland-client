import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import "./Header.css";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="header" className="header bg-white text-black">
        <div className="xl:w-9/12 w-11/12 mx-auto flex justify-between items-center py-2">
          <div className="logo">
            <Link
              to="/"
              className="md:text-4xl text-3xl  font-serif tracking-widest"
            >
              <span className="text-purple-600">Dr</span>eam
              <span className="text-pink-500">l</span>and
            </Link>
          </div>
          {/* menu */}
          <menu>
            {/* // responsive_menu */}
            <div className="lg:block hidden">
              <ResponsiveMenu />
            </div>
            {/* mobile menu toggle button */}
            <button onClick={isOpenHandler} className="lg:hidden block">
              <GrMenu className="text-3xl text-white" />
            </button>
          </menu>
        </div>
        <div className=" lg:hidden block xl:w-9/12 w-11/12 mx-auto">
          {/* // mobile menu  */}
          <div className={isOpen ? "block" : "hidden"}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
