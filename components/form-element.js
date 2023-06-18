import React from "react";
import Input from "./input";

import "../style/style.css";

const FormElement = ({ label }) => {
  return (
    <div className="w-2/3 flex justify-between text-brown font-roboto text-1xl mb-8">
      <p className="font-bold">{label}</p>
      <Input />
    </div>
  );
};

export default FormElement;
