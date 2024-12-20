import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { House } from "lucide-react";
const Nav = ({}) => {
  return (
    <nav className=" flex gap-2 justify-between items-center  [&_a]:p-2  [&_a]:rounded-md [&_a]:text-slate-700 hover:[&_a]:text-blue-600 [&_a]:transition-all">
      <Link href="/" title="Home">
        <House  />
      </Link>
      <div className="flex gap-4 ">
        <Link title="Projects" href="/projects">
          Projects
        </Link>
        <Link title="Blog" href="/posts">
          Blog
        </Link>
        <Link title="Contact" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
