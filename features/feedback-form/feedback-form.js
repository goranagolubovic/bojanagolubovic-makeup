"use client";
import Button from "@/components/button";
import FormElement from "@/components/form-element";
import ImageUpload from "@/components/image-upload";
import { React, useState, useEffect } from "react";
import SignInButton from "@/components/sign-in-button";
import { URL, signInWithGoogle } from "@/constants/constants";
import PopUp from "../popup/popup";
import { object, string } from "yup";
import { REQ_FIELD } from "../../constants/messages/error-messages";
import Spinner from "@/components/spinner";
import { settingFeedbackInProgress } from "@/constants/constants";
import { signIn, signOut, useSession } from "next-auth/react";

const userSchema = object().shape({
  slika: string().required(REQ_FIELD),
  komentar: string().required(REQ_FIELD),
});

const FeedbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [session, setSession] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    komentar: "",
    slika: "",
  });
  const [message, setMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const handleInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = async (data) => {
    setFormData({ ...formData, slika: data });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setIsSubmitted(true);
    try {
      await userSchema.validate(formData, { abortEarly: false });
      const feedBackData = {
        nameAndSurname: session.user.name,
        feedback: '"' + formData.komentar + '"',
        image: formData.slika,
      };
      const response = await fetch(URL + "/api/feedbacks", {
        body: JSON.stringify(feedBackData),
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

  const togglePopup = () => {
    setMessage("");
    setPopupType("");
  };

  return (
    <div className="w-3/4 sm:w-3/4 lg:w-1/3 h-[500px] sm:h-[700px] lg:h-[700px] bg-white rounded-[20px] px-8 sm:px-12 lg:px-16  py-2 sm:py-4 lg:py-8 flex flex-col justify-center items-center">
      {session === "" && (
        <p className="text-brown text-1xl mb-8">{signInWithGoogle}</p>
      )}

      {session !== "" && (
        <form
          className="w-full h-[500px] sm:h-[700px] lg:h-[700px] flex flex-col  items-center py-4 sm:py-4 py-8"
          onSubmit={handleFormSubmit}
        >
          {isSubmitted ? (
            <Spinner tip={settingFeedbackInProgress} />
          ) : (
            <>
              {session.user && (
                <p className="text-purple font-bold text-1xl lg:text-2xl   pt-2 lg:pt-4  pb-4 sm:pb-8 lg:pb-12">
                  {session.user.name}
                </p>
              )}
              <ImageUpload
                text="*Izaberite sliku"
                onImageChange={onImageChange}
                error={fieldErrors.slika}
                formReset={formReset}
                name="slika"
              />
              <FormElement
                color="bg-gray"
                name="komentar"
                onChange={handleInputChange}
                error={fieldErrors.komentar}
                formReset={formReset}
                placeholder="Ovdje unesite Vaše iskustvo"
              />
              <div className="flex gap-4 flex-col items-center sm:flex-col lg:flex-row">
                <Button href="" text="Podijeli" />
                <SignInButton setSession={setSession} />
              </div>
            </>
          )}
        </form>
      )}
      {session === "" && <SignInButton setSession={setSession} />}
      {message !== "" && (
        <PopUp type={popupType} message={message} togglePopup={togglePopup} />
      )}
    </div>
  );
};

export default FeedbackForm;
