import React, { useState, useEffect } from "react";
import Image from "next/image";
import camera from "../public/Camera.png";

const ImageUpload = ({ text, onImageChange, formReset, error, name }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [reset, setReset] = useState(false);
  const [showCamera, setShowCamera] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectedImage(reader.result);
        setShowCamera(false);
        onImageChange(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setReset(true);
  }, [formReset]);

  useEffect(() => {
    if (reset) {
      setSelectedImage("");
      setShowCamera(true);
      setReset(false);
    }
  }, [reset]);

  return (
    <div className="flex flex-col justify-center mb-4 sm:mb-8 lg:mb-16 gap-2 items-center">
      <div
        className="image-upload flex flex-col  justify-center items-center h-16 w-16 sm:h-32 sm:w-32 lg:w-32 lg:h-32 bg-gray rounded-full bg-cover hover:opacity-40 transition-all duration-10` "
        onMouseOver={() => setShowCamera(true)}
        onMouseLeave={() => {
          if (selectedImage !== "") setShowCamera(false);
        }}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      >
        <label
          htmlFor="image-input"
          className="image-upload-label rounded-full bg-gray-200 h-16 w-16 sm:h-32 sm:w-32 lg:w-32 lg:h-32 flex items-center justify-center"
        >
          <input
            name={name}
            type="file"
            id="image-input"
            className="hidden"
            onChange={handleImageChange}
          />
          {showCamera && (
            <Image
              src={camera}
              sizes="5vw"
              style={{
                width: "30%",
                height: "30%",
              }}
              alt="choose_photo"
              className="z-10"
            />
          )}
          {/* {selectedImage && !showCamera && (
            <div
              onMouseOver={() => setShowCamera(true)}
              style={{
                backgroundImage: `url(${selectedImage})`,
              }}
              className={`flex justify-center items-center w-32 h-32 bg-gray-200 rounded-[50%] bg-cover hover:opacity-40 transition-all duration-300`}
            ></div>
          )} */}
        </label>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-brown text-xs sm:text-xs lg:text-xl text-center font-bold font-roboto">
          {text}
        </p>
        <p className="text-red-300 text-1xl text-center">{error}</p>
      </div>
    </div>
  );
};

export default ImageUpload;
