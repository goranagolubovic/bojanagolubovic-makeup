"use client";
import GallerySettings from "@/features/gallery-settings/gallery-settings";
import GiftCardSettings from "@/features/gift-card-settings/gift-card-settings";
import ScheduleSettings from "@/features/schedule-settings/schedule-settings";
import { useState } from "react";
import Loading from "../loading";

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

const ContentSettings = () => {
  const [galleryReady, setGalleryReady] = useState(false);
  const [giftCardsReady, setGiftCardsReady] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">
        <div className="w-[90%] sm:w-[90%] md:[w-50%] lg:w-[50%] h-[50%]">
          <GiftCardSettings
            title="Kupljeni poklon bonovi"
            giftCardsReady={giftCardsReady}
            setGiftCardsReady={setGiftCardsReady}
          />
        </div>
        <div className="w-[90%] sm:w-[90%] md:[w-50%]  lg:w-[48%] h-[40%] lg:h-[50%]">
          <GallerySettings
            title="Galerija"
            galleryReady={galleryReady}
            setGalleryReady={setGalleryReady}
          />
        </div>
      </div>
      <ScheduleSettings title="Rezervisani termini" items={reservations} />
    </div>
  );
};

export default ContentSettings;
