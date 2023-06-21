"use client";
import { React, useState, useEffect } from "react";
import CustomCalendar from "@/components/calendar";
import Instruction from "@/components/instruction";
import TimeList from "../../features/time-list/time-list";
import ReservationForm from "../../features/reservation-form/reservation-form";
import { URL } from "@/constants/constants";
import PopUp from "@/features/popup/popup";

const Schedule = () => {
  const todayDate = new Date().toLocaleDateString("fr-CA");
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [time, setTime] = useState("");
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");

  const handleDateChange = (newDate) => {
    const dateFormatted = newDate.toLocaleDateString("fr-CA");
    setSelectedDate(dateFormatted);
  };

  const getReservations = async () => {
    const res = await fetch(URL + `/api/reservations/${selectedDate}`, {
      cache: "no-cache",
    });
    const data = await res.json();
    setReservations(data.reservations);
  };

  const togglePopup = () => {
    console.log(message);
    setMessage("");
  };

  useEffect(() => {
    const res = getReservations();
  }, [selectedDate]);

  return (
    <div className="w-full flex justify-center items-center my-10 flex-col gap-10">
      <Instruction text="Izaberite datum na kalendaru" image="/Number 1.png" />
      <CustomCalendar onDateChange={handleDateChange} />
      <Instruction
        text="Odaberite jedan od preostalih termina za odabrani datum"
        image="/Number 2.png"
      />
      <TimeList reservations={reservations} setTime={setTime} />
      <Instruction text="Unesite lične podatke" image="/Number 3.png" />
      <ReservationForm
        selectedDate={selectedDate}
        time={time}
        setMessage={setMessage}
      />
      {message !== undefined && message !== "" && (
        <PopUp message={message} togglePopup={togglePopup} />
      )}
    </div>
  );
};

export default Schedule;
