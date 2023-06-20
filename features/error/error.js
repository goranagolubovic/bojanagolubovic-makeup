import React from "react";
import { ERROR } from "../../constants/messages/error-messages";
import Image from "next/image";

const Error = ({ message }) => {
  return (
    <div
      className={
        "w-full sm:w-full lg:w-1/3 rounded rounded-[20px] flex flex-col justify-center items-center font-roboto p-5 sm:p-5 lg:p-10 bg-white m-5 sm:m-5 lg:m-20 text-brown text-center"
      }
    >
      <p className={"text-1xl sm:text-1xl lg:text-4xl mb-20 font-bold"}>
        {ERROR}
      </p>
      <Image src={"/Error.png"} alt="error" width={200} height={200} />
      <p className={"text-sm sm:text-sm lg:text-2xl"}>{message}</p>
    </div>
  );
};

export default Error;
