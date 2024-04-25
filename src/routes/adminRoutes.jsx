import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/layout/adminLayout";
import Dashboard from "../components/admin/dashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
