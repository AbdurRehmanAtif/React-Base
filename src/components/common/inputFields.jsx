import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikCustomError from "../../lib/formikCustomError";

const inputs = ({ options, style = "", onChange = null }) => {
  const classes =
    "block w-full py-3 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-double focus:border-green-500 sm:text-sm sm:leading-6 p-1 pl-4";
  if (options.disabled) {
    style = "bg-gray-200 hover:cursor-notAllowed";
  }
  return (
    <>
      <label
        htmlFor="email"
        className="block text-left text-l font-bold leading-6 text-gray-900"
      >
        {options.label}
      </label>
      <div className="mt-2">
        {options.type === "select" ? (
          <Field
            as="select"
            id={options.id}
            name={options.name}
            className={`${classes} ${style}`}
            disabled={options.disabled}
            value={options.value}
            onChange={onChange}
          >
            {/* Options for the select field */}
            {options.selectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>
        ) : options.type === "textarea" ? (
          <Field
            as="textarea"
            type={options.type}
            id={options.id}
            name={options.name}
            className={`${classes} ${style}`}
            autoComplete="off"
            disabled={options.disabled}
            value={options.value}
            onChange={onChange}
          />
        ) : (
          <Field
            type={options.type}
            id={options.id}
            name={options.name}
            className={`${classes} ${style}`}
            autoComplete="off"
            value={options.value}
            disabled={options.disabled}
            onChange={onChange}
          />
        )}
      </div>
      <ErrorMessage name={options.name} component={FormikCustomError} />
    </>
  );
};

export default inputs;
