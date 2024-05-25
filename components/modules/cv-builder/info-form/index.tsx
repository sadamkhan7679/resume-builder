import React from "react";
import AddPersonalDetails from "@/components/modules/cv-builder/info-form/personal-details";

type UserInfoFormProps = {};

const UserInfoForm: React.FC<UserInfoFormProps> = () => {
  return (
    <div>
      <AddPersonalDetails />
    </div>
  );
};

export default UserInfoForm;
