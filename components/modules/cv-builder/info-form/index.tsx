import React from "react";
import AddPersonalDetails from "@/components/modules/cv-builder/info-form/personal-details";
import SummaryForm from "@/components/modules/cv-builder/info-form/summary/summary-form";

type UserInfoFormProps = {};

const UserInfoForm: React.FC<UserInfoFormProps> = () => {
  return (
    <div>
      <AddPersonalDetails />
      <SummaryForm />
    </div>
  );
};

export default UserInfoForm;
