import Carousel from "@/components/carousel";
import { feedbackTitle, leaveAFeedback } from "@/constants/constants";
import FeedbackForm from "@/features/feedback-form/feedback-form";
import React from "react";

const items = [
  {
    image: "/gorana.jpg",
    nameAndSurname: "Gorana Golubovic",
    feedback:
      '"Bojana je izuzetan profesionalac. Predana je poslu, izuzetno precizna i zna kako da prilagodi sminku Vasem licu. Sve preporuke."',
  },
  {
    image: "/gorana.jpg",
    nameAndSurname: "Gorana Golubovic",
    feedback:
      '"Bojana je izuzetan profesionalac. Predana je poslu, izuzetno precizna i zna kako da prilagodi sminku Vasem licu. Sve preporuke."',
  },
  {
    image: "/gorana.jpg",
    nameAndSurname: "Gorana Golubovic",
    feedback:
      '"Bojana je izuzetan profesionalac. Predana je poslu, izuzetno precizna i zna kako da prilagodi sminku Vasem licu. Sve preporuke."',
  },
  {
    image: "/gorana.jpg",
    nameAndSurname: "Gorana Golubovic",
    feedback:
      '"Bojana je izuzetan profesionalac. Predana je poslu, izuzetno precizna i zna kako da prilagodi sminku Vasem licu. Sve preporuke."',
  },
];
const ClientFeedback = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-8 gap-12 ">
      <p className="text-purple font-roboto font-bold text-4xl">
        {feedbackTitle}
      </p>
      <div className="w-1/3">
        <Carousel items={items} type="feedbackCarousel" />
      </div>
      <p className="text-purple font-roboto font-bold text-1xl w-2/3 text-center mt-16 mb-8">
        {leaveAFeedback}
      </p>
      <FeedbackForm />
    </div>
  );
};

export default ClientFeedback;
