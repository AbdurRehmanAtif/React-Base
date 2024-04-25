import React, { useState } from 'react'
import fonts from '../../fonts/fonts';
import { Bars3Icon, ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/24/solid'
import MobilePrimary from '../sidebars/MobilePrimary';
import { useMenuContext } from "../../context/MenuContext"
import Profile from "../sidebars/Profile"
import QuickCart from '../sidebars/quickCart';
import Wishlist from '../sidebars/Wishlist';
import { Link } from 'react-router-dom';

const PrimaryMenu = () => {

    const menuState = useMenuContext()

    const toggleSliders = (type: string) => {
        menuState.setSliderToggle(prevState => ({
            ...prevState,
            [type]: true,
        }));
    };


    const data = {
        smallLogo: 'https://cdn0.woolworths.media/content/content/icon-header-logo-only.png',
        LargeLogo: 'https://cdn0.woolworths.media/content/content/icon-header-logo.green.png'
    };

    return (
        <>
            <div onMouseEnter={() => { menuState.closeNav() }} className='sticky top-0 z-10'>
                <MobilePrimary />
                <Profile />
                <QuickCart />
                <Wishlist />

                <div
                    className='flex justify-center items-center bg-backgroundColor'>
                    <div className='container  flex items-center text-center h-20 pl-4 pr-4'>
                        {browser()}
                        <Link to="/" className='flex justify-start items-center' >
                            <img src={data.smallLogo} alt="Logo" className="h-8 w-auto " />
                        </Link>

                        <div className="hidden w-1 h-8 border-r border-gray-300 md:mx-1 md:ml-6"></div>

                        <div className='hidden lg:flex justify-start items-center ml-2 '>
                            <button className={`${fonts.boldText()} p-1 pl-4 pr-4 hover:pointer hover:border-gray-300 hover:underline hover:text-black rounded-md`}>
                                <span className='text-purple-900'>New! </span> XL - TUMBING MASCARA &#x1F49C;
                            </button>
                        </div>

                        <div className='flex ml-auto'>
                            {menuItem("Log In or Sign up", "My Account", "profile")}
                            {menuItem("Lists &", "Wishlist", "wishlist")}
                            {cart(67.9)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


    function menuItem(heading: string, subHeading: string, type: string): React.JSX.Element {

        return (

            <div className='flex justify-center items-center md:ml-4 md:mr-2 ' onClick={() => { toggleSliders(type) }}>
                <div className='flex justify-center items-center border bg-gray-100 hover:border-gray-900 
                cursor-pointer h-10 mr-2 w-10 rounded-full mt-2 '>
                    {type === 'wishlist' ? (
                        <HeartIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                        <UserIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                </div>

                <div className='hidden md:block text-left cursor-pointer'>
                    {/* Show on larger screens (sm and up) */}
                    <h1 className={` ${fonts.regularText()}`}>
                        {heading}
                    </h1>
                    <h1 className={` ${fonts.boldText()}`}>
                        {subHeading}
                    </h1>
                </div>
            </div>

        )
    }
    function cart(total: number): React.JSX.Element {
        // Format the total as a currency with two decimal places
        const formattedTotal = total.toFixed(2);

        return (
            <div onClick={() => { toggleSliders("cart") }} className='flex justify-center items-center cursor-pointer rounded-full border
             bg-gray-100 hover:border-gray-900 h-10 mr-2 w-10 mt-2 md:ml-4 md:w-[100px]'>
                <div className='flex justify-center items-center'>
                    <ShoppingCartIcon className="h-5 w-5 md:ml-4" aria-hidden="true" />
                </div>
                <div className='hidden  md:block text-left pr-4 cursor-pointer md:ml-2'>
                    <h1 className={`${fonts.boldText()}`}>
                        ${formattedTotal}
                    </h1>
                </div>
            </div>
        );
    }

    function browser(): React.JSX.Element {

        return (
            <div onClick={() => { toggleSliders("mobile") }} className='  md:hidden flex justify-center items-center cursor-pointer rounded-full border
             bg-gray-100 hover:border-gray-900 h-10 mr-2 mt-2 md:ml-4 w-[120px]'>
                <div className='flex justify-center items-center'>
                    <Bars3Icon className="h-6 w-6 ml-4" aria-hidden="true" />
                </div>
                <div className='text-left pr-4 cursor-pointer ml-2'>
                    <h1 className={`${fonts.boldText()}`}>
                        Browser
                    </h1>
                </div>
            </div>
        );
    }

}


export default PrimaryMenu