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
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const generallySettings = {
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

const Carousel = ({ items, type, sliderStyle, containerStyle }) => {
  const settings =
    type === "certificatesCarousel" ? certificatesSettings : generallySettings;

  return (
    <div className={containerStyle}>
      <Slider {...settings} className={sliderStyle}>
        {items.map((item, index) => (
          <div key={index}>
            {(() => {
              switch (type) {
                case "certificatesCarousel":
                  return (
                    <Image width={480} height={200} src={item} alt={item} />
                  );
                case "galleryCarousel":
                  return (
                    <Image
                      width={200}
                      height={200}
                      src={item.image}
                      alt={item.image}
                    />
                  );
                default:
                  return (
                    <FeedBackCard
                      clientImage={item.image}
                      clientNameAndSurname={item.nameAndSurname}
                      clientFeedback={item.feedback}
                    />
                  );
              }
            })()}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
