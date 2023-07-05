"use client";
import { React } from "react";
import { useParams } from "next/navigation";
import { URL } from "@/constants/constants";
import GiftCardForm from "../../../features/gift-card-form/gift-card-form";
import ReservationForm from "@/features/reservation-form/reservation-form";

// const generateStaticParams = async () => {
//   const giftCards = await fetch("http://localhost:3001/gift-cards").then(
//     (res) => res.json()
//   );

//   return giftCards.map((giftCard) => ({
//     id: giftCard._id,
//   }));
// };
const getGiftCard = async (id) => {
  const res = await fetch(URL + `/api/gift-cards/${id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const GiftCardPurchase = async () => {
  const params = useParams();
  const data = await getGiftCard(params.id);

  const elem = data.giftcard[0];
  const title = elem.title;
  const image = elem.image;
  const price = elem.price;
  const templateImage = elem.templateImage;

  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${image})`,
        }}
        className="h-1/3 bg-cover bg-center w-5/6 md:w-1/2 mx-4 lg:w-1/2 xl:w-1/3 rounded-[20px] flex  flex-col justify-center items-center my-24 py-4 lg:py-8 "
      >
        <p className="font-roboto font-extrabold text-1xl lg:text-2xl text-brown">
          {title}
        </p>
        <p className="font-pinyonscript text-3xl lg:text-4xl text-brown">
          poklon bon
        </p>
        <GiftCardForm price={price} templateImage={templateImage} />
      </div>
    </div>
  );
};

export default GiftCardPurchase;
