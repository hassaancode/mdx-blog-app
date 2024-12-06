import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex max-w-[800px] mx-auto mt-10 px-4 md:px-0 flex-[1] flex-col p-5 md:p-10 ">
      <h1 className="text-3xl text-slate-800 font-bold mb-6">Contact Me</h1>
      <ContactForm />
      <div
        id="icons"
        className="flex text-slate-400 gap-2 justify-center mt-20 [&_a]:transition-colors hover:[&_a]:scale-110"
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
    </div>    
  );
};

export default Contact;

export async function generateMetadata() {
  return {
    title: "Hassaan Ali - Contact",
    description: "Contact page for Hassaan Ali",
  };
}
