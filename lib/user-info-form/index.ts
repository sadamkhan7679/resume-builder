export const UserInfoData = {
  personalDetails: {
    label: "Personal Details",
    description: "Add your personal details",
    orderNo: 1,
    key: "personalDetails",
    fields: [
      {
        fieldName: "username",
        label: "Full Name",
        placeholder: "Enter your Full Name",
        fieldType: "text",
        value: "",
      },
      {
        fieldName: "jobTitle",
        label: "Job Title",
        placeholder: "Enter your Job Title",
        fieldType: "text",
        value: "",
      },
      {
        label: "Email",
        fieldName: "email",
        placeholder: "Enter your Email",
        fieldType: "email",
        value: "",
      },
      {
        label: "Phone",
        fieldName: "phone",
        placeholder: "Enter your Phone",
        fieldType: "tel",
        value: "",
      },
      {
        label: "Address",
        fieldName: "address",
        placeholder: "Enter your Address",
        fieldType: "text",
        value: "",
      },
      {
        label: "Links",
        fieldName: "links",
        fieldType: "links",
        value: [
          {
            label: "LinkedIn",
            url: "",
          },
          {
            label: "LinkedIn",
            url: "",
          },
          {
            label: "GitHub",
            url: "",
          },
          {
            label: "Portfolio",
            url: "",
          },
          {
            label: "Other",
            url: "",
          },
        ],
      },
    ],
  },
};
