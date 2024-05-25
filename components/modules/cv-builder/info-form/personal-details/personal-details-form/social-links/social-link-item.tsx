import React from "react";
import { UserSocialLink } from "@/types/cv-builder/user-form";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

type SocialLinkItemProps = {
  socialLink: UserSocialLink;
};

const SocialLinkItem: React.FC<SocialLinkItemProps> = ({ socialLink }) => {
  return (
    <div className="form-item">
      <FormLabel className="form-label">{socialLink.label}</FormLabel>
      <div className="flex w-full items-center">
        <div className="flex w-full flex-col">
          <FormControl>
            <Input
              placeholder="https://www.website.com/username"
              className="input-class"
              type={"text"}
              value={socialLink.url}
              // {...field}
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
        <div className="flex items-center content-center justify-center ml-5 w-12 h-12 bg-red-200 rounded-md">
          <Trash2 className="w-6 h-6  text-red-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinkItem;
