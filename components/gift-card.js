import React from "react";
import Image from "next/image";
import Button from "./button";
import { giftCardTitlePart } from "@/constants/constants";
import { URL } from "@/constants/constants";

const GiftCard = ({ id, image, title, price }) => {
  return (
    <div className=" bg-white flex border-l-[14px] border-solid  border-purple text-brown rounded-r-[50px] flex pr-8 sm:pr-4 lg:pr-12">
      <div className="w-1/2 relative">
        <Image
          src={image}
          alt="profile"
          fill
          className="w-100% h-100% object-fit"
        />
        <div className="flex w-full  flex-col items-center  gap-6 sm:gap-6 lg:gap-12 my-5 sm:my-5 lg:my-8 ml-48 sm:ml-48 lg:ml-64">
          <div className="flex gap-2 flex-col items-center">
            <p className="font-roboto font-extrabold text-2xl sm:text-2xl lg:text-3xl text-center">
              {title}
            </p>
            <p className="font-pinyonscript text-2xl sm:text-2xl lg:text-3xl">
              {giftCardTitlePart}
            </p>
          </div>
          <p className="font-roboto text-1xl sm:text-1xl lg:text-2xl">
            {price}
          </p>
          <Button text="Kupi" href={URL + `/gift-card/${id}`} />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
