import React from "react";
import Image from "next/image";

const Instruction = ({ image, text }) => {
  return (
    <div className="w-full sm:w-full lg:w-1/2 flex  text-purple text-wrap items-center font-roboto text-1xl sm:text-2xl lg:text-2xl ">
      <Image
        src={image}
        alt="number"
        sizes="100vw"
        style={{
          width: "10%",
          height: "auto",
        }}
      />
      <p>{text}</p>
    </div>
  );
};

export default Instruction;
