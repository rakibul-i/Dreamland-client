import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://dry-gorge-66689.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-10 bg-gray-100 my-10">
      <h1 className="md:text-3xl  text-center font-serif tracking-wide">
        Customers Review
      </h1>
      <p className="text-center text-gray-500 pb-7 pt-3">
        Total Reviews: {reviews.length}
      </p>
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <div key={review._id}>
              <div className="bg-white lg:mx-10 lg:px-5 px-2 mx-2 py-5 rounded border text-center">
                <StarRatings
                  rating={review.rating}
                  starRatedColor="orange"
                  starDimension="20px"
                  starSpacing="5px"
                />
                <h1 className="capitalize text-black font-serif py-4">
                  {review.name}
                </h1>
                <p className="capitalize text-gray-300 text-sm">
                  {review.message}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
