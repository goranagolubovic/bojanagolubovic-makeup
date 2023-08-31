"use client";
import { React, useState, useEffect } from "react";
import ScheduleSettingsContainer from "../schedule-settings-container/schedule-settings-container";
import { URL } from "@/constants/constants";
import { filterReservations } from "@/helpers";

const ScheduleSettings = ({ title }) => {
  const [reservations, setReservations] = useState([]);
  const [reservationsTomorrow, setReservationsTomorrow] = useState([]);
  const [reservationsToday, setReservationsToday] = useState([]);
  const [reservationCanceled, setReservationCanceled] = useState(false);

  const getReservations = async () => {
    const response = await fetch(URL + "/api/reservations", {
      cache: "no-store",
    });
    const responseData = await response.json();
    setReservations(filterReservations(responseData.reservations, "all"));

    setReservationsTomorrow(
      filterReservations(responseData.reservations, "tomorrow")
    );
    setReservationsToday(
      filterReservations(responseData.reservations, "today")
    );
  };

  useEffect(() => {
    getReservations();
  }, [reservationCanceled]);

  return (
    <div className="w-[90%] lg:w-[99%] bg-pink max-h-120  rounded-[20px] my-4  mx-3 sm:mx-3 md:mx-3 lg:mx-3 flex-col flex pt-6 pb-6 gap-8 items-center shadow-custom">
      <p className="font-greatvibes text-3xl  sm:text-3xl md:text-4xl lg:text-6xl text-purple ">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32  items-center ">
        <ScheduleSettingsContainer
          items={reservationsToday}
          title="Danas"
          reservationCanceled={reservationCanceled}
          setReservationCanceled={setReservationCanceled}
        />
        <ScheduleSettingsContainer
          items={reservationsTomorrow}
          title="Sutra"
          reservationCanceled={reservationCanceled}
          setReservationCanceled={setReservationCanceled}
        />
        <ScheduleSettingsContainer
          items={reservations}
          title="Svi"
          reservationCanceled={reservationCanceled}
          setReservationCanceled={setReservationCanceled}
        />
      </div>
    </div>
  );
};

export default ScheduleSettings;
