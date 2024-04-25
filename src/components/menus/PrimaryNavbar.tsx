import React, { useContext, useEffect, useState } from 'react'
import fonts from '../../fonts/fonts';
import { TruckIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, animate, motion } from 'framer-motion';
import { useMenuContext } from "../../context/MenuContext"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const PrimaryNavbar = () => {

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const menuState = useMenuContext()

    return (
        <>
            <div className='sticky top-[79px] bg-white shadow-lg'>
                <div className="mx-auto container">
                    <div className=" flex h-16 items-center justify-between">


                        <div className={`container flex items-center text-center `}>
                            <div className='flex '>

                                {Array.isArray(menuState.navData) && menuState.navData.map((item, index) => (
                                    navItem(item.text, item.isSubmenu)
                                ))}
                            </div>

                        </div>



                    </div >

                    <AnimatePresence mode="popLayout" >
                        {menuState.isNaveOpen && navMenu()}
                    </AnimatePresence>
                </div >
            </div >
        </>

    )

    function navItem(text: string, isSubmenu: boolean) {
        return (

            <div className="flex items-center text-center group h-12 pl-4 pr-4 cursor-pointer hover:bg-backgroundColor"
                onMouseEnter={() => { menuState.openNav(text) }}>

                <button className="font-bold cursor-pointer group-hover:text-textDark">
                    {text}
                </button>
                {isSubmenu ?
                    <ChevronDownIcon className="h-4 ml-2 group-hover:text-textDark" />
                    : null}
            </div>
        );
    }


    function navMenu() {
        return (
            <>
                {console.log("This works as rander")}

                <motion.div
                    initial={{ y: -20 }} // Initial position above the viewport
                    animate={{ y: 0 }} // Animation to slide down
                    exit={{ y: 0 }} // Animation to slide up when exiting
                    onMouseLeave={menuState.closeNav}
                    transition={{ duration: 0.3 }}
                    className={`bg-gray-100 shadow-sm pb-2 fixed left-0 w-full h-[400px] overflow-hidden`}>

                    <div className="grid grid-cols-5 gap-2">

                        <div className='p-14'>
                            <h1 className={`block font-bold text-black ${fonts.boldText()} text-lg`}>Face</h1>

                            <ul className="list-none mt-4">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Lorem ipsum</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Sed do</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Ut enim</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Sed do</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Ut enim</a>
                                </li>
                            </ul>

                        </div>
                        <div className='p-14'>
                            <h1 className={`block font-bold text-black ${fonts.boldText()} text-lg`}>Face</h1>

                            <ul className="list-none mt-4">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Lorem ipsum</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Sed do</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Ut enim</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Sed do</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Ut enim</a>
                                </li>
                            </ul>

                        </div> <div className='p-14'>
                            <h1 className={`block font-bold text-black ${fonts.boldText()} text-lg`}>Face</h1>

                            <ul className="list-none mt-4">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Lorem ipsum</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Sed do</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Ut enim</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Sed do</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-black">Ut enim</a>
                                </li>
                            </ul>

                        </div>
                        <div className=''>
                            <img className="object-cover object-top mt-8 h-[280px]" src="https://www.zeromakeup.com/cdn/shop/files/ShopTheLook-Mobile.jpg?v=1707918545&width=480" />
                            <ul className="list-none mt-2">
                                <li className="">
                                    <a href="#" className="hover:underline text-gray text-sm">Trending</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="underline text-black">Mat lip stick</a>
                                </li>
                            </ul>
                        </div>

                        <div className=''>
                            <img className="object-cover object-top mt-8 h-[280px] w-[220px]" src="https://www.zeromakeup.com/cdn/shop/files/Palette-ComboBox_Palette1C.jpg?crop=center&height=1620&v=1699361327&width=1080" />
                            <ul className="list-none mt-2">
                                <li className="">
                                    <a href="#" className="hover:underline text-gray text-sm">Trending</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="underline text-black">Mat lip stick</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </motion.div>
            </>
        );
    }

}

export default PrimaryNavbar