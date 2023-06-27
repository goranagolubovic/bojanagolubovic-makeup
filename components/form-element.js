import React from "react";
import Input from "./input";

const FormElement = ({ label, color, onChange, name, error, formReset }) => {
  return (
    <div className="w-2/3 flex justify-between items-center text-brown font-roboto text-1xl mb-12">
      <p className="font-bold w-full">{label}</p>
      <div className="flex flex-col w-2/3">
        <Input
          color={color}
          onChange={onChange}
          name={name}
          formReset={formReset}
        />
        <p className="text-red-300">{error}</p>
      </div>
    </div>
  );
};

export default FormElement;
