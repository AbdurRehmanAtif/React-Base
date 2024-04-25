import React, { useRef, RefObject } from 'react'
import { Field, ErrorMessage, FieldProps } from "formik";


interface StandardInputProps {
    options: {
        type: string;
        id: string;
        name: string;
        value: string | number;
        disabled?: boolean;
    };
    classes: string;
    style: string;
    innerRef: RefObject<HTMLDivElement>
    isFocused: boolean;
    toggleFloatingLabel: () => void;
    setIsFocused: () => void;
    handleKeyDown: () => void;
}


const StandardInput: React.FC<StandardInputProps> = ({ options, classes, style,
    innerRef, isFocused, toggleFloatingLabel, setIsFocused, handleKeyDown}) => {
    return (
        <>
            <Field
                type={options.type}
                id={options.id}
                name={options.name}
                className={`${classes} ${style}`}
                autoComplete="off"
                value={options.value}
                innerRef={innerRef}
                disabled={options.disabled}
                onFocus={toggleFloatingLabel}
                onKeyDown={handleKeyDown}
                onBlur={(e: any) => setIsFocused(e.target.value !== '')}
            />
        </>
    )
}



export default StandardInput