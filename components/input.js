import React, { useEffect, useState } from "react";

const Input = ({ color, onChange, name, formReset, placeholder }) => {
  const [value, setValue] = useState("");
  const [reset, setReset] = useState(false);
  const height = name === "komentar" ? "h-40" : "";

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    setReset(true);
  }, [formReset]);

  useEffect(() => {
    if (reset) {
      setValue("");
      setReset(false);
    }
  }, [reset]);

  return (
    <div className="w-full flex justify-center">
      {name === "komentar" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={`${color} ${height} focus:border-transparent focus:outline-none  p-4 resize-none rounded-[10px]`}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`${color} focus:border-transparent focus:outline-none px-8 `}
        />
      )}
    </div>
  );
};

export default Input;
