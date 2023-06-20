import React from "react";

const TimeElement = ({ time, isSelected, onSelect }) => {
  const handleSelect = () => {
    onSelect(time);
  };

  return (
    <div className={`flex gap-2 items-center`} onClick={handleSelect}>
      <input type="radio" className="w-4 h-4" checked={isSelected} readOnly />
      <p>{time}</p>
    </div>
  );
};

export default TimeElement;
