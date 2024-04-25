import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../reusable/Input";
import Text from "../common/text";
import Button from "../common/button";
import ProfileDataFields from "./fieldsData./profileDataFields";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Loading from "../common/loading";

const profile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {};

  const onSubmit = (values, { setSubmitting, resetForm }) => {


    


  };




  const validate = (values) => {
    const errors = {};
 
    if (!values.firstName) {
      errors.firstName = "Enter a valid email address.";
    }
    ProfileDataFields.userProfileFields().map((value, index) => {
      // if (!values) {
      //   errors.password = "Enter your current password";
      // }
    });

    return errors;
  };

  return (
    <>
      <div className="flex">
        <div className="max-w-8xl w-full pl-6 pr-6">
          {isLoading ? (
            <Loading />
          ) : (
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validate={validate}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 mt-1">
                  <div className="flex flex-col md:flex-row md:space-x-4 text-left mt-2 ">
                    {/* Left Column */}
                    <div className="w-full mt-2 md:w-1/2 pr-4">
                      <Text
                        text="ACCOUNT INFORMATION"
                        type="heading"
                        style="text-xl font-semibold  text-black dark:text-white"
                      />
                      <Text
                        text="This information will be displayed publicly."
                        type="subHeading"
                      />
                      {ProfileDataFields.userProfileFields().map(
                        (value, index) => (
                          <div className="mt-4" key={index}>
                            {index >= 0 && index <= 3 && (
                              <InputField options={value} />
                            )}
                          </div>
                        )
                      )}

                      <div className="mt-10">
                        <Text text="KEEP YOUR ACCOUNT SECURE" type="heading" />
                        <Text
                          text="Protect your account by enabling two-factor verification."
                          type="subHeading"
                        />
                      </div>
                      <div className="mt-6">
                        <Button
                          text="SET UP TWO-STEP VERIFICATION"
                          type="fill"
                        />
                      </div>

                      <div className="mt-10">
                        <Text text="CHANGE YOUR PASSWORD" type="heading" />
                        <Text
                          text="Update your password in my App account"
                          type="subHeading"
                        />
                      </div>
                      <div className="mt-6">
                        <Button text="CHANGE PASSWORD" type="blank" />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full mt-2 md:w-1/2 pl-4">
                      <Text
                        text="ACCOUNT DETAILS"
                        type="heading"
                        style="text-xl font-semibold  text-black dark:text-white"
                      />

                      <div className="col-span-full mt-10">
                        <label
                          htmlFor="email"
                          className="block text-left text-l font-bold leading-6 text-gray-900"
                        >
                          Profile Picture
                        </label>
                        <Text
                          text="JPG, GIF or PNG. 3MB max."
                          type="subHeading"
                        />

                        <div className="mt-2 flex items-center gap-x-3">
                          <UserCircleIcon
                            className="h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                      {ProfileDataFields.userProfileFields().map(
                        (value, index) => (
                          <div className="mt-4" key={index}>
                            {index >= 4 && index <= 6 && (
                              <InputField options={value} />
                            )}
                          </div>
                        )
                      )}
                      <br></br>
                      <Text text="ADDRESS INFORMATION" type="heading" />

                      <Text
                        text="Update your address information"
                        type="subHeading"
                      />
                      <br></br>
                      {ProfileDataFields.userProfileFields().map(
                        (value, index) => (
                          <div className="mt-4" key={index}>
                            {index > 7 && <InputField options={value} />}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div class="max-w-screen mx-auto mt-8">
                    <hr class="border-t border-gray-300 my-8"></hr>
                    <div class="flex justify-end space-x-4 mt-4 ">
                      <Button type="reset" text="Cancel" color="blank" />
                      <Button type="submit" text="SAVE" color="fill" />
                    </div>
                  </div>
                  <br></br>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};

export default profile;
