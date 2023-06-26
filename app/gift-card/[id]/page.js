"use client";
import { React, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FormElement from "../../../components/form-element";
import { URL } from "@/constants/constants";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { convertPriceToEuro } from "@/helpers";
import GiftCardForm from "@/features/gift-card-form/gift-card-form";

const initialOptions = {
  clientId: "test",
  currency: "EUR",
};

const getGiftCard = async (id) => {
  const res = await fetch(URL + `/api/gift-cards/${id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

// const generateStaticParams = async () => {
//   const giftCards = await fetch("http://localhost:3001/gift-cards").then(
//     (res) => res.json()
//   );

//   return giftCards.map((giftCard) => ({
//     id: giftCard._id,
//   }));
// };

const GiftCardPurchase = async () => {
  const params = useParams();
  const data = await getGiftCard(params.id);
  const title = data.giftcard[0].title;
  const image = data.giftcard[0].image;
  const templateImage = data.giftcard[0].templateImage;
  const price = data.giftcard[0].price;

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: price,
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
      console.log(details);
      setStatus(details.status);
      const emailResponse = await fetch(URL + "/api/send-email/gift-card", {
        method: "POST",
        body: JSON.stringify(emailData),
      });
      // Perform any necessary post-payment actions
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,
        }}
        className="h-1/3 bg-cover bg-center w-1/3 rounded-[20px] flex  flex-col justify-center items-center my-24 py-8 "
      >
        <p className="font-roboto font-extrabold text-2xl text-brown">
          {title}
        </p>
        <p className="font-pinyonscript text-2xl text-brown">poklon bon</p>
        <GiftCardForm templateImage={templateImage} price={price} />
        {/* <div className="w-full my-16 flex justify-center flex-col items-center">
          <FormElement
            label="*Ime"
            color="bg-white"
            onChange={() => {}}
            name="ime"
            error={""}
            formReset={() => {}}
          />
          <FormElement
            label="*Prezime"
            color="bg-white"
            name="prezime"
            onChange={() => {}}
            error={""}
            formReset={() => {}}
          />
          <FormElement
            label="*Email"
            color="bg-white"
            name="email"
            onChange={() => {}}
            error={""}
            formReset={() => {}}
          />
          <div className="my-8">
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
              ></PayPalButtons>
            </PayPalScriptProvider>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GiftCardPurchase;
