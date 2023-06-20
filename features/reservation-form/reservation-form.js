"use client";
import { React, useState } from "react";
import { object, string, number, matches } from "yup";
import {
  MAX_NAME_MESSAGE,
  MAX_SURNAME_MESSAGE,
  MIN_NAME_MESSAGE,
  MIN_SURNAME_MESSAGE,
  REQ_FIELD,
  TEL_FORMAT,
} from "../../constants/messages/error-messages";
import FormElement from "@/components/form-element";
import Button from "@/components/button";
import { URL } from "@/constants/constants";

let userSchema = object({
  ime: string()
    .min(2, MIN_NAME_MESSAGE)
    .max(2, MAX_NAME_MESSAGE)
    .required(REQ_FIELD),
  prezime: string()
    .min(3, MIN_SURNAME_MESSAGE)
    .max(20, MAX_SURNAME_MESSAGE)
    .required(REQ_FIELD),
  //   broj: number()
  //     .typeError(TEL_FORMAT)
  //     //.matches(/^[0-9]+$/, TEL_FORMAT)
  //     .required(REQ_FIELD),
  //.typeError(TEL_FORMAT)
});

const ReservationForm = ({ selectedDate, time }) => {
  const [fieldErrors, setFieldErrors] = useState({});
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    broj: 0,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const reservation = {
      isReserved: true,
      [selectedDate]: time,
      brojTelefona: formData.broj,
      ime: formData.ime,
      prezime: formData.prezime,
    };

    try {
      // Validate the reservation object against the schema
      await userSchema.validate(reservation, { abortEarly: false });

      // If validation succeeds, continue with form submission
      console.log("Form is valid");

      const response = await fetch(URL + "/api/reservations", {
        method: "POST",
        body: JSON.stringify(reservation),
      });

      // Process the response from the server
      // ...
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
      className="bg-white w-1/3 py-16 flex justify-center flex-col items-center rounded-[20px]"
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
        // error={fieldErrors.broj}
      />
      <Button href="" text="Zakaži termin" />
    </form>
  );
};

export default ReservationForm;
