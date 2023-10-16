"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.webp";

const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 px-6 py-3 text-white bg-primary rounded-full">
        <Image src={logo} alt="Logo" width={32} height={32} className=" mr-4" />
      </div>

      <div className="flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl mr-4"
        >
          🍔
        </button>
        <button className="text-white text-2xl">🛒</button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-blue-500 p-4 transform translate-x-0 transition-transform ease-in-out duration-300">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-white text-lg">
                Menu Item 1
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg">
                Menu Item 2
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg">
                Menu Item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
