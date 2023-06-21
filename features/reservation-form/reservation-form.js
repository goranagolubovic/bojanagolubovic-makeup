"use client";
import { React, useState } from "react";
import { object, string, number, matches } from "yup";
import {
  EMAIL_FORMAT,
  MAX_NAME_MESSAGE,
  MAX_SURNAME_MESSAGE,
  MIN_NAME_MESSAGE,
  MIN_SURNAME_MESSAGE,
  REQ_FIELD,
  TEL_FORMAT,
  TIME_REQ,
} from "../../constants/messages/error-messages";
import FormElement from "@/components/form-element";
import Button from "@/components/button";
import { URL } from "@/constants/constants";
import { formatDate } from "@/helpers";

const userSchema = object().shape({
  // ime: string().required(REQ_FIELD),
  // // .min(2, MIN_NAME_MESSAGE)
  // // .max(16, MAX_NAME_MESSAGE),
  // prezime: string().required(REQ_FIELD),
  // // .min(3, MIN_SURNAME_MESSAGE)
  // // .max(40, MAX_SURNAME_MESSAGE),
  // broj: string().required(REQ_FIELD),
  // email: string().required(REQ_FIELD).max(30).email(EMAIL_FORMAT),
});

const ReservationForm = ({ selectedDate, time, setMessage }) => {
  const [fieldErrors, setFieldErrors] = useState({});

  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    broj: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (time === "") {
      setMessage(TIME_REQ);
      return;
    }
    const reservation = {
      isReserved: true,
      [selectedDate]: time,
      brojTelefona: formData.broj,
      ime: formData.ime,
      prezime: formData.prezime,
      email: formData.email,
    };

    try {
      await userSchema.validate(reservation, { abortEarly: false });

      const reservationResponsePromise = await fetch(
        URL + "/api/reservations",
        {
          method: "POST",
          body: JSON.stringify(reservation),
        }
      );

      const reservationResponse = await reservationResponsePromise.json();
      if (reservationResponse.status === 200) {
        const formattedDate = formatDate(selectedDate);

        const emailData = {
          datum: formattedDate,
          vrijeme: time,
          email: formData.email,
        };
        const emailResponse = await fetch(URL + "/api/send-email", {
          method: "POST",
          body: JSON.stringify(emailData),
        });
        const mess = reservationResponse.message.RESERVATION_SUCCESS;
        console.log(reservationResponse.message.RESERVATION_SUCCESS);
        setMessage(mess);
      }
      setMessage(reservationResponse.message.DB_ERROR);
    } catch (error) {
      // If validation fails, handle the error
      console.log("Form validation error:", error);

      // Extract individual field errors from Yup validation error
      const fieldErrors = {};
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });

      // Update the state with the field errors
      setFieldErrors(fieldErrors);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white w-3/4 sm:w-2/3 lg:w-1/3 py-16 flex justify-center flex-col items-center rounded-[20px]"
    >
      <FormElement
        label="*Ime"
        name="ime"
        color="bg-gray"
        onChange={handleInputChange}
        error={fieldErrors.ime}
      />
      <FormElement
        label="*Prezime"
        color="bg-gray"
        name="prezime"
        onChange={handleInputChange}
        error={fieldErrors.prezime}
      />
      <FormElement
        label="*Broj telefona"
        name="broj"
        color="bg-gray"
        onChange={handleInputChange}
        error={fieldErrors.broj}
      />
      <FormElement
        label="*Email"
        name="email"
        color="bg-gray"
        onChange={handleInputChange}
        error={fieldErrors.email}
      />
      <Button href="" text="Zakaži termin" />
    </form>
  );
};

export default ReservationForm;
