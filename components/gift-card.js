"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./button";
import { giftCardTitlePart } from "@/constants/constants";
import { URL } from "@/constants/constants";
import Link from "next/link";

const GiftCard = ({ id, image, title, price }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [roundedDirection, setRounedDirection] = useState("");
  const [borderDirection, setBorderDirection] = useState("");
  const cardStyle = {
    transform: isFlipped ? "rotateY(0)" : "rotateY(-180deg)",
    transition: "transform 1s",
  };

  useEffect(() => {
    if (isFlipped) {
      setRounedDirection("rounded-r-[50px]");
      setBorderDirection("border-l-[14px]");
    } else {
      setRounedDirection("rounded-l-[50px]");
      setBorderDirection("border-r-[14px]");
    }
  }, [isFlipped]);

  return (
    <div
      className={` w-[65%] lg:w-[36%] sm:w-[90%] bg-white flex  text-brown ${roundedDirection} ${borderDirection} border-solid border-purple`}
      style={cardStyle}
      onMouseEnter={() => setIsFlipped(false)}
      onMouseLeave={() => setIsFlipped(true)}
    >
      {!isFlipped ? (
        <div className="w-full flex items-center justify-center ">
          <div
            className="w-[100%] flex flex-col items-center gap-6 sm:gap-6 lg:gap-12 mx-4 sm:mx-4 lg:mx-8  my-5 sm:my-5 lg:my-8 "
            style={cardStyle}
          >
            <div className="w-full flex gap-2 flex-col items-center justify-center style={cardStyle} ">
              <p className="font-roboto font-extrabold text-2xl sm:text-2xl lg:text-3xl text-center">
                {title}
              </p>
              <p className="font-pinyonscript text-2xl sm:text-2xl lg:text-3xl ">
                poklon bon
              </p>
            </div>
            <p className="font-roboto text-1xl sm:text-1xl lg:text-1xl text-center mb-8">
              Kupljeni poklon bon će biti poslan na Vašu email adresu. Osoba
              kojoj poklanjate poklon bon, treba da rezerviše termin na neki od
              kontakata sa poklon bona.
            </p>
            <Button text="Kupi" href={URL + `/gift-card/${id}`} />
          </div>
        </div>
      ) : (
        <div className="w-1/2 relative">
          <Image
            src={image}
            alt="profile"
            fill
            className="w-50% h-50% object-fit"
          />
          <div className="flex w-full flex-col items-center gap-6 sm:gap-6 lg:gap-12 my-5 sm:my-5 lg:my-8 ml-48 sm:ml-48 lg:ml-80 pl-4 sm:pl-8 lg:pl-8 ">
            <div className="flex gap-2 flex-col  items-center ">
              <p className="font-roboto font-extrabold text-1xl sm:text-2xl lg:text-3xl">
                {title}
              </p>
              <p className="font-pinyonscript text-2xl sm:text-2xl lg:text-3xl">
                {giftCardTitlePart}
              </p>
            </div>
            <p className="font-roboto font-extrabold text-2xl sm:text-2xl lg:text-3xl">
              {price}
            </p>
            <div className="font-roboto flex gap-1 flex-col mt-4 ml-6">
              <div className="flex gap-1">
                <Image src="/Telephone.png" width={25} height={20}></Image>
                <p>+38765184670</p>
              </div>
              <div className="flex gap-1">
                <Image src="/Instagram.png" width={25} height={20}></Image>
                <p>bojanagolubovic_makeup</p>
              </div>
              <div className="flex gap-1">
                <Image src="/Email.png" width={25} height={10}></Image>
                <p>bojanagolubovic.makeup@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCard;
