import { useForm, FormProvider, useFormContext } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

interface UserInfoContextProps {
  children: React.ReactNode;
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const UserInfoContextProvider: React.FC<UserInfoContextProps> = ({
  children,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <FormProvider {...form}>
      <Form {...form}>{children}</Form>
    </FormProvider>
  );
};
