import React from "react";
import GiftCardList from "../../features/gift-card-list/gift-card-list";
import Error from "../../features/error/error";
import { URL } from "@/constants/constants";

const getGiftCards = async () => {
  const res = await fetch(URL + "/api/gift-cards", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const GiftCardsPage = async () => {
  const data = await getGiftCards();

  return (
    <div className="flex justify-center">
      {data.status === 500 ? (
        <Error message={data.message} />
      ) : (
        <GiftCardList giftCards={data.giftcards} />
      )}
    </div>
  );
};

export default GiftCardsPage;
