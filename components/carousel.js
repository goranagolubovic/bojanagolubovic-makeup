"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = ({ items }) => {
  const settings = {
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

  return (
    <div style={{}}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <Image width={500} height={250} src={item} alt={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
