import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  // control: Control<z.infer<typeof formSchema>>;
  // name: FieldPath<z.infer<typeof formSchema>>;
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              {/* @ts-ignore */}
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default FormInput;
