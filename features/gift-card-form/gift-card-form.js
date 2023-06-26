"use client";
import { React, useState } from "react";
import FormElement from "../../components/form-element";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { convertPriceToEuro } from "@/helpers";
import { URL } from "@/constants/constants";
import PopUp from "../popup/popup";

const initialOptions = {
  clientId: "test",
  currency: "EUR",
};

const GiftCardForm = ({ price, templateImage }) => {
  const [message, setMessage] = useState("");
  const priceInEuro = convertPriceToEuro(price);
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        email: "goranagolubovic8@gmail.com",
      };

      if (details.status === "COMPLETED") {
        const emailResponse = await fetch(URL + "/api/send-email/gift-card", {
          method: "POST",
          body: JSON.stringify(emailData),
        });
        const email = await emailResponse.json();
        setMessage(email.message.PURCHASE_SUCCESS);
      }
    });
  };
  return (
    <form
      className="w-full my-16 flex justify-center flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormElement
        label="*Ime"
        color="bg-white"
        onChange={handleInputChange}
        name="ime"
        error={""}
        formReset={() => {}}
      />
      <FormElement
        label="*Prezime"
        color="bg-white"
        name="prezime"
        onChange={handleInputChange}
        error={""}
        formReset={() => {}}
      />
      <FormElement
        label="*Email"
        color="bg-white"
        name="email"
        onChange={handleInputChange}
        error={""}
        formReset={() => {}}
      />
      {message === "" && (
        <div className="my-8">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
            ></PayPalButtons>
          </PayPalScriptProvider>
        </div>
      )}
    </form>

    //   {message !== "" && (
    //     <PopUp
    //       message={message}
    //       togglePopup={() => {
    //         setMessage("");
    //       }}
    //       type={"success"}
    //     />
    //   )}
  );
};

export default GiftCardForm;
