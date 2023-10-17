import acceptOrder from "@/public/assets/images/app-steps/accept-order.png";
import orderArrived from "@/public/assets/images/app-steps/order-arrived.png";
import orderTransit from "@/public/assets/images/app-steps/order-transit.png";
import pickUp from "@/public/assets/images/app-steps/pickup.png";
import Image from "next/image";

const SlidePhones: React.FC = () => {
  return (
    <div className="flex gap-4">
      <Image
        src={acceptOrder}
        alt="acceptOrder"
        width={525}
        height={1053}
        className=" w-[19rem] h-[35rem]"
      />
      <Image
        src={orderArrived}
        alt="orderArrived"
        width={525}
        height={1053}
        className=" w-[19rem] h-[35rem]"
      />
      <Image src={acceptOrder} alt="acceptOrder" width={525} height={1053} />
    </div>
  );
};

export default SlidePhones;
