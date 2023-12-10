import React from "react";

const buttons = ({ text, type, color, style = "", onClick }) => {
  let classes = "px-10 py-2 rounded-full ";

  switch (color) {
    case "fill":
      classes +=
        "bg-black text-white hover:bg-white hover:text-black hover:pointer-cursor border hover:border-black";
      break;
    case "blank":
      classes += "bg-white text-black  font-semibold hover:pointer-cursor";
      break;
    // Add more cases as needed
    default:
      // Default classes if type doesn't match any case
      classes += "bg-black text-white";
  }

  return (
    <button type={type} className={`${classes} ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default buttons;
