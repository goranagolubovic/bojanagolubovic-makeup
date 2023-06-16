"use client";
import { React, useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import "tailwindcss/tailwind.css";

const WelcomeQuote = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Bobbie Brown"],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
    };

    const typingInstance = new Typed(typingRef.current, options);
    return () => {
      typingInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-white flex flex-col sm:flex-row items-center justify-center sm:mx-32 lg:mx-64 my-8 rounded rounded-[10px]">
      <div className="flex flex-col items-center justify-center w-2/3 gap-10">
        <p className="font-roboto text-brown font-extrabold sm:text-2xl lg:text-4xl text-center">
          “MAKEUP IS A WAY FOR A WOMAN TO LOOK AND FEEL LIKE HERSELF, ONLY
          PRETTIER AND MORE CONFIDENT”
        </p>
        <p
          className="font-qwigley text-brown sm:text-2xl lg:text-4xl text-center"
          ref={typingRef}
        ></p>
      </div>
      <div className="flex items-center justify-center px-16 lg:px-8 sm:px-16">
        <Image src="/Shadows.svg" alt="shadows" width={600} height={600} />
      </div>
    </div>
  );
};

export default WelcomeQuote;
