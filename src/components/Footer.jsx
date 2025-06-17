import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex items-center text-white justify-between py-10 px-4 sm:px-20 bg-slate-900 mt-20">
      <div
        id="icons"
        className="flex text-slate-400 gap-3 [&_a]:transition-colors hover:[&_a]:scale-110"
      >
        <Link
          className="hover:text-gray-500"
          href="https://github.com/hassaancode"
          target="_blank"
          title="Github"
        >
          <IoLogoGithub size={24} />
        </Link>
        <Link
          className="hover:text-blue-500"
          href="https://www.linkedin.com/in/hassaanvfx/"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          className="hover:text-red-500"
          href="https://www.youtube.com/@hassaanvfx"
          target="_blank"
          title="Youtube"
        >
          <FaYoutube size={24} />
        </Link>
      </div>
      <span className="text-sm">© {new Date().getFullYear()} Hassaan Ali</span>
    </footer>
  );
};

export default Footer;
