"use client";
import { React, useState } from "react";
import TimeElement from "@/components/time-element";
import { slots } from "../../constants/constants";

const TimeList = ({ reservations, setTime }) => {
  const availableSlots = slots.filter(
    (slot) =>
      !reservations.some(
        (reservation) => reservation[Object.keys(reservation)[2]] === slot
      )
  );

  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTime(time);
  };

  return (
    <div className=" flex flex-wrap w-1/2 border-[2px] border-brown text-purple text-1xl  rounded-[10px] py-16 px-32 gap-10 font-roboto font-bold justify-center items-center  ">
      {availableSlots.map((elem, key) => {
        return (
          <TimeElement
            key={key}
            time={elem}
            isSelected={selectedTime === elem}
            onSelect={handleTimeSelect}
          />
        );
      })}
    </div>
  );
};

export default TimeList;
