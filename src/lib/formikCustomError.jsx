import React from "react";

const formikCustomError = ({ children }) => (
  <>
    <div className="flex items-left py-1" role="alert">
      {/* <svg
        class="fill-current w-[25px] h-[25px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12 8L12 13"
          stroke="#dc3548"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12 16V15.9888"
          stroke="#dc3548"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg> */}
      <h4 className="text-[#dc3548] text-left font-medium text-sm">{children}</h4>
    </div>
  </>
);

export default formikCustomError;
