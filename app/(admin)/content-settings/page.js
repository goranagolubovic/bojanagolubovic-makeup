import GallerySettings from "@/features/gallery-settings/gallery-settings";
import GiftCardSettings from "@/features/gift-card-settings/gift-card-settings";
import ScheduleSettings from "@/features/schedule-settings/schedule-settings";
import React from "react";

const giftCardsList = [
  {
    title: "GLAM MAKEUP",
    image: "",
    serialNumber: "rfn45rn",
  },
  {
    title: "EVENING MAKEUP",
    image: "",
    serialNumber: "rfjfj04",
  },
  {
    title: "EVENING MAKEUP",
    image: "",
    serialNumber: "rfjfj04",
  },
  {
    title: "EVENING MAKEUP",
    image: "",
    serialNumber: "rfjfj04",
  },
];

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
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4">
        <div className="w-[90%] sm:w-[90%] md:[w-50%] lg:w-[50%] h-[50%]">
          <GiftCardSettings
            giftCardsList={giftCardsList}
            title="Kupljeni poklon bonovi"
          />
        </div>
        <div className="w-[90%] sm:w-[90%] md:[w-50%]  lg:w-[48%]  h-[50%]">
          <GallerySettings pictures={pictures} title="Galerija" />
        </div>
      </div>
      <ScheduleSettings title="Rezervisani termini" items={reservations} />
    </div>
  );
};

export default ContentSettings;
