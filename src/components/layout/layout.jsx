import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { FaceSmileIcon } from "@heroicons/react/20/solid";

const layout = () => {
  const styling = {
    class: "bg-gray-100 text-gray-500 shadow-lg",
    isLeftSideActive: true,
  };

  return (
    <>
      <main className="App">
        <Header styling={styling} />
        <Outlet />
      </main>
    </>
  );
};

export default layout;
