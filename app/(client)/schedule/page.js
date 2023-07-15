"use client";
import { React, useState, useEffect } from "react";
import CustomCalendar from "@/components/calendar";
import Instruction from "@/components/instruction";
import TimeList from "../../../features/time-list/time-list";
import ReservationForm from "../../../features/reservation-form/reservation-form";
import { URL } from "@/constants/constants";
import PopUp from "@/features/popup/popup";
import number1 from "../../../public/Number 1.png";
import number2 from "../../../public/Number 2.png";
import number3 from "../../../public/Number 3.png";
import Error from "@/features/error/error";

import "../../../app/globals.css";

const Schedule = () => {
  const todayDate = new Date().toLocaleDateString("fr-CA");
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [time, setTime] = useState("");
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");
  const [reservationStatus, setReservationStatus] = useState("");
  const [errorOcurred, setErorOcurred] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDateChange = (newDate) => {
    const dateFormatted = newDate.toLocaleDateString("fr-CA");
    setSelectedDate(dateFormatted);
  };

  const getReservations = async () => {
    const res = await fetch(URL + `/api/reservations/${selectedDate}`, {
      cache: "no-cache",
    });
    const data = await res.json();
    if (data.status === 500) {
      setErorOcurred(true);
      setErrorMessage(data.message);
    }
    setReservations(data.reservations);
  };

  const togglePopup = () => {
    console.log(message);
    setMessage("");
  };

  useEffect(() => {
    if (time === "") {
      const res = getReservations();
    }
  }, [selectedDate, time]);

  useEffect(() => {
    if (reservationStatus === "success") {
      const res = getReservations();
    }
  }, [reservationStatus]);

  return (
    <div className="w-full flex justify-center items-center  my-10">
      {errorOcurred ? (
        <Error message={errorMessage} />
      ) : (
        <div className="w-full flex justify-center items-center my-10 flex-col gap-10">
          <Instruction text="Izaberite datum na kalendaru" image={number1} />
          <CustomCalendar onDateChange={handleDateChange} />
          <Instruction
            text="Odaberite jedan od preostalih termina za odabrani datum"
            image={number2}
          />
          <TimeList reservations={reservations} setTime={setTime} />
          <Instruction text="Unesite lične podatke" image={number3} />
          <ReservationForm
            selectedDate={selectedDate}
            time={time}
            setTime={setTime}
            setMessage={setMessage}
            setReservationStatus={setReservationStatus}
          />
          {message !== "" && (
            <PopUp
              message={message}
              togglePopup={togglePopup}
              type={reservationStatus}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Schedule;
