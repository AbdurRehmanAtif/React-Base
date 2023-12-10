import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputField from "../../common/inputFields";
import Text from "../../common/text";
import Button from "../../common/button";
import ApiService from "../../../services/apiService";
import Loading from "../../common/loading";
import { useAuth } from "../../../context/authProvider.jsx";
import UserService from "../../../services/userService.js";

const ProfileDetails = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(fields);
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {};
  const authObject = useAuth();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        // Make an API request to perform user login
        const results = await ApiService.api(
          "/api/v1/profile",
          "GET",
          null,
          authObject.getToken()
        );
        if (results.statusCode == "200") {
          const data = UserService.parseData(fields, results.data);
          setProfileData(data);
        }

        setIsLoading(false);
      } catch (error) {
        // Handle login failure: show alert box with error details
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the function

    // If you want to clean up after the component unmounts, return a cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setIsSubmitting(true);
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const validate = (values) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  return (
    <>
      <div className="justify-center flex">
        <div className="lg:min-w-[50%] md:min-w-[70%] sm::min-w-[90%]">
          {isLoading ? (
            <Loading />
          ) : (
            <div
              className="block rounded-lg bg-white p-6
           shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.2)]
            dark:bg-neutral-700"
            >
              <div className="flex">
                <div className="block">
                  <Text
                    text="ACCOUNT INFORMATION"
                    type="heading"
                    style="text-lg font-semibold text-left text-indigo-600 dark:text-white"
                  />
                  <Text
                    text="This information will be displayed publicly."
                    type="subHeading"
                  />
                </div>
                {!editMode && (
                  <p
                    onClick={handleEditModeToggle}
                    className="mb-2 text-md font-medium leading-tight ml-auto hover:text-indigo-600 hover:cursor-pointer text-neutral-800 dark:text-neutral-50"
                  >
                    Edit
                  </p>
                )}
              </div>

              <br></br>
              {editMode ? (
                <Formik
                  initialValues={fields}
                  onSubmit={onSubmit}
                  validate={validate}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-6 mt-1">
                      <div className="grid grid-cols-2 gap-4">
                        {fields.map((item) => (
                          <div className="block">
                            <InputField
                              options={item}
                              onChange={(e) =>
                                setProfileData((item.value = e.target.value))
                              }
                            />
                          </div>
                        ))}
                      </div>
                      <div class="flex justify-end">
                        <Button
                          text="Cancel"
                          type=""
                          color="blank"
                          style="bg-gray-400 w-[120px]"
                          onClick={handleEditModeToggle}
                        />

                        {isSubmitting ? (
                          <Loading />
                        ) : (
                          <Button
                            text="Save"
                            type="submit"
                            color="fill"
                            disabled={isSubmitting}
                            style="bg-indigo-600 w-[120px] "
                          />
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {fields.map(
                    (item) =>
                      // Check if item.name is not "about" before rendering InformationLabel
                      item.name !== "about" && (
                        <InformationLabel
                          key={item.name}
                          label={item.label}
                          value={item.value}
                        />
                      )
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <br></br> <br></br> <br></br> <br></br>
    </>
  );
};

// Reusable component: InformationLabel
const InformationLabel = ({ label, value }) => {
  return (
    <>
      <div className="text-left">
        <label>
          <b>{label}</b>
        </label>
        <p>{value}</p>
      </div>
    </>
  );
};

const fields = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    id: "firstName",
    autoComplete: "off",
    disabled: false,
    style: "",
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    id: "lastName",
    autoComplete: "off",
    disabled: false,
    style: "",
  },
  {
    label: "Birthday",
    type: "date",
    name: "dateOfBirth",
    id: "birthday",
    autoComplete: "off",
    disabled: false,
  },
  {
    label: "Phone",
    type: "number",
    name: "phone",
    id: "phone",
    autoComplete: "off",
    disabled: false,
  },
  {
    label: "Gender",
    type: "select",
    name: "gender",
    id: "gender",
    autoComplete: "off",
    disabled: false,
    selectOptions: ["Male", "Female", "Others"],
  },
  {
    label: "About",
    type: "textarea",
    name: "about",
    id: "about",
    autoComplete: "off",
    disabled: false,
    style: "h-[150px] w-[100%]",
  },
];
export default ProfileDetails;
