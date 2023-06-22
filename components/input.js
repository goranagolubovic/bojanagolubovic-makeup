import React, { useEffect, useState } from "react";

const Input = ({ color, onChange, name, formReset }) => {
  const [value, setValue] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setReset(true);
  }, [formReset]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    if (reset) {
      setValue("");
      setReset(false);
    }
  }, [reset]);

  return (
    <input
      name={name}
      value={value}
      onChange={handleInputChange}
      className={`${color} focus:border-transparent focus:outline-none px-8`}
    />
  );
};

export default Input;
