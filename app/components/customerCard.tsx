import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  imageUrl: StaticImageData;
  linkUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkText,
  imageUrl,
  linkUrl,
}) => {
  return (
    <div className="border-4 border-black rounded-2xl overflow-hidden">
      <div className="p-6 h-[290px] flex flex-col">
        <span className="mb-4 h-8 flex items-center">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FF884D]"
          >
            <path
              d="m13.733 1.223.579 1.627a1.84 1.84 0 0 0 2.523 1.045l1.56-.741c1.563-.743 3.194.888 2.451 2.451l-.741 1.56a1.838 1.838 0 0 0 1.045 2.523l1.627.578c1.63.58 1.63 2.886 0 3.467l-1.627.579a1.84 1.84 0 0 0-1.045 2.523l.741 1.56c.743 1.563-.888 3.194-2.451 2.451l-1.56-.741a1.839 1.839 0 0 0-2.523 1.044l-.579 1.628c-.58 1.63-2.886 1.63-3.466 0l-.579-1.628a1.84 1.84 0 0 0-2.523-1.044l-1.56.74c-1.563.744-3.194-.887-2.451-2.45l.741-1.56a1.84 1.84 0 0 0 1.045-2.523l-.742-1.56c-.743-1.564.888-3.195 2.452-2.452l1.56.742a1.84 1.84 0 0 0 2.523 1.044l.578-1.627c.578-1.63 2.884-1.63 3.464 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <p className="font-bold text-xl mb-5 lg:text-[28px] -tracking-[1px]">
          {title}
        </p>
        <p className="mb-5">{description}</p>
        <Link
          className="flex items-center text-sm font-semibold hover:underline mt-auto mb-5 w-fit"
          href={linkUrl}
        >
          {linkText}{" "}
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="ml-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="-mb-2 w-full h-[200px] relative bg-gray-100">
        <Image
          alt={title}
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
