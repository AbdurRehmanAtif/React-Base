import React, { useState } from "react";

const alert = ({ payload }) => {
  const borderColor =
    payload.success === true ? "border-[#4BB543]" : "border-[#dc3548]";
  const backgroundColor =
    payload.success === true ? "bg-[#4BB543]" : "bg-[#dc3548]";

  return (
    <>
      <div
        className={`flex items-center mt-4 mb-4 border-2 rounded-md bg-white ${borderColor}`}
      >
        {/* Your content goes here */}
        {/* Left side with red background and icon */}
        <div
          className={`flex items-center justify-center w-12  pt-6 pb-6 ${backgroundColor}`}
        >
          {/* Replace 'YourIconComponent' with your SVG icon component */}
          <svg
            className="flex-shrink-0 w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
        </div>

        {/* Right side with error message, error code, and details */}
        <div className="flex-grow ml-4">
          <div className="text-black-700 font-bold">{payload.errorCode}</div>
          {/* <div className="text-gray-900">{payload.errorDetails}</div> */}
        </div>
      </div>
    </>
  );
};

export default alert;
