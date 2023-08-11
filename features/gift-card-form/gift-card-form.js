"use client";
import { React, useState } from "react";
import FormElement from "../../components/form-element";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { convertPriceToEuro } from "@/helpers";
import PopUp from "../popup/popup";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import SignInButton from "@/components/sign-in-button";
import { URL, signInWithGoogle } from "@/constants/constants";
import { object, string } from "yup";
import {
  EMAIL_FORMAT,
  REQ_FIELD,
} from "../../constants/messages/error-messages";

const userSchema = object().shape({
  dataTo: string().required(REQ_FIELD),
});

const GiftCardForm = ({ price, templateImage, image, title }) => {
  const initialOptions = {
    clientId: "test",
    currency: "EUR",
  };

  const router = useRouter();
  const [message, setMessage] = useState("");
  const [session, setSession] = useState("");
  const priceInEuro = convertPriceToEuro(price);
  const [showPayPallButtons, setShowPayPallButtons] = useState();
  const [fieldErrors, setFieldErrors] = useState({});
  const [formReset, setFormReset] = useState(false);
  const [formData, setFormData] = useState({
    dataFrom: "",
    dataTo: "",
    email: "",
  });

  const handleInputChange = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormReset(!formReset);
    setFormData({
      dataFrom: "",
      dataTo: "",
      email: "",
    });
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: priceInEuro,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then(async (details) => {
      const emailData = {
        templateImage: templateImage,
        serialNumber: details.id,
        email: session.user.email,
        from: session.user.name,
        to: formData.dataTo,
      };
      const purchaseData = {
        serialNumber: details.id,
        image: image,
        isUsed: false,
        title: title,
      };
      if (details.status === "COMPLETED") {
        const purchaseOfGiftCardResponse = await fetch(URL + "/api/gift-card", {
          method: "POST",
          body: JSON.stringify(purchaseData),
        });

        const emailResponse = await fetch(URL + "/api/send-email/gift-card", {
          method: "POST",
          body: JSON.stringify(emailData),
        });
        const email = await emailResponse.json();
        setMessage(email.message.PURCHASE_SUCCESS);
        resetForm();
      }
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    try {
      await userSchema.validate(formData, { abortEarly: false });
      setShowPayPallButtons(true);
    } catch (error) {
      console.log("Form validation error:", error);
      const fieldErrors = {};
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });

      setFieldErrors(fieldErrors);
    }
  };

  const cancel = () => {
    router.back();
  };

  return (
    <>
      {session === "" && (
        <>
          <p className="text-brown text-1xl lg:text-2xl mb-20 mt-44 px-20">
            {signInWithGoogle}
          </p>
          <SignInButton icon="/google.png" setSession={setSession} />
        </>
      )}
      {session !== "" && (
        <form
          onSubmit={handleFormSubmit}
          className="w-full my-8 lg:my-16 flex justify-center flex-col items-center"
        >
          <FormElement
            label="*Vaše ime i prezime"
            color="bg-white"
            onChange={handleInputChange}
            name="dataFrom"
            formReset={formReset}
            defaultValue={session.user.name}
          />
          <FormElement
            label="*Ime i prezime osobe kojoj poklanjate bon"
            color="bg-white"
            name="dataTo"
            onChange={handleInputChange}
            error={fieldErrors.dataTo}
            formReset={formReset}
          />
          <FormElement
            label="*Vaša email adresa"
            color="bg-white"
            name="email"
            onChange={handleInputChange}
            formReset={formReset}
            defaultValue={session.user.email}
          />

          {showPayPallButtons && message === "" ? (
            <div className="my-8">
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                ></PayPalButtons>
              </PayPalScriptProvider>
            </div>
          ) : (
            <div className="my-8 flex flex-col items-center lg:flex-row gap-4">
              <Button href="" text="Pređi na plaćanje" />
              <Button onClick={cancel} text="Odustani" />
            </div>
          )}
          {message !== "" && (
            <PopUp
              message={message}
              togglePopup={() => {
                setMessage("");
                setShowPayPallButtons(false);
              }}
              type={"success"}
            />
          )}
        </form>
      )}
    </>
  );
};

export default GiftCardForm;
