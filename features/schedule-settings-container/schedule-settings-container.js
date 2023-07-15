import ScheduleSettingsElement from "@/components/schedule-settings-element";
import React from "react";

const ScheduleSettingsContainer = ({ title, items }) => {
  console.log(JSON.stringify(items));
  return (
    <div className=" bg-white h-[480px]  w-[100%] flex flex-col items-center gap-2 sm:gap-2 md:gap-4 lg:gap-8 rounded-[20px] py-4">
      <p className="font-greatvibes text-2xl  sm:text-2xl md:text-3xl lg:text-4xl text-purple ">
        {title}
      </p>
      <div className=" flex flex-col w-[90%] overflow-y-auto gap-4  px-16 ">
        {items.map((elem) => {
          return (
            <ScheduleSettingsElement
              key={elem._id}
              date={elem.date}
              time={elem.time}
              nameAndSurname={elem.nameAndSurname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleSettingsContainer;
