import React from "react";
import Link from "next/link";

const Button = ({ text, href, onClick }) => {
  console.log(href);
  return (
    <div>
      {href ? (
        <Link
          href={href}
          className="bg-gray px-16 py-2 rounded rounded-[20px] text-1xl  font-bold text-purple hover:bg-purple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {text}
        </Link>
      ) : onClick ? (
        <button onClick={onClick}>{text}</button>
      ) : (
        <button
          type="submit"
          className="bg-gray px-16 py-2 rounded rounded-[20px] text-1xl  font-bold text-purple hover:bg-purple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
