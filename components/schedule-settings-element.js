"use client";
import Button from "./button";
import React from "react";

const ScheduleSettingsElement = ({ date, time, nameAndSurname }) => {
  const cancelReservation = () => {};

  return (
    <div className="  flex flex-col border-brown border-[4px] rounded-[20px]  px-16 lg:px-8 py-2 lg:py-4 items-center">
      <p className="text-brown font-roboto font-bold">
        {date} {time}
      </p>
      <p className="text-brown font-roboto font-bold">{nameAndSurname}</p>
      <div className="mt-2">
        <Button text="Otkaži" onClick={cancelReservation} />
      </div>
    </div>
  );
};

export default ScheduleSettingsElement;
