import React, { useState } from 'react'
import fonts from '../../../fonts/fonts'
import { Link } from 'react-router-dom'
import { Formik, Form } from "formik";
import InputFields from "../../reusable/Input";
import Alert from "../../../lib/alert";
import ApiService from "../../../services/apiService";
import AuthService from "../../../services/authService";
import Loading from "../../common/loading";
import { useNavigate, useLocation } from "react-router-dom";

const Signup = () => {

    const [isAlertBoxVisible, setIsAlertBoxVisible] = useState(false);
    const [alertPayload, setalertPayload] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";


    const initialValues = {
        email: "",
        password: "",
        terms: false
    };

    const validate = (values: any) => {


        const errors = {};

        if (!values.email) {
            errors.email = "Email address is required.";
        }

        if (!values.password) {
            errors.password = "Password is required.";
        }

        if (!values.terms) {
            errors.terms = "Please accept the Terms and Conditions in order to continue";
        }

        return errors;
    };

    const onSubmit = async (values) => {

        try {
            const results = await ApiService.api("/api/v1/register", "POST", values);
            // If successful, authenticate the user, update UI, and navigate to the home page
            AuthService.login(results);
            navigate("/");
            // setIsLoading(false);
            // setIsAlertBoxVisible(false);
        } catch (error) {
            console.log(error);
            setIsAlertBoxVisible(true);
            // setSubmitting(false);
            setalertPayload({
                errorCode: error.error,
                errorDetails: error.message,
                success: error.success,
            });
        }
    };

    const basicFields = [
        {
            label: "Email address",
            type: "email",
            name: "email",
            id: "email",
            autoComplete: "off",
            style: "",
            config: {
                note: "We use this email address to verify your account"
            }
        }, {
            label: "Password",
            type: "password",
            name: "password",
            id: "password",
            autoComplete: "off",
            style: "",
            config: {
                note: `<ul className="list-disc list-inside"><li>&#x2705; Minimum 8 characters</li><li>&#128683; No Common password</li></ul>`,
            },
        },
        {
            label: `<label><span>Yes, I have read and accept the Woolworths Online and Everyday Market from Woolworths </span><b><a href="/terms" style="color: #5F9EA0; text-decoration: underline;">Terms and Conditions</a></b>.</label>`,
            type: "checkbox",
            name: "terms",
            id: "terms",
            autoComplete: "off",
            style: `${fonts.regularText()} form-checkbox checked:bg-textDark ring-textDark checked:border-transparent focus:ring-textDark`
        }

    ]

    return (
        <>
            {/* <header className="bg-white shadow sticky top-[119px] mt-0 pt-0 z-10">
                <div className="container mx-auto max-full  py-4 sm:px-6">
                    <h1 className={` font-bold text-gray-900 md:mx-[-10px] mx-8 ${fonts.boldText()}`}>Go back</h1>
                </div>
            </header> */}

            <div className="h-full bg-gray-200 pb-[55%] flex justify-center items-center md:pt-[2%]">

                <main className='felx justify-center items-center'>

                    <div className="md:py-6 sm:px-6 lg:px-8 bg-white max-w-2xl border rounded-lg m-6 ">
                        <div className='md:p-[50px] p-8'>
                            <h1 className={`text-[35px]  text-gray-900 mt-2 ${fonts.boldText()}`}>
                                Let's create your account
                            </h1>
                            <div className="flex mt-6">
                                <h1 className={`block ${fonts.regularText()}`}>Already have an account? <Link to="/login" className={`underline hover:text-textDark cursor-pointer text-md ${fonts.boldText()}`}> Login here</Link></h1>
                            </div>
                            <h1 className={`text-[25px] text-gray-900 mt-6 ${fonts.boldText()}`}>
                                Login Details
                            </h1>
                            <div className='mt-6'>
                                {isAlertBoxVisible && <Alert payload={alertPayload} />}
                                <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
                                    {({ isSubmitting }) => (
                                        <Form className="space-y-2 mt-1">
                                            {basicFields.map((options, index) => (

                                                <InputFields options={options} key={index} />
                                            ))}
                                            <br></br>
                                            <label className={`justify-between min-h-[55px] ${fonts.regularText()} cursor-pointer`}>
                                                Woolworths Online is part of the Woolworths Group. View the Woolworths Group <span className={`min-h-[55px] ${fonts.boldText()} cursor-pointer underline`}>Privacy Policy</span> and our <span className={`min-h-[55px] ${fonts.boldText()} cursor-pointer underline`}>Collection Notice </span> to understand how we manage your personal information.
                                            </label>
                                            <br></br><br></br>
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

                            </div>
                        </div>
                    </div>
                </main >


            </div >
        </>
    )
}

export default Signup