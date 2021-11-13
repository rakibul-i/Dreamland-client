import React from "react";

const About = () => {
  return (
    <div className="md:w-9/12 w-11/12 mx-auto lg:px-10 px-3 py-10">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="lg:p-10 ">
          <img
            src="https://www.ofdesign.net/wp-content/uploads/images/apartment-design-impresses-with-innovative-and-sustainable-solutions-0-624859942.jpg"
            alt=""
          />
        </div>
        <div className="md:mx-2 md:my-0 my-4 flex items-center">
          <div>
            <h1 className="text-center lg:text-5xl text-gray-400 text-2xl">
              About Us
            </h1>
            <p className="text-center md:leading-relaxed tracking-widest pt-10">
              Last 10 years, we are selling apartments with 100% customers
              setisfaction. Government Lincese to do continue out bussiness. n
              recent times, people have become more and more interested in
              interior decor. Adding some personal touch to their interior is a
              story.n recent times, people have become more and more interested
              in interior decor. Adding some personal touch to their interior is
              a story.n recent times, people have become more and more
              interested in interior decor. Adding some personal touch to their
              interior is a story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
