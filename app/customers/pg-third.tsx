import React from "react";
import FeatureCard from "../components/customerCard";
import img3 from "@/public/assets/image.webp";
import img1 from "@/public/assets/img2.webp";
import img2 from "@/public/assets/img1.webp";

const JoinNetwork: React.FC = () => {
  return (
    <div className=" my-8">
      <div className="flex text-2xl md:text-6xl mx-auto font-medium items-center justify-center text-gray mb-8">
        <h3>Join our growing network</h3>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          className="ml-1 md:text-6xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
        </svg>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mx-8">
        <FeatureCard
          title="Start selling"
          description="Are you a restaurant owner looking to grow your business? Reach new customers when you join our network."
          linkText="SEE MORE"
          linkUrl="/vendors"
          imageUrl={img1}
        />
        <FeatureCard
          title="Deliver happiness"
          description="Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it."
          linkText="SEE MORE"
          linkUrl="/riders"
          imageUrl={img2}
        />
        <FeatureCard
          title="Behind the scenes"
          description="If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team."
          linkText="SEE MORE"
          linkUrl="/company"
          imageUrl={img3}
        />
      </div>
    </div>
  );
};

export default JoinNetwork;
