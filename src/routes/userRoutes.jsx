import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../components/user/account";
import Profile from "../components/shared/profile";
import Layout from "../components/layout/layout";
import Home from "../home";

const userRoutes = () => {
  return (
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* Users profile */}
      <Route path="/account" element={<Account />}>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  );
};

export default userRoutes;
