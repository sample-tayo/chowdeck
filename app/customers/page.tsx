import Hero from "./hero";
import JoinNetwork from "./pg-third";
import PageSwitch from "../components/toggleswitch";
import NavBar from "../components/navbar/desktop";

const Customers: React.FC = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <PageSwitch />
      <JoinNetwork />
    </div>
  );
};

export default Customers;
