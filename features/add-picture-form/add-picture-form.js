"use client";
import { React, useState } from "react";
import ImageUpload from "@/components/image-upload";
import { REQ_FIELD } from "@/constants/messages/error-messages";
import Button from "@/components/button";
import PopUp from "../popup/popup";
import { object, string } from "yup";

const pictureSchema = object().shape({
  slika: string().required(REQ_FIELD),
});

const AddPictureForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    slika: "",
  });
  const [message, setMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const onImageChange = (data) => {
    setFormData({ ...formData, slika: data });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setIsSubmitted(true);
    try {
      await userSchema.validate(formData, { abortEarly: false });
      const picture = {
        image: formData.slika,
      };
      const response = await fetch(URL + "/api/pictures", {
        body: JSON.stringify(picture),
        method: "POST",
      });
      const responseData = await response.json();
      setMessage(responseData.message.POST_SUCCESS);
      setPopupType(responseData.status === 200 ? "success" : "error");
      setFormReset(true);
    } catch (error) {
      const fieldErrors = {};
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      setFieldErrors(fieldErrors);
    }
    setIsSubmitted(false);
  };

  return (
    <>
      <form
        className="bg-white rounded-[20px] flex flex-col justify-center m-8 px-32 py-16"
        onSubmit={handleFormSubmit}
      >
        <ImageUpload
          text="*Izaberite sliku"
          onImageChange={onImageChange}
          error={fieldErrors.slika}
          formReset={formReset}
          name="slika"
          shape="square"
        />
        <Button href="" text="Dodaj sliku" />
      </form>
      {message !== "" && (
        <PopUp type={popupType} message={message} togglePopup={togglePopup} />
      )}
    </>
  );
};

export default AddPictureForm;
