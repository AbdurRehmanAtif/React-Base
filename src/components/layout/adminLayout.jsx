import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

const adminLayout = () => {
  const styling = {
    class: "bg-gray-100 text-gray-500 shadow-lg",
    isLeftSideActive: false,
  };
  return (
    <>
      <main className="App">
        <Sidebar />
        <Header styling={styling} />
        <Outlet />
        
      </main>
    </>
  );
};

export default adminLayout;
