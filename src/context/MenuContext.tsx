import React, { createContext, useContext, useState, ReactNode } from "react";
import Data from "../components/menus/dataSource"; // Assuming Data contains your menu items

interface MenuItem {
  key: number;
  text: string;
  isSubmenu: boolean;
  submenuOptions?: any;
}

interface SliderState {
  mobile: boolean;
  profile: boolean;
  cart: boolean;
  wishlist: boolean;
}

interface MenuContextType {
  isSliderToggle: SliderState;
  setSliderToggle: React.Dispatch<React.SetStateAction<SliderState>>;
  isNaveOpen: boolean;
  openNav: (text: string) => void;
  closeNav: () => void;
  navData: MenuItem[];
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const MenuProvider = ({ children }: MenuProviderProps): JSX.Element => {

  const [navData, setNavData] = useState<any>();
  const [isNaveOpen, toggleNav] = useState(false);

  const [isSliderToggle, setSliderToggle] = useState({
    mobile: false,
    profile: false,
    cart: false,
    wishlist: false,
  });

  const openNav = (value: string) => {
    toggleNav(true)
    setNavData(findSubMenuOptions(value))
  };
  const closeNav = () => {
    toggleNav(false)
  };

  const contextValue: MenuContextType = {
    isSliderToggle,
    setSliderToggle,
    isNaveOpen,
    openNav,
    closeNav,
    navData: Data
  };


  const findSubMenuOptions = (key: string): { text: string; value: string }[] | undefined => {
    const menuItem = Data.find(item => item.text === key && item.isSubmenu);
    return menuItem?.submenuOptions;
  };


  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
