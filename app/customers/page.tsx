import Hero from "./hero";
import JoinNetwork from "./pg-third";
import PageSwitch from "../components/toggleswitch";
import SlidePhones from "../components/slide-phones";

const Customers: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <PageSwitch />
      <JoinNetwork />
      <div className=" bg-primary">
        <Type />
        <SlidePhones />
      </div>
    </div>
  );
};

export default Customers;

function Type() {
  return (
    <div className="container">
      <div className="text-white mt-16 px-8 flex flex-col lg:flex-row lg:gap-32">
        <div className="flex items-center relative flex-1">
          <span className=" relative text-2xl lg:text-5xl font-bold z-10">
            Chowdeck has you covered
          </span>
        </div>
        <p className="text-sm md:text-lg lg:text-2xl tracking-normal flex-1 mt-4">
          Hungry? Too tired to cook? Have friends over, or do you simply need to
          chop life? Download Chowdeck, and let’s deliver happiness to your
          doorstep in minutes.
        </p>
      </div>
    </div>
  );
}
