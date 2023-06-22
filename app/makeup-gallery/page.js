import React from "react";
import PictureList from "../../features/picture-list/picture-list";
import Error from "../../features/error/error";
import { URL } from "@/constants/constants";

const getPictures = async () => {
  const res = await fetch(URL + "/api/pictures", {
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
        <PictureList pictures={data.pictures} />
      )}
    </div>
  );
};

export default Gallery;
