import React from "react";
import ScheduleSettingsContainer from "../schedule-settings-container/schedule-settings-container";

const ScheduleSettings = ({ title, items }) => {
  return (
    <div className="w-[90%] lg:w-[99%] bg-pink max-h-120  rounded-[20px] my-4  mx-3 sm:mx-3 md:mx-3 lg:mx-3 flex-col flex pt-6 pb-6 gap-8 items-center shadow-custom">
      <p className="font-greatvibes text-3xl  sm:text-3xl md:text-4xl lg:text-6xl text-purple ">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32  items-center ">
        <ScheduleSettingsContainer items={items} title="Danas" />
        <ScheduleSettingsContainer items={items} title="Sutra" />
        <ScheduleSettingsContainer items={items} title="Svi" />
      </div>
    </div>
  );
};

export default ScheduleSettings;
