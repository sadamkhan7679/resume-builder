import React from "react";
import FormInput from "@/components/shared/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { z } from "zod";

type PersonalDetailsFormProps = {};

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <Form {...form}>
      <Card className="w-full h-screen">
        <CardHeader>
          <CardTitle>Edit Personal Details</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <FormInput
            control={form.control}
            name="fullName"
            label="Full Name"
            placeholder="Enter your Full Name"
          />
          <FormInput
            control={form.control}
            name="jobTitle"
            label="Job Title"
            placeholder="Enter your Job Title"
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your Email"
          />
          <FormInput
            control={form.control}
            name="phone"
            label="Phone"
            placeholder="Enter your Phone"
          />
          <FormInput
            control={form.control}
            name="address"
            label="Address"
            placeholder="Enter your Address"
          />
        </CardContent>
      </Card>
    </Form>
  );
};

export default PersonalDetailsForm;
