import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  console.log(href);
  return (
    <div className="bg-gray rounded rounded-[20px] text-1xl py-2 px-6 sm:px-6 lg:px-16 font-bold text-purple hover:bg-purple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
      {href ? (
        <Link href={href}>{text}</Link>
      ) : (
        <button type="submit">{text}</button>
      )}
    </div>
  );
};

export default Button;
