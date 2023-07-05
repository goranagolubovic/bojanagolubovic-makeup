import React from "react";

const FeedBackCard = ({
  clientImage,
  clientNameAndSurname,
  clientFeedback,
}) => {
  return (
    <div className="bg-white pt-2 pb-4 sm:pt-2 sm:pb-4 lg:pt-4 lg:pb-10 flex flex-col justify-center items-center rounded-[20px] text-purple font-roboto">
      <div
        style={{
          backgroundImage: `url(${clientImage})`,
        }}
        className={`flex justify-center items-center w-16 h-16 sm:w-32 sm:h-32 lg:w-32 lg:h-32 bg-gray-200 rounded-[50%]  bg-cover`}
      ></div>
      <p className="text-1xl sm:text-2xl lg:text-2xl mt-2 mb-4 sm:mb-4 lg:mb-16 font-bold">
        {clientNameAndSurname}
      </p>
      <p className="text-1xl text-center px-8 sm:px-16  lg:px-32 font-bold font-roboto">
        {clientFeedback}
      </p>
    </div>
  );
};

export default FeedBackCard;
