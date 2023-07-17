"use client";
import { React, useEffect, useState } from "react";
import { filterGiftCards } from "@/helpers";
import GiftCard from "@/components/gift-card";
import { URL } from "@/constants/constants";
import Spinner from "@/components/spinner";

const GiftCardSettings = ({ title, setGiftCardsReady, giftCardsReady }) => {
  const [giftCards, setGiftCards] = useState([]);
  const [stateListener, setStateListener] = useState(false);

  const getGiftCards = async () => {
    const data = {
      admin: true,
    };
    const response = await fetch(URL + "/api/gift-card?admin=true", {
      cache: "no-store",
    });
    const responseData = await response.json();
    const filteredGiftCards = filterGiftCards(responseData.giftcards);
    setGiftCards(filteredGiftCards);
    setGiftCardsReady(true);
  };

  useEffect(() => {
    getGiftCards();
  }, [stateListener]);

  return (
    <div className="w-full h-[840px] bg-yellow  rounded-[20px] my-4  mx-3 sm:mx-3 md:mx-3 lg:mx-3 flex-col flex pt-6 pb-6 gap-4 justify-center items-center shadow-custom">
      <p className="font-greatvibes text-3xl  sm:text-3xl md:text-4xl lg:text-6xl text-purple ">
        {title}
      </p>
      {!giftCardsReady ? (
        <Spinner />
      ) : (
        <div className="max-h-120 overflow-y-auto w-[95%] flex flex-col items-center gap-2 sm:gap-2 md:gap-4 lg:gap-4">
          {giftCards.map((elem) => {
            return (
              <GiftCard
                key={elem.serialNumber}
                image={elem.image}
                title={elem.title}
                serialNumber={elem.serialNumber}
                setStateListener={() => {
                  setStateListener(!stateListener);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GiftCardSettings;
