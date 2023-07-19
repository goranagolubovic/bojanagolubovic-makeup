import React from "react";
import Input from "./input";

const FormElement = ({
  label,
  color,
  onChange,
  name,
  error,
  formReset,
  defaultValue,
  placeholder,
}) => {
  return (
    <div
      className={`w-full sm:w-2/3 lg:w-4/5 flex ${
        label ? "justify-between" : "justify-center"
      } items-center text-brown font-roboto text-xs sm:text-lg lg:text-xl mb-8 sm:mb-8 mb-12`}
    >
      {label && <p className="font-bold w-1/3 ">{label}</p>}
      <div className={`flex flex-col  w-2/3  `}>
        <Input
          color={color}
          onChange={onChange}
          name={name}
          formReset={formReset}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
        <p className="text-red-300 text-center">{error}</p>
      </div>
    </div>
  );
};

export default FormElement;
