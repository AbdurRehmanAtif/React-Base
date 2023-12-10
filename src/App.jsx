import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/admin/dashboard";
import Home from "./home";
import RequireAuth from "./components/Policy/requireAuth";
import RequireRole from "./components/Policy/requireRole";
import AdminLayout from "./components/layout/adminLayout";
import Account from "./components/user/account";
import Profile from "./components/shared/profile";
import RequireNoAuth from "./components/Policy/requireNoAuth";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<RequireNoAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          {/* User routes */}
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            {/* Users profile */}
            <Route path="/account" element={<Account />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Private Routes */}
          <Route path="/admin" element={<RequireRole />}>
            <Route path="" element={<AdminLayout />}>
              <Route path="" element={<Dashboard />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
