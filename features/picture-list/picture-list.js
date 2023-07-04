import React from "react";
import Image from "next/image";

const PictureList = ({ pictures }) => {
  return (
    <div className="flex justify-center mb-20 mt-20  flex-wrap gap-24 sm:gap-24 lg:gap-48 w-full">
      {pictures.map((elem) => {
        return (
          <Image src={elem.image} alt={elem.image} width={500} height={550} />
        );
      })}
    </div>
  );
};

export default PictureList;
