"use client";
import acceptOrder from "@/public/assets/images/app-steps/accept-order.png";
import orderArrived from "@/public/assets/images/app-steps/order-arrived.png";
import orderTransit from "@/public/assets/images/app-steps/order-transit.png";
import pickUp from "@/public/assets/images/app-steps/pickup.png";
import Image from "next/image";
import "./carousel.css";

import { useEffect } from "react";

const InfiniteScrollAnimation: React.FC = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLElement;
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <div>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>Quality meal choices</li>
          <li>Quick and easy onboarding</li>
          <li>Highly rated riders</li>
          <li>live update on orders</li>
          <li>20/7 support for customers and vendors</li>
        </ul>
      </div>

      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
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
          <Image
            src={orderTransit}
            alt="orderTransit"
            width={525}
            height={1053}
            className=" w-[19rem] h-[35rem]"
          />
          <Image
            src={pickUp}
            alt="pickUp"
            width={525}
            height={1053}
            className=" w-[19rem] h-[35rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
