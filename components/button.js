import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  console.log(href);
  return (
    <div className="bg-gray rounded rounded-[20px] px-6 sm:px-6 lg:px-16 py-2 text-1xl font-bold text-purple">
      {href ? (
        <Link href={href}>{text}</Link>
      ) : (
        <button type="submit">{text}</button>
      )}
    </div>
  );
};

export default Button;
