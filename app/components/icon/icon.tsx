import React from "react";
import GithubIcon from "./githubIcon";
import LinkedInIcon from "./linkedinIcon";
import MailIcon from "./mailIcon";
import ArrowIcon from "./arrowIcon";
import MoonIcon from "./moonIcon";
import SunIcon from "./sunIcon";

function Icon({ className, name }: { className?: string; name: string }) {
  switch (name) {
    case "Arrow":
      return <ArrowIcon className={className} />;
    case "Email":
      return <MailIcon className={className} />;
    case "Github":
      return <GithubIcon className={className} />;
    case "LinkedIn":
      return <LinkedInIcon className={className} />;
    case "Moon":
      return <MoonIcon className={className} />;
    case "Sun":
      return <SunIcon className={className} />;
    default:
      return <ArrowIcon className={className} />;
  }
}

export default Icon;
