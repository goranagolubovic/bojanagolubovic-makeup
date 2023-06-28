import React, { useState } from "react";
import Image from "next/image";

const ImageUpload = ({ text }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(true);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectedImage(reader.result);
        setShowCamera(false);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center mb-16 gap-2">
      <div
        className="image-upload flex flex-col  justify-center items-center  w-32 h-32 bg-gray rounded-full bg-cover hover:opacity-40 transition-all duration-10` "
        onMouseOver={() => setShowCamera(true)}
        onMouseLeave={() => setShowCamera(false)}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      >
        <label
          htmlFor="image-input"
          className="image-upload-label rounded-full bg-gray-200 w-32 h-32 flex items-center justify-center"
        >
          <input
            type="file"
            id="image-input"
            className="hidden"
            onChange={handleImageChange}
          />
          {showCamera && (
            <Image
              src="/Camera.png"
              width={32}
              height={32}
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
      <label className="text-brown text-center font-bold font-roboto">
        {text}
      </label>
    </div>
  );
};

export default ImageUpload;
