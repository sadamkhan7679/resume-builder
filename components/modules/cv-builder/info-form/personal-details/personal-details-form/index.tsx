import React from "react";
import FormInput from "@/components/shared/FormInput";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SocialLinks from "./social-links";
import { useFormContext } from "react-hook-form";

type PersonalDetailsFormProps = {};

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = () => {
  const { control } = useFormContext();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="heading-2">Edit Personal Details</CardTitle>
        <CardDescription>Update your personal details</CardDescription>
      </CardHeader>
      <CardContent>
        <FormInput
          control={control}
          name="fullName"
          label="Full Name"
          placeholder="Enter your Full Name"
        />
        <FormInput
          control={control}
          name="jobTitle"
          label="Job Title"
          placeholder="Enter your Job Title"
        />
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your Email"
        />
        <FormInput
          control={control}
          name="phone"
          label="Phone"
          placeholder="Enter your Phone"
        />
        <FormInput
          control={control}
          name="address"
          label="Address"
          placeholder="Enter your Address"
        />
        <SocialLinks />
      </CardContent>
    </Card>
  );
};

export default PersonalDetailsForm;
