import React from "react";
import MakeupTipsList from "../../../features/makeup-tips-list/makeup-tips-list";
import { URL } from "@/constants/constants";

const getMakeupTips = async () => {
  const res = await fetch(URL + "/api/makeup-tips", {
    //next: { revalidate: 86400 },
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const MakeupTips = async () => {
  const data = await getMakeupTips();
  return (
    <div>
      <MakeupTipsList makeupTips={data.tips} />
    </div>
  );
};

export default MakeupTips;
