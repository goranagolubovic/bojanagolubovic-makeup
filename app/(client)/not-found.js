import React from "react";
import Error from "@/features/error/error";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <Error message="Stranica nije pronađena" />
    </div>
  );
};

export default NotFound;
