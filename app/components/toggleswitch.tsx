"use client";
import React, { useState } from "react";
import Image from "next/image";
import chowApp from "@/public/assets/images/chowdeck-app.png";
import vendorApp from "@/public/assets/images/vendor-app.png";
import riderApp from "@/public/assets/images/rider-app.png";

const PageSwitch: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const options = ["Customers", "Vendors", "Riders"];

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
  };

  const selectedOption = options[activeIndex];

  return (
    <>
      <div className="max-w-[352px] mx-auto mt-12">
        <div className="bg-lightYellow p-1 rounded-full">
          <div className="flex">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`flex-grow font-medium h-[40px] rounded-full relative z-10 text-center capitalize ${
                  index === activeIndex ? "bg-gold text-white" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <span
            className="PageSwitch_highlight__BOzq9"
            style={{
              width: `${100 / options.length}%`,
              left: `${activeIndex * (100 / options.length)}%`,
            }}
          ></span>
        </div>
      </div>
      <Pages selectedOption={selectedOption} />
    </>
  );
};

interface PagesProps {
  selectedOption: string;
}

function Pages({ selectedOption }: PagesProps) {
  return (
    <div className="flex gap-8 md:gap-0 md:flex-row flex-col mt-10  md:mx-20">
      <div className="flex flex-col items-center justify-center flex-1">
        {selectedOption === "Customers" && (
          <>
            <p className="md:text-[4rem]  text-4xl  text-center font-extrabold">
              Try the App
            </p>

            <p className="text-center md:w-[100%] mt-4 text-sm md:text-xl px-4">
              Have meals delivered to you within minutes from a wide variety of
              restaurants ranging from African to Continental cuisines to
              satisfy your cravings.
            </p>
          </>
        )}

        {selectedOption === "Vendors" && (
          <>
            <p className="md:text-[4rem]  text-4xl text-center font-extrabold">
              All in One
            </p>

            <p className="text-center md:w-[100%] mt-4 text-sm md:text-xl px-4">
              Unlock new levels of growth with seamless menu and orders
              management, multiple branches and team, easy payouts withdrawal
              and a lot more.
            </p>
          </>
        )}

        {selectedOption === "Riders" && (
          <>
            <p className="md:text-[4rem]  text-4xl text-center font-extrabold">
              Become a Champ
            </p>

            <p className="text-center md:w-[100%] mt-4 text-sm md:text-xl px-4">
              Choose your own working hours, ride your choice of bike, track
              your metrics, earn bonuses and withdraw easily to your account. Do
              more with our app.
            </p>
          </>
        )}
      </div>

      <div className="flex items-center justify-center flex-1">
        {selectedOption === "Customers" && (
          <Image
            src={chowApp}
            alt="chow-app-illustration"
            width={250}
            height={500}
          />
        )}
        {/* Render different images for Vendors and Riders based on selectedOption */}
        {selectedOption === "Vendors" && (
          // Render a different image for Vendors
          <Image
            src={vendorApp}
            alt="vendor-app-illustration"
            width={250}
            height={500}
          />
        )}
        {selectedOption === "Riders" && (
          // Render a different image for Riders
          <Image
            src={riderApp}
            alt="rider-app-illustration"
            width={250}
            height={500}
          />
        )}
      </div>
    </div>
  );
}

export default PageSwitch;
