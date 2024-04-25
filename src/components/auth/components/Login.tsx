import React, { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import Alert from "../../../lib/alert"
import fonts from "../../../fonts/fonts";
import InputFields from "../../reusable/Input";
import { useMenuContext } from "../../../context/MenuContext"
import { Link } from 'react-router-dom';
import Loading from "../../common/loading";
import ApiService from "../../../services/apiService";
import { useAuth } from "../../../context/authProvider";

const LoginComponent = () => {


    const menuState = useMenuContext();
    const AuthState = useAuth();
    const [isAlertBoxVisible, setIsAlertBoxVisible] = useState(false);
    const [alertPayload, setalertPayload] = useState({});


    const initialValues = {
        email: "",
        password: "",
    };

    const validate = (values: any) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Email address is required.";
        }

        if (!values.password) {
            errors.password = "Password is required.";
        }

        return errors;
    };

    const onSubmit = async (values) => {

        try {
            const results = await ApiService.api("/api/v1/login", "POST", values);
            // If successful, authenticate the user, update UI, and navigate to the home pag
            setIsAlertBoxVisible(false);
            AuthState.authService.login(results)
            AuthState.setIsAuthenticated(true)


        } catch (error) {
            setIsAlertBoxVisible(true);
            setalertPayload({ errorCode: error.error, errorDetails: error.message, success: error.success });
        }
    };

    const fields = [
        {
            label: "Email address",
            type: "email",
            name: "email",
            id: "email",
            autoComplete: "off",
            disabled: false,
            style: "",
        }, {
            label: "Password",
            type: "password",
            name: "password",
            id: "password",
            autoComplete: "off",
            disabled: false,
            style: "",
        }
    ]


    const handleSignupButton = () => {
        menuState.setSliderToggle(prevState => ({
            ...prevState,
            profile: !prevState,
        }));
    }

    return (
        <>
            <div className="bg-white pb-8 pt-6">
                <div className="p-4 flex">
                    <h1 className={`block pl-4 ${fonts.regularText()}`}>New to Woolworths online? <Link to="/shop/signup" onClick={handleSignupButton} className={`pl-1 underline hover:text-textDark cursor-pointer text-md ${fonts.boldText()}`}>Sign up here</Link><span className="ml-1 mr-1 text-[20px]">&#128525;</span></h1>
                </div>
                <div className="p-2 ml-4 mr-4" >

                    {isAlertBoxVisible && <Alert payload={alertPayload} />}
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
                        {({ isSubmitting }) => (
                            <Form className="space-y-2 mt-1">
                                {fields.map((options, index) => (
                                    (() => {
                                        if (options.type != "checkbox") {
                                            return <InputFields options={options} key={index} />;
                                        } else {
                                            return null; // Return null for non-checkbox types
                                        }
                                    })()
                                ))}

                                <a className={`block pt-2 pb-4 ml-1 backdrop:${fonts.boldText()} underline hover:text-textDark cursor-pointer`} >Forgotten your password?</a>
                                <div className="mt-10">
                                    {isSubmitting ? (
                                        <Loading />
                                    ) : (
                                        <button type="submit" className={`min-h-[55px] bg-textDark
                             text-white w-full border rounded-lg  ${fonts.boldText()} cursor-pointer hover:opacity-90
                             hover:outline hover:ring-2 transition-all duration-100 ease-in-out hover:ring-inset hover:ring-offset-2 hover:border-dashed hover:border-4`}>
                                            Submit
                                        </button>
                                    )}

                                </div>
                            </Form>
                        )}
                    </Formik>
                </div >
            </div>
        </>
    )
}
export default LoginComponent