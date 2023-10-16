import React from "react";
import hero from "@/public/assets/hero.svg";
import AppStoreIcon from "@/public/assets/illustration/apple.svg";
import PlayStoreIcon from "@/public/assets/illustration/playstore.svg";
import Textchange from "../components/textChange";
import DownloadButton from "../components/button";

function Hero() {
  const containerStyle = {
    backgroundImage: `url(${hero.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className=" min-h-[40rem] bg-cover bg-center lg:min-h-[50rem]"
      style={containerStyle}
    >
      <div className="pt-32 text-center">
        <Textchange />

        <div className="flex-col mt-4 flex gap-4 md:flex-row items-center justify-center">
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
