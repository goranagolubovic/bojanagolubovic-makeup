import React from "react";
import PricesCard from "../features/prices-card/prices-card";
import { getDataFromCollection } from "../api";
import Error from "../features/error/error";

const getPrices = async () => {
  const res = await fetch("http://localhost:3001/api/price-list");
  const data = await res.json();
  return data;
};
export default async function Prices() {
  const data = await getPrices();
  return (
    <div className="flex w-full justify-center items-center">
      {data.status === 500 ? (
        <Error message={data.message} />
      ) : (
        <PricesCard
          prices={data.prices}
          containerStyle=" bg-gradient-to-b from-rose-50 to-transparent bg-blend-overlay my-20 sm:my-10 lg:my-20 text-brown font-roboto rounded rounded-[40px]"
          itemStyle="flex flex-row gap-5 sm:gap-5 lg:gap-20 justify-between  mx-5 sm:mx-5 lg:mx-60 text-1xl sm:text-1xl lg:text-2xl mb-2 sm:mb-2 lg:mb-5"
          title="CJENOVNIK"
          titleStyle="text-center text-2xl sm:text-2xl lg:text-3xl font-bold pt-10 pb-10 sm:pb-10 lg:pb-20"
        />
      )}
    </div>
  );
}
