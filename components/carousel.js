"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import FeedBackCard from "./feedback-card";
import Button from "./button";
import { URL } from "@/constants/constants";
import Spinner from "./spinner";

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
  autoplay: false,
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

const Carousel = ({
  items,
  type,
  sliderStyle,
  containerStyle,
  setStateListener,
}) => {
  const settings =
    type === "certificatesCarousel" ? certificatesSettings : generallySettings;
  const [actionInProgress, setActionInProgress] = useState(false);

  if (type === "feedbackCarousel") {
    items.reverse();
  }

  const deletePicture = async (id) => {
    let response;
    let responseData;

    setActionInProgress(true);

    response = await fetch(URL + "/api/pictures?id=" + id, {
      method: "DELETE",
    });
    responseData = await response.json();
    if (responseData.status === 200) {
      setActionInProgress(false);
      setStateListener();
    }
  };

  return (
    <div className={containerStyle}>
      <Slider {...settings} className={sliderStyle}>
        {items.map((item, index) => (
          <div key={index}>
            {(() => {
              switch (type) {
                case "certificatesCarousel":
                  return (
                    <Image width={480} height={250} src={item} alt={item} />
                  );
                case "galleryCarousel":
                  return (
                    <div className="w-full  flex flex-col gap-2 items-center py-4">
                      {actionInProgress ? (
                        <div className="h-[200px] w-full">
                          <Spinner tip="Brisanje slike u toku..." />
                        </div>
                      ) : (
                        <>
                          <div className="w-[200px] relative h-[200px] ">
                            <Image
                              src={item.image}
                              alt={item._id}
                              fill
                              className="w-50% h-50% object-fit"
                            />
                          </div>

                          <Button
                            text="Obriši"
                            onClick={() => deletePicture(item._id)}
                          />
                        </>
                      )}
                    </div>
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
