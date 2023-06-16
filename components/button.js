import React from "react";

import "../style/style.css";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-gray rounded rounded-[20px] px-6 sm:px-6 lg:px-16 py-2 text-1xl font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
