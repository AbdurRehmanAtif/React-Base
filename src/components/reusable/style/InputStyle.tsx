import React, { ReactNode } from 'react';
import fonts from '../../../fonts/fonts';

interface InputStyleProps {
    children: ReactNode; //


}

const InputStyle: React.FC<InputStyleProps> = ({ toggleFloatingLabel, containerDivRef, handleBlur, options, isFocused, children }) => {
    return (
        <div className="relative transition-all duration-100 ease-in-out hover:pl-1 hover:font-bold  rounded-lg border border-gray-300 hover:border-gray-900 cursor-text text-center bg-gray-100 h-full hover:text-6xl"
            onClick={toggleFloatingLabel}
            ref={containerDivRef}
            onFocus={toggleFloatingLabel}
            onBlur={handleBlur}>
            <label className={`absolute top-3 left-0 p-2 ml-1 text-left w-full transition-all duration-100 cursor-text ${fonts.regularText()} text-gray-600 ${isFocused ? 'text-[12px] text-gray-400 -translate-y-3' : 'text-base'}`}
                onClick={toggleFloatingLabel}> {options.label} </label>
            {children}
        </div>
    );
};

export default InputStyle;
