"use client";
import React from "react";
import Link from "next/link";

const Button = ({ text, href, onClick }) => {
  console.log(href);
  return (
    <div>
      {href ? (
        <button onClick={onClick}>
          <Link
            href={href}
            className="bg-gray px-8 sm:px-8 lg:px-16 py-2 rounded rounded-[20px] text-xs sm:text-lg lg:text-xl font-bold text-purple hover:bg-purple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {text}
          </Link>
        </button>
      ) : onClick ? (
        <button
          onClick={onClick}
          className="bg-gray px-8 sm:px-8 lg:px-16 py-2 rounded rounded-[20px] font-bold text-purple text-xs sm:text-lg lg:text-xl hover:bg-purple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {text}
        </button>
      ) : (
        <button
          type="submit"
          className="bg-gray px-8 sm:px-8 lg:px-16 py-2 rounded rounded-[20px] text-xs sm:text-lg lg:text-xl  font-bold text-purple hover:bg-purple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
