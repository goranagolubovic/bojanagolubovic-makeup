"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./button";
import { giftCardTitlePart } from "@/constants/constants";
import { URL } from "@/constants/constants";
import telephone from "../public/Telephone.png";
import instagram from "../public/Instagram.png";
import email from "../public/Email.png";
import Spinner from "./spinner";

const GiftCard = ({ id, image, title, price, serialNumber }) => {
  const width = serialNumber ? "xl:w-[75%]" : "xl:w-[36%]";
  const [showSpinner, setShowSpinner] = useState(false);
  const [isFlipped, setIsFlipped] = useState(true);
  const [roundedDirection, setRounedDirection] = useState("");
  const [borderDirection, setBorderDirection] = useState("");
  const cardStyle = {
    transform: isFlipped ? "rotateY(0)" : "rotateY(-180deg)",
    transition: "transform 1s",
  };
  const onMouseEnter = () => {
    if (!serialNumber) {
      setIsFlipped(false);
    }
  };

  const onMouseLeave = () => {
    if (!serialNumber) {
      setIsFlipped(true);
    }
  };

  const markAsUsed = () => {};

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
      className={` w-[96%] lg:w-[65%] ${width} sm:w-[65%] bg-white flex  text-brown ${roundedDirection} ${borderDirection} border-solid border-purple`}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!isFlipped ? (
        <div className="w-full flex items-center justify-center ">
          <div
            className="w-[100%] flex flex-col items-center gap-6 sm:gap-6 lg:gap-12 mx-4 sm:mx-4 lg:mx-8  my-5 sm:my-5 lg:my-8 "
            style={cardStyle}
          >
            <div className="w-full flex gap-2 flex-col items-center justify-center style={cardStyle} ">
              <p className="font-roboto font-extrabold text-1xl sm:text-2xl lg:text-2xl xl:text-3xl text-center">
                {title}
              </p>
              <p className="font-pinyonscript text-2xl sm:text-2xl lg:text-4xl ">
                poklon bon
              </p>
            </div>
            <p className="font-roboto text-1xl sm:text-1xl lg:text-1xl text-center mb-8">
              Kupljeni poklon bon će biti poslan na Vašu email adresu. Osoba
              kojoj poklanjate poklon bon, treba da rezerviše termin na neki od
              kontakata sa poklon bona.
            </p>
            {!showSpinner ? (
              <Button
                text="Kupi"
                href={URL + `/gift-card/${id}`}
                onClick={() => {
                  setShowSpinner(true);
                }}
              />
            ) : (
              <div className="w-full mb-4">
                <Spinner tip="Molimo sačekajte" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-1/2 relative ">
          <Image
            src={image}
            alt="profile"
            fill
            className="w-50% h-50% object-fit"
          />
          <div className="flex w-full flex-col items-center  gap-2 sm:gap-6 lg:gap-12 my-5 sm:my-5 lg:my-8 ml-36 sm:ml-48 lg:ml-56 xl:ml-80  pl-16 sm:pl-4 lg:pl-4 xl:pl-8 ">
            <div className="flex flex-col  items-center ">
              <p className="font-roboto font-extrabold text-1xl sm:text-2xl lg:text-2xl xl:text-3xl text-center">
                {title}
              </p>
              <p className="font-pinyonscript text-2xl sm:text-2xl lg:text-4xl">
                {giftCardTitlePart}
              </p>
            </div>
            {!serialNumber ? (
              <p className="font-roboto font-extrabold text-1xl sm:text-2xl lg:text-3xl">
                {price}
              </p>
            ) : (
              <p className="font-roboto text-1xl">
                Serijski broj: {serialNumber}
              </p>
            )}
            {!serialNumber ? (
              <div className="font-roboto flex gap-1 flex-col mt-4 ml-6">
                <div className="flex gap-1">
                  <Image
                    src={telephone}
                    sizes="100vw"
                    style={{ width: "7%", height: "7%" }}
                    alt="telephone"
                  ></Image>
                  <p className="text-[10px] lg:text-[18px]">+38765184670</p>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={instagram}
                    sizes="100vw"
                    style={{ width: "7%", height: "7%" }}
                    alt="instagram"
                  ></Image>
                  <p className="text-[10px] lg:text-[18px]">
                    bojanagolubovic_makeup
                  </p>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={email}
                    sizes="100vw"
                    style={{ width: "7%", height: "7%" }}
                    alt="email"
                  ></Image>
                  <p className="text-[10px] lg:text-[18px]">
                    bojanagolubovic.makeup@gmail.com
                  </p>
                </div>
              </div>
            ) : (
              <Button onClick={markAsUsed} text="Označi kao iskorišteno" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCard;
