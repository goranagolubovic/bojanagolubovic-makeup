"use client";
import { React, useState } from "react";
import { object, string } from "yup";
import {
  EMAIL_FORMAT,
  REQ_FIELD,
  TEL_FORMAT,
  TIME_REQ,
} from "../../constants/messages/error-messages";
import FormElement from "@/components/form-element";
import Button from "@/components/button";
import { URL, reservationInProgress } from "@/constants/constants";
import { formatDate } from "@/helpers";
import Spinner from "@/components/spinner";

const userSchema = object().shape({
  ime: string().required(REQ_FIELD),
  prezime: string().required(REQ_FIELD),
  brojTelefona: string().matches(/^\d+$/, TEL_FORMAT).required(REQ_FIELD),
  email: string().required(REQ_FIELD).max(30).email(EMAIL_FORMAT),
});

const ReservationForm = ({
  selectedDate,
  time,
  setTime,
  setMessage,
  setReservationStatus,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    brojTelefona: "",
    email: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormReset(!formReset);
    setFormData({
      ime: "",
      prezime: "",
      brojTelefona: "",
      email: "",
    });
    setTime("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    const reservation = {
      isReserved: true,
      [selectedDate]: time,
      brojTelefona: formData.brojTelefona,
      ime: formData.ime,
      prezime: formData.prezime,
      email: formData.email,
    };

    try {
      await userSchema.validate(reservation, { abortEarly: false });
      if (time === "") {
        setMessage(TIME_REQ);
        setReservationStatus("error");
        return;
      }
      setIsSubmitted(true);
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
        const emailResponse = await fetch(URL + "/api/send-email/reservation", {
          method: "POST",
          body: JSON.stringify(emailData),
        });
        const mess = await reservationResponse.message.RESERVATION_SUCCESS;
        console.log(reservationResponse.message.RESERVATION_SUCCESS);
        setMessage(mess);
        setReservationStatus("success");
        resetForm();
      } else {
        setReservationStatus("error");
        setMessage(reservationResponse.message.DB_ERROR);
      }
    } catch (error) {
      console.log("Form validation error:", error);
      const fieldErrors = {};
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      setFieldErrors(fieldErrors);
    }
    setIsSubmitted(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white w-3/4 sm:w-2/3 lg:w-1/3 h-[400px] lg:h-[500px] sm:h-[500px]  py-16 flex justify-center flex-col items-center rounded-[20px]"
    >
      {isSubmitted ? (
        <Spinner tip={reservationInProgress} />
      ) : (
        <>
          <FormElement
            label="*Ime"
            name="ime"
            color="bg-gray"
            onChange={handleInputChange}
            formReset={formReset}
            error={fieldErrors.ime}
          />
          <FormElement
            label="*Prezime"
            color="bg-gray"
            name="prezime"
            onChange={handleInputChange}
            formReset={formReset}
            error={fieldErrors.prezime}
          />
          <FormElement
            label="*Broj telefona"
            name="brojTelefona"
            color="bg-gray"
            onChange={handleInputChange}
            formReset={formReset}
            error={fieldErrors.brojTelefona}
          />
          <FormElement
            label="*Email"
            name="email"
            color="bg-gray"
            onChange={handleInputChange}
            formReset={formReset}
            error={fieldErrors.email}
          />

          <Button href="" text="Zakaži termin" />
        </>
      )}
    </form>
  );
};

export default ReservationForm;
