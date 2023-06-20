import React from "react";

const Input = ({ color, onChange, name }) => {
  console.log(color);
  return (
    <input
      name={name}
      onChange={onChange}
      className={`${color} focus:border-transparent focus:outline-none px-8`}
    />
  );
};

export default Input;
