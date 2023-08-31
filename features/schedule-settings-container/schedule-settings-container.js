"use client";
import ScheduleSettingsElement from "@/components/schedule-settings-element";
import { React, useState } from "react";
import PopUp from "../popup/popup";

const ScheduleSettingsContainer = ({
  title,
  items,
  reservationCanceled,
  setReservationCanceled,
}) => {
  const [canceledMessage, setCanceledMessage] = useState("");

  const tooglePopup = () => {
    setCanceledMessage("");
    setReservationCanceled(!reservationCanceled);
  };

  return (
    <div className=" bg-white h-[480px] w-[90%] lg:w-[100%] flex flex-col items-center gap-2 sm:gap-2 md:gap-4 lg:gap-8 rounded-[20px] py-4">
      <p className="font-greatvibes text-2xl  sm:text-2xl md:text-3xl lg:text-4xl text-purple ">
        {title}
      </p>
      <div className=" flex flex-col w-[90%] overflow-y-auto gap-4 px-8 lg:px-16 ">
        {items.length === 0 ? (
          <p className="text-purple font-roboto">
            Ne postoje rezervacije za ovaj datum.
          </p>
        ) : (
          items.map((elem) => {
            return (
              <ScheduleSettingsElement
                key={elem._id}
                elem={elem}
                setCanceledMessage={setCanceledMessage}
              />
            );
          })
        )}
      </div>
      ){" "}
      {canceledMessage !== "" && (
        <PopUp
          message={canceledMessage}
          togglePopup={tooglePopup}
          type="success"
        />
      )}
    </div>
  );
};

export default ScheduleSettingsContainer;
