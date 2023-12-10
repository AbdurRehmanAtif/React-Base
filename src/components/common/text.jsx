import React from "react";

const Text = ({ text, type, style = "" }) => {
  let classes = "mb-2";
  switch (type) {
    case "heading":
      classes += "text-xl font-semibold text-black dark:text-white";
      break;
    case "subHeading":
      classes += "text-lg font-normal text-gray-600 dark:text-white";
      break;
    // Add more cases as needed
    default:
      // Default classes if type doesn't match any case
      classes += "text-xl font-semibold text-black dark:text-white";
  }

  return <p className={`${classes} ${style}`}>{text}</p>;
};

export default Text;
