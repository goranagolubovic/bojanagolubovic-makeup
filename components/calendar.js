"use client";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ onDateChange }) => {
  const [value, onChange] = useState(new Date());

  const handleDateSelection = (selectedDate) => {
    onChange(selectedDate);
    onDateChange(selectedDate);
  };

  console.log(value.toLocaleDateString());

  return (
    <div className="flex w-3/4 sm:w-2/3 lg:w-full justify-center items-center text-brown font-bold">
      <Calendar
        onChange={handleDateSelection}
        value={value}
        calendarType="US"
      />
    </div>
  );
};

export default CustomCalendar;
