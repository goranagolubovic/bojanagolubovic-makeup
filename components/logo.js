import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
const Logo = () => {
  return (
    <div className="py-4 lg:py-4 sm:py-1 w-12 sm:w-12 lg:w-48">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
