"use client";
import React, { useEffect, useState } from "react";
import Carousel from "@/components/carousel";
import AddPictureForm from "../add-picture-form/add-picture-form";
import Spinner from "@/components/spinner";
import { URL } from "@/constants/constants";

const GallerySettings = ({ title, setGalleryReady, galleryReady }) => {
  const [pictures, setPictures] = useState([]);
  const [stateListener, setStateListener] = useState(false);

  const getPictures = async () => {
    const data = {
      admin: true,
    };
    const response = await fetch(URL + "/api/pictures", {
      cache: "no-store",
    });
    const responseData = await response.json();
    const pics = responseData.pictures.reverse();
    setPictures(pics);
    setGalleryReady(true);
  };

  useEffect(() => {
    getPictures();
  }, [stateListener]);

  return (
    <div className="w-full sm:h-[630px] lg:h-[840px] bg-gray  rounded-[20px] my-4  mx-3 sm:mx-3 md:mx-3 lg:mx-3 flex-col flex pt-6 pb-6 gap-4 items-center shadow-custom">
      <p className="font-greatvibes text-3xl  sm:text-3xl md:text-4xl lg:text-6xl text-purple ">
        {title}
      </p>
      <div className=" bg-white  w-[70%] lg:w-[42%] h-[25%] lg:h-[40%] rounded-[20px] flex items-center">
        {!galleryReady ? (
          <Spinner />
        ) : (
          <Carousel
            items={pictures}
            type="galleryCarousel"
            containerStyle="w-full lg:w-full"
            sliderStyle="px-12 lg:px-24 "
            setStateListener={() => {
              setStateListener(!stateListener);
            }}
          />
        )}
      </div>
      <AddPictureForm setStateListener={setStateListener} />
    </div>
  );
};

export default GallerySettings;
