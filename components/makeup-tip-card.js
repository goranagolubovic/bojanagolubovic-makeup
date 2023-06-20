import React from "react";
import Image from "next/image";

const MakeupTipCard = ({ image, text, title, bgColor }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full flex flex-col gap-16 justify-center items-center my-8 font-roboto">
        <p className="text-brown text-2xl sm:text-3xl lg:text-3xl">{title}</p>
        <div className="w-3/4  flex flex-col sm:flex-col lg:flex-row justify-center items-center gap-8 ">
          <div className="w-full sm:w-full lg:w-1/2">
            <Image src={image} width={600} height={400} alt="image" />
          </div>
          <div
            className={`${bgColor} flex items-center justify-center text-brown text-1xl sm:text-2xl lg:text-2xl  w-full sm:w-full lg:w-1/2 text-center p-4`}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeupTipCard;
