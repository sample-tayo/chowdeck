import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DownloadButtonProps {
  href: string;
  target?: string;
  rel?: string;
  iconUrl: string;
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
    <Link
      className="  bg-primary text-[.9rem] w-[276px]  max-w-[276px] inline-flex items-center justify-center text-white py-[1.25rem] font-medium px-[1.75rem] rounded-lg"
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
    </Link>
  );
};

export default DownloadButton;
