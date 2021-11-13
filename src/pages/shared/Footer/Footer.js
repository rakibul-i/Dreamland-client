import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" md:w-9/12 w-11/12 mx-auto py-20 md:flex justify-between">
        <div className="">
          <h1 className="text-3xl font-semibold uppercase tracking-widest mb-4">
            Address
          </h1>
          <h3 className="text-xl py-5 font-medium">Write us:</h3>
          <p className="text-sm">dreamland@dream.com</p>
          <h3 className="text-xl py-5 font-medium">Call us:</h3>
          <p className="text-sm">111 222 333</p>
        </div>
        <div className="md:my-0 my-5">
          <h1 className="text-3xl font-semibold uppercase tracking-widest mb-4">
            CONTACT AGENT
          </h1>
          <div className="flex space-x-5">
            <img
              className="w-40"
              src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
              alt=""
            />
            <div>
              <h3 className="text-xl py-5 font-medium">Justin Mendela</h3>
              <p className="text-sm">Certified Agent</p>
            </div>
          </div>

          <p className="text-sm my-3">dreamlandAgent@agent.com</p>
          <p className="text-sm my-3">111 222 333</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold uppercase tracking-widest mb-4">
            ENQUIRE
          </h1>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="md:w-96 w-full py-3 px-4 bg-gray-600 block"
            />
            <input
              type="email"
              placeholder="Email address"
              className="md:w-96 w-full py-3 px-4 bg-gray-600 my-3 block"
            />
            <textarea
              placeholder="Email address"
              className="md:w-96 w-full py-3 px-4 bg-gray-600 my-3 block"
              cols="10"
              rows="4"
            ></textarea>
            <button className="bg-white text-black font-bold py-3 px-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
