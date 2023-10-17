import Hero from "./hero";
import JoinNetwork from "./pg-third";
import PageSwitch from "../components/toggleswitch";
import NavBar from "../components/navbar/desktop";
import Image from "next/image";
import asianform from "@/public/assets/illustration/asian.png";

const Customers: React.FC = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <PageSwitch />
      <JoinNetwork />
      <div className=" bg-primary">
        <Type />
      </div>
    </div>
  );
};

export default Customers;

function Type() {
  return (
    <div className="container">
      <div className="text-white mt-16 lg:grid lg:grid-cols-2 lg:gap-32">
        <div className="flex items-center relative">
          <span className=" relative z-10">Chowdeck has you covered</span>
          <span className="block -ml-4 lg:absolute -right-8 md:right-0 -bottom-5">
            <Image
              src={asianform}
              width={129}
              height={98}
              className="w-40 md:w-[230px] lg:w-[180px] h-full"
              alt="asian meal"
            />
          </span>
        </div>
        <p className="text-sm md:text-lg lg:text-2xl tracking-normal mt-4">
          Hungry? Too tired to cook? Have friends over, or do you simply need to
          chop life? Download Chowdeck, and let’s deliver happiness to your
          doorstep in minutes.
        </p>
      </div>
    </div>
  );
}
