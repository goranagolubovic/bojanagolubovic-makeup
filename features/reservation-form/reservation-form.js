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
import { signInWithGoogle } from "@/constants/constants";
import SignInButton from "@/components/sign-in-button";

const userSchema = object().shape({
  brojTelefona: string().matches(/^\d+$/, TEL_FORMAT).required(REQ_FIELD),
});

const ReservationForm = ({
  selectedDate,
  time,
  setTime,
  setMessage,
  setReservationStatus,
}) => {
  const [session, setSession] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    brojTelefona: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormReset(!formReset);
    setFormData({
      brojTelefona: "",
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
      ime_i_prezime: session.user.name,
      email: session.user.email,
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
          email: session.user.email,
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
    <div className="w-3/4 sm:w-3/4 lg:w-1/3  bg-white rounded-[20px] py-2 sm:py-4 lg:py-8 flex flex-col justify-center items-center">
      <p className="text-center text-brown text-2xl sm:text-2xl lg:text-3xl font-bold pt-5 pb-10 sm:pb-10 lg:pb-16">
        ZAKAŽI TERMIN
      </p>
      {session === "" && (
        <p className="text-brown text-1xl lg:text-2xl mb-10 px-16">
          {signInWithGoogle}
        </p>
      )}
      {session !== "" && (
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col  items-center py-4 sm:py-4 py-8"
        >
          {isSubmitted ? (
            <Spinner tip={reservationInProgress} />
          ) : (
            <>
              <FormElement
                label="*Ime i prezime"
                name="name"
                color="bg-gray"
                onChange={handleInputChange}
                formReset={formReset}
                error={fieldErrors.email}
                defaultValue={session.user.name}
              />
              <FormElement
                label="*Email"
                name="name"
                color="bg-gray"
                onChange={handleInputChange}
                formReset={formReset}
                error={fieldErrors.email}
                defaultValue={session.user.email}
              />
              <FormElement
                label="*Telefon"
                name="brojTelefona"
                color="bg-gray"
                onChange={handleInputChange}
                formReset={formReset}
                error={fieldErrors.brojTelefona}
              />

              <Button href="" text="Zakaži termin" />
            </>
          )}
        </form>
      )}
      {session === "" && (
        <SignInButton icon="/google.png" setSession={setSession} />
      )}
    </div>
  );
};

export default ReservationForm;
