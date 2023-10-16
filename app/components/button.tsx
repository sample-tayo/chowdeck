import React from "react";
import Image from "next/image";

interface DownloadButtonProps {
  href: string;
  target?: string;
  rel?: string;
  iconUrl: string; // URL to the SVG image
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  target = "_blank",
  rel = "noreferrer",
  iconUrl,
  text,
}) => {
  return (
    <a
      className="  bg-primary inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg lg:py-5"
      href={href}
      target={target}
      rel={rel}
    >
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="icon"
          className="mr-1.5"
          width={24}
          height={24}
        />
      )}
      {text}
    </a>
  );
};

export default DownloadButton;
