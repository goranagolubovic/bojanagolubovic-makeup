"use client";
import { React, useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import shadows from "../../public/Shadows.svg";

const WelcomeQuote = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Bobbie Brown"],
      typeSpeed: 70,
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
          className="font-qwigley text-brown text-2xl sm:text-4xl lg:text-5xl text-center"
          ref={typingRef}
        ></p>
      </div>
      <div className="flex items-center justify-center px-16 lg:px-8 sm:px-16">
        <Image
          src={shadows}
          alt="shadows"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
        />
      </div>
    </div>
  );
};

export default WelcomeQuote;
