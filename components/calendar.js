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
    <div className="text-brown font-bold">
      <Calendar
        onChange={handleDateSelection}
        value={value}
        calendarType="US"
      />
    </div>
  );
};

export default CustomCalendar;
