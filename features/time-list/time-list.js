"use client";
import { React, useState } from "react";
import TimeElement from "@/components/time-element";
import { slots } from "../../constants/constants";

const TimeList = ({ reservations, setTime }) => {
  const [background, setBackground] = useState("bg-transparent");

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
    <div
      className={` flex flex-wrap w-2/3 sm:w-2/3 lg:w-1/2 border-[2px] border-brown text-purple sm:text-lg lg:text-lg xl:text-xl  rounded-[10px] py-8 px-8 sm:px-16 lg:px-32 gap-4 sm:gap-8 lg:gap-10 font-roboto font-bold justify-center items-center ${background} `}
      onMouseEnter={() => setBackground("bg-neutral-50 bg-opacity-20")}
      onMouseLeave={() => setBackground("bg-transparent")}
    >
      {availableSlots.length === 0 ? (
        <p className="text-red-300 text-1xl lg:text-2xl sm:text-2xl font-normal">
          Žao nam je, za odabrani datum nema slobodnih termina.
        </p>
      ) : (
        availableSlots.map((elem, key) => {
          return (
            <TimeElement
              key={key}
              time={elem}
              isSelected={selectedTime === elem}
              onSelect={handleTimeSelect}
            />
          );
        })
      )}
    </div>
  );
};

export default TimeList;
