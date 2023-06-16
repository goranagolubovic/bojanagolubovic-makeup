import React from "react";
import Image from "next/image";

const PictureList = ({
  pictures,
  containerStyle,
  pictureHeight,
  pictureWidth,
}) => {
  return (
    <div className={containerStyle}>
      {pictures.map((elem) => {
        return (
          <Image
            src={elem.image}
            alt={elem.image}
            width={pictureWidth}
            height={pictureHeight}
          />
        );
      })}
    </div>
  );
};

export default PictureList;
