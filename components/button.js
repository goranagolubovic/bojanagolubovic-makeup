"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Button = ({ text, href, onClick, icon }) => {
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
      ) : icon ? (
        <button
          className=" flex bg-[#fef0f1] items-center gap-4 px-8 py-2 border border-gray-300 rounded-[20px] font-bold text-brown text-xs sm:text-lg lg:text-xl hover:bg-[#fef0f1]  transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={onClick}
        >
          <Image width={30} height={30} src={icon} alt="google" />
          <span>{text}</span>
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
