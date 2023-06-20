import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="py-4 lg:py-4 sm:py-1 w-12 sm:w-12 lg:w-48">
      <Image src="/logo.svg" width={80} height={80} alt="logo"></Image>
    </div>
  );
};

export default Logo;
