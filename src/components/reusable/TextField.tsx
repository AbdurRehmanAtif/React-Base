import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import fonts from "../../fonts/fonts"

const TextField = () => {

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerDivRef = useRef<HTMLInputElement>(null);

    const toggleFloatingLabel = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (containerDivRef.current) {
            containerDivRef.current.classList.add("ring-2", "ring-inset", "ring-offset-2", "ring-textDark", "border-gray-700", "border-dashed", "border-2");
        }
        setIsFocused(true)
    };

    const handleBlur = () => {
        if (containerDivRef.current) {
            containerDivRef.current.classList.remove("ring-2", "ring-inset", "ring-offset-2", "ring-textDark", "border-gray-700", "border-dashed", "border-2");
        }
    };

    return (

        <div className="">
            <div className="relative rounded-lg border border-gray-300 hover:border-gray-900 cursor-text text-center bg-gray-100 h-full "
                onClick={toggleFloatingLabel}
                ref={containerDivRef}
                onFocus={toggleFloatingLabel}
                onBlur={handleBlur}>
                <label
                    className={`absolute top-2 left-0 p-2 ml-1 text-left w-full transition-all duration-200 cursor-text
                        ${fonts.boldText()} text-gray-700 ${isFocused ? 'text-[12px] text-gray-400 -translate-y-3' : 'text-base'}`}
                    onClick={toggleFloatingLabel}>
                    Email Address
                </label>
                <input
                    type="text"
                    ref={inputRef}
                    className={`block w-full border-none px-3  mt-2 outline-none focus:ring-0 bg-transparent
                        ${isFocused ? 'z-50' : 'z-10'}`}
                    style={{ outline: 'none !important' }}
                    onFocus={toggleFloatingLabel}
                    onBlur={(e) => setIsFocused(e.target.value !== '')}
                />
            </div>
        </div>
    )
}

export default TextField