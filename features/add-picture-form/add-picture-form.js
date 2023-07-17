"use client";
import { React, useState } from "react";
import ImageUpload from "@/components/image-upload";
import { REQ_FIELD } from "@/constants/messages/error-messages";
import Button from "@/components/button";
import PopUp from "../popup/popup";
import { object, string } from "yup";
import { URL, addingPictureInProgress } from "@/constants/constants";
import Spinner from "@/components/spinner";

const pictureSchema = object().shape({
  slika: string().required(REQ_FIELD),
});

const AddPictureForm = ({ setStateListener }) => {
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

  const togglePopup = () => {
    setMessage("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setIsSubmitted(true);
    try {
      await pictureSchema.validate(formData, { abortEarly: false });
      const picture = {
        image: formData.slika,
      };
      const response = await fetch(URL + "/api/pictures", {
        body: JSON.stringify(picture),
        method: "POST",
      });
      const responseData = await response.json();
      console.log(JSON.stringify(responseData.message));
      setMessage(responseData.message.IMAGE_SUCCESS);
      setPopupType(responseData.status === 200 ? "success" : "error");
      setFormReset(true);
    } catch (error) {
      console.log(error);
      const fieldErrors = {};
      fieldErrors.slika = error.message;
      setFieldErrors(fieldErrors);
    }
    setIsSubmitted(false);
    setStateListener();
    setFormData({ slika: "" });
  };

  return (
    <>
      <form
        className="bg-white rounded-[20px] flex flex-col justify-center m-8 px-16 lg:px-32 py-8 lg:py-16 w-5/6 md:w-2/3  lg:w-1/2 xl:w-[51%] h-[400px] lg:h-[400px] sm:h-[400px]"
        onSubmit={handleFormSubmit}
      >
        {isSubmitted ? (
          <Spinner tip={addingPictureInProgress} />
        ) : (
          <>
            <ImageUpload
              text="*Izaberite sliku"
              onImageChange={onImageChange}
              error={fieldErrors.slika}
              formReset={formReset}
              name="slika"
              shape="square"
            />
            <Button href="" text="Dodaj sliku" />
          </>
        )}
      </form>
      {message !== "" && (
        <PopUp type={popupType} message={message} togglePopup={togglePopup} />
      )}
    </>
  );
};

export default AddPictureForm;
