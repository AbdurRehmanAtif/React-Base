import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PrimaryMenu from '../menus/PrimaryMenu';
import PrimaryNavbar from '../menus/PrimaryNavbar';
import { MenuProvider } from "../../context/MenuContext";

const Layout: React.FC = () => {



  return (
    <>
      <main className="App">

        <MenuProvider>
          <PrimaryMenu />
          <PrimaryNavbar />
        </MenuProvider>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
