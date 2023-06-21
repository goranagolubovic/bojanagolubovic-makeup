import React from "react";
import Image from "next/image";

const Instruction = ({ image, text }) => {
  return (
    <div className="w-full sm:w-full lg:w-1/2 flex  text-purple text-wrap items-center font-roboto text-1xl sm:text-2xl lg:text-2xl ">
      <div className="flex w-20 sm:w-40 lg:w-40">
        <Image src={image} alt="number" width={80} height={80} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Instruction;
