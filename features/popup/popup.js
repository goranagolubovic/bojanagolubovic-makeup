"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import cancelImage from "../../public/Cancel.png";
import succesImage from "../../public/Success.png";

const PopUp = ({ togglePopup, message, type }) => {
  const [image, setImage] = useState("");
  const [colorText, setColorText] = useState("");
  const [colorBg, setColorBg] = useState("");
  useEffect(() => {
    if (type === "error") {
      setImage(cancelImage);
      setColorText("text-red-800");
      setColorBg("bg-red-800");
    } else if (type === "success") {
      setImage(succesImage);
      setColorText("text-green-800");
      setColorBg("bg-green-800");
    }
  }, [type]);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75">
      <div className="absolute rounded-[20px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 lg:w-1/4 bg-white p-4 sm:p-10 lg:p-10 text-1xl sm:text-2xl lg:text-2xl text-center">
        <div className="w-full flex justify-center items-center mb-10">
          {image !== "" && (
            <Image
              src={image}
              style={{
                width: "40%",
                height: "auto",
              }}
              alt="error"
            />
          )}
        </div>
        <p className={`${colorText} font-roboto `}>{message}</p>
        <div
          className={`${colorBg}  flex items-center justify-center mt-10 sm:mt-10 lg:mt-20 p-2 mx-auto cursor-pointer w-1/2 sm:w-1/2 lg:w-1/3 text-center rounded-[10px]`}
          onClick={togglePopup}
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default PopUp;
