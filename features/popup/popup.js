import React from "react";

const PopUp = ({ togglePopup, message }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75">
      <div className="absolute rounded-[20px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-300 bg-yellow p-10 text-1xl sm:text-2xl lg:text-2xl text-center">
        <p className="text-purple font-roboto ">{message}</p>
        <div
          className="flex items-center justify-center bg-purple mt-20 p-2 mx-auto cursor-pointer w-full sm:w-1/3 lg:w-1/3 text-center rounded-[10px]"
          onClick={togglePopup}
        >
          Zatvori
        </div>
      </div>
    </div>
  );
};

export default PopUp;
