import Carousel from "@/components/carousel";
import { URL, feedbackTitle, leaveAFeedback } from "@/constants/constants";
import FeedbackForm from "@/features/feedback-form/feedback-form";
import { React } from "react";

const getData = async () => {
  const dataPromise = await fetch(URL + "/api/feedbacks", {
    cache: "no-store",
  });
  const data = await dataPromise.json();
  return data.feedbacks;
};

const ClientFeedback = async () => {
  const items = await getData();
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
      <FeedbackForm />
    </div>
  );
};

export default ClientFeedback;
