"use client";
import { URL } from "@/constants/constants";
import GallerySettings from "@/features/gallery-settings/gallery-settings";
import GiftCardSettings from "@/features/gift-card-settings/gift-card-settings";
import ScheduleSettings from "@/features/schedule-settings/schedule-settings";
import { filterGiftCards } from "@/helpers";
import React, { useEffect, useState } from "react";

const reservations = [
  {
    date: "24-05-2023",
    time: "15:00",
    nameAndSurname: "Gorana Golubovic",
    _id: "1",
  },
  {
    date: "24-05-2023",
    time: "15:00",
    nameAndSurname: "Gorana Golubovic",
    _id: "2",
  },
  {
    date: "24-05-2023",
    time: "15:00",
    nameAndSurname: "Gorana Golubovic",
    _id: "3",
  },
];
const pictures = [{ image: "/gorana.jpg" }, { image: "/gorana.jpg" }];

const ContentSettings = () => {
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
  };

  useEffect(() => {
    getGiftCards();
  }, [stateListener]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">
        <div className="w-[90%] sm:w-[90%] md:[w-50%] lg:w-[50%] h-[50%]">
          <GiftCardSettings
            giftCardsList={giftCards}
            title="Kupljeni poklon bonovi"
            setStateListener={() => {
              setStateListener(!stateListener);
            }}
          />
        </div>
        <div className="w-[90%] sm:w-[90%] md:[w-50%]  lg:w-[48%] h-[40%] lg:h-[50%]">
          <GallerySettings pictures={pictures} title="Galerija" />
        </div>
      </div>
      <ScheduleSettings title="Rezervisani termini" items={reservations} />
    </div>
  );
};

export default ContentSettings;
