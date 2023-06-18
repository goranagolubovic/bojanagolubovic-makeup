import React from "react";
import Link from "next/link";

import "../style/style.css";

const Button = ({ text, onClick, href }) => {
  console.log(href);
  return (
    <div className="bg-gray rounded rounded-[20px] px-6 sm:px-6 lg:px-16 py-2 text-1xl font-bold text-purple">
      {href ? (
        <Link href={href}>{text}</Link>
      ) : (
        <button onClick={onClick}>{text}</button>
      )}
    </div>
  );
};

export default Button;
