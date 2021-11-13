import React from "react";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import About from "./About";
import Apartments from "./Apartments";
import Banner from "./Banner";
import "./Home.css";
import Reviews from "./reviews";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <About />
      <Apartments />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
