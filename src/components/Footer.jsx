
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./Section";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block text-center">
          © {new Date().getFullYear()}.Najam-Ul-Hassan.All rights reserved.
        </p>
        <Link className="text-sm text-neutral-500 duration-300" to="https://linkedin.com/in/najamul-hassan" target="_blank"> <span> <FontAwesomeIcon icon={faLinkedin} size="2xl"/> </span></Link>
        <Link className="text-sm text-neutral-500 duration-300" to="https://github.com/RANANAJAMULHASSAN?tab=repositories" target="_blank"><span> <FontAwesomeIcon icon={faGithub} size="2xl"/> </span></Link>
        <Link className="text-sm text-neutral-500 duration-300" to="mailto:najamulhassan.info@gmail.com"  target="_blank"><span> <FontAwesomeIcon icon={faEnvelope} size="2xl"/> </span></Link>
      </div>
    </Section>
  );
};

export default Footer;
