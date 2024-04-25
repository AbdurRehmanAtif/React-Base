import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Alert from "../../../lib/alert";
import FormikCustomError from "../../../lib/formikCustomError";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/loading";
import ApiService from "../../../services/apiService";
/**
 * Defines a login form component.
 * Redirects to a specified page upon successful submission.
 * Displays alert messages for submission outcomes.
 * Handles loading states during form submission.
 */
const loginForm = () => {

  const [isAlertBoxVisible, setIsAlertBoxVisible] = useState(false);
  const [alertPayload, setalertPayload] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Initial form field values
  const initialValues = {
    email: "",
  };

  /**
   * Handles form submission event.
   * Initiates loading state, submits form data, and manages alert display.
   * @param {Object} values - Form values.
   * @param {Function} setSubmitting - Function to set form submission state.
   * @param {Function} resetForm - Function to reset form values.
   */
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsLoading(true);
    setIsAlertBoxVisible(false);

    try {
      // Sends form data to API endpoint
      const results = await ApiService.api("api/v1/forgotPassword", "POST", values);

      setIsLoading(false);
      setIsAlertBoxVisible(true);
      resetForm(true);
      setalertPayload({
        errorCode: results.error,
        errorDetails: results.message,
        success: results.success,
      });

    } catch (error) {
      setIsLoading(false);
      setIsAlertBoxVisible(true);
      setalertPayload({
        errorCode: error.error,
        errorDetails: error.message,
        success: error.success,
      });
    }
    setSubmitting(false);
  };

  /**
   * Validates form input values.
   * @param {Object} values - Form values to validate.
   * @returns {Object} - Validation errors object.
   */
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Enter a valid email address";
    } else {
      const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);

      if (!isValidEmail) {
        errors.email = "Enter a valid email address";
      }
    }
    return errors;
  };



  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-2 lg:px-8 mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-left text-2xl font-bold  text-gray-900">
            Reset your password
          </h2>

          <h4 className="mt-1 text-left text-xl">
            Enter your existing email to reset password
          </h4>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isAlertBoxVisible && <Alert payload={alertPayload} />}

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left text-l font-bold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <Field
                      className="block w-full py-2.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300
       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-double
        focus:border-green-500 sm:text-sm sm:leading-6 p-1"
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <ErrorMessage name="email" component={FormikCustomError} />
                </div>

                <div>


                  <div className="mt-10">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full justify-center 
                     bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login{"  "}
            </a>
            if you already have one already.
          </p>
        </div>
      </div>
    </>
  );
};

export default loginForm;
