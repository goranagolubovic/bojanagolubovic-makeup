import React from "react";
import Image from "next/image";

const Instruction = ({ image, text }) => {
  return (
    <div className="w-full sm:w-full lg:w-1/2 flex gap-10 text-purple text-center items-center font-roboto text-1xl sm:text-2xl lg:text-2xl ">
      <div className="w-50">
        <Image src={image} alt="number" width={80} height={80} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Instruction;
