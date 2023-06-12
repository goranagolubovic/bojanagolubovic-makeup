import React from "react";
import PricesCard from "../features/prices-card/prices-card";

const prices = [
  {
    title: "Dnevni makeup",
    price: "30KM",
  },
  {
    title: "Večernji makeup",
    price: "40KM",
  },
  {
    title: "Glam makeup",
    price: "40KM",
  },
  {
    title: "Prom makeup",
    price: "40KM",
  },
  {
    title: "Bride makeup",
    price: "50KM",
  },
  {
    title: "Probni makeup",
    price: "30KM",
  },
  {
    title: "Dolazak na adresu",
    price: "po dogovoru",
  },
];
const Prices = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <PricesCard
        prices={prices}
        containerStyle=" bg-gradient-to-b from-rose-50 to-transparent bg-blend-overlay my-20 sm:my-10 lg:my-20 text-brown font-roboto rounded rounded-[40px]"
        itemStyle="flex flex-row gap-5 sm:gap-5 lg:gap-20 justify-between  mx-5 sm:mx-5 lg:mx-60 text-1xl sm:text-1xl lg:text-2xl mb-2 sm:mb-2 lg:mb-5"
        title="CJENOVNIK"
        titleStyle="text-center text-2xl sm:text-2xl lg:text-3xl font-bold pt-10 pb-10 sm:pb-10 lg:pb-20"
      />
    </div>
  );
};

export default Prices;
