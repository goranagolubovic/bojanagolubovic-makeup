import React from "react";
import Image from "next/image";

const Logo = (props) => {
  return (
    <div className={props.className}>
      <Image src="/logo.svg" width={80} height={80} alt="logo"></Image>
    </div>
  );
};

export default Logo;
