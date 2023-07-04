import React from "react";
import { Space, Spin } from "antd";

const Spinner = ({ tip }) => {
  return (
    <Space direction="vertical" className="w-full h-full flex justify-center">
      <Spin
        size="large"
        tip={
          <span className="text-1xl lg:text-2xl sm:text-2xl text-purple">
            {tip}
          </span>
        }
        indicator={
          <div className="text-purple ">
            <svg
              className="animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647zM20 12a8 8 0 01-8 8v-4c2.761 0 5-2.239 5-5h3c0 3.866-3.134 7-7 7v3a8 8 0 008-8z"
              />
            </svg>
          </div>
        }
      >
        <></>
      </Spin>
    </Space>
  );
};

export default Spinner;
