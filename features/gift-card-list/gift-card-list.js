import GiftCard from "@/components/gift-card";
import React from "react";

const GiftCardList = ({ giftCards }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-24 sm:gap-24 lg:gap-48 my-10">
      {giftCards.map((elem) => {
        return (
          <GiftCard
            image={elem.image}
            title={elem.title}
            price={elem.price}
            id={elem._id}
          />
        );
      })}
    </div>
  );
};

export default GiftCardList;
