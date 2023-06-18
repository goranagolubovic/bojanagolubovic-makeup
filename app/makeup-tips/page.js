import React from "react";
import MakeupTipsList from "../features/makeup-tips-list/makeup-tips-list";

const getMakeupTips = async () => {
  const res = await fetch("http://localhost:3001/api/makeup-tips", {
    cache: "no-store",
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
