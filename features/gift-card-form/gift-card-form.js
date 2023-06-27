"use client";
import { React, useState, useEffect } from "react";
import FormElement from "../../components/form-element";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { convertPriceToEuro } from "@/helpers";
import { URL } from "@/constants/constants";
import PopUp from "../popup/popup";
import Button from "@/components/button";
import { object, string } from "yup";
import {
  EMAIL_FORMAT,
  REQ_FIELD,
} from "../../constants/messages/error-messages";

const userSchema = object().shape({
  dataFrom: string().required(REQ_FIELD),
  dataTo: string().required(REQ_FIELD),
  email: string().required(REQ_FIELD).max(30).email(EMAIL_FORMAT),
});

const GiftCardForm = ({ price, templateImage }) => {
  const initialOptions = {
    clientId: "test",
    currency: "EUR",
  };

  const [message, setMessage] = useState("");
  const priceInEuro = convertPriceToEuro(price);
  const [showPayPallButtons, setShowPayPallButtons] = useState();
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    dataFrom: "",
    dataTo: "",
    email: "",
  });

  const handleInputChange = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormReset(!formReset);
    setFormData({
      dataFrom: "",
      dataTo: "",
      email: "",
    });
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: priceInEuro,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then(async (details) => {
      const emailData = {
        templateImage: templateImage,
        serialNumber: details.id,
        email: formData.email,
        from: formData.dataFrom,
        to: formData.dataTo,
      };

      if (details.status === "COMPLETED") {
        const emailResponse = await fetch(URL + "/api/send-email/gift-card", {
          method: "POST",
          body: JSON.stringify(emailData),
        });
        const email = await emailResponse.json();
        setMessage(email.message.PURCHASE_SUCCESS);
        resetForm();
      }
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    try {
      await userSchema.validate(formData, { abortEarly: false });
      setShowPayPallButtons(true);
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
      className="w-full my-16 flex justify-center flex-col items-center"
    >
      <FormElement
        label="*Vaše ime i prezime"
        color="bg-white"
        onChange={handleInputChange}
        name="dataFrom"
        error={fieldErrors.dataFrom}
        formReset={formReset}
      />
      <FormElement
        label="*Ime i prezime osobe kojoj poklanjate bon"
        color="bg-white"
        name="dataTo"
        onChange={handleInputChange}
        error={fieldErrors.dataTo}
        formReset={formReset}
      />
      <FormElement
        label="*Vaša email adresa"
        color="bg-white"
        name="email"
        onChange={handleInputChange}
        error={fieldErrors.email}
        formReset={formReset}
      />

      {showPayPallButtons && message === "" ? (
        <div className="my-8">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
            ></PayPalButtons>
          </PayPalScriptProvider>
        </div>
      ) : (
        <div className="my-8">
          <Button href="" text="Pređi na plaćanje" />
        </div>
      )}
      {message !== "" && (
        <PopUp
          message={message}
          togglePopup={() => {
            setMessage("");
            setShowPayPallButtons(false);
          }}
          type={"success"}
        />
      )}
    </form>
  );
};

export default GiftCardForm;
