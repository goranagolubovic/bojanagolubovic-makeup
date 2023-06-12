import React from "react";
import Image from "next/image";

const PersonalPhoto = (props) => {
  return (
    <div className={props.className}>
      <Image src="/bojana.svg" width={390} height={920} />
    </div>
  );
};

export default PersonalPhoto;
