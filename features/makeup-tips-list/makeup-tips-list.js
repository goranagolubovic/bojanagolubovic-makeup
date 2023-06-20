import MakeupTipCard from "@/components/makeup-tip-card";
import React from "react";

const MakeupTipsList = ({ makeupTips }) => {
  return (
    <div>
      {makeupTips.map((elem, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-yellow" : "bg-white";
        return (
          <MakeupTipCard
            key={index}
            image={elem.image}
            title={elem.title}
            text={elem.tip}
            bgColor={bgColor}
          />
        );
      })}
    </div>
  );
};

export default MakeupTipsList;
