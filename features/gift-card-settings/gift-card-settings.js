import React from "react";
import GiftCard from "@/components/gift-card";

const GiftCardSettings = ({ giftCardsList, title }) => {
  return (
    <div className="w-full h-[840px] bg-yellow  rounded-[20px] my-4  mx-3 sm:mx-3 md:mx-3 lg:mx-3 flex-col flex pt-6 pb-6 gap-4 justify-center items-center shadow-custom">
      <p className="font-greatvibes text-3xl  sm:text-3xl md:text-4xl lg:text-6xl text-purple ">
        {title}
      </p>
      <div className="max-h-120 overflow-y-auto w-[95%] flex flex-col items-center gap-2 sm:gap-2 md:gap-4 lg:gap-4">
        {giftCardsList.map((elem) => {
          return (
            <GiftCard
              key={elem.serialNumber}
              image={elem.image}
              title={elem.title}
              serialNumber={elem.serialNumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GiftCardSettings;
