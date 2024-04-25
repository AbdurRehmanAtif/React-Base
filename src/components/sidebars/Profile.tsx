import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMenuContext } from '../../context/MenuContext';
import { useAuth } from '../../context/authProvider';
import fonts from '../../fonts/fonts';
import LoginComponent from '../auth/components/Login';
import { XMarkIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";


const Profile = () => {

  const menuState = useMenuContext();
  const AuthState = useAuth();


  const toggleSlider = () => {
    menuState.setSliderToggle(prevState => ({
      ...prevState,
      profile: !prevState,
    }));
  };

  if (menuState.isSliderToggle.profile) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }


  const Header = ({ title }: { title: string }) => {
    return (
      <header className='z-50 sticky top-0 bg-white shadow-sm'>
        <div className='h-24 flex justify-center items-center border-b-[1px] p-4 w-full'>
          <h1 className={`block ${fonts.sidebarHeaderText()} mr-auto ml-4  text-gray-900`}>{title}</h1>
          <motion.button
            className='ml-auto mr-6 h-10 w-10'
          >
            <XMarkIcon onClick={toggleSlider} className="h-10 w-10 mt-[1px] hover:bg-gray-300 cursor-pointer rounded-full p-1" aria-hidden="true" />
          </motion.button>
        </div>
      </header>
    );
  };

  const Footer = () => {

    return (
      <footer className="py-4 absolute bottom-0 w-full border bg-white" >
        <div className="container mx-auto">
          <div className='flex items-center m-[5%] p-2 hover:bg-gray-200 rounded-md cursor-pointer'
            onClick={() => {
              AuthState.logout()
              AuthState.setIsAuthenticated(false)
            }}>

            <ArrowLeftStartOnRectangleIcon onClick={toggleSlider} className="h-7 w-7hover:bg-gray-300 cursor-pointer rounded-full transform rotate-180" aria-hidden="true" />
            <h1 className={`block ${fonts.boldText()} mr-auto ml-2  text-gray-900`}
            >Logout</h1>
          </div>
        </div>
      </footer >
    )
  }

  return (
    <>
      <AnimatePresence mode="popLayout">
        {menuState.isSliderToggle.profile && (
          <>
            <motion.div
              className={`fixed  bg-black opacity-50 inset-0 `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0.5 }}
              onClick={toggleSlider}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <motion.div
              className="sidebar fixed inset-y-0 right-0
               bg-gray-100 max-w-md w-full z-50 h-full overflow-y-auto pb-[400px]"
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.2, ease: 'linear' }}
            >

              {AuthState.isAuthenticated ?
                <>
                  <Header title="Welcome!" />
                  <Footer />
                </>




                : <><Header title="Log in or Sign up" /><LoginComponent /></>}


            </motion.div>
          </>
        )}
      </AnimatePresence >


    </>
  );




};

export default Profile;
