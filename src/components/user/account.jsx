import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../common/tabs";
import Profile from "../shared/profile";
import ProfileDetails from "./components/profileDetails";

const Account = () => {
  const tab = {
    elements: ["Account Information", "Privacy", "Security"],
    style: "text-center justify-center",
    child: [<ProfileDetails />, <Profile />, <Profile />],
  };

  return (
    <>
      <div className="text-center justify-center flex">
        <h1 className="text-5xl font-bold mt-16">Manage your Account </h1>
      </div>
      <div
        class="mb-4 mt-16  border-gray-200 dark:border-gray-700
       text-center justify-center flex"
      >
        <Tabs options={tab} />
      </div>
      <Outlet />
    </>
  );
};

export default Account;
