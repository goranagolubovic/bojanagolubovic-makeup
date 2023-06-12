import "tailwindcss/tailwind.css";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className={`w-screen bg-purple rounded-t rounded-t-[50px] lg:py-4 sm:py-2 px-8 flex flex-col sm:flex-row lg:gap-80 sm:gap-20`}
    >
      <div>
        <p
          className={
            "sm:text-3xl lg:text-4xl text-white mt-8 font-bold sm:px-22 lg:px-44"
          }
        >
          Kontaktiraj me:
        </p>
        <div className={"flex sm:px-22 lg:px-44 lg:mt-4  sm:mt-2 gap-2"}>
          <Image src="/Phone.svg" width={30} height={30} alt="phone"></Image>
          <p className={"sm:text-1xl lg:text-2xl text-white"}>
            Telefon: +38765123456
          </p>
        </div>
        <div className={"flex sm:px-22 lg:px-44 lg:mt-4  sm:mt-2 gap-2"}>
          <Image
            src="/Instagram.svg"
            width={30}
            height={30}
            alt="instagram"
          ></Image>
          <p className={"sm:text-1xl lg:text-2xl text-white"}>
            Instagram: bojanagolubovic_makeup
          </p>
        </div>
        <div className={"flex sm:px-22 lg:px-44 lg:mt-4  sm:mt-2 mb-4  gap-2"}>
          <Image src="/Email.svg" width={30} height={30} alt="email"></Image>
          <p className={"sm:text-1xl lg:text-2xl text-white"}>
            Email: bojanagolubovic@gmail.com
          </p>
        </div>
      </div>
      <div>
        <p
          className={
            "sm:text-3xl lg:text-4xl text-white lg:mt-8 sm:mt-4 font-bold sm:px-22 lg:px-44 "
          }
        >
          Lokacija:
        </p>
        <div className={"flex sm:px-22 lg:px-44 lg:mt-4 sm:mt-2 gap-2 mb-4"}>
          <Image
            src="/Home Address.svg"
            width={30}
            height={30}
            alt="homeaddress"
          ></Image>
          <p className={"sm:text-1xl lg:text-2xl text-white"}>
            Adresa: Duška Koščice 25, Banjaluka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
