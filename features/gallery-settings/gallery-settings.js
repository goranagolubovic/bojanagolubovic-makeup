import React from "react";
import Carousel from "@/components/carousel";
import AddPictureForm from "../add-picture-form/add-picture-form";

const GallerySettings = ({ title, pictures }) => {
  return (
    <div className="w-full h-[840px] bg-gray  rounded-[20px] my-4  mx-3 sm:mx-3 md:mx-3 lg:mx-3 flex-col flex pt-6 pb-6 gap-4 items-center shadow-custom">
      <p className="font-greatvibes text-3xl  sm:text-3xl md:text-4xl lg:text-6xl text-purple ">
        {title}
      </p>
      <div className=" bg-white  w-[40%] h-[30%] rounded-[20px] flex items-center">
        <Carousel
          items={pictures}
          type="galleryCarousel"
          containerStyle="w-full lg:w-full mx-auto"
          sliderStyle="px-24"
        />
      </div>
      <AddPictureForm />
    </div>
  );
};

export default GallerySettings;
