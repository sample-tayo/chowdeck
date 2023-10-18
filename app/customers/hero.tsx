import React from "react";
import hero from "@/public/assets/hero.svg";
import AppStoreIcon from "@/public/assets/illustration/apple.svg";
import PlayStoreIcon from "@/public/assets/illustration/playstore.svg";
import Textchange from "../components/textChange";
import DownloadButton from "../components/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 z-0">
        <Image
          className="absolute"
          src={hero}
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative min-h-[60vh] lg:min-h-[50rem] z-10 pt-32 pb-10 text-center">
        <Textchange />

        <div className="flex-col mt-4 flex gap-4 lg:flex-row items-center justify-center">
          <DownloadButton
            href="#"
            text="Download on App Store"
            iconUrl={AppStoreIcon.src}
          />
          <DownloadButton
            href="#"
            text="Download on Google Play"
            iconUrl={PlayStoreIcon.src}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
