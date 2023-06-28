"use client";
import Button from "@/components/button";
import FormElement from "@/components/form-element";
import ImageUpload from "@/components/image-upload";
import { React, useState } from "react";

const FeedbackForm = () => {
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    komentar: "",
  });

  const handleInputChange = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="w-1/3 bg-white rounded-[20px] px-16 py-8 flex flex-col justify-center items-center">
      <ImageUpload text="*Izaberite sliku" />
      <FormElement
        label="*Ime"
        color="bg-gray"
        onChange={handleInputChange}
        name="ime"
        error={fieldErrors.dataFrom}
        formReset={formReset}
      />
      <FormElement
        label="*Prezime"
        color="bg-gray"
        name="prezime"
        onChange={handleInputChange}
        error={fieldErrors.dataTo}
        formReset={formReset}
      />
      <FormElement
        label="*Komentar"
        color="bg-gray"
        name="komentar"
        onChange={handleInputChange}
        error={fieldErrors.email}
        formReset={formReset}
      />
      <Button href="" text="Pošalji" />
    </form>
  );
};

export default FeedbackForm;
