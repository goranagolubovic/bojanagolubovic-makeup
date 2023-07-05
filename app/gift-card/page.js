import React from "react";
import GiftCardList from "../../features/gift-card-list/gift-card-list";
import Error from "../../features/error/error";
import { URL } from "@/constants/constants";
import GiftCard from "@/components/gift-card";

const getGiftCards = async () => {
  const res = await fetch(URL + "/api/gift-cards");
  const data = await res.json();
  return data;
};

const GiftCardsPage = async () => {
  const data = await getGiftCards();
  // let data = {
  //   status: 200,
  //   message: "aaa",
  // };
  return (
    <div className="flex justify-center">
      {data.status === 500 ? (
        <Error message={data.message} />
      ) : (
        <GiftCardList giftCards={data.giftcards} />
        // <GiftCard
        //   id="123"
        //   image="/bojana.svg"
        //   price="50 KM"
        //   title="EVENING MAKEUP"
        // />
      )}
    </div>
  );
};

export default GiftCardsPage;
