// Tabs.js

import React, { useState } from "react";

const Tabs = ({ options }) => {
  const [activeTab, setActiveTab] = useState(options.elements[0]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex text-center justify-center border-b">
        {options.elements.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 mr-2 focus:outline-none ${
              activeTab === tab
                ? "font-bold text-black border-b-4 border-black"
                : "text-gray-500 border-b-4 border-transparent font-bold"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {options.elements.map(
        (tab, index) =>
          activeTab === tab && (
            <div className="mt-4">
              <p>{options.child[index]}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Tabs;
