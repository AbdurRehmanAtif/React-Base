import { useState } from "react";

class MenuService {
  isNavOpen: boolean;

  constructor() {
    this.isNavOpen = false;
  }

  openNav = () => {
    this.isNavOpen = true;
    return true;
  };

  closeNav = () => {
    this.isNavOpen = false;
    return false;
  };
}

export default new MenuService();
