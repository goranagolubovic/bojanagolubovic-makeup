import React from "react";

const CertificatesList = ({ title, children }) => {
  return (
    <div className="bg-gray mb-10 rounded rounded-[10px]  text-purple font-qwigley text-6xl py-10 justify-center items-center flex-col gap-10 w-full text-center">
      <p className="mb-10 sm:mb-10 lg:mb-20 text-4xl sm:text-5xl lg:text-7xl">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default CertificatesList;
