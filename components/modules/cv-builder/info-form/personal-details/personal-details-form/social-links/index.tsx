import React from "react";
import SocialLinkItem from "@/components/modules/cv-builder/info-form/personal-details/personal-details-form/social-links/social-link-item";
import { UserSocialLink } from "@/types/cv-builder/user-form";

type SocialLinksProps = {};

const socialLinksData: Array<UserSocialLink> = [
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
];

const SocialLinks: React.FC<SocialLinksProps> = () => {
  const [socialLinks, setSocialLinks] =
    React.useState<Array<UserSocialLink>>(socialLinksData);

  return (
    <div>
      <h2 className="heading-2">Links</h2>
      {socialLinks.map((socialLink) => (
        <SocialLinkItem
          key={`user-social-link-${socialLink.label}`}
          socialLink={socialLink}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
