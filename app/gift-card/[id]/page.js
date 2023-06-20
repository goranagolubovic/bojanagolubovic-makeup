"use client";
import React from "react";
import { useParams } from "next/navigation";
import FormElement from "../../../components/form-element";
import Button from "@/components/button";
import { URL } from "@/constants/constants";

const getGiftCard = async (id) => {
  console.log("called");
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
  console.log("aaaa" + params.id);
  const data = await getGiftCard(params.id);
  console.log(data.status);
  console.log(data.giftcard[0].title);
  const title = data.giftcard[0].title;
  const image = data.giftcard[0].image;
  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,
        }}
        className="bg-cover bg-center w-1/3 rounded-[20px] flex  flex-col justify-center items-center my-24 py-8 "
      >
        <p className="font-roboto font-extrabold text-2xl text-brown">
          {title}
        </p>
        <p className="font-pinyonscript text-2xl text-brown">poklon bon</p>
        <div className="w-full my-16 flex justify-center flex-col items-center">
          <FormElement label="*Ime" color="bg-white" />
          <FormElement label="*Prezime" color="bg-white" />
          <FormElement label="*Email" color="bg-white" />
          <FormElement label="*Broj kartice" color="bg-white" />
          <FormElement label="*Datum isteka" color="bg-white" />
          <div className="my-8">
            <Button text="Potvrdi kupovinu" href="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardPurchase;
