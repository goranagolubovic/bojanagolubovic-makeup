"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import FeedBackCard from "./feedback-card";

const certificatesSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 1, // On smaller devices, show 1 slide
      },
    },
  ],
};
const feedbackSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = ({ items, type }) => {
  const settings =
    type === "certificatesCarousel" ? certificatesSettings : feedbackSettings;

  return (
    <div className="w-full lg:w-5/6 mx-auto">
      <Slider {...settings}>
        {items.length != 0 &&
          items.map((item, index) => (
            <div key={index}>
              {type === "certificatesCarousel" ? (
                <Image width={480} height={200} src={item} alt={item} />
              ) : (
                <FeedBackCard
                  clientImage={item.image}
                  clientNameAndSurname={item.nameAndSurname}
                  clientFeedback={item.feedback}
                />
              )}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
