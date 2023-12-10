class ProfileDataFields {
  userProfileFields() {

    return [
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
        label: "Username or email",
        type: "text",
        name: "username",
        id: "username",
        autoComplete: "off",
        disabled: true,
        style: "",
      },
      {
        label: "About",
        type: "textarea",
        name: "about",
        id: "about",
        autoComplete: "off",
        disabled: false,
        style: "h-[150px]",
      },
      {
        label: "Birthday",
        type: "date",
        name: "birthday",
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
        label: "Street address line #1",
        type: "text",
        name: "addressOne",
        id: "addressOne",
        autoComplete: "off",
        disabled: false,
      },
      {
        label: "Street address line #2 (Optional)",
        type: "text",
        name: "addressTwo",
        id: "addressTwo",
        autoComplete: "off",
        disabled: false,
      },
      {
        label: "Suburb",
        type: "text",
        name: "suburb",
        id: "suburb",
        autoComplete: "off",
        disabled: false,
      },
      {
        label: "State",
        type: "select",
        name: "state",
        id: "state",
        autoComplete: "off",
        disabled: false,
        selectOptions: ["NSW", "VIC", "TA"],
      },
      {
        label: "Postcode",
        type: "number",
        name: "postcode",
        id: "postcode",
        autoComplete: "off",
        disabled: false,
      },
    ];
  }
}

export default new ProfileDataFields();