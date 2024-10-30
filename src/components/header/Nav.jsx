import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link
          className="flex gap-2 items-center text-slate-600 p-2 bg-slate-100 rounded-lg w-fit"
          href="/"
        >
          <CircleChevronLeft />
          Back
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
