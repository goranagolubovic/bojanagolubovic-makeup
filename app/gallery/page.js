import React from "react";
import PictureList from "../features/picture-list/picture-list";
import { getDataFromCollection } from "../api";
import Error from "../features/error/error";

const getPictures = async () => {
  const res = await fetch("http://localhost:3001/api/pictures", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Gallery = async () => {
  const data = await getPictures();

  return (
    <div className="flex w-full justify-center items-center">
      {data.status === 500 ? (
        <Error message={data.message} />
      ) : (
        <PictureList
          containerStyle={
            "flex justify-center mb-20 mt-20  flex-wrap gap-24 sm:gap-24 lg:gap-48 w-full"
          }
          pictureHeight={450}
          pictureWidth={450}
          pictures={data.pictures}
        />
      )}
    </div>
  );
};

export default Gallery;
