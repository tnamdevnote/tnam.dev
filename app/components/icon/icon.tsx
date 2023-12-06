import React from "react";
import GithubIcon from "./githubIcon";
import LinkedInIcon from "./linkedinIcon";
import MailIcon from "./mailIcon";
import ArrowIcon from "./arrowIcon";

function Icon({ className, name }: { className?: string; name: string }) {
  switch (name) {
    case "Github":
      return <GithubIcon className={className} />;
    case "LinkedIn":
      return <LinkedInIcon className={className} />;
    case "Email":
      return <MailIcon className={className} />;
    case "Arrow":
      return <ArrowIcon className={className} />;
    default:
      return <ArrowIcon className={className} />;
  }
}

export default Icon;
