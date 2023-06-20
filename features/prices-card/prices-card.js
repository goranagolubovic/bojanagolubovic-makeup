import React from "react";

const PricesCard = ({ prices, title }) => {
  return (
    <div className=" bg-gradient-to-b from-rose-50 to-transparent bg-blend-overlay my-20 sm:my-10 lg:my-20 text-brown font-roboto rounded rounded-[40px]">
      <p className="text-center text-2xl sm:text-2xl lg:text-3xl font-bold pt-10 pb-10 sm:pb-10 lg:pb-20">
        {title}
      </p>
      {prices.map((elem) => {
        return (
          <div className="flex flex-row gap-5 sm:gap-5 lg:gap-20 justify-between  mx-5 sm:mx-5 lg:mx-60 text-1xl sm:text-1xl lg:text-2xl mb-2 sm:mb-2 lg:mb-5">
            <p>{elem.title}</p>
            <p>{elem.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PricesCard;
