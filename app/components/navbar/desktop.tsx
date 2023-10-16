"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import DropdownButton from "./dropdown";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  const translateClass = !isTranslated
    ? "-translate-x-[100%]"
    : "translate-x-0";
  return (
    <>
      <Mobile
        toggleTranslation={toggleTranslation}
        translateClass={translateClass}
      />
      <nav className=" z-50 w-full sticky top-0 bg-white shadow-md">
        <div className="absolute top-8 w-full pl-4 pr-4  md:pl-14  md:pr-14">
          <div className=" flex justify-between items-center">
            {/* Left - Logo */}
            <Link
              href="/"
              className="flex justify-center items-center gap-2 px-4 md:px-6 h-12 text-white bg-primary rounded-full"
            >
              <Image src={logo} alt="logo" width={18} height={12} />
              <p className=" hidden md:block text-base font-semibold pb-1">
                Chowdeck
              </p>
            </Link>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex bg-white rounded-full py-3 px-10 text-lg gap-8  font-semibold">
              <Link href="/company">
                <p className="hover:underline">Company</p>
              </Link>
              <Link href="/faqs">
                <p className="hover:underline">FAQs</p>
              </Link>
              <Link href="/blog">
                <p className="hover:underline">Blog</p>
              </Link>
              <Link href="/contact">
                <p className="hover:underline">Contact</p>
              </Link>
            </div>

            {/* Right - Dropdown and Cart */}
            <div className="relative flex items-center justify-center">
              <Link
                className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-white mr-2"
                href="/store"
              >
                <svg
                  width="25"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lg"
                >
                  <path
                    d="M9 20.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.75 20.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    fill="#02C27F"
                    stroke="#02C27F"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M4.966 6.75h16.818l-2.475 8.662a1.49 1.49 0 0 1-1.443 1.088H8.884a1.49 1.49 0 0 1-1.443-1.088L4.047 3.544A.75.75 0 0 0 3.325 3H1.75"
                    stroke="#02C27F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Link>
              <div className="hidden md:block">
                <DropdownButton />
              </div>

              <span className="lg:hidden">
                <button
                  onClick={toggleTranslation}
                  className=" bg-primary h-10 w-10 rounded-full inline-flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12h16.5M3.75 6h16.5M3.75 18h16.5"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

const Mobile: React.FC<{
  toggleTranslation: () => void;
  translateClass: string;
}> = ({ toggleTranslation, translateClass }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-[1000] overflow-y-auto scrollbar-hide transition-all ${translateClass}`}
    >
      <div className="flex flex-col h-full">
        <div className="sticky top-0 left-0 w-full bg-black flex items-center justify-end space-x-2 pt-10 pb-6 border-b border-b-white-20">
          <button
            onClick={toggleTranslation}
            className="inline-flex items-center justify-center bg-transparent Button_icon-button__q91NT Button_size-default__atyZl"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-white"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </button>
        </div>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Customers</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Vendors</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Riders</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Company</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Blog</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Contact</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Twitter</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-white-20 transition"
          href="/"
        >
          <span>Instagram</span>
        </Link>

        <p className="text-xs text-white text-center pb-7 pt-10 mt-auto">
          © All Rights Reserved. 2022 Chowdeck Technologies
        </p>
      </div>
    </div>
  );
};
