"use client";
import { URL } from "@/constants/constants";
import Button from "./button";
import React from "react";

const ScheduleSettingsElement = ({ elem, setCanceledMessage }) => {
  const date = Object.keys(elem).find((key) =>
    key.match(/^\d{4}-\d{2}-\d{2}$/)
  );
  const time = elem[date];
  const name = elem.ime_i_prezime;

  const cancelReservation = async () => {
    const response = await fetch(URL + "/api/reservations", {
      method: "PUT",
      body: JSON.stringify(elem),
      cache: "no-store",
    });
    const responseData = await response.json();
    console.log(JSON.stringify(responseData));
    responseData.status === "200"
      ? setCanceledMessage("Rezervacija je otkazana.")
      : setCanceledMessage(responseData.message.DB_CONNECTION_ERROR);
  };

  return (
    <div className="  flex flex-col border-brown border-[4px] rounded-[20px]  px-16 lg:px-8 py-2 lg:py-4 items-center">
      <p className="text-brown font-roboto font-bold">
        {date} {time}
      </p>
      <p className="text-brown font-roboto font-bold">{name}</p>

      <div className="mt-2">
        <Button text="Otkaži" onClick={cancelReservation} />
      </div>
    </div>
  );
};

export default ScheduleSettingsElement;
