import React from "react";
import PricesCard from "../../features/prices-card/prices-card";
import Error from "../../features/error/error";
import { pricesCardTitle } from "@/constants/constants";
import { URL } from "@/constants/constants";

const getPrices = async () => {
  const res = await fetch(URL + "/api/prices-list");
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
        <PricesCard prices={data.prices} title={pricesCardTitle} />
      )}
    </div>
  );
}
