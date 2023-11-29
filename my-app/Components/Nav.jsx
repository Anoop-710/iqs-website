"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/iqslogo.jpg";
import Java from "../../public/assets/java.jpeg";
import Python from "../../public/assets/python.jpeg";
import DataScience from "../../public/assets/data_science.jpeg";
import Devops from "../../public/assets/devops.png";
import Link from "next/link";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
          <div className="mt-2 md:ml-10 sm:ml-10 md:mt-0 sm:mt-0">
            <Image
              src={Logo}
              alt="IQSchool"
              width={0}
              height={0}
              className="w-36 h-20"
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="menu"
          >
            <ul
              className={`pt-4 pr-12 text-base text-violet-700 gap-8 lg:flex md:flex md:justify-between ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <li className="hover:text-purple-500">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-purple-500">
                <Link href="/#">About</Link>
              </li>
              <li className="hover:text-purple-500">
                <Link href="/#">Placement Guarantee</Link>
              </li>
              <li className="hover:text-purple-500">
                <Link href="/#">Careers</Link>
              </li>
              <li className="relative group">
                <div className="flex items-center">
                  <span
                    className="hover:text-purple-500 cursor-pointer transition-all duration-150 ease-in-out"
                    onClick={toggleDropDown}
                  >
                    Courses
                  </span>
                  <div className="ml-2 cursor-pointer" onClick={toggleDropDown}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      } transition-transform duration-150 ease-in-out`}
                    >
                      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                  </div>
                  <ul
                    className={`w-44 absolute p-2 space-y-2 top-10 left-0 bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-blue-400 z-10 transition-all duration-150 ease-in-out transform ${
                      isOpen ? "scale-100" : "scale-0"
                    }`}
                  >
                    <li className="flex items-center gap-4 text-gray-500 hover:text-blue-700">
                      <Image src={Java} width={35} />
                      <Link href="/java">Java FullStack</Link>
                    </li>
                    <li className="flex items-center gap-4 text-gray-500 hover:text-blue-700">
                      <Image src={Python} width={35} />
                      <Link href="/c">Python FullStack</Link>
                    </li>
                    <li className="flex items-center gap-4 text-gray-500 hover:text-blue-700">
                      <Image src={DataScience} width={35} />
                      <Link href="/cpp">Data Science</Link>
                    </li>
                    <li className="flex items-center gap-4 text-gray-500 hover:text-blue-700">
                      <Image src={Devops} width={35} />
                      <Link href="/python">Devops & AWS</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hover:text-purple-500">
                <Link href="/#">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
