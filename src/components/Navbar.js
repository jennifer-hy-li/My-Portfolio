import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-almond md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-ash-gray	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 ml-3 text-xl title-font font-medium text-white">
            Jennifer Li
          </a>
          <a href="#projects" className="mr-5 text-middle-grey hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 text-middle-grey hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 text-middle-grey hover:text-white">
            My Interests
          </a>
          <a
            href="#contact"
            className="inline-flex text-middle-grey hover:text-white ">
            Get in Contact
            <ArrowRightIcon className="w-4 ml1-" />
          </a>
        </nav>
      </div>
    </header >
  );
}
