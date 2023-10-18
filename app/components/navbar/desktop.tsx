"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import DropdownButton from "./dropdown";
import { useState } from "react";
import "./navhover.css";

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
            <div className="hidden lg:flex bg-white rounded-full px-4 text-lg font-semibold">
              <Link
                href="/company"
                className="company-link py-4 px-6 text-center inline-block font-semibold"
              >
                Company
              </Link>
              <Link href="/faqs" className="faqs-link py-4 px-6 text-center">
                FAQs
              </Link>
              <Link href="/blog" className="blog-link py-4 px-6 text-center">
                Blog
              </Link>
              <Link
                href="/contact"
                className="contact-link py-4 px-6 text-center"
              >
                Contact
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
        <div className="sticky top-0 left-0 w-full bg-black flex items-center justify-end space-x-2 pt-10 pb-6 border-b border-b-grayWhite">
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

          <button
            onClick={toggleTranslation}
            className="inline-flex items-center justify-center bg-transparent "
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
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>
            <svg
              width="22"
              height="25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5.169.764 13.579 2.788a.8.8 0 0 1 .627.642c.378 2.07.589 10.693 1.225 14.25.104.59 1.12 2.748 1.12 2.748a.278.278 0 0 1-.252.4l-2.41-.136a1.23 1.23 0 0 0-.91.373l-1.861 1.913a1.244 1.244 0 0 1-1.1.21L1.371 19.884a.512.512 0 0 1-.331-.692l1.156-2.766c.272-.653.039-1.474.162-5.139.149-4.407 2.346-10.203 2.346-10.203a.388.388 0 0 1 .465-.32Z"
                fill="#B5865C"
                stroke="#000"
                stroke-width="0.269"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M21.555 21.484a.276.276 0 0 1-.21.094l-2.287-.121a1.232 1.232 0 0 0-.91.373l-1.861 1.913c-.136.105-.233-.013-.393.027l2.22-3.848v-.037l3.44 1.599Z"
                fill="#421E0B"
                stroke="#000"
                stroke-width="0.269"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M20.564 18.227c.016.64 1.15 2.966 1.15 2.966.053.104-.035.209-.105.29l-3.497-1.596.824-15.494.104-.71a.799.799 0 0 1 .337.517c.375 2.064 1.09 10.061 1.187 14.027Z"
                fill="#5B2A0E"
                stroke="#000"
                stroke-width="0.269"
                stroke-miterlimit="10"
              ></path>
              <path
                d="m4.15 16.887 9.574 2.532"
                stroke="#5B2A0E"
                stroke-width="0.269"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="m18.935 4.394-.819 15.497v.038l-2.27 3.919-.081.016c-.055-1.093.412-2.88.617-3.644.048-.183.068-.373.059-.562-.014-.34.068-.843.203-.916.177-.097.322-.378.352-.579l1.94-13.77Z"
                fill="#825C43"
                stroke="#000"
                stroke-width="0.269"
                stroke-miterlimit="10"
              ></path>
              <path
                d="m5.228 1.075 12.977 2.51a.977.977 0 0 1 .775 1.146l-.26 1.347a1.707 1.707 0 0 1-1.997 1.353L5.173 5.197a1.705 1.705 0 0 1-1.35-2l.259-1.346a.98.98 0 0 1 1.146-.776Z"
                fill="#CC966A"
              ></path>
              <path
                d="m5.187.19 13.538 2.617a.997.997 0 0 1 .79 1.17l-.25 1.296A1.74 1.74 0 0 1 17.23 6.65L5.147 4.315A1.738 1.738 0 0 1 3.77 2.276L4.02.977A.999.999 0 0 1 5.188.19Z"
                fill="#CC966A"
                stroke="#000"
                stroke-width="0.269"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M10.738 7.818a1.804 1.804 0 1 0 0-3.608 1.804 1.804 0 0 0 0 3.608Z"
                fill="#0C513F"
                stroke="#000"
                stroke-width="0.269"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </span>
          <span>Customers</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>Vendors</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>Riders</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>Company</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>Blog</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>Contact</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
          href="/"
        >
          <span>Twitter</span>
        </Link>

        <Link
          rel="noreferrer"
          className="flex items-center space-x-3 hover:bg-primary text-white font-medium text-xl h-20 pl-10 border-b border-b-grayWhite transition"
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
