import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Alert from "../../lib/alert";
import FormikCustomError from "../../lib/formikCustomError";
import ApiService from "../../services/apiService";
import AuthService from "../../services/authService";
import Loading from "../common/loading";
import { Link, useNavigate, useLocation } from "react-router-dom";

const resgisterForm = () => {
  const [isAlertBoxVisible, setIsAlertBoxVisible] = useState(false);
  const [alertPayload, setalertPayload] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    // Handle form submission logic
    setIsLoading(true);

    try {
      const results = await ApiService.api("/api/v1/register", "POST", values);
      // If successful, authenticate the user, update UI, and navigate to the home page
      AuthService.login(results);
      navigate("/");
      setIsLoading(false);
      setIsAlertBoxVisible(false);
    } catch (error) {
      console.log(error);
      setIsAlertBoxVisible(true);
      setIsLoading(false);
      setalertPayload({
        errorCode: error.error,
        errorDetails: error.message,
        success: error.success,
      });
    }

    setSubmitting(false);
  };

  const validate = (values) => {
    // Add your custom validation logic here
    const errors = {};

    // if (!values.username) {
    //   errors.username = "Enter a username.";
    // }
    // if (!values.email) {
    //   errors.email = "Enter a valid email address.";
    // } else {
    //   // Validate email address, mobile number, or myGov username
    //   const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    //     values.email
    //   );
    //   // const isValidMobileNumber = /^\d{10}$/i.test(values.username);
    //   // const isValidMyGovUsername = /^[A-Za-z]{2}\d{6}$/.test(values.username);
    //   if (!isValidEmail) {
    //     errors.email = "Enter a valid email address";
    //   }
    // }
    // // Assuming values and errors are objects with the password and confirmPassword properties
    // if (values.password === values.confirmPassword) {
    //   // Passwords match, no error
    // } else {
    //   errors.confirmPassword = "Password doesn't match.";
    // }

    // if (!values.password) {
    //   errors.password = "Enter a password.";
    // }
    // if (!values.confirmPassword) {
    //   errors.confirmPassword = "Please confirm password.";
    // }

    return errors;
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-2 lg:px-8 mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-left text-2xl font-bold  text-gray-900">
            Register with myApp
          </h2>

          {/* <h4 className="mt-1 text-left text-xl">
            Choose how to Register from these 2 options
          </h4>

          <h2 className="mt-10 text-left text-2xl font-bold  text-gray-900">
            Using your myApp sign in details
          </h2> */}
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
                    Username
                  </label>
                  <div className="mt-2">
                    <Field
                      className="block w-full py-2.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300
   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-double
    focus:border-green-500 sm:text-sm sm:leading-6 p-1"
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="off"
                    />
                  </div>
                  <ErrorMessage name="username" component={FormikCustomError} />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left text-l font-bold leading-6 text-gray-900"
                  >
                    E-mail address
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
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-left text-l font-bold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <div className="relative">
                      <Field
                        className="block w-full py-2.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-double
                focus:border-green-500 sm:text-sm sm:leading-6 p-1"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer  text-md font-bold"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component={FormikCustomError}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-left text-l font-bold leading-6 text-gray-900"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <div className="relative">
                        <Field
                          className="block w-full py-2.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-double
                focus:border-green-500 sm:text-sm sm:leading-6 p-1"
                          type={showPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          autoComplete="off"
                        />
                        <button
                          type="button"
                          onClick={handleTogglePassword}
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer  text-md font-bold"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component={FormikCustomError}
                      />
                    </div>
                  </div>

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
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default resgisterForm;
