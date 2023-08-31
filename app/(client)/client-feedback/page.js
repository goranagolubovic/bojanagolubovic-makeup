"use client";
import Carousel from "@/components/carousel";
import { URL, feedbackTitle, leaveAFeedback } from "@/constants/constants";
import FeedbackForm from "@/features/feedback-form/feedback-form";
import { React, useEffect, useState } from "react";

const ClientFeedback = () => {
  const [items, setItems] = useState([]);
  const [feedbackAdded, setFeedbackAdded] = useState(false);

  const getData = async () => {
    const dataPromise = await fetch(URL + "/api/feedbacks", {
      cache: "no-store",
    });
    const data = await dataPromise.json();
    setItems(data.feedbacks);
  };

  useEffect(() => {
    getData();
  }, [feedbackAdded]);

  return (
    <div className="w-full flex flex-col justify-center items-center my-8 gap-2 sm:gap-8  lg:gap-12 ">
      <p className="text-purple font-roboto font-bold text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
        {feedbackTitle}
      </p>
      <div className="w-3/4 sm:w-1/2 lg:w-1/3">
        <Carousel items={items} type="feedbackCarousel" />
      </div>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-xl text-purple font-roboto font-bold text-base w-2/3 text-center mt-16 mb-8">
        {leaveAFeedback}
      </p>
      <FeedbackForm
        feedbackAdded={feedbackAdded}
        setFeedbackAdded={setFeedbackAdded}
      />
    </div>
  );
};

export default ClientFeedback;
