import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Login from "./components/auth/login";
import Signup from "./components/auth/components/Signup"
import Register from "./components/auth/register";
import Dashboard from "./components/admin/dashboard";
import ForgotPassword from "./components/auth/forgotPassword/forgotPassword";
import Home from "./home";
import AuthPolicy from "./Policy/AuthPolicy";
import RolePolicy from "./Policy/RolePolicy";




import AdminLayout from "./components/layout/adminLayout";
import Account from "./components/user/account";
import Profile from "./components/shared/profile";
import AdminRoutes from "./routes/adminRoutes";

function App() {
  return (
    <>
      <Routes>

        <Route path="" element={<Layout />}>

          <Route path="/" element={<Home />} />

          {/* Public Routes */}
          <Route element={<AuthPolicy.RequireNoAuth />}>
            <Route path="/shop/signup" element={<Signup />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
          </Route>
        </Route>




        {/* <Route element={<AuthPolicy.RequireAuth />}>

          <Route path="/a" element={<Layout />}>

            <Route path="/account" element={<Account />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          <Route path="/admin" element={<RolePolicy.verifyRole />}>
            <Route path="" element={<AdminRoutes />} />
          </Route>

        </Route> */}



      </Routes >
    </>
  );
}

export default App;
